/**
 * Extract dominant colors from an image using canvas
 */
export function extractColors(img: HTMLImageElement): {
  primary: string
  secondary: string
  accent: string
} {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return { primary: '#3b82f6', secondary: '#60a5fa', accent: '#93c5fd' }
  
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage(img, 0, 0)
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data
  const colorCounts: { [key: string]: number } = {}
  
  // Sample every 10th pixel for performance
  for (let i = 0; i < imageData.length; i += 40) {
    const r = imageData[i]
    const g = imageData[i + 1]
    const b = imageData[i + 2]
    const key = `${r},${g},${b}`
    colorCounts[key] = (colorCounts[key] || 0) + 1
  }
  
  // Get most common colors
  const sortedColors = Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
  
  return {
    primary: `rgb(${sortedColors[0]?.[0] || '59, 130, 246'})`,
    secondary: `rgb(${sortedColors[1]?.[0] || '96, 165, 250'})`,
    accent: `rgb(${sortedColors[2]?.[0] || '147, 197, 253'})`
  }
}
