import {lazy, Suspense} from 'react'
import { createBrowserRouter } from 'react-router-dom'

import 'assets/css/all.min.css'

const AdminLayout = lazy(() => import('layouts/Admin'))

const router = {
  path: 'admin',
  element: 
  <Suspense fallback={'Loading...'}>
      <AdminLayout></AdminLayout>
  </Suspense>,
  children: [
    // {
    //   path: "test",
    //   element: <h1>test</h1>,
    // },
    {
      path: '',
      element: <div>admin</div>,
    },
  ],
}
export default router
