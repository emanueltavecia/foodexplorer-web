import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeartIcon } from '../../assets/icons/heart-icon'
import { MinusIcon } from '../../assets/icons/minus-icon'
import { PlusIcon } from '../../assets/icons/plus-icon'
import Img from '../../assets/teste.png'
import { Button } from '../Button'
import { Container } from './styles'
import { format } from '../../utils/moneyFormatter'

export function Card({ product, ...props }) {
  const [quantity, setQuantity] = useState(0)

  const navigate = useNavigate()

  return (
    <Container {...props}>
      <HeartIcon />

      <img src={Img} alt="" />
      <h3 onClick={() => navigate(`/details/${product.id}`)}>
        {product.name} &gt;
      </h3>
      <p>{product.description}</p>
      <span>{format(product.price)}</span>

      <div>
        <div>
          <Button
            icon={MinusIcon}
            variant="link"
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity < 1}
          />

          <span>{quantity}</span>

          <Button
            icon={PlusIcon}
            variant="link"
            onClick={() => setQuantity((prev) => prev + 1)}
          />
        </div>

        <Button>incluir</Button>
      </div>
    </Container>
  )
}
