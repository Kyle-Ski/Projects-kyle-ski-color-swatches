/**
 * Converts an HSL color value to a HEX color string.
 * @param {number} h - Hue (0–360), the "type" of color.
 * @param {number} s - Saturation (0–100), the intensity of the color.
 * @param {number} l - Lightness (0–100), the brightness of the color.
 * @returns {string} - The HEX color string (e.g., #ffffff).
 */
function hslToHex(h, s, l) {
  // Convert saturation and lightness from percentage to a decimal (0–1 range)
  s /= 100
  l /= 100

  // Calculate the chroma value (difference between max and min RGB values)
  const c = (1 - Math.abs(2 * l - 1)) * s

  // Calculate the secondary component (intermediate value in the RGB range)
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))

  // Calculate the adjustment value to shift chroma to the desired lightness
  const m = l - c / 2

  // Initialize red, green, and blue components
  let r = 0,
    g = 0,
    b = 0

  // Determine the RGB components based on the hue range
  if (h >= 0 && h < 60) {
    r = c
    g = x
    b = 0
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
    b = 0
  } else if (h >= 120 && h < 180) {
    r = 0
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    r = 0
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    g = 0
    b = c
  } else if (h >= 300 && h < 360) {
    r = c
    g = 0
    b = x
  }

  // Convert the RGB values from 0–1 range to 0–255
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  // Combine RGB components into a HEX string
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export { hslToHex }
