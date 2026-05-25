'use client'

import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_STATE } from '@/lib/dashboard-data'
import type { CardItem, DashboardState, PinItem } from '@/types/dashboard'

const STORAGE_KEY = 'aeon_ops_v3'

const cloneState = (state: DashboardState): DashboardState =>
  JSON.parse(JSON.stringify(state)) as DashboardState

const loadState = (): DashboardState => {
  if (typeof window === 'undefined') return cloneState(DEFAULT_STATE)

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? (JSON.parse(saved) as DashboardState) : cloneState(DEFAULT_STATE)
  } catch {
    return cloneState(DEFAULT_STATE)
  }
}

const saveState = (state: DashboardState) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

const uid = () =>
  'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5)

export function useDashboard() {
  const [state, setState] = useState<DashboardState>(() => cloneState(DEFAULT_STATE))

  useEffect(() => {
    setState(loadState())
  }, [])

  const mutate = useCallback((nextState: (current: DashboardState) => DashboardState) => {
    setState((current) => {
      const next = nextState(current)
      saveState(next)
      return next
    })
  }, [])

  const addCard = useCallback(
    (sectionId: string, card: Omit<CardItem, 'id'>) => {
      mutate((current) => ({
        ...current,
        sections: current.sections.map((section) =>
          section.id === sectionId
            ? { ...section, cards: [...section.cards, { ...card, id: uid() }] }
            : section,
        ),
      }))
    },
    [mutate],
  )

  const editCard = useCallback(
    (sectionId: string, cardId: string, patch: Partial<CardItem>) => {
      mutate((current) => ({
        ...current,
        sections: current.sections.map((section) =>
          section.id === sectionId
            ? {
                ...section,
                cards: section.cards.map((card) =>
                  card.id === cardId ? { ...card, ...patch, id: card.id } : card,
                ),
              }
            : section,
        ),
      }))
    },
    [mutate],
  )

  const removeCard = useCallback(
    (sectionId: string, cardId: string) => {
      mutate((current) => ({
        ...current,
        sections: current.sections.map((section) =>
          section.id === sectionId
            ? { ...section, cards: section.cards.filter((card) => card.id !== cardId) }
            : section,
        ),
      }))
    },
    [mutate],
  )

  const moveCard = useCallback(
    (args: { fromSection: string; toSection: string; fromIndex: number; toIndex: number }) => {
      mutate((current) => {
        const sections = current.sections.map((section) => ({
          ...section,
          cards: [...section.cards],
        }))
        const fromSection = sections.find((section) => section.id === args.fromSection)
        const toSection = sections.find((section) => section.id === args.toSection)

        if (!fromSection || !toSection || args.fromIndex < 0) return current

        const [card] = fromSection.cards.splice(args.fromIndex, 1)
        if (!card) return current

        const toIndex =
          args.fromSection === args.toSection && args.toIndex > args.fromIndex
            ? args.toIndex - 1
            : args.toIndex
        toSection.cards.splice(Math.max(0, toIndex), 0, card)

        return { ...current, sections }
      })
    },
    [mutate],
  )

  const addSection = useCallback(
    (label: string) => {
      mutate((current) => ({
        ...current,
        sections: [
          ...current.sections,
          { id: uid(), label, filter: 'custom', priority: false, cards: [] },
        ],
      }))
    },
    [mutate],
  )

  const renameSection = useCallback(
    (sectionId: string, label: string) => {
      mutate((current) => ({
        ...current,
        sections: current.sections.map((section) =>
          section.id === sectionId ? { ...section, label } : section,
        ),
      }))
    },
    [mutate],
  )

  const removeSection = useCallback(
    (sectionId: string) => {
      mutate((current) => ({
        ...current,
        sections: current.sections.filter((section) => section.id !== sectionId),
      }))
    },
    [mutate],
  )

  const moveSection = useCallback(
    (fromIndex: number, toIndex: number) => {
      mutate((current) => {
        const sections = [...current.sections]
        const [section] = sections.splice(fromIndex, 1)
        if (!section) return current
        sections.splice(Math.max(0, toIndex), 0, section)
        return { ...current, sections }
      })
    },
    [mutate],
  )

  const addPin = useCallback(
    (pin: Omit<PinItem, 'id'>) => {
      mutate((current) => ({ ...current, pinned: [...current.pinned, { ...pin, id: uid() }] }))
    },
    [mutate],
  )

  const editPin = useCallback(
    (pinId: string, patch: Partial<PinItem>) => {
      mutate((current) => ({
        ...current,
        pinned: current.pinned.map((pin) =>
          pin.id === pinId ? { ...pin, ...patch, id: pin.id } : pin,
        ),
      }))
    },
    [mutate],
  )

  const removePin = useCallback(
    (pinId: string) => {
      mutate((current) => ({ ...current, pinned: current.pinned.filter((pin) => pin.id !== pinId) }))
    },
    [mutate],
  )

  const resetToDefaults = useCallback(() => {
    const defaults = cloneState(DEFAULT_STATE)
    saveState(defaults)
    setState(defaults)
  }, [])

  return {
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
  }
}
