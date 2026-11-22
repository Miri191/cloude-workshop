export function Avatar({ name, src }: { name: string; src: string }) {
  return <img src={src} alt={name} className="size-11 shrink-0 rounded-full bg-(--volt-surface) object-cover" />
}
