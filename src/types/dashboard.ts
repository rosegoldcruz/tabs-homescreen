export type Badge = 'live' | 'wip' | 'fav'

export interface CardItem {
  id: string
  label: string
  url: string
  color: string
  icon: string
  badge?: Badge
}

export interface DashboardSection {
  id: string
  label: string
  filter: string
  priority: boolean
  cards: CardItem[]
}

export interface PinItem {
  id: string
  label: string
  url: string
  color: string
}

export interface DashboardState {
  pinned: PinItem[]
  sections: DashboardSection[]
}
