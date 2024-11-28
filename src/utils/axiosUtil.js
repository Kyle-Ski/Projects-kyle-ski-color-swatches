import axios from 'axios';

const endpoint = `https://www.thecolorapi.com/scheme`;
const colorCache = new Map(); // Cache for storing fetched colors by hue
const batchSize = 36; // Number of hues fetched per batch
let currentBatch = 0; // Tracks the current batch for lazy loading

/**
 * fetchNextBatch fetches the next batch of colors based on the current batch index.
 * Resets and fetches new hues if saturation or lightness values change.
 *
 * @param {number} saturation - Saturation value (0–100).
 * @param {number} lightness - Lightness value (0–100).
 * @returns {Promise<object[]>} - Array of color data objects.
 */
export async function fetchNextBatch(saturation, lightness) {
  const colors = []; // Array to store the resulting colors

  // Calculate the starting hue for the next batch
  const startHue = currentBatch * batchSize;
  if (startHue >= 360) {
    throw new Error('All hues have been fetched.');
  }

  // Check if hues in the current batch are cached
  const isCached = Array.from({ length: batchSize }, (_, i) => (startHue + i) % 360).every((hue) =>
    colorCache.has(hue)
  );

  if (isCached) {
    // Use cached values
    for (let i = 0; i < batchSize; i++) {
      const hue = (startHue + i) % 360;
      colors.push(colorCache.get(hue));
    }
  } else {
    // Fetch from API if not cached
    const params = {
      mode: 'analogic',
      count: batchSize,
      hsl: `hsl(${startHue}, ${saturation}%, ${lightness}%)`,
    };

    try {
      const response = await axios.get(endpoint, { params });
      if (response.data && Array.isArray(response.data.colors)) {
        response.data.colors.forEach((color, index) => {
          const hue = (startHue + index) % 360;
          colorCache.set(hue, color); // Cache the fetched color
          colors.push(color); // Add to results
        });
      } else {
        throw new Error(`Unexpected API response for hues starting at ${startHue}`);
      }
    } catch (error) {
      console.error(`Error fetching hues starting at ${startHue}:`, error);
      throw new Error('Failed to fetch colors. Please try again later.');
    }
  }

  // Increment the batch counter for the next lazy load
  currentBatch += 1;

  return colors;
}

/**
 * resetBatchState resets the current batch and clears the cache.
 * Useful when the user changes S/L values and starts fresh.
 */
export function resetBatchState() {
  currentBatch = 0; // Reset batch counter
  colorCache.clear(); // Clear cached colors
}
