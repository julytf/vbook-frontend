import { useContext, useState } from 'react'
import AuthContext from 'utils/AuthContext'
import './style.css'
import axiosClient from 'utils/axiosClient'

import dvhcvn from 'assets/json/dvhcvn.json'
import { Link } from 'react-router-dom'

function Account() {
  const { user, logout } = useContext(AuthContext)

  const [citys, setCitys] = useState(dvhcvn.data)
  const [provines, setProvines] = useState(citys.find((city) => city.id === user.address?.city)?.sub || [])
  const [districts, setDistricts] = useState(
    provines.find((provine) => provine.id === user.address?.provine)?.sub || []
  )

  function handleLogout() {
    logout()
  }

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    axiosClient.patch(`/auth/me`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }

  function handleLogout() {
    logout()
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
    <>
      {/* {JSON.stringify(user)} */}
      <div className='container'>
        <div className='slider-area'>
          <div className='single-slider slider-height2 d-flex align-items-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='hero-cap text-center'>
                    <h2>Thông tin tài khoản</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='billing_details'>
          <div className='row'>
            <div className='col'>
              <h3>Quản lý</h3>
              <div className='row mb-5'>
                <div className='col-md-6 form-group'>
                  <button onClick={handleLogout} className='btn btn-primary'>Đăng xuất</button>
                </div>
                <div className='col-md-6 form-group'>
                  <button className='btn btn-primary'>
                    <Link to={'/change-password'}>Đổi mật khẩu</Link>
                  </button>
                </div>
              </div>
              <form onSubmit={handleSubmit} className='row contact_form' noValidate='novalidate'>
                <h3>Thông tin khách hàng</h3>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='username'
                    defaultValue={user.username}
                    className='form-control'
                    placeholder='Tên tài khoản'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='email'
                    defaultValue={user.email}
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='firstName'
                    defaultValue={user.firstName}
                    className='form-control'
                    placeholder='Tên'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='lastName'
                    defaultValue={user.lastName}
                    className='form-control'
                    placeholder='Họ'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='phoneNumber'
                    defaultValue={user.phoneNumber}
                    className='form-control'
                    placeholder='Số điện thoại'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='date'
                    name='birthday'
                    defaultValue={user.birthday?.substring(0, 10)}
                    className='form-control'
                    placeholder='Ngày sinh'
                  />
                </div>
                <h3>Thông tin giao hàng</h3>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='address[fullName]'
                    defaultValue={user.address?.fullName}
                    className='form-control'
                    placeholder='Họ và Tên'
                  />
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='address[phoneNumber]'
                    defaultValue={user.address?.phoneNumber}
                    className='form-control'
                    placeholder='Số Điện thoại'
                  />
                </div>
                <div className='col-md-4 form-group'>
                  <select
                    defaultValue={user.address?.city}
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
                    defaultValue={user.address?.provine}
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
                    defaultValue={user.address?.district}
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
                    defaultValue={user.address?.address}
                    type='text'
                    className='form-control'
                  />
                </div>
                <div className='col-md-12 form-group'>
                  <input
                    name='address[address2]'
                    defaultValue={user.address?.address2}
                    type='text'
                    className='form-control'
                  />
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
