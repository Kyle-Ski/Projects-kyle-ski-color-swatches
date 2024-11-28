<template>
  <!-- 
    The main container for the app:
    - Displays a title, input controls, feedback messages, and the color grid.
  -->
  <main>
    <!-- Page Title -->
    <h1>HSL Color Swatches</h1>

    <!-- Input Section: 
         Allows the user to set the Saturation and Lightness values.
         Resets the grid and fetches new colors when values change.
    -->
    <div class="inputs">
      <label for="saturation">Saturation (0–100):</label>
      <input
        id="saturation"
        type="number"
        v-model="saturation"
        min="0"
        max="100"
        step="1"
        @input="validateInputs"
      />

      <label for="lightness">Lightness (0–100):</label>
      <input
        id="lightness"
        type="number"
        v-model="lightness"
        min="0"
        max="100"
        step="1"
        @input="validateInputs"
      />

      <button :disabled="!isValid" @click="fetchNewColors">Fetch Colors</button>
    </div>

    <!-- Feedback Section: 
         Displays a validation message, loading message, or an error.
    -->
    <div v-if="validationError" class="validation-error">{{ validationError }}</div>
    <div v-if="loading && colors.length === 0" class="loading">Loading colors...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <!-- Color Grid -->
    <div v-if="!error" class="container">
      <ColorSwatch
        v-for="(color, index) in colors"
        :key="index"
        :colorHex="color.hex.value"
        :colorName="color.name.value"
        :colorRgb="color.rgb.value"
      />
    </div>

    <!-- Load More Button -->
    <div class="load-more-wrapper">
      <button v-if="!loading && colors.length > 0 && hasMoreColors" @click="loadMoreColors">
        Load More
      </button>
      <div v-if="loading && colors.length > 0" class="loading-more">Loading more colors...</div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { fetchNextBatch, resetBatchState } from '../utils/axiosUtil';
import ColorSwatch from '@/components/ColorSwatch.vue';

/* Reactive State Variables */
const saturation = ref(50); // Default saturation
const lightness = ref(50); // Default lightness
const colors = ref([]); // Store fetched colors
const loading = ref(false); // Track loading state
const error = ref(''); // Store error messages
const validationError = ref(''); // Store validation error messages
const isValid = ref(true); // Indicates whether the S/L values are valid
const hasMoreColors = ref(true); // Indicates whether more colors can be loaded

/* Fetch Initial Colors or Reset on New S/L Values */
async function fetchNewColors() {
  if (!isValid.value) return; // Prevent fetch if inputs are invalid

  try {
    loading.value = true;
    error.value = '';
    validationError.value = '';
    hasMoreColors.value = true;

    resetBatchState(); // Reset batch state in utility
    const newColors = await fetchNextBatch(saturation.value, lightness.value);
    colors.value = newColors; // Replace colors with the new set
  } catch (err) {
    error.value = err.message;
    hasMoreColors.value = false;
  } finally {
    loading.value = false;
  }
}

/* Fetch More Colors */
async function loadMoreColors() {
  try {
    loading.value = true;
    error.value = '';

    const newColors = await fetchNextBatch(saturation.value, lightness.value);
    colors.value.push(...newColors);

    if (newColors.length === 0) {
      hasMoreColors.value = false;
    }
  } catch (err) {
    error.value = err.message;
    hasMoreColors.value = false;
  } finally {
    loading.value = false;
  }
}

/* Validate Inputs */
function validateInputs() {
  if (saturation.value < 0 || saturation.value > 100) {
    validationError.value = 'Saturation must be between 0 and 100.';
    isValid.value = false;
  } else if (lightness.value < 0 || lightness.value > 100) {
    validationError.value = 'Lightness must be between 0 and 100.';
    isValid.value = false;
  } else {
    validationError.value = '';
    isValid.value = true;
  }
}
</script>

<style scoped>
.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  max-width: 300px;
  margin: 0 auto 2rem;
}

.inputs label {
  font-weight: bold;
}

.inputs input {
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

button {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: gray;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: var(--color-primary-hover);
}

.validation-error {
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.load-more-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.loading-more {
  font-size: 0.9rem;
  color: var(--color-text);
  text-align: center;
}

.loading,
.error {
  text-align: center;
  color: var(--color-text);
  margin-top: 2rem;
}
</style>
