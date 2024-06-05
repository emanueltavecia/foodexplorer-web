import { Container } from './styles'

export function Button({ variant = 'default', ...props }) {
  return <Container $variant={variant} {...props}></Container>
}
