import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        '/sessions',
        { email, password },
        { withCredentials: true }
      )

      const { user } = response.data

      localStorage.setItem('@food-explorer:user', JSON.stringify(user))

      setData({ user })
    } catch (error) {
      return error
    }
  }

  function signOut() {
    setData({})
    localStorage.removeItem('@food-explorer:user')
  }

  useEffect(() => {
    const user = localStorage.getItem('@food-explorer:user')

    if (user) {
      setData({ user: JSON.parse(user) })
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
