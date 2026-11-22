import { CameraIcon } from './icons'

type ProfileHeroProps = {
  name: string
  email: string
  avatarUrl: string
  onPhotoSelected: (file: File) => void
}

export function ProfileHero({ name, email, avatarUrl, onPhotoSelected }: ProfileHeroProps) {
  return (
    <section aria-label="Profile" className="flex flex-col items-center gap-3 text-center">
      <div className="relative">
        <img src={avatarUrl} alt={name} className="size-24 rounded-full bg-(--volt-surface) object-cover" />
        <label className="absolute -right-1 -bottom-1 flex size-10 cursor-pointer items-center justify-center rounded-full border-4 border-(--volt-page) bg-(--volt-panel) text-(--volt-panel-text) focus-within:ring-2 focus-within:ring-(--volt-text)">
          <CameraIcon size={16} strokeWidth={2} />
          <span className="sr-only">Change profile photo</span>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file?.type.startsWith('image/')) onPhotoSelected(file)
              e.target.value = ''
            }}
          />
        </label>
      </div>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-[22px] font-semibold tracking-[-0.5px]">{name}</h1>
        <p className="text-sm text-(--volt-muted)">{email}</p>
      </div>
    </section>
  )
}
