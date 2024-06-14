import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackIcon } from '../../assets/icons/back-icon'
import { MinusIcon } from '../../assets/icons/minus-icon'
import { PlusIcon } from '../../assets/icons/plus-icon'
import { ReceiptIcon } from '../../assets/icons/receipt-icon'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { format } from '../../utils/moneyFormatter'
import { Container, Ingredient, Main } from './styles'

export function Details() {
  const [dish, setDish] = useState()
  const [quantity, setQuantity] = useState(0)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      setDish(response.data)
    }

    fetchDish()
  }, [])

  return (
    <>
      <Header />

      <Container>
        <div>
          <Main>
            <Button
              icon={BackIcon}
              variant="link"
              className="backButton"
              onClick={() => navigate('/')}
            >
              voltar
            </Button>

            <div className="content">
              <img
                src={`${api.defaults.baseURL}/files/${dish?.image}`}
                alt={`Imagem do prato ${dish?.name}`}
              />

              <div className="infos">
                <h2>{dish?.name}</h2>

                <p>{dish?.description}</p>

                <div className="ingredients">
                  {dish?.ingredients.map((ingredient) => (
                    <Ingredient>{ingredient?.name}</Ingredient>
                  ))}
                </div>

                <div>
                  <div className="controls">
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

                  <Button icon={ReceiptIcon} className="addButton">
                    <span className="mobile">pedir</span>
                    <span className="desktop">incluir</span> ∙{' '}
                    {format(dish?.price)}
                  </Button>
                </div>
              </div>
            </div>
          </Main>
        </div>

        <Footer />
      </Container>
    </>
  )
}
