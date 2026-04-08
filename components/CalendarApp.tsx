"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CalendarGrid from './CalendarGrid'
import { useCalendarState } from '../hooks/useCalendarState'
import { useThemeExtraction } from '../hooks/useThemeExtraction'
import { format } from 'date-fns'

export default function CalendarApp() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [direction, setDirection] = useState<'prev' | 'next'>('next')
  const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date | null } | null>(null)
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)
  
  const { currentImageUrl, setImageElement } = useThemeExtraction()
  const [spiralRingCount, setSpiralRingCount] = useState(5)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        const rings = Math.max(3, Math.floor(width / 150))
        setSpiralRingCount(Math.min(rings, 8))
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        setBackgroundImage(imageUrl)
        
        // Load image for color extraction
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => setImageElement(img)
        img.src = imageUrl
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDateClick = (date: Date) => {
    setSelectedRange(prev => {
      if (!prev || prev.end) {
        return { start: date, end: null }
      } else {
        const start = prev.start
        return date >= start 
          ? { start, end: date }
          : { start: date, end: start }
      }
    })
  }

  const goToPreviousMonth = () => {
    setDirection('prev')
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setDirection('next')
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))
  }

  const clearSelection = () => {
    setSelectedRange(null)
  }

  const formatDateRange = (): string => {
    if (!selectedRange?.start) return 'No date selected'
    
    const startStr = format(selectedRange.start, 'MMM d, yyyy')
    if (!selectedRange.end) return startStr
    
    const endStr = format(selectedRange.end, 'MMM d, yyyy')
    return `${startStr} - ${endStr}`
  }

  const monthYear = format(currentDate, 'MMMM yyyy')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Interactive Calendar
          </h1>
          <p className="text-gray-600">
            Select dates and customize your calendar
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-paper-light rounded-2xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Spiral Binding */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--theme-primary,#e0e0e0)] to-[var(--theme-dark,#d0d0d0)] shadow-inner flex flex-col justify-around py-8 z-10">
            {Array.from({ length: spiralRingCount }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full mx-auto relative"
                style={{
                  background: `radial-gradient(circle at 30% 30%, var(--theme-light, #f0f0f0), var(--theme-primary, #d0d0d0))`,
                  boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(255,255,255,0.5)',
                }}
              >
                <div className="absolute inset-2 rounded-full bg-paper-light" />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="ml-12 p-6 md:p-8 bg-white/90 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToPreviousMonth}
                  className="px-4 py-2 bg-[var(--theme-primary,#3b82f6)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Previous month"
                >
                  ← Prev
                </motion.button>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 min-w-[200px] text-center">
                  {monthYear}
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToNextMonth}
                  className="px-4 py-2 bg-[var(--theme-primary,#3b82f6)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Next month"
                >
                  Next →
                </motion.button>
              </div>

              <div>
                <label
                  htmlFor="bg-upload"
                  className="px-4 py-2 bg-[var(--theme-secondary,#10b981)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer inline-block"
                >
                  📷 Upload Background
                </label>
                <input
                  id="bg-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            <CalendarGrid
              currentDate={currentDate}
              selectedRange={selectedRange}
              hoveredDate={hoveredDate}
              direction={direction}
              onDateClick={handleDateClick}
              onDateHover={setHoveredDate}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Selected Range:</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatDateRange()}
                  </p>
                </div>

                {selectedRange?.start && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearSelection}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    Clear Selection
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}