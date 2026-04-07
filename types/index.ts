export interface DateRange {
  start: Date
  end: Date | null
}

export interface DayInfo {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isWeekend: boolean
}

export interface PublicHoliday {
  date: string // ISO format: YYYY-MM-DD
  localName: string
  name: string
  countryCode: string
  fixed: boolean
  global: boolean
  counties: string[] | null
  launchYear: number | null
  types: string[]
}

export interface Note {
  id: string
  date: string // ISO format
  content: string
  createdAt: string
}
