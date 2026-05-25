'use client'

import { useEffect, useRef } from 'react'

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA'

      if (event.key === '/' && !isInput) {
        event.preventDefault()
        inputRef.current?.focus()
      }

      if (event.key === 'Escape') {
        inputRef.current?.blur()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <form className="search-wrap" action="https://www.google.com/search" method="get" target="_blank">
      <span className="search-icon">⌕</span>
      <input
        ref={inputRef}
        className="search-input"
        name="q"
        placeholder="Search the web  ·  press / to focus"
      />
      <span className="search-kbd">/</span>
    </form>
  )
}
