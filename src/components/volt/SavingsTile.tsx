import type { ReactNode } from 'react'
import { formatUsd } from '../../lib/format'

type SavingsTileProps = {
  icon: ReactNode
  name: string
  amount: number
  /** 0–1 */
  progress: number
  onClick?: () => void
}

export function SavingsTile({ icon, name, amount, progress, onClick }: SavingsTileProps) {
  const percent = Math.round(progress * 100)

  return (
    <button
      type="button"
      onClick={onClick}
      className="volt-press flex flex-col gap-3.5 rounded-[26px] bg-(--volt-surface) p-3.5 text-left"
    >
      <div className="flex w-full items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-[13px] bg-(--volt-raised)">{icon}</span>
        <span className="text-[13px] font-semibold">{percent}%</span>
      </div>
      <div className="flex flex-col gap-px">
        <span className="text-[13px] text-(--volt-muted)">{name}</span>
        <span className="text-[21px] font-semibold tracking-[-0.5px]">{formatUsd(amount)}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-(--volt-raised)">
        <div className="h-2 rounded-full bg-(--volt-progress)" style={{ width: `${percent}%` }} />
      </div>
    </button>
  )
}
