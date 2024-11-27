<template>
  <!-- 
    The main container for the app:
    - Displays a title, input controls, feedback messages, and the color grid. TODO: make separate components for some of these
  -->
  <main>
    <!-- Page Title -->
    <h1>HSL Color Swatches</h1>

    <!-- Input Section: 
         Allows the user to set the Saturation and Lightness values.
         TODO: add explainers for what each of these do to the colors
    -->
    <div class="inputs">
      <!-- Saturation Input -->
      <label for="saturation">Saturation (0–100):</label>
      <input id="saturation" type="number" v-model="saturation" min="0" max="100" step="1" />

      <!-- Lightness Input -->
      <label for="lightness">Lightness (0–100):</label>
      <input id="lightness" type="number" v-model="lightness" min="0" max="100" step="1" />

      <!-- Fetch Colors Button -->
      <button @click="loadColors">Fetch Colors</button>
    </div>

    <!-- Feedback Section: 
         Displays a loading message or an error if something goes wrong.
    -->
    <div v-if="loading" class="loading">Loading colors...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <!-- Color Grid:
         Displays the fetched colors as swatches.
    -->
    <div v-if="!loading && !error" class="container">
      <!-- Render each color swatch using the ColorSwatch component -->
      <ColorSwatch
        v-for="(color, index) in colors"
        :key="index"
        :colorHex="color.hex.value"
        :colorName="color.name.value"
        :colorRgb="color.rgb.value"
      />
    </div>
  </main>
</template>

<script setup>
// Import reactive state management from Vue TODO: seems like we don't really need pinia, take a look later
import { ref } from 'vue'

// Import the utility function to fetch colors and the reusable ColorSwatch component
import { fetchColors } from '../utils/axiosUtil'
import ColorSwatch from '../components/ColorSwatch.vue'

/* 
  Reactive State Variables:
  - saturation: The saturation percentage (0–100) controlled by user input.
  - lightness: The lightness percentage (0–100) controlled by user input.
  - colors: An array to hold the fetched color data.
  - loading: A boolean to indicate when the app is fetching colors.
  - error: A string to store error messages.
*/
const saturation = ref(50) // Default saturation value
const lightness = ref(50) // Default lightness value
const colors = ref([])
const loading = ref(false)
const error = ref('')

/* 
  Fetch Color Data:
  - Calls the fetchColors utility with the current saturation and lightness values.
  - Updates the state variables to reflect loading status, fetched colors, or errors.
*/
async function loadColors() {
  try {
    loading.value = true // Start loading
    colors.value = await fetchColors(saturation.value, lightness.value) // Fetch colors
    error.value = '' // Clear previous errors
  } catch (err) {
    error.value = err.message // Store the error message
  } finally {
    loading.value = false // End loading
  }
}
</script>

<style scoped>
/* 
  Styles for Input Controls:
  - Arrange inputs vertically with spacing between them.
*/
.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start; /* Align inputs and button to the left */
  max-width: 300px; /* Limit the width of the inputs section */
  margin: 0 auto 2rem; /* Center the inputs section horizontally */
}

.inputs label {
  font-weight: bold; /* Make labels stand out */
}

.inputs input {
  padding: 0.3rem 0.5rem; /* Add padding inside inputs */
  font-size: 0.9rem; /* Slightly smaller font size */
  width: 100%; /* Make inputs full-width within the container */
  border: 1px solid var(--color-border); /* Add a border */
  border-radius: 4px; /* Rounded corners for inputs */
}

button {
  padding: 0.5rem 1rem; /* Padding for the button */
  font-size: 0.9rem; /* Match input font size */
  background-color: var(--color-primary); /* Use primary color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--color-primary-hover); /* Hover state color */
}

/* Ensure the title is always centered */
h1 {
  text-align: center;
  margin-bottom: 2rem; /* Add spacing below the title */
}

/* 
  Styles for the Color Grid:
  - Implement a responsive grid layout to arrange swatches in rows and columns.
  - Automatically adjust the number of columns based on available space.
*/
.container {
  display: grid; /* Enable CSS Grid */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Responsive grid columns */
  gap: 1rem; /* Space between swatches */
  padding: 1rem; /* Add padding around the grid */
}

/* 
  Feedback Messages:
  - Center align text and ensure visibility.
*/
.loading,
.error {
  text-align: center;
  color: var(--color-text); /* Use the global text color */
  margin-top: 2rem;
}
</style>
