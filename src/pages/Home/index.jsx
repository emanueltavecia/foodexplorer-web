import BannerImage from '../../assets/banner-image.png'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <Header />

      <Container>
        <div>
          <img src={BannerImage} alt="Imagem de ilustração" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
