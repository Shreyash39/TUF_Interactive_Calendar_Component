"use client"

import React, { useEffect } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'
import NotesPanel from './NotesPanel'
import HeroImage from './HeroImage'
import { useCalendarState } from '@/hooks/useCalendarState'
import { useThemeExtraction } from '@/hooks/useThemeExtraction'
import { usePublicHolidays } from '@/hooks/usePublicHolidays'

/**
 * Main Calendar Application Component
 * 
 * This is the root component that orchestrates the entire calendar experience.
 * It manages:
 * - Calendar state (current month, selected ranges)
 * - Dynamic theming based on hero image
 * - Public holidays integration
 * - Layout composition
 */
export default function CalendarApp() {
  const calendarState = useCalendarState()
  const { currentDate, selectedRange, handleDateSelect, navigateMonth } = calendarState
  const { currentImageUrl, setImageElement } = useThemeExtraction()
  const { holidays, isLoading: holidaysLoading } = usePublicHolidays(currentDate)

  // Announce month changes to screen readers
  useEffect(() => {
    const announcement = `Navigated to ${currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}`
    const liveRegion = document.getElementById('calendar-live-region')
    if (liveRegion) {
      liveRegion.textContent = announcement
    }
  }, [currentDate])

  return (
    <div className="max-w-7xl mx-auto">
      {/* Screen reader announcements */}
      <div 
        id="calendar-live-region" 
        className="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      />

      {/* Main Calendar Container - Skeuomorphic Design */}
      <div className="bg-paper-light bg-paper-texture rounded-lg shadow-paper overflow-hidden">
        
        {/* Hero Image Section with Spiral Binding */}
        <div className="relative">
          <HeroImage onImageLoad={setImageElement} currentUrl={currentImageUrl} />
          
          {/* Spiral Binding Effect */}
          <div className="absolute -bottom-4 left-0 right-0 h-8 flex justify-center items-center gap-12 z-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative w-6 h-6">
                {/* Hole punched through paper */}
                <div className="absolute inset-0 rounded-full bg-white shadow-spiral-hole border-2 border-gray-300" />
                {/* Metal ring */}
                <div 
                  className="absolute -inset-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #e0e0e0 0%, #b8b8b8 50%, #9e9e9e 100%)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.5)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Content Section */}
        <div className="pt-8 px-4 md:px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Calendar Grid Section - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <CalendarHeader 
                currentDate={currentDate}
                onNavigate={navigateMonth}
              />
              
              <div 
                className="mt-6"
                style={{ perspective: '1200px' }}
              >
                <CalendarGrid 
                  currentDate={currentDate}
                  selectedRange={selectedRange}
                  onDateSelect={handleDateSelect}
                  holidays={holidays}
                />
              </div>
            </div>

            {/* Notes Panel - 1 column on large screens */}
            <div className="lg:col-span-1">
              <NotesPanel selectedRange={selectedRange} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Information */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Built with React, Next.js, Framer Motion, and date-fns</p>
        <p className="mt-1">Public holidays provided by Nager.Date API</p>
      </div>
    </div>
  )
}
