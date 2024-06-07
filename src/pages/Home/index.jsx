import BannerImage from '../../assets/banner-image.png'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Main } from './styles'

export function Home() {
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

          <Section title="Refeições">
            <Card
              product={{
                id: 1,
                name: 'Spaguetti Gambe',
                description: 'Massa fresca com camarões e pesto.',
                price: 79.97,
              }}
            />
          </Section>

          <Section title="Refeições">
            <Card
              product={{
                id: 1,
                name: 'Spaguetti Gambe',
                description: 'Massa fresca com camarões e pesto.',
                price: 79.97,
              }}
            />
          </Section>

          <Section title="Refeições">
            <Card
              product={{
                id: 1,
                name: 'Spaguetti Gambe',
                description: 'Massa fresca com camarões e pesto.',
                price: 79.97,
              }}
            />
          </Section>
        </Main>

        <Footer />
      </Container>
    </>
  )
}
