import { useContext } from 'react'
import AuthContext from 'utils/AuthContext'
import './style.css'
import axiosClient from 'utils/axiosClient'

import dvhcvn from 'assets/json/dvhcvn.json'

function Account() {
  const { user, logout } = useContext(AuthContext)

  function handleLogout() {
    logout()
  }

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    console.log(formData.get('firstName'))
    console.log(formData.get('address'))

    axiosClient.patch(`/auth/me`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
  return (
    <>
    {JSON.stringify(user)}
      <div className='container'>
        <div className='billing_details'>
          <div className='row'>
            <div className='col'>
              <form onSubmit={handleSubmit} className='row contact_form' noValidate='novalidate'>
                <h3>Thông tin tài khoản</h3>
                <div className='col-md-6 form-group'>
                  <input type='text' name='username' defaultValue={user.username} className='form-control' placeholder='Tên tài khoản' />
                </div>
                <div className='col-md-6 form-group'>
                  <input type='text' name='email' defaultValue={user.email} className='form-control' placeholder='Email' />
                </div>
                <div className='col-md-6 form-group'>
                  <input type='text' name='firstName' defaultValue={user.firstName} className='form-control' placeholder='Tên' />
                </div>
                <div className='col-md-6 form-group'>
                  <input type='text' name='lastName' defaultValue={user.lastName} className='form-control' placeholder='Họ' />
                </div>
                <div className='col-md-6 form-group'>
                  <input type='text' name='phoneNumber' defaultValue={user.phoneNumber} className='form-control' placeholder='Số điện thoại' />
                </div>
                <div className='col-md-6 form-group'>
                  <input type='date' name='birthday' defaultValue={user.birthday} className='form-control' placeholder='Ngày sinh' />
                </div>
                <h3>Thông tin giao hàng</h3>
                <div className='col-md-6 form-group'>
                  <input type='text' name='address[fullName]' className='form-control' placeholder='Họ và Tên' />
                </div>
                <div className='col-md-6 form-group'>
                  <input type='text' name='address[phoneNumber]' className='form-control' placeholder='Số Điện thoại' />
                </div>
                <div className='col-md-4 form-group'>
                  <select name='address[city]' className='country_select form-control'>
                    <option>Chọn Thành phố</option>
                    {dvhcvn.data.map((city) => (
                      <option value={city.id} key={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-md-4 form-group'>
                  <select name='address[provine]' className='country_select form-control'>
                    <option>Chọn Quận/Huyện</option>
                  </select>
                </div>
                <div className='col-md-4 form-group'>
                  <select name='address[district]' className='country_select form-control'>
                    <option>Chọn Phường/Xã</option>
                  </select>
                </div>
                <div className='col-md-12 form-group'>
                  <input name='address[address]' type='text' className='form-control'/>
                </div>
                <div className='col-md-12 form-group'>
                  <input name='address[address2]' type='text' className='form-control'/>
                </div>
                <button className='tp_btn'>Cập nhật</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
