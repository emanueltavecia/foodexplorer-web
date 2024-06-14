import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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

export function Header({ setSearch }) {
  const [menuIsOpen, setMenuIsOpen] = useState()

  const { user, signOut } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

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
            onChange={(e) => setSearch(e.target.value)}
            autoFocus={location.pathname === '/'}
            onFocus={() => location.pathname !== '/' && navigate('/')}
          />

          {user.role !== 'admin' && <OrdersButton />}

          {user.role === 'admin' && (
            <Button onClick={() => navigate('/new')}>Novo prato</Button>
          )}

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

            <nav>
              {user.role === 'admin' && (
                <Button variant="link" onClick={() => navigate('/new')}>
                  Novo prato
                </Button>
              )}

              <Button variant="link" onClick={handleSignOut}>
                Sair
              </Button>
            </nav>
          </div>
        </div>

        <Footer />
      </Menu>
    </>
  )
}
