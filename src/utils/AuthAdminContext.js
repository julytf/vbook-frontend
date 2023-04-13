import axiosClient, { clearApiToken, setApiToken } from './axiosClient'

const { createContext, useState, useEffect, useLayoutEffect } = require('react')

const AuthAdminContext = createContext({})

export function AuthAdminContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)
  const [admin, setAdmin] = useState({})

  // console.log('admin', admin)

  useLayoutEffect(() => {
    ;(async () => {
      const token = localStorage.getItem('jwt-admin')
      if (token) {
        await getMe(token)
      }
      setIsLoading(false)
    })()
  }, [])

  async function getMe(token) {
    await axiosClient
      .get('/auth/me', {
        headers: {
          Authorization: token,
        },
      })
      .then((rs) => {
        setToken(token)
        setAdmin(rs.data.data.user)
        setApiToken(token)
        localStorage.setItem('jwt-admin', token)
      })
      .catch((err) => console.log(err))
  }

  // async function register() {}

  async function login(username, password) {
    await axiosClient
      .post('/auth/login', {
        username,
        password,
      })
      .then((rs) => {
        setAdmin(rs.data.data.user)
        setToken(rs.data.token)
        setApiToken(rs.data.token)
        localStorage.setItem('jwt-admin', rs.data.token)
      })
  }
  async function logout() {
    setAdmin({})
    setToken(null)
    setApiToken('')
    localStorage.removeItem('jwt-admin')}

  const contextValue = {
    token,
    admin,
    isLoggedIn: !!token,
    isAdmin: admin?.role === 'ADMIN',
    isLoading,
    // register,
    login,
    logout,
  }

  if (isLoading) return <p>Loading...</p>

  return <AuthAdminContext.Provider value={contextValue}>{children}</AuthAdminContext.Provider>
}

export default AuthAdminContext
