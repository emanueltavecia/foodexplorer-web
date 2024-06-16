export function formatToMoney(value) {
  const numberString = String(value).replace(/[^0-9.,]/g, '')

  const normalizedNumber = numberString
    .replace(/[^\d,\.]/g, '')
    .replace(/,/g, '.')
    .replace(/\.(?=.*\.)/g, '')

  const endsWithComma = /\.$/.test(normalizedNumber)
  const hasOneDecimalDigit = /\.\d$/.test(normalizedNumber)

  let number = parseFloat(normalizedNumber)
  number = isNaN(number) ? 0 : number

  let formattedNumber = number.toString()
  if (!endsWithComma && !hasOneDecimalDigit) {
    formattedNumber =
      number % 1 !== 0 ? number.toFixed(2).replace('.', ',') : formattedNumber
  } else if (hasOneDecimalDigit) {
    formattedNumber = number.toFixed(1).replace('.', ',')
  } else {
    formattedNumber += ','
  }

  return `R$ ${formattedNumber}`
}

export const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
