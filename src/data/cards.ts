export type PaymentCardData = {
  id: string
  firstDigits: string
  lastDigits: string
  holder: string
  /** MM/YY */
  expiry: string
  balance: number
}

export const cards: PaymentCardData[] = [
  { id: 'primary', firstDigits: '1234', lastDigits: '3456', holder: 'Zarror Nibros', expiry: '09/28', balance: 10000 },
  { id: 'secondary', firstDigits: '5521', lastDigits: '7821', holder: 'Zarror Nibros', expiry: '04/27', balance: 15000.4 },
]
