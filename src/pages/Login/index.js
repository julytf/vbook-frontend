import { useContext, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from 'utils/AuthContext'
import './style.css'
import { toast } from 'react-toastify'

function Login() {
  const [errors, setErrors] = useState({})

  const { isLoggedIn, login } = useContext(AuthContext)

  const usernameRef = useRef()
  const passwordRef = useRef()

  const validateRules = {
    username: { required: true, minLength: 6, maxLength: 50 },
    password: { required: true, minLength: 8, maxLength: 255 },
  }
  function handleLogin(e) {
    // console.log(e)
    e.preventDefault()
    const formData = new FormData(e.target)

    if (!validate(formData, validateRules)) return

    login(usernameRef.current.value, passwordRef.current.value)
      .then(() => toast.success('Đăng nhập thành công!'))
      .catch(() => toast.warn('tài khoản hoặc mật khẩu không hợp lệ!'))
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

  if (isLoggedIn) return <Navigate to={'/'} />

  return (
    <section className='login_part'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          {/* <div className='col-lg-6 col-md-6'>
            <div className='login_part_text text-center'>
              <div className='login_part_text_iner'>
                <h2>New to our Shop?</h2>
                <p>
                  There are advances being made in science and technology everyday, and a good example of this is the
                </p>
                <a href='#' className='btn_3'>
                  Create an Account
                </a>
              </div>
            </div>
          </div> */}
          <div className='col-6 d-flex justify-content-center'>
            <div className='login_part_form'>
              <div className='login_part_form_iner'>
                <h3>
                  Chào mừng trở lại! <br />
                  Đăng nhập
                </h3>
                <form onSubmit={handleLogin} className='row contact_form' noValidate='novalidate'>
                  <div className='col-md-12 form-group p_star'>
                    <small className='text-danger'>{errors.username}</small>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Username'
                      ref={usernameRef}
                      name='username'
                    />
                  </div>
                  <div className='col-md-12 form-group p_star'>
                    <small className='text-danger'>{errors.password}</small>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Password'
                      ref={passwordRef}
                      name='password'
                    />
                  </div>
                  <div className='col-md-12 form-group'>
                    {/* <div className='creat_account d-flex align-items-center'>
                      <input type='checkbox' id='f-option' name='selector' />
                      <label htmlFor='f-option'>Remember me</label>
                    </div> */}
                    <button type='submit' value='submit' className='btn_3'>
                      đăng nhập
                    </button>
                    {/* <a className='lost_pass' href='#'>
                      forget password?
                    </a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
