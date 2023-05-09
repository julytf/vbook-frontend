import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/img/logo.png'
import { useContext, useRef, useState } from 'react'
import GlobalContext from 'utils/GlobalContext'
import AuthContext from 'utils/AuthContext'

function Header() {
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AuthContext)

  let { totalQuantity } = useContext(GlobalContext).cart
  let { saves } = useContext(GlobalContext).saves
  const quantity = saves.length
  // console.log(totalQuantity)
  if (totalQuantity > 99) totalQuantity = '99+'

  const queryRef = useRef()

  function handleSearch(e) {
    e.preventDefault()
    // console.log(queryRef.current);
    // console.log(queryRef.current.value);
    navigate(`/books?q=${queryRef.current.value}`)
  }

  return (
    <header>
      <div className='header-area'>
        <div className='main-header'>
          <div className='header-bottom header-sticky'>
            <div className='container-fluid'>
              <div className='row align-items-center'>
                <div className='col-2'>
                  <div className='logo p-3'>
                    <Link to={'/'}>
                      <img className='w-100' src={logo} alt='' />
                    </Link>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='main-menu f-right d-none d-lg-block'>
                    <nav>
                      <ul id='navigation'>
                        {/* <li>
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
                        </li> */}
                        <li>
                          <Link to={'/books'}>Sách</Link>
                        </li>
                        {isLoggedIn && (
                          <li>
                            <Link to={'/orders'}>Đơn hàng</Link>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-6'>
                  <ul className='header-right f-right d-none d-lg-block d-flex justify-content-between'>
                    <li className='d-none d-xl-block'>
                      <form onSubmit={handleSearch} className='form-box f-right'>
                        <input type='text' ref={queryRef} placeholder='Search products' />
                        <div className='search-icon '>
                          <i className='fas fa-search special-tag' />
                        </div>
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
                              <i className='fa-regular fa-user'></i>
                            </Link>
                          </div>
                        </li>
                      </>
                    )}
                    {!isLoggedIn && (
                      <>
                        <li className='d-none d-lg-block'>
                          <Link to={'/register'} className='btn header-btn'>
                            <span>Đăng ký</span>
                          </Link>
                        </li>
                        <li className='d-none d-lg-block'>
                          <Link to={'/login'} className='btn header-btn'>
                            Đăng nhập
                          </Link>
                        </li>
                      </>
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
