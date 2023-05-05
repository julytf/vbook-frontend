
import { lazy, Suspense } from 'react'
import { AuthContextProvider } from 'utils/AuthContext'
import { GlobalContextProvider } from 'utils/GlobalContext'

import ChangePassword from 'pages/ChangePassword'
import OrderDetail from 'pages/Orders/Detail'
import Orders from 'pages/Orders'
import Saves from 'pages/Saves'
const MainLayout = lazy(() => import('layouts/Main'))
const AuthMiddleware = lazy(() => import('middlewares/Auth'))
const Home = lazy(() => import('pages/Home'))
const Books = lazy(() => import('pages/Books'))
const Cart = lazy(() => import('pages/Cart'))
const BookDetail = lazy(() => import('pages/Books/Detail'))
const Login = lazy(() => import('pages/Login'))
const Register = lazy(() => import('pages/Register'))
const Account = lazy(() => import('pages/Account'))
const Checkout = lazy(() => import('pages/Checkout'))

function FallbackLoading() {
  return <p>Loading...</p>
}

const router = {
  path: '',
  element: (
    <Suspense fallback={<FallbackLoading />}>
      <AuthContextProvider>
        <GlobalContextProvider>
          <MainLayout />
        </GlobalContextProvider>
      </AuthContextProvider>
    </Suspense>
  ),
  children: [
    // {
    //   path: "test",
    //   element: <h1>test</h1>,
    // },
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'books',
      children: [
        { path: '', element: <Books /> },
        { path: ':bookId', element: <BookDetail /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '',
      element: <AuthMiddleware />,
      children: [
        {
          path: 'account',
          element: <Account />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />,
        },
        {
          path: 'saves',
          element: <Saves />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'orders',
          element: <Orders />,
        },
        {
          path: 'orders/:orderId',
          element: <OrderDetail />,
        },
      ],
    },
  ],
}
export default router
