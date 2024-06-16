import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

export function New() {
  const [dishImage, setDishImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Selecione')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (
      name &&
      description &&
      category &&
      formatToNumber(price) &&
      ingredients.length > 0 &&
      dishImage
    ) {
      const dish = new FormData()

      dish.append('name', name)
      dish.append('description', description)
      dish.append('category', category)
      dish.append('price', formatToNumber(price))
      dish.append('ingredients', JSON.stringify(ingredients))
      dish.append('image', dishImage)

      api
        .post('/dishes', dish)
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

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setDishImage(file)
  }

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

            <h1>
              <span className="mobile">Novo</span>
              <span className="desktop">Adicionar</span> prato
            </h1>

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

              <Button type="submit">Salvar</Button>
            </Form>
          </Main>
        </div>

        <Footer />
      </Container>
    </>
  )
}
