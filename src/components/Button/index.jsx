import { Container } from './styles'

export function Button({ variant = 'default', icon: Icon, children, ...props }) {
  return (
    <Container $variant={variant} {...props}>
      {Icon && <Icon />}
      {children}
    </Container>
  )
}
