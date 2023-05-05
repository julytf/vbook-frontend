import { useContext, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from 'utils/GlobalContext'

import './style.css'
import CartItem from './components/CartItem'

function Cart() {
  const { cart, totalCost, syncCart } = useContext(GlobalContext).cart
  console.log('Cart rerender')

  async function handleUpdate() {
    await syncCart()
    // TODO:
    console.log('update success')
  }

  return (
    <section className='cart_area '>
      <div className='container'>
        <div className='slider-area'>
          <div className='single-slider slider-height2 d-flex align-items-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='hero-cap text-center'>
                    <h2>Giỏ hàng</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cart_inner'>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Product</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartItem key={item.book._id} cartItem={item} />
                ))}
                <tr className='bottom_button'>
                  <td>
                    <button onClick={handleUpdate} className='btn_1'>
                      Update Cart
                    </button>
                  </td>
                  <td />
                  <td />
                  <td />
                  {/* <td>
                    <div className='cupon_text float-right'>
                      <a className='btn_1' href='#'>
                        Close Coupon
                      </a>
                    </div>
                  </td> */}
                </tr>
                <tr>
                  <td />
                  <td />
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h2>{totalCost.toLocaleString()}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='checkout_btn_inner'>
              {/* <a className='btn_1' href='#'>
                Continue Shopping
              </a> */}
              <Link to={'/checkout'} className='btn_1 checkout_btn_1 float-end'>
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
