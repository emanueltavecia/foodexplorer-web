import { useState } from 'react'
import { ReceiptIcon } from '../../assets/icons/receipt-icon'
import { Container } from './styles'

export function OrdersButton() {
  const [orderQuantity, setOrderQuantity] = useState(0)

  return (
    <Container className="orders">
      <ReceiptIcon />
      <p>
        <span>Pedidos (</span>
        <span className="quantity">{orderQuantity}</span>
        <span>)</span>
      </p>
    </Container>
  )
}
