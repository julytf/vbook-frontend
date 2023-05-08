import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import bannerImage from 'assets/img/banner.jpg'

import './style.css'

import BookItem from './components/BookItem'
import GlobalContext from 'utils/GlobalContext'

function Saves() {
  const { saves } = useContext(GlobalContext).saves
  // const [books, setBooks] = useState([])
  // console.log(books)
  // const [page, setPage] = useState(1)
  // // console.log(page)
  // const [noPage, setNoPage] = useState(0)

  // const perPage = 24

  // const mainContentRef = useRef()

  // const firstRenderRef = useRef(true)

  // useEffect(() => {
  //   if (firstRenderRef.current) return
  //   mainContentRef.current.scrollIntoView()
  // }, [page])

  // useLayoutEffect(() => {
  //   axiosClient.get(`/saves?perPage=${perPage}`, { params: { page } }).then((rs) => {
  //     // console.log(rs);
  //     setBooks(rs.data.data.docs)
  //     // setNoPage(rs.data.data.noPage)
  //   })
  // }, [page])

  // useEffect(() => {
  //   firstRenderRef.current = false
  // }, [])

  return (
    <main>
      <section className='latest-product-area padding-bottom'>
        <div className='container'>
          <div className='slider-area'>
            <div className='single-slider slider-height2 d-flex align-items-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-12'>
                    <div className='hero-cap text-center'>
                      <h2>
                        <i class='fa-regular fa-heart'></i> Sách đã lưu
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='tab-content' id='nav-tabContent'>
            <div className='tab-pane fade show active' id='nav-home' role='tabpanel' aria-labelledby='nav-home-tab'>
              <div className='row'>
                {saves.map((book) => (
                  <BookItem book={book} />
                ))}
                {saves.length == 0 && <p>Bạn chưa lưu bất kì sách nào!</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Saves
