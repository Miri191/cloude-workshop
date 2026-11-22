import { useId } from 'react'

type TextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  error?: string
}

export function TextField({ label, value, onChange, type = 'text', autoComplete, error }: TextFieldProps) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] text-(--volt-muted)">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="h-12 rounded-2xl bg-(--volt-raised) px-4 text-[15px] font-medium text-(--volt-text) outline-none focus-visible:ring-2 focus-visible:ring-(--volt-text) aria-invalid:ring-2 aria-invalid:ring-(--volt-error)"
      />
      {error && (
        <span id={errorId} className="text-[13px] font-medium text-(--volt-error)">
          {error}
        </span>
      )}
    </div>
  )
}
