import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeartIcon } from '../../assets/icons/heart-icon'
import { MinusIcon } from '../../assets/icons/minus-icon'
import { EditIcon } from '../../assets/icons/edit-icon'
import { PlusIcon } from '../../assets/icons/plus-icon'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { format } from '../../utils/moneyFormatter'
import { Button } from '../Button'
import { Container } from './styles'

export function Card({ product, ...props }) {
  const [quantity, setQuantity] = useState(0)

  const { user } = useAuth()

  const navigate = useNavigate()

  return (
    <Container {...props}>
      {user.role === 'admin' ? <EditIcon onClick={() => navigate(`/edit/${product.id}`)} /> : <HeartIcon />}

      <img
        src={`${api.defaults.baseURL}/files/${product?.image}`}
        alt={`Imagem do prato ${product?.name}`}
      />
      <h3 onClick={() => navigate(`/details/${product.id}`)}>
        {product.name} &gt;
      </h3>
      <p>{product.description}</p>
      <span>{format(product.price)}</span>

      {user.role !== 'admin' && (
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
      )}
    </Container>
  )
}
