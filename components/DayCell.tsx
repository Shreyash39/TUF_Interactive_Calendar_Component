"use client"

import React from 'react'
import { format } from 'date-fns'
import { DayInfo, DateRange, PublicHoliday } from '@/types'
import { isDateInRange, isRangeBoundary } from '@/utils/dateUtils'

interface DayCellProps {
  dayInfo: DayInfo
  selectedRange: DateRange | null
  hoverDate: Date | null
  onSelect: () => void
  onHover: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  tabIndex: number
  dataIndex: number
  holidays: PublicHoliday[]
}

function DayCell({
  dayInfo,
  selectedRange,
  hoverDate,
  onSelect,
  onHover,
  onKeyDown,
  tabIndex,
  dataIndex,
  holidays,
}: DayCellProps) {
  const { date, isCurrentMonth, isToday, isWeekend } = dayInfo
  
  const isInRange = isDateInRange(date, selectedRange?.start ?? null, selectedRange?.end ?? null)
  const isBoundary = isRangeBoundary(date, selectedRange?.start ?? null, selectedRange?.end ?? null)
  
  const dateStr = format(date, 'yyyy-MM-dd')
  const holiday = holidays.find(h => h.date === dateStr)
  
  const isInHoverRange = selectedRange?.start && !selectedRange.end && hoverDate
    ? isDateInRange(date, selectedRange.start, hoverDate)
    : false

  return (
    <button
      role="gridcell"
      data-cell-index={dataIndex}
      tabIndex={tabIndex}
      onClick={onSelect}
      onMouseEnter={onHover}
      onKeyDown={onKeyDown}
      aria-label={`${format(date, 'MMMM d, yyyy')}${holiday ? `, ${holiday.localName}` : ''}`}
      aria-selected={isBoundary}
      className={`
        relative aspect-square p-2 rounded-lg transition-all duration-200
        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
        ${isToday ? 'ring-2 ring-blue-500 font-bold' : ''}
        ${isWeekend ? 'bg-red-50' : 'bg-white'}
        ${isInRange || isInHoverRange ? 'bg-blue-100' : ''}
        ${isBoundary ? 'bg-blue-500 text-white font-bold shadow-lg scale-105' : ''}
        ${isCurrentMonth ? 'hover:bg-blue-50 hover:shadow-day-hover' : ''}
        cursor-pointer
      `}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-sm md:text-base">{format(date, 'd')}</span>
        {holiday && (
          <span className="text-xs mt-1 text-red-600 font-semibold truncate w-full text-center">
            {holiday.localName}
          </span>
        )}
      </div>
    </button>
  )
}

// Memoize to prevent re-renders during hover
export default React.memo(DayCell, (prevProps, nextProps) => {
  return (
    prevProps.dayInfo.date.getTime() === nextProps.dayInfo.date.getTime() &&
    prevProps.selectedRange?.start?.getTime() === nextProps.selectedRange?.start?.getTime() &&
    prevProps.selectedRange?.end?.getTime() === nextProps.selectedRange?.end?.getTime() &&
    prevProps.hoverDate?.getTime() === nextProps.hoverDate?.getTime() &&
    prevProps.tabIndex === nextProps.tabIndex &&
    prevProps.holidays === nextProps.holidays
  )
})