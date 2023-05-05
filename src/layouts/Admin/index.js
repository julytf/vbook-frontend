import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'assets/css/all.min.css'
import 'assets/css/adminlte.min.css'

import './style.css'

function Admin() {
  return (
    <div className='wrapper d-flex flex-column'>
      {/* <Header /> */}
      <Sidebar />
      <div className='content-wrapper'>
        <Outlet />
      </div>
      <Footer />
      <div id='sidebar-overlay' />
    </div>
  )
}

export default Admin
