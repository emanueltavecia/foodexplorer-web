import { LogoIcon } from '../../assets/LogoIcon'
import { Container } from './styles'

export function Logo() {
  return (
    <Container>
      <LogoIcon />
      <p className="logo-text">food explorer</p>
    </Container>
  )
}
