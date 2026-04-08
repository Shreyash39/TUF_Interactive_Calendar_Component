import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export type NavigationDirection = 'prev' | 'next' | null;

export interface CalendarState {
  currentDate: Date;
  selectedRange: DateRange;
  hoveredDate: Date | null;
  backgroundImage: string | null;
  direction: NavigationDirection;
}

export function useCalendarState() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [direction, setDirection] = useState<NavigationDirection>(null);
  
  // Use localStorage for selected range persistence
  const [selectedRange, setSelectedRange, removeSelectedRange] = useLocalStorage<DateRange>(
    'calendar-selected-range',
    { start: null, end: null }
  );

  /**
   * Navigate to previous month with animation direction
   */
  const goToPreviousMonth = useCallback(() => {
    setDirection('prev');
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
    // Reset direction after animation
    setTimeout(() => setDirection(null), 600);
  }, []);

  /**
   * Navigate to next month with animation direction
   */
  const goToNextMonth = useCallback(() => {
    setDirection('next');
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
    // Reset direction after animation
    setTimeout(() => setDirection(null), 600);
  }, []);

  /**
   * Handle date selection with range logic
   */
  const handleDateClick = useCallback((date: Date) => {
    setSelectedRange(prev => {
      // If no start date, set it
      if (!prev.start) {
        return { start: date, end: null };
      }

      // If start exists but no end, set end (ensuring start <= end)
      if (!prev.end) {
        if (date < prev.start) {
          return { start: date, end: prev.start };
        }
        return { start: prev.start, end: date };
      }

      // If both exist, start new range
      return { start: date, end: null };
    });
  }, [setSelectedRange]);

  /**
   * Clear selected date range
   */
  const clearSelection = useCallback(() => {
    removeSelectedRange();
  }, [removeSelectedRange]);

  /**
   * Update background image
   */
  const updateBackgroundImage = useCallback((imageUrl: string | null) => {
    setBackgroundImage(imageUrl);
  }, []);

  return {
    currentDate,
    selectedRange,
    hoveredDate,
    backgroundImage,
    direction,
    setHoveredDate,
    goToPreviousMonth,
    goToNextMonth,
    handleDateClick,
    clearSelection,
    updateBackgroundImage,
  };
}