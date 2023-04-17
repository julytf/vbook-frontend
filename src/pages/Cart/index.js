import { useContext, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from 'utils/CartContext'

import './style.css'

function Cart() {
  const { cart, totalCost, sync } = useContext(CartContext)
  console.log('Cart rerender')

  async function handleUpdate() {
    await sync()
    // TODO:
    console.log('update success')
  }

  return (
    <section className='cart_area section_padding'>
      <div className='container'>
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
                <tr>
                  <td>
                    <div className='media'>
                      <div className='d-flex'>
                        <img src='assets/img/arrivel/arrivel_1.png' alt='' />
                      </div>
                      <div className='media-body'>
                        <p>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>$360.00</h5>
                  </td>
                  <td>
                    <div className='product_count'>
                      <span className='input-number-decrement'>
                        {' '}
                        <i className='ti-minus' />
                      </span>
                      <input className='input-number' type='text' defaultValue={1} min={0} max={10} />
                      <span className='input-number-increment'>
                        {' '}
                        <i className='ti-plus' />
                      </span>
                    </div>
                  </td>
                  <td>
                    <h5>$720.00</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='media'>
                      <div className='d-flex'>
                        <img src='assets/img/arrivel/arrivel_2.png' alt='' />
                      </div>
                      <div className='media-body'>
                        <p>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>$360.00</h5>
                  </td>
                  <td>
                    <div className='product_count'>
                      <span className='input-number-decrement'>
                        {' '}
                        <i className='ti-minus' />
                      </span>
                      <input className='input-number' type='text' defaultValue={1} min={0} max={10} />
                      <span className='input-number-increment'>
                        {' '}
                        <i className='ti-plus' />
                      </span>
                    </div>
                  </td>
                  <td>
                    <h5>$720.00</h5>
                  </td>
                </tr>
                <tr className='bottom_button'>
                  <td>
                    <a className='btn_1' href='#'>
                      Update Cart
                    </a>
                  </td>
                  <td />
                  <td />
                  <td>
                    <div className='cupon_text float-right'>
                      <a className='btn_1' href='#'>
                        Close Coupon
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td />
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>$2160.00</h5>
                  </td>
                </tr>
                <tr className='shipping_area'>
                  <td />
                  <td />
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className='shipping_box'>
                      <ul className='list'>
                        <li>
                          Flat Rate: $5.00
                          <input type='radio' aria-label='Radio button for following text input' />
                        </li>
                        <li>
                          Free Shipping
                          <input type='radio' aria-label='Radio button for following text input' />
                        </li>
                        <li>
                          Flat Rate: $10.00
                          <input type='radio' aria-label='Radio button for following text input' />
                        </li>
                        <li className='active'>
                          Local Delivery: $2.00
                          <input type='radio' aria-label='Radio button for following text input' />
                        </li>
                      </ul>
                      <h6>
                        Calculate Shipping
                        <i className='fa fa-caret-down' aria-hidden='true' />
                      </h6>
                      <select className='shipping_select' style={{ display: 'none' }}>
                        <option value={1}>Bangladesh</option>
                        <option value={2}>India</option>
                        <option value={4}>Pakistan</option>
                      </select>
                      <div className='nice-select shipping_select' tabIndex={0}>
                        <span className='current'>Bangladesh</span>
                        <ul className='list'>
                          <li data-value={1} className='option selected'>
                            Bangladesh
                          </li>
                          <li data-value={2} className='option'>
                            India
                          </li>
                          <li data-value={4} className='option'>
                            Pakistan
                          </li>
                        </ul>
                      </div>
                      <select className='shipping_select section_bg' style={{ display: 'none' }}>
                        <option value={1}>Select a State</option>
                        <option value={2}>Select a State</option>
                        <option value={4}>Select a State</option>
                      </select>
                      <div className='nice-select shipping_select section_bg' tabIndex={0}>
                        <span className='current'>Select a State</span>
                        <ul className='list'>
                          <li data-value={1} className='option selected'>
                            Select a State
                          </li>
                          <li data-value={2} className='option'>
                            Select a State
                          </li>
                          <li data-value={4} className='option'>
                            Select a State
                          </li>
                        </ul>
                      </div>
                      <input className='post_code' type='text' placeholder='Postcode/Zipcode' />
                      <a className='btn_1' href='#'>
                        Update Details
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='checkout_btn_inner float-right'>
              <a className='btn_1' href='#'>
                Continue Shopping
              </a>
              <a className='btn_1 checkout_btn_1' href='#'>
                Proceed to checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
