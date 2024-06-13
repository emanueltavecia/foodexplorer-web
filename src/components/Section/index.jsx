import { Card } from '../Card'
import { Container } from './styles'

export function Section({ dishes, title, ...props }) {
  return (
    <Container {...props}>
      <h2>{title}</h2>

      {dishes.map((dish) => (
        <Card key={dish.id} product={dish} />
      ))}
    </Container>
  )
}
