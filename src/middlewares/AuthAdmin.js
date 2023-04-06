import { useContext } from 'react'
import { Navigate, redirect } from 'react-router-dom'
import AuthAdminContext from 'utils/AuthAdminContext'

function AdminAuth({ children }) {
  // TODO:
  const { isAdmin, isLoading } = useContext(AuthAdminContext)

  if (isLoading) return <p>Loading...</p>
  if (!isAdmin) return <Navigate to={'/admin/login'} />
  return <>{children}</>
}

export default AdminAuth
