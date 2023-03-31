import axiosClient, { clearApiToken, setApiToken } from "./axiosClient"

const { createContext, useState, useEffect, useLayoutEffect } = require("react")

const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})

  console.log("user", user)

  useLayoutEffect(() => {
    ;(async () => {
      const token = localStorage.getItem("jwt")
      if (token) {
        await getMe(token)
      }
        setIsLoading(false)
    })()
  }, [])

  async function getMe(token) {
    await axiosClient
      .get("/auth/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((rs) => {
        setToken(token)
        setUser(rs.data.data.user)
        setApiToken(token)
        localStorage.setItem("jwt", token)
      })
      .catch((err) => console.log(err))
  }

  async function register() {}
  async function login(username, password) {
    await axiosClient
      .post("/auth/login", {
        username,
        password,
      })
      .then((rs) => {
        setUser(rs.data.data.user)
        setToken(rs.data.token)
        setApiToken(rs.data.token)
        localStorage.setItem("jwt", rs.data.token)
      })
  }
  async function logout() {}

  const contextValue = {
    token,
    user,
    isLoggedIn: !!token,
    isLoading,
    register,
    login,
    logout,
  }

  if (isLoading) return <p>Loading...</p>

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContext
