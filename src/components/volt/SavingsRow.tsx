import type { ReactNode } from 'react'
import { formatUsd } from '../../lib/format'

type SavingsRowProps = {
  icon: ReactNode
  name: string
  amount: number
  /** 0–1 */
  progress: number
  onClick?: () => void
}

export function SavingsRow({ icon, name, amount, progress, onClick }: SavingsRowProps) {
  const percent = Math.round(progress * 100)

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 rounded-3xl bg-(--volt-surface) py-3 pr-5 pl-3 text-left"
    >
      <span className="flex size-[46px] shrink-0 items-center justify-center rounded-[15px] bg-(--volt-raised)">{icon}</span>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <span className="text-[15px] font-semibold">{name}</span>
          <span className="text-[17px] font-bold tracking-[-0.3px]">{formatUsd(amount, 2)}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-(--volt-raised)">
            <div className="h-2 rounded-full bg-(--volt-progress)" style={{ width: `${percent}%` }} />
          </div>
          <span className="w-8 text-right text-xs font-semibold">{percent}%</span>
        </div>
      </div>
    </button>
  )
}
