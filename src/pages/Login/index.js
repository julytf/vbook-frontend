import { useContext, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from 'utils/AuthContext'
import './style.css'

function Login() {
  const { isLoggedIn, login } = useContext(AuthContext)

  const usernameRef = useRef()
  const passwordRef = useRef()

  function handleLogin(e) {
    // console.log(e)
    e.preventDefault()
    login(usernameRef.current.value, passwordRef.current.value)
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
                    <input type='text' className='form-control' placeholder='Username' ref={usernameRef} />
                  </div>
                  <div className='col-md-12 form-group p_star'>
                    <input type='password' className='form-control' placeholder='Password' ref={passwordRef} />
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
