import { lazy, Suspense } from 'react'
import { AuthContextProvider } from 'utils/AuthContext'
import { CartContextProvider } from 'utils/CartContext'

const MainLayout = lazy(() => import('layouts/Main'))
const AuthMiddleware = lazy(() => import('middlewares/Auth'))
const Home = lazy(() => import('pages/Home'))
const Books = lazy(() => import('pages/Books'))
const Cart = lazy(() => import('pages/Cart'))
const BookDetail = lazy(() => import('pages/BookDetail'))
const Login = lazy(() => import('pages/Login'))
const Register = lazy(() => import('pages/Register'))
const Account = lazy(() => import('pages/Account'))
const Checkout = lazy(() => import('pages/Checkout'))

const router = {
  path: '',
  element: (
    <Suspense fallback={'Loading...'}>
      <AuthContextProvider>
        <CartContextProvider>
          <MainLayout />
        </CartContextProvider>
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
      path: 'account',
      element: (
        <AuthMiddleware>
          <Account />
        </AuthMiddleware>
      ),
    },
    {
      path: 'cart',
      element: (
        <AuthMiddleware>
          <Cart />
        </AuthMiddleware>
      ),
    },
    {
      path: 'checkout',
      element: (
        <AuthMiddleware>
          <Checkout />
        </AuthMiddleware>
      ),
    },
  ],
}
export default router
