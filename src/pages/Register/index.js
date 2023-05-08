import axiosClient from 'utils/axiosClient'
import './style.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const validateRules = {
    username: { required: true, minLength: 6, maxLength: 50 },
    password: { required: true, minLength: 8, maxLength: 255 },
    passwordConfirm: { required: true, equal: 'password' },
    email: { required: true },
    firstName: { required: true, maxLength: 50 },
    lastName: { required: true, maxLength: 50 },
    phoneNumber: { required: true },
    birthday: { required: true },
    gender: { required: true },
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    console.log(formData.firstName)

    if (!validate(formData, validateRules)) return

    axiosClient
      .post(`/auth/register`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        toast.success('Đăng ký thành công!')
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)

        const errorCode = err.response.data.code

        if (errorCode == 11000) return toast.warn(`${Object.entries(err.response.data.keyPattern)[0][0]} đã tồn tại trên hệ thống!`)
        toast.warn('Đăng ký không thành công!')
      })
  }

  function validate(formData, validateRules) {
    let hasError = false

    for (const [name, rules] of Object.entries(validateRules)) {
      const value = formData.get(name)
      if (rules.hasOwnProperty('required') && !value) {
        errors[name] = 'Không được để trống!'
        hasError = true
        continue
      }
      if (rules.hasOwnProperty('minLength') && value.length < rules.minLength) {
        errors[name] = `Không được ngắn hơn ${rules.minLength}!`
        hasError = true
        continue
      }
      if (rules.hasOwnProperty('maxLength') && value.length > rules.maxLength) {
        errors[name] = `Không được dài hơn ${rules.maxLength}!`
        hasError = true
        continue
      }
      if (rules.hasOwnProperty('equal') && value != formData.get(rules.equal)) {
        errors[name] = `Không được khác với ${rules.equal}!`
        hasError = true
        continue
      }
      errors[name] = ''
    }

    setErrors({ ...errors })
    console.log(errors)
    return !hasError
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
                <small className='text-danger'>{errors.username}</small>
                <input type='text' name='username' className='form-control' placeholder='Tên tài khoản' />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.password}</small>
                <input type='password' name='password' className='form-control' placeholder='Mật khẩu' />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.passwordConfirm}</small>
                <input type='password' name='passwordConfirm' className='form-control' placeholder='Nhập lại mật khẩu' required />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.email}</small>
                <input type='text' name='email' className='form-control' placeholder='Email' />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.firstName}</small>
                <input type='text' name='firstName' className='form-control' placeholder='Tên' />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.lastName}</small>
                <input type='text' name='lastName' className='form-control' placeholder='Họ' />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.phoneNumber}</small>
                <input type='text' name='phoneNumber' className='form-control' placeholder='Số điện thoại' />
              </div>
              <div className='col-12 form-group'>
                <small className='text-danger'>{errors.birthday}</small>
                <input type='date' name='birthday' className='form-control' placeholder='Ngày sinh' />
              </div>
              <div className='col-12 form-group'>
                <label>
                  <small className='text-danger'>{errors.gender}</small>
                  <input type='radio' name='gender' value='M' />
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
