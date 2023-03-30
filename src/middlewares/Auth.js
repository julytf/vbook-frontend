import { useContext } from "react"
import { Navigate, redirect } from "react-router-dom"
import AuthContext from "utils/AuthContext"

function Auth({ children }) {
  // TODO:
  const { isLoggedIn, isLoading } = useContext(AuthContext)

  // if (isLoading) return <p>Loading...</p>
  if (!isLoggedIn) return <Navigate to={"/login"} />
  return <>{children}</>
}

export default Auth
