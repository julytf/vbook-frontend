import { useContext, useRef } from 'react'
import 'assets/css/adminlte.min.css'
import './style.css'

import logo from 'assets/img/logo.png'
import AuthAdminContext from 'utils/AuthAdminContext'
import { Navigate } from 'react-router-dom'

function Login() {
  const { isAdmin, login } = useContext(AuthAdminContext)

  const usernameRef = useRef()
  const passwordRef = useRef()

  function handleLogin(e) {
    e.preventDefault()

    login(usernameRef.current.value, passwordRef.current.value)
  }

  if (isAdmin) return <Navigate to={'/admin'} />

  return (
    <div className='login_wrapper'>
      <div className='login-box'>
        <div className='card card-outline card-primary'>
          <div className='card-header text-center'>
            <h1 className='h1'>
              <img className='logo' src={logo} />
              <b>Admin</b>
            </h1>
          </div>
          <div className='card-body'>
            {/* <p className='login-box-msg'>Sign in to start your session</p> */}
            <form onSubmit={handleLogin} method='post'>
              <div className='input-group mb-3'>
                <input type='username' className='form-control' placeholder='username' ref={usernameRef} />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-envelope' />
                  </div>
                </div>
              </div>
              <div className='input-group mb-3'>
                <input type='password' className='form-control' placeholder='Password' ref={passwordRef} />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-lock' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-8'>
                  {/* <div className='icheck-primary'>
                    <input type='checkbox' id='remember' />
                    <label htmlFor='remember'>Remember Me</label>
                  </div> */}
                </div>
                <div className='col-4'>
                  <button type='submit' className='btn btn-primary btn-block'>
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            {/* <div className='social-auth-links text-center mt-2 mb-3'>
              <a href='#' className='btn btn-block btn-primary'>
                <i className='fab fa-facebook mr-2' /> Sign in using Facebook
              </a>
              <a href='#' className='btn btn-block btn-danger'>
                <i className='fab fa-google-plus mr-2' /> Sign in using Google+
              </a>
            </div>
            <p className='mb-1'>
              <a href='forgot-password.html'>I forgot my password</a>
            </p> */}
            {/* <p className='mb-0'>
              <a href='register.html' className='text-center'>
                Register a new membership
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
