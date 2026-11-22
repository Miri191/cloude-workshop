import type { ReactNode } from 'react'

type SectionHeaderProps = {
  title: string
  onSeeAll?: () => void
  /** Replaces the "See All" chip, e.g. with a filter button; pass `null` for no action. */
  action?: ReactNode
}

export function SectionHeader({ title, onSeeAll, action }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[22px] font-semibold tracking-[-0.5px]">{title}</h2>
      {action !== undefined ? action : (
        <button
          type="button"
          onClick={onSeeAll}
          className="volt-press flex h-8 items-center rounded-full bg-(--volt-surface) px-3.5 text-[13px] font-medium"
        >
          See All
        </button>
      )}
    </div>
  )
}
