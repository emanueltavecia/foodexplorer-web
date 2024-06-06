import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Logo } from '../../components/Logo'
import { Container, Form } from './styles'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()

    if (!name || !email || !password) {
      return setError('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Cadastro realizado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.message)
        } else {
          setError('Não foi possível cadastrar.')
        }
      })
  }

  return (
    <Container>
      <div>
        <Logo />
      </div>

      <Form>
        <h1>Crie sua conta</h1>

        <div>
          <Label htmlFor="name">Seu nome</Label>
          <Input
            id="name"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        {error && <p>{error}</p>}

        <Button onClick={handleSignUp}>Criar conta</Button>

        <Button variant="link" onClick={() => navigate('/')}>
          Já tenho uma conta
        </Button>
      </Form>
    </Container>
  )
}
