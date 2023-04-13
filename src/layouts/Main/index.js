import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

import 'assets/css/bootstrap.min.css'
// import "assets/css/animate.min.css"
// import "assets/css/fontawesome-all.min.css"
// import "assets/css/themify-icons.css"
// import "assets/css/slick.css"
// import "assets/css/nice-select.css"
import 'assets/css/style.css'

import './style.css'

function Main() {
  return (
    <>
      <div id='preloader-active' style={{ display: 'none' }}>
        <div className='preloader d-flex align-items-center justify-content-center'>
          <div className='preloader-inner position-relative'>
            <div className='preloader-circle' />
            <div className='preloader-img pere-text'>
              <img src='assets/img/logo/logo.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      
      <Header/>
      <main>
        <div className='slider-area'>
          <div className='slider-active slick-initialized slick-slider'>
            <div className='slick-list draggable' tabIndex={0}>
              <div className='slick-track' style={{ opacity: 1, width: '2056px' }}>
                <div
                  className='single-slider slider-height slick-slide slick-active'
                  data-background='assets/img/hero/h1_hero.jpg'
                  data-slick-index={0}
                  style={{
                    width: '1028px',
                    position: 'relative',
                    left: '0px',
                    top: '0px',
                    zIndex: 900,
                    opacity: 1,
                    backgroundImage: 'url("assets/img/hero/h1_hero.jpg")',
                  }}
                >
                  <div className='container'>
                    <div className='row d-flex align-items-center justify-content-between'>
                      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block'>
                        <div
                          className='hero__img'
                          data-animation='bounceIn'
                          data-delay='.4s'
                          style={{ animationDelay: '0.4s' }}
                        >
                          <img src='assets/img/hero/hero_man.png' alt='' />
                        </div>
                      </div>
                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-8'>
                        <div className='hero__caption'>
                          <span
                            data-animation='fadeInRight'
                            data-delay='.4s'
                            className
                            style={{ animationDelay: '0.4s' }}
                          >
                            60% Discount
                          </span>
                          <h1
                            data-animation='fadeInRight'
                            data-delay='.6s'
                            className
                            style={{ animationDelay: '0.6s' }}
                          >
                            Winter <br />
                            Collection
                          </h1>
                          <p data-animation='fadeInRight' data-delay='.8s' className style={{ animationDelay: '0.8s' }}>
                            Best Cloth Collection By 2020!
                          </p>
                          <div
                            className='hero__btn'
                            data-animation='fadeInRight'
                            data-delay='1s'
                            style={{ animationDelay: '1s' }}
                          >
                            <a href='industries.html' className='btn hero-btn'>
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='single-slider slider-height slick-slide'
                  data-background='assets/img/hero/h1_hero.jpg'
                  data-slick-index={1}
                  style={{
                    width: '1028px',
                    position: 'relative',
                    left: '-1028px',
                    top: '0px',
                    zIndex: 800,
                    opacity: 0,
                    backgroundImage: 'url("assets/img/hero/h1_hero.jpg")',
                  }}
                >
                  <div className='container'>
                    <div className='row d-flex align-items-center justify-content-between'>
                      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block'>
                        <div className='hero__img' data-animation='bounceIn' data-delay='.4s'>
                          <img src='assets/img/hero/hero_man.png' alt='' />
                        </div>
                      </div>
                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-8'>
                        <div className='hero__caption'>
                          <span data-animation='fadeInRight' data-delay='.4s'>
                            60% Discount
                          </span>
                          <h1 data-animation='fadeInRight' data-delay='.6s'>
                            Winter <br />
                            Collection
                          </h1>
                          <p data-animation='fadeInRight' data-delay='.8s'>
                            Best Cloth Collection By 2020!
                          </p>
                          <div className='hero__btn' data-animation='fadeInRight' data-delay='1s'>
                            <a href='industries.html' className='btn hero-btn'>
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='latest-product-area padding-bottom'>
          <div className='container'>
            <div className='row product-btn d-flex justify-content-end align-items-end'>
              <div className='col-xl-4 col-lg-5 col-md-5'>
                <div className='section-tittle mb-30'>
                  <h2>Latest Products</h2>
                </div>
              </div>
              <div className='col-xl-8 col-lg-7 col-md-7'>
                <div className='properties__button f-right'>
                  <nav>
                    <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                      <a
                        className='nav-item nav-link active'
                        id='nav-home-tab'
                        data-toggle='tab'
                        href='#nav-home'
                        role='tab'
                        aria-controls='nav-home'
                        aria-selected='true'
                      >
                        All
                      </a>
                      <a
                        className='nav-item nav-link'
                        id='nav-profile-tab'
                        data-toggle='tab'
                        href='#nav-profile'
                        role='tab'
                        aria-controls='nav-profile'
                        aria-selected='false'
                      >
                        New
                      </a>
                      <a
                        className='nav-item nav-link'
                        id='nav-contact-tab'
                        data-toggle='tab'
                        href='#nav-contact'
                        role='tab'
                        aria-controls='nav-contact'
                        aria-selected='false'
                      >
                        Featured
                      </a>
                      <a
                        className='nav-item nav-link'
                        id='nav-last-tab'
                        data-toggle='tab'
                        href='#nav-last'
                        role='tab'
                        aria-controls='nav-contact'
                        aria-selected='false'
                      >
                        Offer
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className='tab-content' id='nav-tabContent'>
              <div className='tab-pane fade show active' id='nav-home' role='tabpanel' aria-labelledby='nav-home-tab'>
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product1.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product2.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product3.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product4.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product5.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product6.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane fade' id='nav-profile' role='tabpanel' aria-labelledby='nav-profile-tab'>
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product4.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product5.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product6.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product2.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product3.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product1.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane fade' id='nav-contact' role='tabpanel' aria-labelledby='nav-contact-tab'>
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product2.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product3.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product1.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product4.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product6.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product5.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane fade' id='nav-last' role='tabpanel' aria-labelledby='nav-last-tab'>
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product1.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product2.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product3.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product4.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product5.png' alt='' />
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single-product mb-60'>
                      <div className='product-img'>
                        <img src='assets/img/categori/product6.png' alt='' />
                        <div className='new-product'>
                          <span>New</span>
                        </div>
                      </div>
                      <div className='product-caption'>
                        <div className='product-ratting'>
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star' />
                          <i className='far fa-star low-star' />
                          <i className='far fa-star low-star' />
                        </div>
                        <h4>
                          <a href='#'>Green Dress with details</a>
                        </h4>
                        <div className='price'>
                          <ul>
                            <li>$40.00</li>
                            <li className='discount'>$60.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Main
