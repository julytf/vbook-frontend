import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/Main"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Cart from "pages/Cart"
import BookDetail from "pages/BookDetail"
import Login from "pages/Login"
import Register from "pages/Register"
import Account from "pages/Account"
import AuthMiddleware from "middlewares/Auth"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // {
      //   path: "test",
      //   element: <h1>test</h1>,
      // },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        children: [
          { path: "", element: <Books /> },
          { path: ":bookId", element: <BookDetail /> },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "account",
        element: (
          <AuthMiddleware>
            <Account />
          </AuthMiddleware>
        ),
      },
      {
        path: "cart",
        element: (
          <AuthMiddleware>
            <Cart />
          </AuthMiddleware>
        ),
      },
    ],
  },
])

export default router
