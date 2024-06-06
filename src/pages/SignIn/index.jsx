import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Logo } from '../../components/Logo'
import { useAuth } from '../../hooks/auth'
import { Container, Form } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = useAuth()

  const navigate = useNavigate()

  function handleSignIn(e) {
    e.preventDefault()
    signIn({ email, password }).catch((error) => console.log(error))
  }

  return (
    <Container>
      <div>
        <Logo />
      </div>

      <Form>
        <h1>Faça login</h1>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={handleSignIn}>Entrar</Button>

        {error && <p>{error}</p>}

        <Button variant="link" onClick={() => navigate('/register')}>
          Criar uma conta
        </Button>
      </Form>
    </Container>
  )
}
