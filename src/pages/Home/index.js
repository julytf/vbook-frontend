import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import bannerImage from 'assets/img/banner.jpg'
import homeBanner from 'assets/img/banner2.jpg'

import './style.css'

import BookItem from './components/BookItem'
import { Link } from 'react-router-dom'
import AuthContext from 'utils/AuthContext'

function Home() {
  const [books, setBooks] = useState([])
  console.log(books)
  const [page, setPage] = useState(1)
  // console.log(page)
  const [noPage, setNoPage] = useState(0)

  const perPage = 24

  const mainContentRef = useRef()

  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) return
    mainContentRef.current.scrollIntoView()
  }, [page])

  useLayoutEffect(() => {
    axiosClient.get(`/books?perPage=${perPage}`, { params: { page } }).then((rs) => {
      // console.log(rs);
      setBooks(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }, [page])

  useEffect(() => {
    firstRenderRef.current = false
  }, [])

  return (
    <main ref={mainContentRef}>
      <section className='latest-product-area padding-bottom'>
        <div className='slider-area mb-5'>
          <div
            className='single-slider slider-height2 d-flex align-items-center'
            style={{
              backgroundImage: `
              linear-gradient(
                rgba(255, 255, 255, 0.45), 
                rgba(255, 255, 255, 0.45)
              ), url(${homeBanner})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='hero-cap text-center'>
                    <h2>"Để cho con một hòm vàng không bằng dạy cho con một quyển sách hay"</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row product-btn d-flex justify-content-end align-items-end'>
            <div className='col-xl-4 col-lg-5 col-md-5'>
              <div className='section-tittle mb-30'>
                <h2>Sách mới nhất</h2>
              </div>
            </div>
            <div className='col-xl-8 col-lg-7 col-md-7'>
              <div className='properties__button f-right'>
                {/* <nav>
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
                </nav> */}
              </div>
            </div>
          </div>
          <div className='tab-content' id='nav-tabContent'>
            <div className='tab-pane fade show active' id='nav-home' role='tabpanel' aria-labelledby='nav-home-tab'>
              <div className='row'>
                {books.map((book) => (
                  <BookItem book={book} />
                ))}
              </div>
            </div>
          </div>
          <div className='row'>
            <Link to={'/books'} className='btn_3 text-center'>
              Xem Thêm
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
