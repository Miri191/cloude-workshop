import type { ReactNode } from 'react'
import { formatUsd } from '../../lib/format'
import { useCountUp } from '../../lib/motion'
import { ArrowInIcon, ArrowOutIcon, ChevronRightIcon, WalletIcon } from './icons'

type BalancePanelProps = {
  balance: number
  income: number
  outcome: number
  /** Play the count-up / bar-fill intro. */
  intro?: boolean
  onWalletClick?: () => void
}

function FlowStat({ label, amount, icon, discClass, alignEnd = false }: {
  label: string
  amount: number
  icon: ReactNode
  discClass: string
  alignEnd?: boolean
}) {
  return (
    <div className={`flex items-center gap-2.5 ${alignEnd ? 'flex-row-reverse text-right' : ''}`}>
      <span className={`flex size-8 items-center justify-center rounded-full text-(--volt-ink) ${discClass}`}>{icon}</span>
      <div className="flex flex-col">
        <span className="text-xs text-(--volt-panel-muted)">{label}</span>
        <span className="text-[17px] font-semibold">{formatUsd(amount)}</span>
      </div>
    </div>
  )
}

export function BalancePanel({ balance, income, outcome, intro = false, onWalletClick }: BalancePanelProps) {
  const net = income - outcome
  const shownBalance = useCountUp(balance, { enabled: intro })
  const delay = (ms: number) => (intro ? { animationDelay: `${ms}ms` } : undefined)

  return (
    <section
      aria-label="Balance"
      className="flex flex-col items-center gap-6 rounded-[32px] bg-(--volt-panel) px-[18px] pt-7 pb-[18px] text-(--volt-panel-text)"
    >
      <div className="flex flex-col items-center gap-2.5">
        <span className="text-sm text-(--volt-panel-muted)">Total Balance</span>
        <span className="text-[50px] leading-none font-semibold tracking-[-2.2px] tabular-nums">
          <span aria-hidden="true">{formatUsd(shownBalance, 2)}</span>
          <span className="sr-only">{formatUsd(balance, 2)}</span>
        </span>
        <span
          className={`rounded-lg bg-(--volt) px-2.5 py-[5px] text-[13px] font-semibold text-(--volt-ink) ${intro ? 'volt-pop' : ''}`}
          style={delay(850)}
        >
          Net {net >= 0 ? '+' : '-'}
          {formatUsd(Math.abs(net))}
        </span>
      </div>

      <div className="flex w-full flex-col gap-3 px-1">
        <div className="flex items-center justify-between">
          <FlowStat label="Income" amount={income} icon={<ArrowInIcon size={15} strokeWidth={2.4} />} discClass="bg-(--volt)" />
          <FlowStat
            label="Outcome"
            amount={outcome}
            icon={<ArrowOutIcon size={15} strokeWidth={2.4} />}
            discClass="bg-(--volt-panel-text)"
            alignEnd
          />
        </div>
        <div
          role="img"
          aria-label={`Income ${formatUsd(income)} versus outcome ${formatUsd(outcome)}`}
          className="flex h-3 gap-1"
        >
          <div
            className={`rounded-md bg-(--volt) ${intro ? 'volt-grow' : ''}`}
            style={{ flex: `${income} 1 0`, ...delay(150) }}
          />
          <div
            className={`rounded-md bg-(--volt-panel-text) ${intro ? 'volt-grow' : ''}`}
            style={{ flex: `${outcome} 1 0`, ...delay(400) }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onWalletClick}
        className="volt-press flex h-[58px] w-full items-center gap-3 rounded-full bg-(--volt-panel-raised) pr-[18px] pl-[7px] text-left"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-(--volt-panel-text) text-(--volt-ink)">
          <WalletIcon />
        </span>
        <span className="flex-1 text-[15px] font-medium">My Wallet</span>
        <ChevronRightIcon size={18} strokeWidth={2} className="text-(--volt-panel-muted)" />
      </button>
    </section>
  )
}
