export function formatUsd(value: number, fractionDigits = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}

export function formatSignedUsd(value: number, fractionDigits = 2) {
  return `${value < 0 ? '-' : '+'}${formatUsd(Math.abs(value), fractionDigits)}`
}
