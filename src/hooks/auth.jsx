import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })

      const { user, token } = response.data
      setData({ user, token })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      localStorage.setItem('@food-explorer:user', JSON.stringify(user))
      localStorage.setItem('@food-explorer:token', token)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
        console.error(error)
      }
    }
  }

  function signOut() {
    setData({})
    localStorage.removeItem('@food-explorer:user')
    localStorage.removeItem('@food-explorer:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@food-explorer:token')
    const user = localStorage.getItem('@food-explorer:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user: JSON.parse(user), token })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
