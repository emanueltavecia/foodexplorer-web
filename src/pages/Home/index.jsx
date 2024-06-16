import { useEffect, useState } from 'react'
import BannerImage from '../../assets/banner-image.png'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { api } from '../../services/api'
import { Container, Main } from './styles'

export function Home() {
  const [dishes, setDishes] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`)
      setDishes({
        meals: response.data.filter((dish) => dish.category === 'Refeição'),
        desserts: response.data.filter(
          (dish) => dish.category === 'Sobremesa'
        ),
        drinks: response.data.filter((dish) => dish.category === 'Bebida'),
      })
    }

    fetchDishes()
  }, [search])

  return (
    <>
      <Header setSearch={setSearch} />

      <Container>
        <Main>
          <div className="banner">
            <img src={BannerImage} alt="Banner da página inicial" />
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
