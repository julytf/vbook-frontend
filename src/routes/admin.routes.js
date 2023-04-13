import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { AuthAdminContextProvider } from 'utils/AuthAdminContext'
import { CartContextProvider } from 'utils/CartContext'
import AuthAdminMiddleware from 'middlewares/AuthAdmin'

const AdminLayout = lazy(() => import('layouts/Admin'))
const Login = lazy(() => import('pages/admin/Login'))
const Home = lazy(() => import('pages/admin/Home'))
const Books = lazy(() => import('pages/admin/Books'))
const BookDetails = lazy(() => import('pages/admin/Books/Details'))
const BookEdit = lazy(() => import('pages/admin/Books/Edit'))
const Users = lazy(() => import('pages/admin/Users'))
const UserDetail = lazy(() => import('pages/admin/Users/Details'))
const UserEdit = lazy(() => import('pages/admin/Users/Edit'))


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
        {
          path: 'books',
          children: [
            {
              path: '',
              element: <Books />,
            },
            {
              path: ':id',
              children: [
                {
                  path: '',
                  element: <BookDetails />,
                },
                {
                  path: 'edit',
                  element: <BookEdit />,
                },
              ],
            },
          ],
        },
        {
          path: 'users',
          children: [
            {
              path: '',
              element: <Users />,
            },
            {
              path: ':id',
              children: [
                {
                  path: '',
                  element: <UserDetail />,
                },
                {
                  path: 'edit',
                  element: <UserEdit />,
                },
              ],
            },
          ],
        },
        {
          path: 'authors',
          children: [
            {
              path: '',
              element: <Authors/>,
            },
            {
              path: ':id',
              children: [
                {
                  path: '',
                  element: <AuthorDetail />,
                },
                {
                  path: 'edit',
                  element: <AuthorEdit />,
                },
              ],
            },
          ],
        },
        {
          path: 'publishers',
          children: [
            {
              path: '',
              element: <Publishers/>,
            },
            {
              path: ':id',
              children: [
                {
                  path: '',
                  element: <PublisherDetail />,
                },
                {
                  path: 'edit',
                  element: <PublisherEdit />,
                },
              ],
            },
          ],
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
