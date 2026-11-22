type ToggleProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  labelledBy: string
}

/** On/off switch. "On" uses ink, never volt: a setting isn't money coming in. */
export function Toggle({ checked, onChange, labelledBy }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors motion-reduce:transition-none ${
        checked ? 'bg-(--volt-progress)' : 'bg-(--volt-raised)'
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 size-5 rounded-full transition-transform motion-reduce:transition-none ${
          checked ? 'translate-x-5 bg-(--volt-page)' : 'bg-(--volt-muted)'
        }`}
      />
    </button>
  )
}
