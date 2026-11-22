import { useId, type ReactNode } from 'react'
import { Toggle } from './Toggle'

type BaseProps = {
  icon: ReactNode
  label: string
  description?: string
}

function RowShell({ icon, label, description, labelId, children }: BaseProps & { labelId: string; children: ReactNode }) {
  return (
    <div className="flex min-h-16 items-center gap-3 rounded-3xl bg-(--volt-surface) py-3 pr-4 pl-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-(--volt-raised)">{icon}</span>
      <div className="flex flex-1 flex-col gap-px">
        <span id={labelId} className="text-[15px] font-semibold">
          {label}
        </span>
        {description && <span className="text-[13px] text-(--volt-muted)">{description}</span>}
      </div>
      {children}
    </div>
  )
}

export function ToggleRow({ checked, onChange, ...base }: BaseProps & { checked: boolean; onChange: (v: boolean) => void }) {
  const labelId = useId()
  return (
    <RowShell {...base} labelId={labelId}>
      <Toggle checked={checked} onChange={onChange} labelledBy={labelId} />
    </RowShell>
  )
}

/** A read-only setting, shown with its current value. */
export function ValueRow({ value, ...base }: BaseProps & { value: string }) {
  const labelId = useId()
  return (
    <RowShell {...base} labelId={labelId}>
      <span className="text-[15px] font-medium text-(--volt-muted)">{value}</span>
    </RowShell>
  )
}
