import type { ReactNode } from 'react'
import { formatUsd } from '../../lib/format'
import { ChevronRightIcon } from './icons'

type GoalCardProps = {
  name: string
  icon: ReactNode
  /** 0–1 */
  progress: number
  saved: number
  target: number
  remaining: string
  /** The goal closest to its deadline gets the screen's one dark panel. */
  featured?: boolean
  onDetailClick?: () => void
}

export function GoalCard({ name, icon, progress, saved, target, remaining, featured = false, onDetailClick }: GoalCardProps) {
  const percent = Math.round(progress * 100)
  const muted = featured ? 'text-(--volt-panel-muted)' : 'text-(--volt-muted)'
  const raised = featured ? 'bg-(--volt-panel-raised)' : 'bg-(--volt-raised)'

  return (
    <article
      className={`flex flex-col gap-4 rounded-[28px] p-5 ${
        featured ? 'bg-(--volt-panel) text-(--volt-panel-text)' : 'bg-(--volt-surface)'
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-semibold">{name}</h2>
        <span className={`flex size-10 items-center justify-center rounded-[13px] ${raised}`}>{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-[44px] leading-none font-semibold tracking-[-1.5px]">{percent}%</span>
        <span className="pb-1">
          <span className="text-lg font-semibold">{formatUsd(saved)}</span>{' '}
          <span className={`text-xs ${muted}`}>of {formatUsd(target)}</span>
        </span>
      </div>
      <div className={`h-2 rounded-full ${raised}`}>
        <div
          className={`h-2 rounded-full ${featured ? 'bg-(--volt-panel-text)' : 'bg-(--volt-progress)'}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-[13px] ${muted}`}>{remaining}</span>
        <button
          type="button"
          onClick={onDetailClick}
          className={`flex h-8 items-center gap-1 rounded-full pr-2.5 pl-3.5 text-[13px] font-medium ${raised}`}
        >
          See detail
          <ChevronRightIcon size={14} strokeWidth={2.2} />
        </button>
      </div>
    </article>
  )
}
