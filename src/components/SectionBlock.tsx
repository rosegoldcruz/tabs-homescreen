'use client'

import { useRef, useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import CardGrid from '@/components/CardGrid'
import Dropdown from '@/components/Dropdown'
import type { CardItem, DashboardSection } from '@/types/dashboard'

interface SectionBlockProps {
  section: DashboardSection
  handlers: {
    onEditCard: (sectionId: string, card: CardItem) => void
    onRemoveCard: (sectionId: string, cardId: string) => void
    onAddCard: (sectionId: string) => void
    onRenameSection: (section: DashboardSection) => void
    onRemoveSection: (sectionId: string) => void
  }
}

export default function SectionBlock({ section, handlers }: SectionBlockProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: section.id + '__section',
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <section ref={setNodeRef} className={`section-wrap${isDragging ? ' section-dragging' : ''}`}>
      <div className="section-header">
        <span className="section-drag-handle" {...attributes} {...listeners}>
          ⠿
        </span>
        <span className={`sh-label${section.priority ? ' pri' : ''}`}>{section.label}</span>
        <span className={`sh-line${section.priority ? ' pri' : ''}`} />
        <button
          ref={menuButtonRef}
          className="section-menu-btn"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label={`Options for ${section.label}`}
        >
          ⋮
        </button>
        {menuOpen && (
          <Dropdown
            anchorRef={menuButtonRef}
            onClose={() => setMenuOpen(false)}
            items={[
              { label: 'Rename', action: () => handlers.onRenameSection(section) },
              { label: 'Add Site', action: () => handlers.onAddCard(section.id) },
              'sep',
              {
                label: 'Delete Section',
                action: () => handlers.onRemoveSection(section.id),
                danger: true,
              },
            ]}
          />
        )}
      </div>
      <CardGrid
        sectionId={section.id}
        cards={section.cards}
        handlers={{
          onEdit: handlers.onEditCard,
          onRemove: handlers.onRemoveCard,
          onAdd: handlers.onAddCard,
        }}
      />
    </section>
  )
}
