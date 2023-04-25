import { Link } from 'react-router-dom'

import logo from 'assets/img/logo.png'
import { useContext, useState } from 'react'
import GlobalContext from 'utils/GlobalContext'
import AuthContext from 'utils/AuthContext'

function Header() {
  const { isLoggedIn } = useContext(AuthContext)

  let { totalQuantity } = useContext(GlobalContext).cart
  let { saves } = useContext(GlobalContext).saves
const quantity = saves.length
  console.log(totalQuantity)
  if (totalQuantity > 99) totalQuantity = '99+'

  function handleSearch() {
    // TODO:
  }

  return (
    <header>
      <div className='header-area'>
        <div className='main-header'>
          <div className='header-bottom header-sticky'>
            <div className='container-fluid'>
              <div className='row align-items-center'>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-3'>
                  <div className='logo'>
                    <Link to={'/'}>
                      <img className='w-100' src={logo} alt='' />
                    </Link>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-8 col-md-7 col-sm-5'>
                  <div className='main-menu f-right d-none d-lg-block'>
                    <nav>
                      <ul id='navigation'>
                        <li>
                          <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                          <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                          <Link to={'/register'}>Register</Link>
                        </li>
                        <li>
                          <Link to={'/cart'}>Cart</Link>
                        </li>
                        <li>
                          <Link to={'/account'}>Account</Link>
                        </li>
                        <li>
                          <Link to={'/books'}>Books</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card'>
                  <ul className='header-right f-right d-none d-lg-block d-flex justify-content-between'>
                    <li className='d-none d-xl-block'>
                      <form onSubmit={handleSearch} className='form-box f-right'>
                        <input type='text' name='q' placeholder='Search products' />
                        <button type='submit' className='search-icon '>
                          <i className='fas fa-search special-tag' />
                        </button>
                      </form>
                    </li>
                    {isLoggedIn && (
                      <>
                        <li className='d-none d-xl-block'>
                          <div data-quantity={quantity} className='favorit-items has-counter'>
                            <Link to={'/saves'}>
                              <i className='far fa-heart' />
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div data-quantity={totalQuantity} className='shopping-card has-counter'>
                            <Link to={'/cart'}>
                              <i className='fas fa-shopping-cart' />
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className='shopping-card'>
                            <Link to={'/account'}>
                              <i class='fa-regular fa-user'></i>
                            </Link>
                          </div>
                        </li>
                      </>
                    )}
                    {!isLoggedIn && (
                      <li className='d-none d-lg-block'>
                        <Link to={'/login'} className='btn header-btn'>
                          Sign in
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
