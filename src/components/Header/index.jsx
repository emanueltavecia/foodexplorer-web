import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CloseIcon } from '../../assets/icons/close-icon'
import { MenuIcon } from '../../assets/icons/menu-icon'
import { SearchIcon } from '../../assets/icons/search-icon'
import { SignOutIcon } from '../../assets/icons/signout-icon'
import { useAuth } from '../../hooks/auth'
import { Button } from '../Button'
import { Footer } from '../Footer'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { OrdersButton } from '../OrdersButton'
import { Container, Menu } from './styles'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState()

  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <>
      <Container>
        <div>
          <Button
            variant="link"
            className="menu-button"
            onClick={() => setMenuIsOpen((prev) => !prev)}
            icon={MenuIcon}
          />
          <Logo />
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={SearchIcon}
            className="search"
          />
          <OrdersButton />
          <Button
            className="sign-out"
            variant="link"
            icon={SignOutIcon}
            onClick={handleSignOut}
          />
        </div>
      </Container>
      <Menu data-menu-is-open={menuIsOpen}>
        <div>
          <div className="menu-header">
            <Button
              variant="link"
              className="menu-button"
              onClick={() => setMenuIsOpen((prev) => !prev)}
              icon={CloseIcon}
            />
            <span>Menu</span>
          </div>

          <div>
            <Input
              placeholder="Busque por pratos ou ingredientes"
              icon={SearchIcon}
              className="search"
            />

            <div>
              <Button variant="link" onClick={handleSignOut}>
                Sair
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </Menu>
    </>
  )
}
