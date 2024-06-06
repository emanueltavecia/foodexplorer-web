import { Container } from './styles'

export function Input({ icon: Icon, className, ...props }) {
  return (
    <Container className={className}>
      {Icon && <Icon size={20} />}
      <input {...props} />
    </Container>
  )
}
