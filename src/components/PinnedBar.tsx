'use client'

import { useRef, useState } from 'react'
import Dropdown from '@/components/Dropdown'
import type { PinItem } from '@/types/dashboard'

interface PinnedBarProps {
  pinned: PinItem[]
  onEdit: (pin: PinItem) => void
  onRemove: (pinId: string) => void
  onAdd: () => void
}

function PinPill({ pin, onEdit, onRemove }: { pin: PinItem; onEdit: () => void; onRemove: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <span className="pin-group">
      <button className="pin" type="button" onClick={() => window.open(pin.url, '_blank')}>
        <span className="pin-dot" style={{ background: pin.color }} />
        {pin.label}
      </button>
      <button
        ref={menuButtonRef}
        className="pin-menu-btn"
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label={`Options for ${pin.label}`}
      >
        ⋮
      </button>
      {menuOpen && (
        <Dropdown
          anchorRef={menuButtonRef}
          onClose={() => setMenuOpen(false)}
          items={[
            { label: 'Edit', action: onEdit },
            'sep',
            { label: 'Remove', action: onRemove, danger: true },
          ]}
        />
      )}
    </span>
  )
}

export default function PinnedBar({ pinned, onEdit, onRemove, onAdd }: PinnedBarProps) {
  return (
    <div className="pinned-grid">
      {pinned.map((pin) => (
        <PinPill key={pin.id} pin={pin} onEdit={() => onEdit(pin)} onRemove={() => onRemove(pin.id)} />
      ))}
      <button className="pin pin-add" type="button" onClick={onAdd}>
        +
      </button>
    </div>
  )
}
