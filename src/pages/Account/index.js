import { useContext } from "react"
import AuthContext from "utils/AuthContext"
import "./style.css"

function Account() {
  const { user } = useContext(AuthContext)
  return <p>{JSON.stringify(user)}</p>
}

export default Account
