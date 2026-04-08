import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for localStorage with TypeScript support
 * Handles serialization/deserialization automatically
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item, dateReviver) : initialValue
    } catch (error) {
      console.warn(`Error loading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore, dateReplacer))
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  // Remove item from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}

/**
 * Custom replacer for JSON.stringify to handle Date objects
 */
function dateReplacer(key: string, value: any) {
  if (value instanceof Date) {
    return { __type: 'Date', value: value.toISOString() }
  }
  return value
}

/**
 * Custom reviver for JSON.parse to restore Date objects
 */
function dateReviver(key: string, value: any) {
  if (value && typeof value === 'object' && value.__type === 'Date') {
    return new Date(value.value)
  }
  return value
}