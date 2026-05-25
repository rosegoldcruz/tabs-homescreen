'use client'

import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { useDroppable } from '@dnd-kit/core'
import CardTile from '@/components/CardTile'
import type { CardItem } from '@/types/dashboard'

interface CardGridProps {
  sectionId: string
  cards: CardItem[]
  handlers: {
    onEdit: (sectionId: string, card: CardItem) => void
    onRemove: (sectionId: string, cardId: string) => void
    onAdd: (sectionId: string) => void
  }
}

export default function CardGrid({ sectionId, cards, handlers }: CardGridProps) {
  const { setNodeRef } = useDroppable({ id: sectionId })

  return (
    <SortableContext items={cards.map((card) => card.id)} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} className="section-grid">
        {cards.map((card) => (
          <CardTile
            key={card.id}
            card={card}
            sectionId={sectionId}
            onEdit={() => handlers.onEdit(sectionId, card)}
            onRemove={() => handlers.onRemove(sectionId, card.id)}
          />
        ))}
        <button className="add-card-tile" type="button" onClick={() => handlers.onAdd(sectionId)}>
          +
        </button>
      </div>
    </SortableContext>
  )
}
