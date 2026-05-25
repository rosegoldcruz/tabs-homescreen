'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CardItem, PinItem } from '@/types/dashboard'

type ModalMode = 'add-card' | 'edit-card' | 'add-pin' | 'edit-pin' | 'rename-sec'

interface SiteModalProps {
  mode: ModalMode
  initial?: Partial<CardItem & PinItem & { label: string }>
  sectionId?: string
  onSave: (data: { label: string; url?: string; color?: string; icon?: string }) => void
  onClose: () => void
}

const ICONS = '◈ ◆ ◎ ◉ ◇ ⬡ ⊞ ⊠ ◻ ▣ △ ⋈ ⌥ ✦ ✕ ⟳ ⚡ λ ☁ ✉ ☎ ▶ ♪ ◷ ⌂ ✈ ⬛ ◐ ⊕ ⋆'.split(' ')

export default function SiteModal({ mode, initial, onSave, onClose }: SiteModalProps) {
  const [label, setLabel] = useState(initial?.label ?? '')
  const [url, setUrl] = useState(initial?.url ?? '')
  const [color, setColor] = useState(initial?.color ?? '#f97316')
  const [icon, setIcon] = useState(initial?.icon ?? '◈')
  const labelRef = useRef<HTMLInputElement>(null)

  const showUrl = mode !== 'rename-sec'
  const showIcon = mode === 'add-card' || mode === 'edit-card'
  const title = useMemo(
    () =>
      ({
        'add-card': 'Add Site',
        'edit-card': 'Edit Site',
        'add-pin': 'Add Pin',
        'edit-pin': 'Edit Pin',
        'rename-sec': 'Rename Section',
      })[mode],
    [mode],
  )

  useEffect(() => {
    labelRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const save = () => {
    if (!label.trim()) return
    onSave({
      label: label.trim(),
      url: showUrl ? url.trim() : undefined,
      color: showUrl ? color : undefined,
      icon: showIcon ? icon : undefined,
    })
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-title">{title}</div>
        <div className="modal-field">
          <label className="m-label" htmlFor="site-label">
            Label
          </label>
          <input
            ref={labelRef}
            id="site-label"
            className="m-input"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') save()
            }}
          />
        </div>

        {showUrl && (
          <>
            <div className="modal-field">
              <label className="m-label" htmlFor="site-url">
                URL
              </label>
              <input
                id="site-url"
                className="m-input"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
            <div className="modal-field">
              <label className="m-label" htmlFor="site-color">
                Color
              </label>
              <input
                id="site-color"
                className="m-input"
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
          </>
        )}

        {showIcon && (
          <div className="modal-field">
            <span className="m-label">Icon</span>
            <div className="icon-grid">
              {ICONS.map((item) => (
                <button
                  key={item}
                  className={`icon-opt${icon === item ? ' sel' : ''}`}
                  type="button"
                  onClick={() => setIcon(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button className="btn-cancel" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-save" type="button" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}
