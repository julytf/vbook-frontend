import { Navigate, redirect } from "react-router-dom"

function Auth({ children }) {
  // TODO:
  const auth = true
  if (!auth) return <Navigate to={"/login"} />
  return { children }
}

export default Auth
