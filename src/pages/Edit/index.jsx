import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackIcon } from '../../assets/icons/back-icon'
import { UploadIcon } from '../../assets/icons/upload-icon'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { IngredientsInput } from '../../components/IngredientsInput'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { api } from '../../services/api'
import { formatToMoney } from '../../utils/moneyFormatter'
import { formatToNumber } from '../../utils/numberFormatter'
import { Container, Form, Main } from './styles'

export function Edit() {
  const [dishImage, setDishImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Selecione')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (
      name &&
      description &&
      category &&
      formatToNumber(price) &&
      ingredients.length > 0
    ) {
      const dish = new FormData()

      dish.append('name', name)
      dish.append('description', description)
      dish.append('category', category)
      dish.append('price', formatToNumber(price))
      dish.append('ingredients', JSON.stringify(ingredients))
      if (dishImage) dish.append('image', dishImage)

      api
        .patch(`/dishes/${params.id}`, dish)
        .then(() => {
          navigate('/')
        })
        .catch(() => {
          alert('Erro ao salvar prato')
        })
    } else {
      alert('Preencha todos os campos')
    }
  }

  function handleDelete() {
    const confirm = window.confirm('Deseja realmente excluir este prato?')

    if (confirm) {
      api
        .delete(`/dishes/${params.id}`)
        .then(() => {
          navigate('/')
        })
        .catch(() => {
          alert('Erro ao excluir prato')
        })
    }
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setDishImage(file)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      setName(response.data.name)
      setCategory(response.data.category)
      setIngredients(response.data.ingredients.map((item) => item.name))
      setPrice(response.data.price)
      setDescription(response.data.description)
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

            <h1>Editar prato</h1>

            <Form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="image">
                  <span>Imagem do prato</span>
                  <input type="file" id="image" onChange={handleChangeAvatar} />

                  <div className="upload">
                    <UploadIcon />
                    <span>
                      {dishImage ? dishImage?.name : 'Selecione imagem'}
                    </span>
                  </div>
                </Label>

                <Label htmlFor="name">
                  <span>Nome</span>
                  <Input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Ex.: Salada Ceasar"
                  />
                </Label>

                <Label htmlFor="category">
                  <span>Categoria</span>
                  <select
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option disabled>Selecione</option>
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </Label>
              </div>

              <div>
                <IngredientsInput
                  ingredients={ingredients}
                  setIngredients={setIngredients}
                />

                <Label htmlFor="price">
                  <span>Preço</span>
                  <Input
                    type="text"
                    id="price"
                    onChange={(e) => setPrice(formatToMoney(e.target.value))}
                    value={formatToMoney(price)}
                    placeholder="R$ 00,00"
                  />
                </Label>
              </div>

              <Label htmlFor="description">
                <span>Descrição</span>
                <textarea
                  id="description"
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </Label>

              <div className="controls">
                <Button type="button" onClick={handleDelete}>
                  Excluir prato
                </Button>
                <Button type="submit">Salvar alterações</Button>
              </div>
            </Form>
          </Main>
        </div>

        <Footer />
      </Container>
    </>
  )
}
