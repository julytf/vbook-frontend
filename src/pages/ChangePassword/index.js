import { useContext, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from 'utils/AuthContext'
import './style.css'

function ChangePassword() {
  const { changePassword } = useContext(AuthContext)

  const passwordRef = useRef()
  const newPasswordRef = useRef()
  const confirmNewPasswordRef = useRef()

  function handleChangePassword(e) {
    e.preventDefault()

    if (newPasswordRef.current.value !== confirmNewPasswordRef.current.value) return

    changePassword(passwordRef.current.value, newPasswordRef.current.value)
  }
  return (
    <section className='login_part'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-6 d-flex justify-content-center'>
            <div className='login_part_form'>
              <div className='login_part_form_iner'>
                <h3>Đổi mật khẩu</h3>
                <form onSubmit={handleChangePassword} className='row contact_form' noValidate='novalidate'>
                  <div className='col-md-12 form-group p_star'>
                    <input
                      type='text'
                      name='password'
                      className='form-control'
                      placeholder='Mật khẩu hiện tại'
                      ref={passwordRef}
                    />
                  </div>
                  <div className='col-md-12 form-group p_star'>
                    <input
                      type='text'
                      name='newPassword'
                      className='form-control'
                      placeholder='Mật khẩu mới'
                      ref={newPasswordRef}
                    />
                  </div>
                  <div className='col-md-12 form-group p_star'>
                    <input
                      type='confirm-password'
                      className='form-control'
                      placeholder='Nhập lại mật khẩu mới'
                      ref={confirmNewPasswordRef}
                    />
                  </div>
                  <div className='col-md-12 form-group'>
                    <button type='submit' value='submit' className='btn_3'>
                      Đổi mật khẩu
                    </button>
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

export default ChangePassword
