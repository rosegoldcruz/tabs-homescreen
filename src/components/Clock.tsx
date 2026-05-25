'use client'

import { useEffect, useState } from 'react'

const formatClock = (date: Date) => ({
  time: date.toLocaleTimeString('en-US', { hour12: false }),
  day: date
    .toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    .replace(',', '')
    .replace(',', '')
    .toUpperCase(),
})

export default function Clock() {
  const [clock, setClock] = useState<{ time: string; day: string } | null>(null)

  useEffect(() => {
    setClock(formatClock(new Date()))
    const id = window.setInterval(() => setClock(formatClock(new Date())), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="clock-block">
      <div className="clock-time">{clock?.time ?? '--:--:--'}</div>
      <div className="clock-date">{clock?.day.replace(' ', ' · ') ?? '--- · --- -- ----'}</div>
    </div>
  )
}
