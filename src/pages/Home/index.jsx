import { useEffect, useState } from 'react'
import BannerImage from '../../assets/banner-image.png'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { api } from '../../services/api'
import { Container, Main } from './styles'

export function Home() {
  const [dishes, setDishes] = useState()

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishes')
      setDishes({
        meals: response.data.filter((dish) => dish.category === 'Refeições'),
        desserts: response.data.filter(
          (dish) => dish.category === 'Sobremesas'
        ),
        drinks: response.data.filter((dish) => dish.category === 'Bebidas'),
      })
    }

    fetchDishes()
  }, [])

  return (
    <>
      <Header />

      <Container>
        <Main>
          <div className="banner">
            <img src={BannerImage} alt="Imagem de ilustração" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>

          {dishes?.meals.length >= 1 && (
            <Section title="Refeições" dishes={dishes.meals} />
          )}

          {dishes?.desserts.length >= 1 && (
            <Section title="Sobremesas" dishes={dishes.desserts} />
          )}

          {dishes?.drinks.length >= 1 && (
            <Section title="Bebidas" dishes={dishes.drinks} />
          )}
        </Main>

        <Footer />
      </Container>
    </>
  )
}
