<template>
  <!-- 
      The "color swatch" container:
      - Displays a color preview with the background set to the provided HEX color.
      - Includes the color name and its RGB representation below the color.
    -->
  <div class="swatch">
    <!-- Color preview square -->
    <div class="color-preview" :style="{ backgroundColor: colorHex }"></div>
    <!-- Display the color name -->
    <p class="color-name">{{ colorName }}</p>
    <!-- Display the RGB value -->
    <p class="color-rgb">{{ colorRgb }}</p>
  </div>
</template>

<script setup>
/**
 * Define props to make this component reusable:
 * - Props allow the parent component to pass data to this component.
 * - Each prop is defined with a `type` and `required` status for validation.
 */
defineProps({
  // The HEX value for the background color of the swatch (e.g., "#ff5733")
  colorHex: {
    type: String,
    required: true,
  },
  // The name of the color (e.g., "Persian Red")
  colorName: {
    type: String,
    required: true,
  },
  // The RGB string for the color (e.g., "rgb(255, 87, 51)")
  colorRgb: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* 
    Scoped styles:
    - These styles apply only to this component and will not affect other components.
    - Vue's "scoped" attribute ensures styles are encapsulated.
  */

.swatch {
  /* Add padding and spacing */
  padding: 1rem;

  /* Create a bordered card-like appearance */
  border: 1px solid #ccc;
  border-radius: 8px;

  /* Center-align the content */
  text-align: center;

  /* Add a subtle shadow for depth */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Add a smooth transition for hover effects */
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

/* Color preview square */
.color-preview {
  width: 100%;
  height: 100px; /* Consistent height for all swatches */
  border-radius: 6px; /* Slight rounding to match the container */
  margin-bottom: 1rem; /* Space between the color square and text */
}

/* 
   Slightly enlarge the swatch and increase the shadow on hover for interactivity.
  */
.swatch:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Style for the color name and RGB text */
.color-name,
.color-rgb {
  /* Add spacing between text elements */
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #333;
}
</style>
