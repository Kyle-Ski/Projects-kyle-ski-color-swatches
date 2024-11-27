import axios from 'axios'

/**
 * fetchColors will get our color data from The Color API using the given saturation and lightness with a random hue.
 * @param {number} saturation - Saturation value (must be 0–100).
 * @param {number} lightness - Lightness value (must be 0–100).
 * @returns {Promise<object[]>} - Array of color data objects.
 */
export async function fetchColors(saturation, lightness) {
  // API endpoint for fetching colors
  const endpoint = `https://www.thecolorapi.com/scheme`
  const hue = Math.floor(Math.random() * 360) // Random hue for variety

  try {
    // Build the request URL with dynamic HSL values
    const params = {
      mode: 'analogic', // Generates a palette based on the hue
      count: 6, // Number of colors to fetch
      hsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }

    // Make the API request
    const response = await axios.get(endpoint, { params })

    // Validate and return the colors array
    if (response.data && Array.isArray(response.data.colors)) {
      return response.data.colors
    } else {
      throw new Error('Unexpected API response format')
    }
  } catch (error) {
    // Log error and rethrow with a user-friendly message
    console.error('Error fetching colors:', error)
    throw new Error('Failed to fetch color data. Please check your inputs or try again later.')
  }
}
