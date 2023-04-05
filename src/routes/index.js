import { createBrowserRouter } from 'react-router-dom'
import userRouter from './user.routes'
import adminRouter from './admin.routes'

const router = createBrowserRouter([
  {
    path: '/',
    children: [userRouter, adminRouter],
  },
])

export default router
