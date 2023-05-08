import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from 'utils/AuthContext'
import { CartContextProvider } from 'utils/GlobalContext'
import router from './routes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.success('Wow so easy!')
toast.error('Oh no!')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    <ToastContainer position='bottom-right' />
    {/* </React.StrictMode> */}
  </>
)
