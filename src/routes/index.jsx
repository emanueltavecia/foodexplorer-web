import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  const { user } = useAuth()

  function AccessRoute() {
    switch (user.role) {
      case 'admin':
        return <AdminRoutes />
      case 'customer':
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  )
}
