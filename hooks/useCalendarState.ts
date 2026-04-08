import { useState, useCallback } from 'react'
import { addMonths, subMonths } from 'date-fns'
import { DateRange } from '@/types'
import { useLocalStorage } from './useLocalStorage'

export function useCalendarState() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [direction, setDirection] = useState<'prev' | 'next'>('next')
  const [selectedRange, setSelectedRange] = useLocalStorage<DateRange | null>(
    'calendar-selected-range',
    null
  )

  const navigateMonth = useCallback((dir: 'prev' | 'next') => {
    setDirection(dir)
    setCurrentDate(prev => dir === 'next' ? addMonths(prev, 1) : subMonths(prev, 1))
  }, [])

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedRange(prev => {
      if (!prev || prev.end) {
        // Start new range
        return { start: date, end: null }
      } else {
        // Complete the range
        const start = prev.start
        return date >= start 
          ? { start, end: date }
          : { start: date, end: start }
      }
    })
  }, [setSelectedRange])

  return {
    currentDate,
    selectedRange,
    direction,
    handleDateSelect,
    navigateMonth,
  }
}