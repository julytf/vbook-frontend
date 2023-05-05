import axiosClient from 'utils/axiosClient'
import './style.css'

function Register() {
  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    axiosClient.post(`/auth/register`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
  return (
    <div className='container'>
      <div className='slider-area'>
        <div className='single-slider slider-height2 d-flex align-items-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='hero-cap text-center'>
                  <h2>đăng ký</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='billing_details'>
        <div className='row d-flex justify-content-center'>
          <div className='col-6'>
            <form onSubmit={handleSubmit} className='row contact_form' noValidate='novalidate'>
              <div className='col-12 form-group'>
                <input type='text' name='username' className='form-control' placeholder='Tên tài khoản' />
              </div>
              <div className='col-12 form-group'>
                <input type='text' name='password' className='form-control' placeholder='Mật khẩu' />
              </div>
              <div className='col-12 form-group'>
                <input type='text' name='passwordConfirm' className='form-control' placeholder='Nhập lại mật khẩu' />
              </div>
              <div className='col-12 form-group'>
                <input type='text' name='email' className='form-control' placeholder='Email' />
              </div>
              <div className='col-12 form-group'>
                <input type='text' name='firstName' className='form-control' placeholder='Tên' />
              </div>
              <div className='col-12 form-group'>
                <input type='text' name='lastName' className='form-control' placeholder='Họ' />
              </div>
              <div className='col-12 form-group'>
                <input type='text' name='phoneNumber' className='form-control' placeholder='Số điện thoại' />
              </div>
              <div className='col-12 form-group'>
                <input type='date' name='birthday' className='form-control' placeholder='Ngày sinh' />
              </div>
              <div className='col-12 form-group'>
                <label>
                  <input type='radio' name='gender' value='M' className='' />
                  <span> Nam</span>
                </label>
                <label className='ms-4'>
                  <input type='radio' name='gender' value='F' className='' />
                  <span> Nữ</span>
                </label>
              </div>

              <button className='tp_btn'>đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
