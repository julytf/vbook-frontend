import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

import 'assets/css/all.min.css'
import 'assets/css/adminlte.min.css'
import Login from 'pages/admin/Login'
import Home from 'pages/admin/Home'

const AdminLayout = lazy(() => import('layouts/Admin'))

const router = {
  path: 'admin',
  element: <Suspense fallback={'Loading...'}><Outlet/></Suspense>,
  children: [
    {
      path: '',
      element: <AdminLayout></AdminLayout>,
      children: [
        {
          path: '',
          element: <Home/>,
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
