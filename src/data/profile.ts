import profilePic from '../assets/profile-pic-1.png'

export type User = {
  name: string
  email: string
  phone: string
  avatarUrl: string
}

export const initialUser: User = {
  name: 'C Muthu Krishnan',
  email: 'muthu.krishnan@example.com',
  phone: '+1 555 014 2398',
  avatarUrl: profilePic,
}

export type Preferences = {
  faceId: boolean
  transactionAlerts: boolean
  savingsReminders: boolean
  clubOffers: boolean
}

export const initialPreferences: Preferences = {
  faceId: true,
  transactionAlerts: true,
  savingsReminders: true,
  clubOffers: false,
}

export const clubMembership = {
  points: 2450,
  tier: 'Gold',
  nextTier: 'Platinum',
  nextTierAt: 3000,
}
