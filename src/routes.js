import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router
