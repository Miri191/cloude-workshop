import { StarIcon } from './icons'

type PointsPanelProps = {
  points: number
  tier: string
  nextTier: string
  nextTierAt: number
}

/** Profile's one dark panel. Points aren't money, so nothing here is volt. */
export function PointsPanel({ points, tier, nextTier, nextTierAt }: PointsPanelProps) {
  const progress = Math.min(points / nextTierAt, 1)
  const remaining = Math.max(nextTierAt - points, 0)

  return (
    <section
      aria-label="Club points"
      className="flex flex-col gap-5 rounded-[32px] bg-(--volt-panel) p-5 text-(--volt-panel-text)"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-(--volt-panel-muted)">Club points</span>
          <span className="text-[44px] leading-none font-semibold tracking-[-1.5px]">
            {points.toLocaleString('en-US')}
            <span className="ml-1.5 text-lg font-medium tracking-normal text-(--volt-panel-muted)">pts</span>
          </span>
        </div>
        <span className="flex h-8 items-center gap-1.5 rounded-full bg-(--volt-panel-raised) px-3 text-[13px] font-medium">
          <StarIcon size={14} strokeWidth={2} />
          {tier} member
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div
          role="progressbar"
          aria-label={`Progress to ${nextTier}`}
          aria-valuemin={0}
          aria-valuemax={nextTierAt}
          aria-valuenow={points}
          className="h-2 rounded-full bg-(--volt-panel-raised)"
        >
          <div className="h-2 rounded-full bg-(--volt-panel-text)" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="text-[13px] text-(--volt-panel-muted)">
          {remaining > 0 ? `${remaining.toLocaleString('en-US')} points to ${nextTier}` : `You've reached ${nextTier}`}
        </span>
      </div>
    </section>
  )
}
