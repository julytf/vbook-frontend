import { useContext, useRef } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "utils/AuthContext"
import "./style.css"

function Login() {
  const { isLoggedIn, login } = useContext(AuthContext)

  const usernameRef = useRef()
  const passwordRef = useRef()

  function handleLogin(e) {
    e.preventDefault()
    login(usernameRef.current.value, passwordRef.current.value)
  }

  if (isLoggedIn) return <Navigate to={"/"} />

  return (
    <div className='login page-template-default page page-id-357 wp-custom-logo theme-astra woocommerce-js ast-desktop ast-page-builder-template ast-no-sidebar astra-4.0.2 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header elementor-default elementor-kit-1345 elementor-page elementor-page-357 e--ua-blink e--ua-chrome e--ua-webkit ast-mouse-clicked'>
      <div id='content' className='site-content'>
        <div
          className='ast-container'
          style={{
            justifyContent: "center",
          }}
        >
          <div id='primary' className='content-area primary'>
            <main id='main' className='site-main'>
              <article
                className='post-357 page type-page status-publish ast-article-single'
                id='post-357'
                itemType='https://schema.org/CreativeWork'
                itemScope='itemscope'
              >
                <div className='entry-content clear' itemProp='text'>
                  <div data-elementor-type='wp-page' data-elementor-id={357} className='elementor elementor-357'>
                    <section
                      className='elementor-section elementor-top-section elementor-element elementor-element-6dbeafe4 elementor-section-boxed elementor-section-height-default elementor-section-height-default'
                      data-id='6dbeafe4'
                      data-element_type='section'
                    >
                      <div className='elementor-container elementor-column-gap-default'>
                        <div
                          className='elementor-column elementor-top-column elementor-element elementor-element-69db5fe'
                          data-id='69db5fe'
                          data-element_type='column'
                        >
                          <div className='elementor-widget-wrap elementor-element-populated'>
                            <div
                              className='elementor-element elementor-element-44debd8e elementor-widget elementor-widget-heading'
                              data-id='44debd8e'
                              data-element_type='widget'
                              data-widget_type='heading.default'
                            >
                              <div className='elementor-widget-container'>
                                <h2
                                  className='elementor-heading-title elementor-size-default'
                                  style={{ textAlign: "center" }}
                                >
                                  Login
                                </h2>
                              </div>
                            </div>
                            <div
                              className='elementor-element elementor-element-3f3d1eda elementor-widget elementor-widget-wpforms'
                              data-id='3f3d1eda'
                              data-element_type='widget'
                              data-widget_type='wpforms.default'
                            >
                              <div className='elementor-widget-container'>
                                <div className='wpforms-container ' id='wpforms-1377'>
                                  <form
                                    id='wpforms-form-1377'
                                    className='wpforms-validate wpforms-form wpforms-ajax-form'
                                    onSubmit={handleLogin}
                                  >
                                    <div className='wpforms-field-container'>
                                      <div
                                        id='wpforms-1377-field_0-container'
                                        className='wpforms-field wpforms-field-name'
                                        data-field-id={0}
                                      >
                                        <label
                                          className='wpforms-field-label wpforms-label-hide'
                                          htmlFor='wpforms-1377-field_0'
                                        >
                                          Name
                                          <span className='wpforms-required-label'>*</span>
                                        </label>
                                        <input
                                          type='text'
                                          className='wpforms-field-large wpforms-field-required'
                                          placeholder='Full name'
                                          required
                                          ref={usernameRef}
                                        />
                                      </div>

                                      <div
                                        id='wpforms-1377-field_1-container'
                                        className='wpforms-field wpforms-field-email'
                                        data-field-id={1}
                                      >
                                        <label
                                          className='wpforms-field-label wpforms-label-hide'
                                          htmlFor='wpforms-1377-field_1'
                                        >
                                          Password
                                          <span className='wpforms-required-label'>*</span>
                                        </label>
                                        <input
                                          type='password'
                                          className='wpforms-field-large wpforms-field-required'
                                          placeholder='Password'
                                          required
                                          ref={passwordRef}
                                        />
                                      </div>
                                    </div>
                                    <div className='wpforms-submit-container'>
                                      <input type='hidden' name='wpforms[id]' defaultValue={1377} />
                                      <input type='hidden' name='wpforms[author]' defaultValue={12} />
                                      <input type='hidden' name='wpforms[post_id]' defaultValue={357} />
                                      <button
                                        type='submit'
                                        name='wpforms[submit]'
                                        id='wpforms-submit-1377'
                                        className='wpforms-submit'
                                        data-submit-text='Login'
                                        aria-live='assertive'
                                        value='wpforms-submit'
                                        style={{ float: "right" }}
                                      >
                                        Login
                                      </button>
                                      <img
                                        decoding='async'
                                        src='https://websitedemos.net/earth-store-02/wp-content/plugins/wpforms-lite/assets/images/submit-spin.svg'
                                        className='wpforms-submit-spinner'
                                        style={{ display: "none" }}
                                        width={26}
                                        height={26}
                                        alt='Loading'
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
