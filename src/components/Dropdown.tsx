'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type DropdownItem = { label: string; action: () => void; danger?: boolean } | 'sep'

interface DropdownProps {
  items: DropdownItem[]
  onClose: () => void
  anchorRef: React.RefObject<HTMLElement | null>
}

export default function Dropdown({ items, onClose, anchorRef }: DropdownProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const rect = anchorRef.current?.getBoundingClientRect()
    if (rect) {
      setPosition({ top: rect.bottom + 6, left: Math.min(rect.left, window.innerWidth - 176) })
    }
  }, [anchorRef])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (menuRef.current?.contains(target) || anchorRef.current?.contains(target)) return
      onClose()
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [anchorRef, onClose])

  const renderedItems = useMemo(
    () =>
      items.map((item, index) =>
        item === 'sep' ? (
          <div key={`sep-${index}`} className="dd-sep" />
        ) : (
          <button
            key={item.label}
            className={`dd-item${item.danger ? ' danger' : ''}`}
            type="button"
            onClick={() => {
              item.action()
              onClose()
            }}
          >
            {item.label}
          </button>
        ),
      ),
    [items, onClose],
  )

  return (
    <div ref={menuRef} className="dropdown" style={{ top: position.top, left: position.left }}>
      {renderedItems}
    </div>
  )
}
