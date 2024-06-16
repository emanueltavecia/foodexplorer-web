export function formatToNumber(value) {
  let number = String(value).replace(/[^0-9.,]/g, '')

  number = number.replace(/,/g, '.')

  const parts = number.split('.')

  if (parts.length > 2) {
    number = parts.shift() + '.' + parts.join('')
  }

  return parseFloat(number)
}
