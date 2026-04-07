import { useState, useEffect } from 'react'
import { PublicHoliday } from '@/types'

export function usePublicHolidays(currentDate: Date) {
  const [holidays, setHolidays] = useState<PublicHoliday[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const year = currentDate.getFullYear()
    const countryCode = 'US' // Change this to your country code
    
    setIsLoading(true)
    
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)
      .then(res => res.json())
      .then(data => {
        setHolidays(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch holidays:', error)
        setHolidays([])
        setIsLoading(false)
      })
  }, [currentDate])

  return { holidays, isLoading }
}
