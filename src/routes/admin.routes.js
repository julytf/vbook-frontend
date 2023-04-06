import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { AuthContextProvider } from 'utils/AuthContext'
import { CartContextProvider } from 'utils/CartContext'

const AdminLayout = lazy(() => import('layouts/Admin'))
const Login = lazy(() => import('pages/admin/Login'))
const Home = lazy(() => import('pages/admin/Home'))

const router = {
  path: 'admin',
  element: (
    <Suspense fallback={'Loading...'}>
      <AuthContextProvider>
        <CartContextProvider>
          <Outlet />
        </CartContextProvider>
      </AuthContextProvider>
    </Suspense>
  ),
  children: [
    {
      path: '',
      element: <AdminLayout></AdminLayout>,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ],
}
export default router
