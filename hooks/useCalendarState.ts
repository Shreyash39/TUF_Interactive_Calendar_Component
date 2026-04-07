import { useState, useCallback } from 'react'
import { addMonths, subMonths } from 'date-fns'
import { DateRange } from '@/types'

export function useCalendarState() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null)

  const navigateMonth = useCallback((direction: 'prev' | 'next') => {
    setCurrentDate(prev => direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1))
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
  }, [])

  return {
    currentDate,
    selectedRange,
    handleDateSelect,
    navigateMonth,
  }
}
