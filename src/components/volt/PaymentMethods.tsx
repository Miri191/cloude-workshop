import type { PaymentCardData } from '../../data/cards'
import { SectionHeader } from './SectionHeader'
import { CardIcon, PlusIcon } from './icons'

type PaymentMethodsProps = {
  cards: PaymentCardData[]
  defaultCardId: string
  onSetDefault: (id: string) => void
}

export function PaymentMethods({ cards, defaultCardId, onSetDefault }: PaymentMethodsProps) {
  return (
    <section className="flex flex-col gap-3.5">
      <SectionHeader title="Payment cards" action={null} />
      <div className="flex flex-col gap-2">
        {cards.map((card) => {
          const isDefault = card.id === defaultCardId
          return (
            <div key={card.id} className="flex items-center gap-3 rounded-3xl bg-(--volt-surface) py-3 pr-3 pl-3">
              <span
                className={`flex size-[46px] shrink-0 items-center justify-center rounded-[15px] ${
                  isDefault ? 'bg-(--volt-panel) text-(--volt-panel-text)' : 'bg-(--volt-raised)'
                }`}
              >
                <CardIcon />
              </span>
              <div className="flex flex-1 flex-col gap-px">
                <span className="text-[15px] font-semibold">•••• {card.lastDigits}</span>
                <span className="text-[13px] text-(--volt-muted)">Expires {card.expiry}</span>
              </div>
              {isDefault ? (
                <span className="flex h-8 items-center rounded-full bg-(--volt-raised) px-3 text-[13px] font-medium">Default</span>
              ) : (
                <button
                  type="button"
                  onClick={() => onSetDefault(card.id)}
                  aria-label={`Make card ending ${card.lastDigits} the default`}
                  className="flex h-8 items-center rounded-full border border-(--volt-text) px-3 text-[13px] font-medium"
                >
                  Make default
                </button>
              )}
            </div>
          )
        })}
        <button
          type="button"
          className="flex h-14 items-center justify-center gap-2 rounded-3xl border-[1.5px] border-dashed border-(--volt-text) text-[15px] font-medium"
        >
          <PlusIcon size={18} strokeWidth={2} />
          Add card
        </button>
      </div>
    </section>
  )
}
