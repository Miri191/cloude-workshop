import { formatUsd } from '../../lib/format'
import { ContactlessIcon, PlusIcon } from './icons'

type PaymentCardProps = {
  balance: number
  firstDigits: string
  lastDigits: string
  holder: string
  expiry: string
  /** `ink` is the primary card and the screen's one dark panel. */
  tone: 'ink' | 'surface'
}

export function PaymentCard({ balance, firstDigits, lastDigits, holder, expiry, tone }: PaymentCardProps) {
  const isInk = tone === 'ink'
  const muted = isInk ? 'text-(--volt-panel-muted)' : 'text-(--volt-muted)'

  return (
    <div
      className={`flex h-[196px] w-[270px] shrink-0 flex-col justify-between rounded-[26px] p-5 ${
        isInk ? 'bg-(--volt-panel) text-(--volt-panel-text)' : 'bg-(--volt-surface)'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className={`text-xs ${muted}`}>Total Balance</span>
          <span className="text-[28px] font-semibold tracking-[-0.6px]">{formatUsd(balance, 2)}</span>
        </div>
        <div aria-hidden="true" className="flex items-center gap-2">
          <ContactlessIcon size={20} className={muted} />
          <span className="flex">
            <span className="size-6 rounded-full bg-current opacity-25" />
            <span className="-ml-2.5 size-6 rounded-full bg-current opacity-60" />
          </span>
        </div>
      </div>
      <span className="text-base tracking-[2px]">
        {firstDigits} •••• •••• {lastDigits}
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col gap-0.5">
          <span className={`text-[11px] ${muted}`}>Name</span>
          <span className="text-[13px] font-semibold">{holder}</span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className={`text-[11px] ${muted}`}>Exp</span>
          <span className="text-[13px] font-semibold">{expiry}</span>
        </div>
      </div>
    </div>
  )
}

export function AddCardButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Add card"
      className="flex h-[196px] w-[52px] shrink-0 items-center justify-center rounded-[26px] border-[1.5px] border-dashed border-(--volt-text)"
    >
      <PlusIcon size={22} strokeWidth={2} />
    </button>
  )
}
