import { createBrowserRouter } from 'react-router-dom'

const router = {
  path: 'admin',
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
