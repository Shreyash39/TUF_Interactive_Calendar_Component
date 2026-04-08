"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isSameDay } from 'date-fns'
import DayCell from './DayCell'
import { DateRange, PublicHoliday } from '@/types'

type NavigationDirection = 'prev' | 'next'

interface CalendarGridProps {
  currentDate: Date
  selectedRange: DateRange | null
  hoveredDate: Date | null
  direction: NavigationDirection
  onDateClick: (date: Date) => void
  onDateHover: (date: Date | null) => void
}

export default function CalendarGrid({ 
  currentDate, 
  selectedRange, 
  hoveredDate,
  direction,
  onDateClick,
  onDateHover
}: CalendarGridProps) {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const gridRef = useRef<HTMLDivElement>(null)

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const startingDayOfWeek = firstDay.getDay()
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    const days: Date[] = []
    
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(year, month, -i)
      days.push(day)
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i))
    }
    
    return days
  }

  const daysInMonth = getDaysInMonth(currentDate)

  useEffect(() => {
    setFocusedIndex(0)
  }, [currentDate])

  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentDate.getMonth()
  }

  const isToday = (date: Date): boolean => {
    const today = new Date()
    return isSameDay(date, today)
  }

  const isInRange = (date: Date): boolean => {
    if (!selectedRange?.start || !selectedRange?.end) return false
    return date > selectedRange.start && date < selectedRange.end
  }

  const isInHoverRange = (date: Date): boolean => {
    if (!selectedRange?.start || !hoveredDate || selectedRange?.end) return false
    const start = selectedRange.start < hoveredDate ? selectedRange.start : hoveredDate
    const end = selectedRange.start < hoveredDate ? hoveredDate : selectedRange.start
    return date > start && date < end
  }

  const handleKeyDown = useCallback((e: React.KeyboardEvent, date: Date) => {
    const currentIndex = daysInMonth.findIndex(d => isSameDay(d, date))
    let newIndex = currentIndex

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        newIndex = Math.max(0, currentIndex - 1)
        break
      case 'ArrowRight':
        e.preventDefault()
        newIndex = Math.min(daysInMonth.length - 1, currentIndex + 1)
        break
      case 'ArrowUp':
        e.preventDefault()
        newIndex = Math.max(0, currentIndex - 7)
        break
      case 'ArrowDown':
        e.preventDefault()
        newIndex = Math.min(daysInMonth.length - 1, currentIndex + 7)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        onDateClick(date)
        return
      default:
        return
    }

    setFocusedIndex(newIndex)
    
    if (gridRef.current) {
      const cells = gridRef.current.querySelectorAll('button')
      if (cells[newIndex]) {
        (cells[newIndex] as HTMLButtonElement).focus()
      }
    }
  }, [daysInMonth, onDateClick])

  const pageVariants = {
    enter: (direction: NavigationDirection) => ({
      rotateX: direction === 'next' ? -90 : 90,
      opacity: 0,
      transformOrigin: direction === 'next' ? 'top' : 'bottom',
    }),
    center: {
      rotateX: 0,
      opacity: 1,
    },
    exit: (direction: NavigationDirection) => ({
      rotateX: direction === 'next' ? 90 : -90,
      opacity: 0,
      transformOrigin: direction === 'next' ? 'bottom' : 'top',
    }),
  }

  return (
    <div className="perspective-1000" ref={gridRef}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${currentDate.getFullYear()}-${currentDate.getMonth()}`}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="preserve-3d"
        >
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div
                key={day}
                className="text-center text-sm font-semibold text-gray-600 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((date, index) => {
              const dayInfo = {
                date,
                isCurrentMonth: isCurrentMonth(date),
                isToday: isToday(date),
                isWeekend: date.getDay() === 0 || date.getDay() === 6,
              }

              return (
                <DayCell
                  key={date.toISOString()}
                  dayInfo={dayInfo}
                  selectedRange={selectedRange}
                  hoverDate={hoveredDate}
                  onSelect={() => onDateClick(date)}
                  onHover={() => onDateHover(date)}
                  onKeyDown={(e) => handleKeyDown(e, date)}
                  tabIndex={index === focusedIndex ? 0 : -1}
                  dataIndex={index}
                  holidays={[]}
                />
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}