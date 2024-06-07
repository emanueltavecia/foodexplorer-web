import { Container } from './styles'

export function Section({ children, title, ...props }) {
  return (
    <Container {...props}>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}
