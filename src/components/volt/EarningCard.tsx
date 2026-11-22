import { formatUsd } from '../../lib/format'
import { ArrowInIcon } from './icons'

type EarningCardProps = {
  initial: string
  name: string
  amount: number
}

export function EarningCard({ initial, name, amount }: EarningCardProps) {
  return (
    <div className="flex h-[176px] w-[152px] shrink-0 flex-col justify-between rounded-[28px] bg-(--volt) px-4 pt-3.5 pb-4 text-(--volt-ink)">
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full bg-(--volt-ink) text-base font-bold text-(--volt)">
          {initial}
        </span>
        <ArrowInIcon size={18} strokeWidth={2.2} />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] text-(--volt-on-volt-muted)">{name}</span>
        <span className="text-[26px] font-bold tracking-[-0.8px]">{formatUsd(amount)}</span>
      </div>
    </div>
  )
}
