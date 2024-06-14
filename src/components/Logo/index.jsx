import { LogoIcon } from '../../assets/LogoIcon'
import { useAuth } from '../../hooks/auth'
import { Container } from './styles'

export function Logo() {
  const { user } = useAuth()

  return (
    <Container>
      <LogoIcon />
      <p className="logo-text">food explorer</p>
      {user?.role === 'admin' && <span>admin</span>}
    </Container>
  )
}
