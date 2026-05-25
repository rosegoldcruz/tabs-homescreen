'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import Clock from '@/components/Clock'
import PinnedBar from '@/components/PinnedBar'
import SearchBar from '@/components/SearchBar'
import SectionBlock from '@/components/SectionBlock'
import SiteModal from '@/components/SiteModal'
import { useDashboard } from '@/lib/use-dashboard'
import type { CardItem, DashboardSection, PinItem } from '@/types/dashboard'

type ModalMode = 'add-card' | 'edit-card' | 'add-pin' | 'edit-pin' | 'rename-sec'
type ModalTarget = CardItem | PinItem | DashboardSection | null

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'dev', label: 'Dev' },
  { id: 'admin', label: 'Admin' },
  { id: 'projects', label: 'Projects' },
  { id: 'video', label: 'Video' },
  { id: 'telephony', label: 'Telephony' },
  { id: 'ui', label: 'UI' },
  { id: 'google', label: 'Google' },
  { id: 'lab', label: 'Lab' },
]

function OverlayCard({ card }: { card: CardItem }) {
  return (
    <div
      className="card"
      style={
        {
          '--c-accent': card.color,
          opacity: 0.9,
          transform: 'scale(0.97)',
        } as React.CSSProperties
      }
    >
      {card.badge && <span className={`card-badge b-${card.badge}`}>{card.badge}</span>}
      <div className="card-icon">{card.icon}</div>
      <div className="card-label">{card.label}</div>
      <div className="card-url-txt">{card.url.replace(/^https?:\/\//, '')}</div>
    </div>
  )
}

export default function DashboardRoot() {
  const {
    state,
    addCard,
    editCard,
    removeCard,
    moveCard,
    addSection,
    renameSection,
    removeSection,
    moveSection,
    addPin,
    editPin,
    removePin,
    resetToDefaults,
  } = useDashboard()
  const [tab, setTab] = useState('all')
  const [modalMode, setModalMode] = useState<ModalMode | null>(null)
  const [modalTarget, setModalTarget] = useState<ModalTarget>(null)
  const [modalSectionId, setModalSectionId] = useState<string | undefined>()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))
  const visibleSections = useMemo(
    () => state.sections.filter((section) => tab === 'all' || section.filter === tab),
    [state.sections, tab],
  )
  const activeCard = useMemo(
    () => state.sections.flatMap((section) => section.cards).find((card) => card.id === activeId),
    [activeId, state.sections],
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleDragStart(event: DragStartEvent) {
    setActiveId(String(event.active.id))
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null)
    const { active, over } = event
    if (!over || active.id === over.id) return

    const activeId = String(active.id)
    const overId = String(over.id)

    if (activeId.endsWith('__section')) {
      const fromIdx = state.sections.findIndex((section) => section.id + '__section' === activeId)
      const toSectionId = overId.endsWith('__section') ? overId.replace('__section', '') : overId
      const toIdx = state.sections.findIndex((section) => section.id === toSectionId)
      if (fromIdx !== -1 && toIdx !== -1 && fromIdx !== toIdx) {
        moveSection(fromIdx, toIdx)
      }
      return
    }

    const fromSection = state.sections.find((section) =>
      section.cards.some((card) => card.id === activeId),
    )
    if (!fromSection) return

    let toSection = state.sections.find((section) => section.cards.some((card) => card.id === overId))
    if (!toSection) {
      toSection = state.sections.find((section) => section.id === overId)
    }
    if (!toSection) return

    const fromIndex = fromSection.cards.findIndex((card) => card.id === activeId)
    const toIndex = toSection.cards.findIndex((card) => card.id === overId)

    moveCard({
      fromSection: fromSection.id,
      toSection: toSection.id,
      fromIndex,
      toIndex: toIndex === -1 ? toSection.cards.length : toIndex,
    })
  }

  const openModal = (mode: ModalMode, target: ModalTarget = null, sectionId?: string) => {
    setModalMode(mode)
    setModalTarget(target)
    setModalSectionId(sectionId)
  }

  const closeModal = () => {
    setModalMode(null)
    setModalTarget(null)
    setModalSectionId(undefined)
  }

  const saveModal = (data: { label: string; url?: string; color?: string; icon?: string }) => {
    if (modalMode === 'add-card' && modalSectionId && data.url && data.color && data.icon) {
      addCard(modalSectionId, { label: data.label, url: data.url, color: data.color, icon: data.icon })
    }

    if (modalMode === 'edit-card' && modalSectionId && modalTarget && 'icon' in modalTarget) {
      editCard(modalSectionId, modalTarget.id, data as Partial<CardItem>)
    }

    if (modalMode === 'add-pin' && data.url && data.color) {
      addPin({ label: data.label, url: data.url, color: data.color })
    }

    if (modalMode === 'edit-pin' && modalTarget && 'url' in modalTarget && !('icon' in modalTarget)) {
      editPin(modalTarget.id, data as Partial<PinItem>)
    }

    if (modalMode === 'rename-sec' && modalTarget) {
      renameSection(modalTarget.id, data.label)
    }

    closeModal()
  }

  const addSectionFromPrompt = () => {
    const label = window.prompt('Section label')
    if (label?.trim()) addSection(label.trim())
  }

  return (
    <>
      <div className="dash-bg-grid" />
      <div className="dash-bg-glow" />
      <div className="wrap">
        <header>
          <div className="logo">
            <div className="fox" />
            <div>
              <div className="logo-text">AEON OPS</div>
              <div className="logo-sub">CRUZ DIGIDASH</div>
            </div>
          </div>
          <Clock />
        </header>

        <SearchBar />

        <div className="pinned-label">Everyday AI &nbsp;·&nbsp; Pinned</div>
        <PinnedBar
          pinned={state.pinned}
          onEdit={(pin) => openModal('edit-pin', pin)}
          onRemove={removePin}
          onAdd={() => openModal('add-pin')}
        />

        <div className="tabs">
          {TABS.map((item) => (
            <button
              key={item.id}
              className={`tab${tab === item.id ? ' active' : ''}`}
              type="button"
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {mounted && (
          <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div>
              {visibleSections.map((section) => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  handlers={{
                    onEditCard: (sectionId, card) => openModal('edit-card', card, sectionId),
                    onRemoveCard: removeCard,
                    onAddCard: (sectionId) => openModal('add-card', null, sectionId),
                    onRenameSection: (target) => openModal('rename-sec', target),
                    onRemoveSection: removeSection,
                  }}
                />
              ))}
            </div>
            <DragOverlay>{activeCard ? <OverlayCard card={activeCard} /> : null}</DragOverlay>
          </DndContext>
        )}

        <button className="add-section-btn" type="button" onClick={addSectionFromPrompt}>
          + Add Section
        </button>

        <footer>
          <div className="foot-sig">
            AEON OPS <span>//</span> LOCAL CONTROL
          </div>
          <button className="foot-reset" type="button" onClick={resetToDefaults}>
            Reset
          </button>
        </footer>
      </div>

      {modalMode && (
        <SiteModal
          mode={modalMode}
          initial={modalTarget ?? undefined}
          sectionId={modalSectionId}
          onSave={saveModal}
          onClose={closeModal}
        />
      )}
    </>
  )
}
