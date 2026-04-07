import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday, isWeekend, format } from 'date-fns'
import { DayInfo } from '@/types'

/**
 * Generates a 42-cell calendar grid (6 weeks)
 * Includes leading and trailing days from adjacent months
 */
export function generateCalendarGrid(currentDate: Date): DayInfo[] {
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  // Ensure we always have exactly 42 cells (6 rows × 7 days)
  const daysNeeded = 42
  const currentDays = days.length

  if (currentDays < daysNeeded) {
    const lastDay = days[days.length - 1]
    for (let i = 1; i <= daysNeeded - currentDays; i++) {
      const nextDay = new Date(lastDay)
      nextDay.setDate(lastDay.getDate() + i)
      days.push(nextDay)
    }
  }

  return days.slice(0, 42).map(date => ({
    date,
    isCurrentMonth: isSameMonth(date, currentDate),
    isToday: isToday(date),
    isWeekend: isWeekend(date),
  }))
}

/**
 * Checks if a date is within a range
 */
export function isDateInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start) return false
  if (!end) return format(date, 'yyyy-MM-dd') === format(start, 'yyyy-MM-dd')
  
  const dateTime = date.getTime()
  const startTime = start.getTime()
  const endTime = end.getTime()
  
  return dateTime >= startTime && dateTime <= endTime
}

/**
 * Checks if a date is a range boundary
 */
export function isRangeBoundary(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start) return false
  
  const dateStr = format(date, 'yyyy-MM-dd')
  const startStr = format(start, 'yyyy-MM-dd')
  const endStr = end ? format(end, 'yyyy-MM-dd') : null
  
  return dateStr === startStr || dateStr === endStr
}
