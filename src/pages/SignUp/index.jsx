import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Logo } from '../../components/Logo'
import { Container, Form } from './styles'

export function SignUp() {
  const navigate = useNavigate()

  return (
    <Container>
      <div>
        <Logo />
      </div>

      <Form>
        <h1>Crie sua conta</h1>

        <div>
          <Label htmlFor="name">Seu nome</Label>
          <Input id="name" placeholder="Exemplo: Maria da Silva" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" placeholder="No mínimo 6 caracteres" />
        </div>

        <Button>Criar conta</Button>

        <Button variant="link" onClick={() => navigate('/')}>
          Já tenho uma conta
        </Button>
      </Form>
    </Container>
  )
}
