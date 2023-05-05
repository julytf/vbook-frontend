import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { AuthAdminContextProvider } from 'utils/AuthAdminContext'
import { CartContextProvider } from 'utils/GlobalContext'
import AuthAdminMiddleware from 'middlewares/AuthAdmin'
import BookCreate from 'pages/admin/Books/Create'
import UserCreate from 'pages/admin/Users/Create'
import AuthorCreate from 'pages/admin/Authors/Create'
import Orders from 'pages/admin/Orders'
import OrderDetail from 'pages/admin/Orders/Detail'
import OrderEdit from 'pages/admin/Orders/Edit'

const AdminLayout = lazy(() => import('layouts/Admin'))

const Login = lazy(() => import('pages/admin/Login'))

const Home = lazy(() => import('pages/admin/Home'))

const Books = lazy(() => import('pages/admin/Books'))
const BookDetail = lazy(() => import('pages/admin/Books/Detail'))
const BookEdit = lazy(() => import('pages/admin/Books/Edit'))

const Users = lazy(() => import('pages/admin/Users'))
const UserDetail = lazy(() => import('pages/admin/Users/Detail'))
const UserEdit = lazy(() => import('pages/admin/Users/Edit'))

const Authors = lazy(() => import('pages/admin/Authors'))
const AuthorDetail = lazy(() => import('pages/admin/Authors/Detail'))
const AuthorEdit = lazy(() => import('pages/admin/Authors/Edit'))

const Publishers = lazy(() => import('pages/admin/Publishers'))
const PublisherDetail = lazy(() => import('pages/admin/Publishers/Detail'))
const PublisherEdit = lazy(() => import('pages/admin/Publishers/Edit'))

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
              path: 'create',
              element: <BookCreate />,
            },
            {
              path: ':id',
              children: [
                {
                  path: '',
                  element: <BookDetail />,
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
              path: 'create',
              element: <UserCreate />,
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
              path: 'create',
              element: <AuthorCreate/>,
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
        {
          path: 'orders',
          children: [
            {
              path: '',
              element: <Orders/>,
            },
            {
              path: ':id',
              children: [
                {
                  path: '',
                  element: <OrderDetail />,
                },
                {
                  path: 'edit',
                  element: <OrderEdit />,
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
