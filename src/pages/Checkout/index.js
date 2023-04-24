import { useContext, useState } from 'react'
import CartContext from 'utils/CartContext'
import { truncate } from 'helper'
import AuthContext from 'utils/AuthContext'

import dvhcvn from 'assets/json/dvhcvn.json'

import './style.css'
import axiosClient from 'utils/axiosClient'

function Checkout() {
  const shippingFree = 20000

  const { cart, totalCost } = useContext(CartContext)
  const { user } = useContext(AuthContext)

  const [citys, setCitys] = useState(dvhcvn.data)
  const [provines, setProvines] = useState(citys.find((city) => city.id === user.address?.city)?.sub || [])
  const [districts, setDistricts] = useState(
    provines.find((provine) => provine.id === user.address?.provine)?.sub || []
  )

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    axiosClient.post(`/orders/buy_from_cart`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }

  function handleCityChange(e) {
    // console.log(e.target.value);
    const provines = citys.find((city) => city.id === e.target.value)?.sub || []
    setProvines(provines)
  }

  function handleProvineChange(e) {
    // console.log(e.target.value);
    const districts = provines.find((city) => city.id === e.target.value)?.sub || []
    setDistricts(districts)
  }

  return (
    <section className='checkout_area section_padding'>
      <div className='container'>
        <div className='billing_details'>
          <div className='row'>
            <div className='col-lg-8'>
              <h3>Thông tin giao hàng</h3>
              <form className='row contact_form' id='checkout_form' onSubmit={handleSubmit} noValidate='novalidate'>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='address[fullName]'
                    defaultValue={user.address.fullName}
                    className='form-control'
                    placeholder='Họ và Tên'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='address[phoneNumber]'
                    defaultValue={user.address.phoneNumber}
                    className='form-control'
                    placeholder='Số Điện thoại'
                  />
                </div>
                <div className='col-md-4 form-group'>
                  <select
                    defaultValue={user.address.city}
                    name='address[city]'
                    onChange={handleCityChange}
                    className='country_select form-control'
                  >
                    <option value={''}>Chọn Thành phố</option>
                    {citys.map((city) => (
                      <option value={city.id} key={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-md-4 form-group'>
                  <select
                    defaultValue={user.address.provine}
                    name='address[provine]'
                    onChange={handleProvineChange}
                    className='country_select form-control'
                  >
                    <option value={''}>Chọn Quận/Huyện</option>
                    {provines.map((provine) => (
                      <option value={provine.id} key={provine.id}>
                        {provine.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-md-4 form-group'>
                  <select
                    defaultValue={user.address.district}
                    name='address[district]'
                    className='country_select form-control'
                  >
                    <option value={''}>Chọn Phường/Xã</option>
                    {districts.map((district) => (
                      <option value={district.id} key={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-md-12 form-group'>
                  <input
                    name='address[address]'
                    defaultValue={user.address.address}
                    type='text'
                    className='form-control'
                  />
                </div>
                <div className='col-md-12 form-group'>
                  <input
                    name='address[address2]'
                    defaultValue={user.address.address2}
                    type='text'
                    className='form-control'
                  />
                </div>
                <div className='col-md-12 form-group'>
                  <textarea
                    className='form-control'
                    name='note'
                    rows={1}
                    placeholder='Order Notes'
                  />
                </div>
              </form>
            </div>
            <div className='col-lg-4'>
              <div className='order_box'>
                <h2>Your Order</h2>
                <ul className='list'>
                  <li>
                    <a href='#'>
                      Product
                      <span>Total</span>
                    </a>
                  </li>
                  {cart.map((item) => (
                    <li>
                      <a href='#'>
                        {truncate(item.book.name, 25)}
                        <span className='middle'>x {item.quantity}</span>
                        <span className='last'>{item.book.price.toLocaleString()}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className='list list_2'>
                  <li>
                    <a href='#'>
                      Tổng tiền hàng
                      <span>{totalCost.toLocaleString()}</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Phí ship
                      <span>{shippingFree.toLocaleString()}</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Tổng
                      <span className='h5'>{(totalCost + shippingFree).toLocaleString()}</span>
                    </a>
                  </li>
                </ul>
                <div className='payment_item'>
                  <div className='radion_btn'>
                    <input type='radio' id='f-option5' name='selector' />
                    <label htmlFor='f-option5'>Check payments</label>
                    <div className='check' />
                  </div>
                  <p>
                    {/* TODO: */}
                    Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                  </p>
                </div>
                <div className='payment_item active'>
                  <div className='radion_btn'>
                    <input type='radio' id='f-option6' name='selector' />
                    <label htmlFor='f-option6'>Paypal </label>
                    <img src='img/product/single-product/card.jpg' alt='' />
                    <div className='check' />
                  </div>
                  <p>
                    Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                  </p>
                </div>
                <div className='creat_account'>
                  <input type='checkbox' id='f-option4' name='selector' />
                  <label htmlFor='f-option4'>I’ve read and accept the </label>
                  <a href='#'>terms &amp; conditions*</a>
                </div>
                <button form='checkout_form' className='btn_3'>
                  Proceed to Paypal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
