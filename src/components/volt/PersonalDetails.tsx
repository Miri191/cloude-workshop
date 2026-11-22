import { useState, type FormEvent, type ReactNode } from 'react'
import type { User } from '../../data/profile'
import { SectionHeader } from './SectionHeader'
import { TextField } from './TextField'
import { MailIcon, PencilIcon, PhoneIcon, UserIcon } from './icons'

type Details = Pick<User, 'name' | 'email' | 'phone'>
type Errors = Partial<Record<keyof Details, string>>

function validate(d: Details): Errors {
  const errors: Errors = {}
  if (!d.name.trim()) errors.name = 'Enter your full name.'
  if (!/^\S+@\S+\.\S+$/.test(d.email.trim())) errors.email = 'Enter an email like name@example.com.'
  if (d.phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a phone number with at least 7 digits.'
  return errors
}

function DetailRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-(--volt-surface) py-3 pr-4 pl-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-(--volt-raised)">{icon}</span>
      <div className="flex min-w-0 flex-col gap-px">
        <span className="text-[13px] text-(--volt-muted)">{label}</span>
        <span className="truncate text-[15px] font-semibold">{value}</span>
      </div>
    </div>
  )
}

type PersonalDetailsProps = {
  details: Details
  onSave: (details: Details) => void
}

export function PersonalDetails({ details, onSave }: PersonalDetailsProps) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(details)
  const [errors, setErrors] = useState<Errors>({})

  const startEditing = () => {
    setDraft(details)
    setErrors({})
    setEditing(true)
  }
  const update = (field: keyof Details) => (value: string) => setDraft((d) => ({ ...d, [field]: value }))
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate(draft)
    setErrors(next)
    if (Object.keys(next).length > 0) return
    onSave({ name: draft.name.trim(), email: draft.email.trim(), phone: draft.phone.trim() })
    setEditing(false)
  }

  return (
    <section className="flex flex-col gap-3.5">
      <SectionHeader
        title="Personal details"
        action={
          editing ? null : (
            <button
              type="button"
              onClick={startEditing}
              className="flex h-8 items-center gap-1.5 rounded-full bg-(--volt-surface) px-3.5 text-[13px] font-medium"
            >
              <PencilIcon size={14} strokeWidth={2} />
              Edit
            </button>
          )
        }
      />
      {editing ? (
        <form noValidate onSubmit={submit} className="flex flex-col gap-4 rounded-[28px] bg-(--volt-surface) p-4">
          <TextField label="Full name" value={draft.name} onChange={update('name')} autoComplete="name" error={errors.name} />
          <TextField label="Email" type="email" value={draft.email} onChange={update('email')} autoComplete="email" error={errors.email} />
          <TextField label="Phone" type="tel" value={draft.phone} onChange={update('phone')} autoComplete="tel" error={errors.phone} />
          <div className="flex gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="h-12 flex-1 rounded-full bg-(--volt-raised) text-[15px] font-medium"
            >
              Cancel
            </button>
            <button type="submit" className="h-12 flex-1 rounded-full bg-(--volt-panel) text-[15px] font-medium text-(--volt-panel-text)">
              Save changes
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-2">
          <DetailRow icon={<UserIcon />} label="Full name" value={details.name} />
          <DetailRow icon={<MailIcon />} label="Email" value={details.email} />
          <DetailRow icon={<PhoneIcon />} label="Phone" value={details.phone} />
        </div>
      )}
    </section>
  )
}
