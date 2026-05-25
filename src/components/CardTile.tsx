'use client'

import { useEffect, useRef, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Dropdown from '@/components/Dropdown'
import type { CardItem } from '@/types/dashboard'

interface CardTileProps {
  card: CardItem
  sectionId: string
  onEdit: () => void
  onRemove: () => void
}

const badgeClass = {
  live: 'b-live',
  wip: 'b-wip',
  fav: 'b-fav',
}

export default function CardTile({ card, onEdit, onRemove }: CardTileProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  const style = {
    '--c-accent': card.color,
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.25 : 1,
  } as React.CSSProperties

  useEffect(() => {
    const image = imageRef.current
    if (image?.complete && image.naturalWidth === 0) setLogoFailed(true)
  }, [])

  return (
    <div
      ref={setNodeRef}
      className="card group"
      style={style}
      {...attributes}
      {...listeners}
      onPointerDown={(event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY }
        ;(listeners as Record<string, ((event: React.PointerEvent) => void) | undefined>)?.onPointerDown?.(
          event,
        )
      }}
      onPointerUp={(event) => {
        const start = pointerStart.current
        pointerStart.current = null
        if (!start) return

        const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y)
        if (distance < 5) window.open(card.url, '_blank')
      }}
    >
      {card.badge && <span className={`card-badge ${badgeClass[card.badge]}`}>{card.badge}</span>}
      <button
        ref={menuButtonRef}
        className="card-menu-btn"
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation()
          setMenuOpen(true)
        }}
        aria-label={`Options for ${card.label}`}
      >
        ⋮
      </button>
      <div className="card-icon">
        {!logoFailed && (
          <img
            ref={imageRef}
            src={`/logos/${card.id}.png`}
            width={72}
            height={72}
            alt=""
            style={{ objectFit: 'contain', borderRadius: 8 }}
            onError={() => {
              setLogoFailed(true)
              if (iconRef.current) iconRef.current.style.display = 'block'
            }}
          />
        )}
        <span ref={iconRef} style={{ display: logoFailed ? 'block' : 'none' }}>
          {card.icon}
        </span>
      </div>
      <div className="card-label">{card.label}</div>
      <div className="card-url-txt">{card.url.replace(/^https?:\/\//, '')}</div>
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
    </div>
  )
}
