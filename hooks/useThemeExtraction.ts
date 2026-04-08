import { useState, useCallback } from 'react'

/**
 * Generate a lighter tint of a color
 */
function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, Math.floor((num >> 16) + ((255 - (num >> 16)) * percent)))
  const g = Math.min(255, Math.floor(((num >> 8) & 0x00FF) + ((255 - ((num >> 8) & 0x00FF)) * percent)))
  const b = Math.min(255, Math.floor((num & 0x0000FF) + ((255 - (num & 0x0000FF)) * percent)))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

/**
 * Generate a darker shade of a color
 */
function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.floor((num >> 16) * (1 - percent)))
  const g = Math.max(0, Math.floor(((num >> 8) & 0x00FF) * (1 - percent)))
  const b = Math.max(0, Math.floor((num & 0x0000FF) * (1 - percent)))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export function useThemeExtraction() {
  const [currentImageUrl, setCurrentImageUrl] = useState('')
  const [extractedColors, setExtractedColors] = useState({
    primary: '#3b82f6',
    secondary: '#60a5fa',
    accent: '#2563eb',
    light: '#dbeafe',
    dark: '#1e40af'
  })
  const setImageElement = useCallback((img: HTMLImageElement) => {
    setCurrentImageUrl(img.src)
    
    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      if (!ctx) return
      
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      
      // Extract top 5 most common colors
      const colorCounts: { [key: string]: number } = {}
      
      // Sample every 10th pixel for performance
      for (let i = 0; i < data.length; i += 40) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        
        // Skip very dark and very light colors
        const brightness = (r + g + b) / 3
        if (brightness < 30 || brightness > 240) continue
        
        const key = `${r},${g},${b}`
        colorCounts[key] = (colorCounts[key] || 0) + 1
      }
      
      // Get top 5 colors
      const topColors = Object.entries(colorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([rgb]) => {
          const [r, g, b] = rgb.split(',').map(Number)
          return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
        })
      
      // Apply 60-30-10 color rule
      const primary = topColors[0] || '#3b82f6'
      const secondary = topColors[1] || '#60a5fa'
      const accent = topColors[2] || '#2563eb'
      const light = lightenColor(primary, 0.6)
      const dark = darkenColor(primary, 0.3)
      
      setDominantColor(primary)
      
      // Apply to CSS variables
      const root = document.documentElement
      root.style.setProperty('--theme-primary', primary)
      root.style.setProperty('--theme-secondary', secondary)
      root.style.setProperty('--theme-accent', accent)
      root.style.setProperty('--theme-light', light)
      root.style.setProperty('--theme-dark', dark)
      
    } catch (error) {
      console.warn('Could not extract color from image:', error)
    }
  }, [])

  return {
    currentImageUrl,
    extractedColors,
    setImageElement,
  }
}