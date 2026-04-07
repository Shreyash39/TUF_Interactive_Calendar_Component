import { useState, useCallback, useEffect } from 'react'

export function useThemeExtraction() {
  const [currentImageUrl, setCurrentImageUrl] = useState('')
  const [dominantColor, setDominantColor] = useState('#3b82f6')

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
      
      let r = 0, g = 0, b = 0
      const pixelCount = data.length / 4
      
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
      }
      
      r = Math.floor(r / pixelCount)
      g = Math.floor(g / pixelCount)
      b = Math.floor(b / pixelCount)
      
      const color = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
      setDominantColor(color)
      
      // Apply to CSS variables
      document.documentElement.style.setProperty('--theme-primary', color)
    } catch (error) {
      console.warn('Could not extract color from image:', error)
    }
  }, [])

  return {
    currentImageUrl,
    dominantColor,
    setImageElement,
  }
}
