import type { ReactNode } from 'react'
import { formatSignedUsd } from '../../lib/format'

type TransactionRowProps = {
  icon: ReactNode
  name: string
  type: string
  /** Negative for money out, positive for money in. */
  amount: number
}

export function TransactionRow({ icon, name, type, amount }: TransactionRowProps) {
  const isIncome = amount > 0

  return (
    <div
      className={`flex h-[70px] items-center gap-3 rounded-3xl pr-5 pl-3 ${
        isIncome ? 'bg-(--volt) text-(--volt-ink)' : 'bg-(--volt-surface)'
      }`}
    >
      <span
        className={`flex size-[46px] shrink-0 items-center justify-center rounded-[15px] ${
          isIncome ? 'bg-(--volt-income-icon-bg) text-(--volt-income-icon-fg)' : 'bg-(--volt-raised)'
        }`}
      >
        {icon}
      </span>
      <div className="flex flex-1 flex-col gap-px">
        <span className="text-[15px] font-semibold">{name}</span>
        <span className={`text-[13px] ${isIncome ? 'text-(--volt-on-volt-muted)' : 'text-(--volt-muted)'}`}>{type}</span>
      </div>
      <span className="text-[17px] font-bold tracking-[-0.3px]">{formatSignedUsd(amount)}</span>
    </div>
  )
}
