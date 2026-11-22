import type { ReactNode } from 'react'

type IconProps = { size?: number; strokeWidth?: number; className?: string }

function Svg({ size = 20, strokeWidth = 1.8, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}

export const BellIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Svg>
)
export const CameraIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </Svg>
)
export const PencilIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20h4L19 9l-4-4L4 16z" />
    <path d="M14 6l4 4" />
  </Svg>
)
export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </Svg>
)
export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
  </Svg>
)
export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </Svg>
)
export const StarIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z" />
  </Svg>
)
export const DollarIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v18M16 7.5c0-1.9-1.8-3-4-3s-4 1.1-4 3 1.8 2.6 4 3.2 4 1.3 4 3.3-1.8 3-4 3-4-1.1-4-3" />
  </Svg>
)
export const SunIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
)
export const MoonIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </Svg>
)
export const WalletIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <path d="M16 13h2" />
    <path d="M3 9h15V6" />
  </Svg>
)
export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 6l6 6-6 6" />
  </Svg>
)
export const ChevronLeftIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Svg>
)
export const PlusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
)
export const MoreIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="5" r="1.2" fill="currentColor" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <circle cx="12" cy="19" r="1.2" fill="currentColor" />
  </Svg>
)
export const FilterIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M7 12h10M10 17h4" />
  </Svg>
)
export const DepositIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v11M7 10l5 5 5-5" />
    <path d="M5 20h14" />
  </Svg>
)
export const ContactlessIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8.5 9a5 5 0 0 1 0 6M12 7a8 8 0 0 1 0 10M15.5 5a11 11 0 0 1 0 14" />
  </Svg>
)
export const ArrowInIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M17 7L7 17M15 17H7V9" />
  </Svg>
)
export const ArrowOutIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17L17 7M9 7h8v8" />
  </Svg>
)
export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 18h2" />
  </Svg>
)
export const LaptopIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="5" width="16" height="11" rx="2" />
    <path d="M2 19h20" />
  </Svg>
)
export const KeyIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M11 12l8-8M16 7l2 2" />
  </Svg>
)
export const HouseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 11l8-7 8 7v9H4z" />
    <path d="M10 20v-5h4v5" />
  </Svg>
)
export const BagIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </Svg>
)
export const CardIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M3 10h18" />
  </Svg>
)
export const ChartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 20V11M12 20V5M18 20v-6" />
  </Svg>
)
export const UserIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
  </Svg>
)
