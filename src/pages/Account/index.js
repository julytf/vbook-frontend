import { useContext } from 'react'
import AuthContext from 'utils/AuthContext'
import './style.css'

function Account() {
  const { user, logout } = useContext(AuthContext)

  function handleLogout() {
    logout()
  }
  return<>
    <p>{JSON.stringify(user)}</p>
    <button onClick={handleLogout}>Logout</button>
  </>
}

export default Account
