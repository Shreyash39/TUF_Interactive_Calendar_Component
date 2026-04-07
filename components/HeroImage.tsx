"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroImageProps {
  onImageLoad: (img: HTMLImageElement) => void
  currentUrl: string
}

/**
 * Hero Image Component with Carousel
 * 
 * Displays a rotating collection of high-quality images at the top of the calendar.
 * The active image is analyzed for color extraction to drive dynamic theming.
 */

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80',
]

export default function HeroImage({ onImageLoad, currentUrl }: HeroImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setIsLoading(false)
    onImageLoad(img)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    setIsLoading(true)
    setCurrentIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % HERO_IMAGES.length
      } else {
        return prev === 0 ? HERO_IMAGES.length - 1 : prev - 1
      }
    })
  }

  return (
    <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 animate-pulse">
          <div className="text-gray-500">Loading...</div>
        </div>
      )}

      {/* Hero Image */}
      <img
        src={HERO_IMAGES[currentIndex]}
        alt="Calendar hero image"
        crossOrigin="anonymous"
        onLoad={handleImageLoad}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: isLoading ? 0 : 1 }}
      />

      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* Navigation Buttons */}
      <button
        onClick={() => navigateImage('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={() => navigateImage('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsLoading(true)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
