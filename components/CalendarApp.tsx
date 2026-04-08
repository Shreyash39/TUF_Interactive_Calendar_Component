import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarGrid } from './CalendarGrid';
import { useCalendarState } from '../hooks/useCalendarState';
import { useThemeExtraction } from '../hooks/useThemeExtraction';

/**
 * Main calendar application component with skeuomorphic design
 * Features: Background image upload, theme extraction, responsive spiral binding
 */
export const CalendarApp: React.FC = () => {
  const {
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
  } = useCalendarState();

  const extractedColors = useThemeExtraction(backgroundImage);
  const [spiralRingCount, setSpiralRingCount] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Calculate spiral ring count based on container width
   * Use ResizeObserver for responsive updates
   */
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        // Calculate rings: approximately one ring per 150px
        const rings = Math.max(3, Math.floor(width / 150));
        setSpiralRingCount(Math.min(rings, 8)); // Max 8 rings
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  /**
   * Handle background image upload
   */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateBackgroundImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Format date range for display
   */
  const formatDateRange = (): string => {
    if (!selectedRange.start) return 'No date selected';
    
    const startStr = selectedRange.start.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    if (!selectedRange.end) return startStr;

    const endStr = selectedRange.end.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return `${startStr} - ${endStr}`;
  };

  /**
   * Get month and year display
   */
  const monthYear = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Interactive Calendar
          </h1>
          <p className="text-gray-600">
            Select dates and customize your calendar
          </p>
        </motion.div>

        {/* Calendar Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-paper-light rounded-2xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Spiral Binding - Programmatic */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--theme-primary,#e0e0e0)] to-[var(--theme-dark,#d0d0d0)] shadow-inner flex flex-col justify-around py-8 z-10">
            {Array.from({ length: spiralRingCount }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full mx-auto relative"
                style={{
                  background: `radial-gradient(circle at 30% 30%, var(--theme-light, #f0f0f0), var(--theme-primary, #d0d0d0))`,
                  boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(255,255,255,0.5)',
                }}
              >
                <div className="absolute inset-2 rounded-full bg-paper-light" />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="ml-12 p-6 md:p-8 bg-white/90 backdrop-blur-sm">
            {/* Controls Row */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              {/* Month Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToPreviousMonth}
                  className="px-4 py-2 bg-[var(--theme-primary,#3b82f6)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Previous month"
                >
                  ← Prev
                </motion.button>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 min-w-[200px] text-center">
                  {monthYear}
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToNextMonth}
                  className="px-4 py-2 bg-[var(--theme-primary,#3b82f6)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Next month"
                >
                  Next →
                </motion.button>
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="bg-upload"
                  className="px-4 py-2 bg-[var(--theme-secondary,#10b981)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer inline-block"
                >
                  📷 Upload Background
                </label>
                <input
                  id="bg-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Calendar Grid */}
            <CalendarGrid
              currentDate={currentDate}
              selectedRange={selectedRange}
              hoveredDate={hoveredDate}
              direction={direction}
              onDateClick={handleDateClick}
              onDateHover={setHoveredDate}
            />

            {/* Selected Range Display */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Selected Range:</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatDateRange()}
                  </p>
                </div>

                {selectedRange.start && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearSelection}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    Clear Selection
                  </motion.button>
                )}
              </div>
            </div>

            {/* Theme Colors Display (Debug) */}
            {extractedColors && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
                <p className="text-sm text-gray-600 mb-2">Extracted Theme Colors:</p>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border-2 border-gray-300"
                      style={{ backgroundColor: extractedColors.primary }}
                    />
                    <span className="text-xs">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border-2 border-gray-300"
                      style={{ backgroundColor: extractedColors.secondary }}
                    />
                    <span className="text-xs">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border-2 border-gray-300"
                      style={{ backgroundColor: extractedColors.accent }}
                    />
                    <span className="text-xs">Accent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border-2 border-gray-300"
                      style={{ backgroundColor: extractedColors.light }}
                    />
                    <span className="text-xs">Light</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border-2 border-gray-300"
                      style={{ backgroundColor: extractedColors.dark }}
                    />
                    <span className="text-xs">Dark</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};