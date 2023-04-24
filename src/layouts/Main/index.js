import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'assets/css/bootstrap.min.css'
// import "assets/css/animate.min.css"
// import "assets/css/fontawesome-all.min.css"
// import "assets/css/themify-icons.css"
// import "assets/css/slick.css"
// import "assets/css/nice-select.css"
import 'assets/css/style.css'
import 'assets/css/style2.css'

import './style.css'

function Main() {
  return (
    <>
      <div id='preloader-active' style={{ display: 'none' }}>
        <div className='preloader d-flex align-items-center justify-content-center'>
          <div className='preloader-inner position-relative'>
            <div className='preloader-circle' />
            <div className='preloader-img pere-text'>
              <img src='assets/img/logo/logo.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Main
