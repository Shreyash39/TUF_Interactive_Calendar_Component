import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  content: string;
  children: React.ReactElement;
  delayMs?: number;
}

/**
 * Tooltip component that renders content on hover
 * Uses React Portal to render at document.body level for proper positioning
 * Includes accessibility features with aria-describedby
 */
export const Tooltip: React.FC<TooltipProps> = ({ content, children, delayMs = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const updatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const tooltipWidth = 200; // Approximate width
    const tooltipHeight = 40; // Approximate height

    let top = rect.top - tooltipHeight - 8; // 8px gap
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;

    // Adjust if tooltip goes off screen
    if (top < 0) {
      top = rect.bottom + 8; // Show below if no space above
    }

    if (left < 8) {
      left = 8;
    } else if (left + tooltipWidth > window.innerWidth - 8) {
      left = window.innerWidth - tooltipWidth - 8;
    }

    setPosition({ top, left });
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      updatePosition();
      setIsVisible(true);
    }, delayMs);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Clone child with ref and event handlers
  const trigger = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    'aria-describedby': isVisible ? tooltipId.current : undefined,
  });

  const tooltipContent = isVisible && typeof document !== 'undefined' ? createPortal(
    <div
      id={tooltipId.current}
      role="tooltip"
      className="fixed z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none animate-fadeIn"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        maxWidth: '200px',
      }}
    >
      {content}
      <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
    </div>,
    document.body
  ) : null;

  return (
    <>
      {trigger}
      {tooltipContent}
    </>
  );
};