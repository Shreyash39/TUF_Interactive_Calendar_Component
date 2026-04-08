import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayCell } from './DayCell';
import type { DateRange, NavigationDirection } from '../hooks/useCalendarState';

interface CalendarGridProps {
  currentDate: Date;
  selectedRange: DateRange;
  hoveredDate: Date | null;
  direction: NavigationDirection;
  onDateClick: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
}

interface Holiday {
  date: string; // Format: 'YYYY-MM-DD'
  name: string;
}

// Sample holidays (you can expand this)
const HOLIDAYS: Holiday[] = [
  { date: '2026-01-01', name: 'New Year\'s Day' },
  { date: '2026-01-26', name: 'Republic Day' },
  { date: '2026-08-15', name: 'Independence Day' },
  { date: '2026-10-02', name: 'Gandhi Jayanti' },
  { date: '2026-12-25', name: 'Christmas' },
];

/**
 * Calendar grid component with 3D page flip animations
 * Includes keyboard navigation and accessibility features
 */
export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  selectedRange,
  hoveredDate,
  direction,
  onDateClick,
  onDateHover,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const daysInMonth = getDaysInMonth(currentDate);

  // Reset focused index when month changes
  useEffect(() => {
    setFocusedIndex(0);
  }, [currentDate]);

  /**
   * Get all days to display in the calendar grid
   */
  function getDaysInMonth(date: Date): Date[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    const startingDayOfWeek = firstDay.getDay();
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const days: Date[] = [];
    
    // Add previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(year, month, -i);
      days.push(day);
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Add next month's days to complete the grid (6 rows x 7 days = 42)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    return days;
  }

  /**
   * Check if a date is today
   */
  function isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  /**
   * Check if a date is in the current month
   */
  function isCurrentMonth(date: Date): boolean {
    return date.getMonth() === currentDate.getMonth();
  }

  /**
   * Check if a date is selected (start or end of range)
   */
  function isSelected(date: Date): boolean {
    if (!selectedRange.start) return false;
    return isSameDay(date, selectedRange.start) || 
           (selectedRange.end ? isSameDay(date, selectedRange.end) : false);
  }

  /**
   * Check if a date is within the selected range
   */
  function isInRange(date: Date): boolean {
    if (!selectedRange.start || !selectedRange.end) return false;
    return date > selectedRange.start && date < selectedRange.end;
  }

  /**
   * Check if a date is within the hover preview range
   */
  function isInHoverRange(date: Date): boolean {
    if (!selectedRange.start || !hoveredDate || selectedRange.end) return false;
    const start = selectedRange.start < hoveredDate ? selectedRange.start : hoveredDate;
    const end = selectedRange.start < hoveredDate ? hoveredDate : selectedRange.start;
    return date > start && date < end;
  }

  /**
   * Check if two dates are the same day
   */
  function isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  /**
   * Get holiday name for a date
   */
  function getHoliday(date: Date): string | undefined {
    const dateStr = date.toISOString().split('T')[0];
    return HOLIDAYS.find(h => h.date === dateStr)?.name;
  }

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent, date: Date) => {
    const currentIndex = daysInMonth.findIndex(d => isSameDay(d, date));
    let newIndex = currentIndex;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = Math.max(0, currentIndex - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = Math.min(daysInMonth.length - 1, currentIndex + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        newIndex = Math.max(0, currentIndex - 7);
        break;
      case 'ArrowDown':
        e.preventDefault();
        newIndex = Math.min(daysInMonth.length - 1, currentIndex + 7);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        onDateClick(date);
        return;
      default:
        return;
    }

    setFocusedIndex(newIndex);
    
    // Focus the new cell
    if (gridRef.current) {
      const cells = gridRef.current.querySelectorAll('button');
      if (cells[newIndex]) {
        (cells[newIndex] as HTMLButtonElement).focus();
      }
    }
  }, [daysInMonth, onDateClick]);

  /**
   * 3D Page flip animation variants
   */
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
  };

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
          {/* Week day headers */}
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

          {/* Calendar days grid */}
          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((date, index) => {
              const isStart = selectedRange.start ? isSameDay(date, selectedRange.start) : false;
              const isEnd = selectedRange.end ? isSameDay(date, selectedRange.end) : false;
              const inRange = isInRange(date) || isInHoverRange(date);
              const isHovered = hoveredDate ? isSameDay(date, hoveredDate) : false;

              return (
                <DayCell
                  key={date.toISOString()}
                  date={date}
                  isCurrentMonth={isCurrentMonth(date)}
                  isToday={isToday(date)}
                  isSelected={isSelected(date)}
                  isInRange={inRange}
                  isRangeStart={isStart}
                  isRangeEnd={isEnd}
                  isHovered={isHovered}
                  isFocused={index === focusedIndex}
                  holiday={getHoliday(date)}
                  onClick={onDateClick}
                  onMouseEnter={onDateHover}
                  onMouseLeave={() => onDateHover(null)}
                  onKeyDown={handleKeyDown}
                  tabIndex={index === focusedIndex ? 0 : -1}
                />
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};