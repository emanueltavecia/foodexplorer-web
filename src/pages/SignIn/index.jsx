import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Logo } from '../../components/Logo'
import { Container, Form } from './styles'

export function SignIn() {
  const navigate = useNavigate()

  return (
    <Container>
      <div>
        <Logo />
      </div>

      <Form>
        <h1>Faça login</h1>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" placeholder="No mínimo 6 caracteres" />
        </div>

        <Button>Entrar</Button>

        <Button variant="link" onClick={() => navigate('/register')}>
          Criar uma conta
        </Button>
      </Form>
    </Container>
  )
}
