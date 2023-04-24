import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import bannerImage from 'assets/img/banner.jpg'

import './style.css'

import BookItem from './components/BookItem'

function Saves() {
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
    axiosClient.get(`/saves?perPage=${perPage}`, { params: { page } }).then((rs) => {
      // console.log(rs);
      setBooks(rs.data.data.docs)
      // setNoPage(rs.data.data.noPage)
    })
  }, [page])

  useEffect(() => {
    firstRenderRef.current = false
  }, [])

  return (
    <main ref={mainContentRef}>
      <section className='latest-product-area padding-bottom'>
        <div className='container'>
          <div className='row product-btn d-flex justify-content-end align-items-end'>
            <div className='col'>
              <div className='section-tittle mb-30'>
                <h2>
                  <i class='fa-regular fa-heart'></i> Saved Products
                </h2>
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
        </div>
      </section>
    </main>
  )
}

export default Saves
