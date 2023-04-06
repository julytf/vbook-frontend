import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { AuthAdminContextProvider } from 'utils/AuthAdminContext'
import { CartContextProvider } from 'utils/CartContext'
import AuthAdminMiddleware from 'middlewares/AuthAdmin'

import 'assets/css/all.min.css'
import 'assets/css/adminlte.min.css'

const AdminLayout = lazy(() => import('layouts/Admin'))
const Login = lazy(() => import('pages/admin/Login'))
const Home = lazy(() => import('pages/admin/Home'))

const router = {
  path: 'admin',
  element: (
    <Suspense fallback={'Loading...'}>
      <AuthAdminContextProvider>
        <Outlet />
      </AuthAdminContextProvider>
    </Suspense>
  ),
  children: [
    {
      path: '',
      element: (
        <AuthAdminMiddleware>
          <AdminLayout></AdminLayout>
        </AuthAdminMiddleware>
      ),
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: 'login',
      // element: <p>tét</p>,
      element: <Login />,
    },
  ],
}
export default router
