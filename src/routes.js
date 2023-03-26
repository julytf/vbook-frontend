import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import Books from "./pages/Books";

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
    ],
  },
]);

export default router
