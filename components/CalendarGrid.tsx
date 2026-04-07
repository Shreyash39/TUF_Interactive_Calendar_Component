"use client"

import React, { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { format } from 'date-fns'
import DayCell from './DayCell'
import { generateCalendarGrid } from '@/utils/dateUtils'
import { DateRange, PublicHoliday } from '@/types'

interface CalendarGridProps {
  currentDate: Date
  selectedRange: DateRange | null
  onDateSelect: (date: Date) => void
  holidays: PublicHoliday[]
}

/**
 * Calendar Grid Component with 3D Page Flip Animation
 * 
 * Renders a 42-cell (6 rows × 7 columns) calendar grid.
 * Implements:
 * - Trailing/leading days from adjacent months
 * - Range selection with hover preview
 * - 3D page flip animation on month change
 * - Full keyboard navigation (Arrow keys, Enter)
 * - ARIA grid semantics for accessibility
 */
export default function CalendarGrid({ 
  currentDate, 
  selectedRange, 
  onDateSelect,
  holidays 
}: CalendarGridProps) {
  const [hoverDate, setHoverDate] = useState<Date | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number>(0)

  // Generate the 42-cell grid with leading/trailing days
  const calendarDays = generateCalendarGrid(currentDate)
  
  // Create a unique key for AnimatePresence based on month/year
  const gridKey = format(currentDate, 'yyyy-MM')

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    const key = e.key
    let newIndex = index

    switch (key) {
      case 'ArrowUp':
        e.preventDefault()
        newIndex = Math.max(0, index - 7)
        break
      case 'ArrowDown':
        e.preventDefault()
        newIndex = Math.min(41, index + 7)
        break
      case 'ArrowLeft':
        e.preventDefault()
        newIndex = Math.max(0, index - 1)
        break
      case 'ArrowRight':
        e.preventDefault()
        newIndex = Math.min(41, index + 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        onDateSelect(calendarDays[index].date)
        return
      default:
        return
    }

    setFocusedIndex(newIndex)
    // Focus the new cell
    setTimeout(() => {
      const cell = document.querySelector(`[data-cell-index="${newIndex}"]`) as HTMLElement
      cell?.focus()
    }, 0)
  }, [calendarDays, onDateSelect])

  // Animation variants for 3D page flip
  const pageVariants = {
    enter: {
      rotateX: -90,
      opacity: 0,
      transformOrigin: 'top center',
    },
    center: {
      rotateX: 0,
      opacity: 1,
      transformOrigin: 'top center',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1,
      }
    },
    exit: {
      rotateX: 90,
      opacity: 0,
      transformOrigin: 'top center',
      transition: {
        duration: 0.3,
      }
    }
  }

  return (
    <div 
      role="grid" 
      aria-label="Calendar"
      className="bg-white/50 rounded-lg shadow-inner-paper p-4"
    >
      {/* Day Headers */}
      <div role="row" className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div 
            key={day} 
            role="columnheader"
            className="text-center text-sm font-semibold text-gray-600 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days with 3D Flip Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={gridKey}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          role="rowgroup"
          className="grid grid-cols-7 gap-2"
        >
          {calendarDays.map((dayInfo, index) => {
            const row = Math.floor(index / 7)
            return (
              <div key={index} role="row">
                <DayCell
                  dayInfo={dayInfo}
                  selectedRange={selectedRange}
                  hoverDate={hoverDate}
                  onSelect={() => onDateSelect(dayInfo.date)}
                  onHover={() => setHoverDate(dayInfo.date)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={index === focusedIndex ? 0 : -1}
                  dataIndex={index}
                  holidays={holidays}
                />
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
