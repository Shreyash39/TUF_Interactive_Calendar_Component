"use client"

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'

interface CalendarHeaderProps {
  currentDate: Date
  onNavigate: (direction: 'prev' | 'next') => void
}

/**
 * Calendar Header Component
 * 
 * Displays the current month/year and provides navigation controls.
 * Implements accessible keyboard navigation.
 */
export default function CalendarHeader({ currentDate, onNavigate }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => onNavigate('prev')}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
        aria-label="Previous month"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
      </button>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
        {format(currentDate, 'MMMM yyyy')}
      </h2>

      <button
        onClick={() => onNavigate('next')}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
        aria-label="Next month"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
      </button>
    </div>
  )
}
