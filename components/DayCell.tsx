import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from './Tooltip';

interface DayCellProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isHovered: boolean;
  isFocused: boolean;
  holiday?: string;
  onClick: (date: Date) => void;
  onMouseEnter: (date: Date) => void;
  onMouseLeave: () => void;
  onKeyDown?: (e: React.KeyboardEvent, date: Date) => void;
  tabIndex?: number;
}

/**
 * Individual day cell component with skeuomorphic styling
 * Memoized to prevent unnecessary re-renders during hover operations
 */
const DayCellComponent: React.FC<DayCellProps> = ({
  date,
  isCurrentMonth,
  isToday,
  isSelected,
  isInRange,
  isRangeStart,
  isRangeEnd,
  isHovered,
  isFocused,
  holiday,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  tabIndex,
}) => {
  // Base classes
  let cellClasses = 'relative w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ';

  // Month styling
  if (!isCurrentMonth) {
    cellClasses += 'opacity-30 ';
  }

  // Today styling with theme accent color
  if (isToday) {
    cellClasses += 'ring-2 ring-offset-2 font-bold ';
    cellClasses += 'ring-[var(--theme-accent,#3b82f6)] ';
  }

  // Selection and range styling with theme colors
  if (isSelected || isRangeStart || isRangeEnd) {
    cellClasses += 'bg-[var(--theme-primary,#3b82f6)] text-white font-semibold shadow-md ';
  } else if (isInRange) {
    cellClasses += 'bg-[var(--theme-light,#bfdbfe)] ';
  } else if (isHovered) {
    cellClasses += 'bg-gray-100 ';
  } else {
    cellClasses += 'hover:bg-gray-50 ';
  }

  // Focus styling (distinct from selection)
  if (isFocused && !isSelected && !isRangeStart && !isRangeEnd) {
    cellClasses += 'ring-2 ring-gray-400 ring-offset-1 ';
  }

  // Skeuomorphic shadow
  if (!isInRange && !isSelected && !isRangeStart && !isRangeEnd) {
    cellClasses += 'shadow-sm ';
  }

  const handleClick = () => onClick(date);
  const handleMouseEnter = () => onMouseEnter(date);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e, date);
    }
  };

  const cellContent = (
    <motion.button
      type="button"
      className={cellClasses}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      aria-label={`${date.toLocaleDateString()${holiday ? `, ${holiday}` : ''}}`}
      aria-selected={isSelected || isRangeStart || isRangeEnd}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      <span className="text-sm md:text-base">
        {date.getDate()}
      </span>
      
      {holiday && (
        <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full" />
      )}
    </motion.button>
  );

  // Wrap with tooltip if there's a holiday
  if (holiday) {
    return (
      <Tooltip content={holiday}>
        {cellContent}
      </Tooltip>
    );
  }

  return cellContent;
};

/**
 * Memoized comparison function to prevent re-renders
 * Only re-render if props that affect appearance change
 */
const areEqual = (prevProps: DayCellProps, nextProps: DayCellProps): boolean => {
  return (
    prevProps.date.getTime() === nextProps.date.getTime() &&
    prevProps.isCurrentMonth === nextProps.isCurrentMonth &&
    prevProps.isToday === nextProps.isToday &&
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.isInRange === nextProps.isInRange &&
    prevProps.isRangeStart === nextProps.isRangeStart &&
    prevProps.isRangeEnd === nextProps.isRangeEnd &&
    prevProps.isHovered === nextProps.isHovered &&
    prevProps.isFocused === nextProps.isFocused &&
    prevProps.holiday === nextProps.holiday &&
    prevProps.tabIndex === nextProps.tabIndex
  );
};

export const DayCell = React.memo(DayCellComponent, areEqual);