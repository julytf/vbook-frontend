import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'
import { useNavigate, useSearchParams } from 'react-router-dom'

import './style.css'
import { truncate } from 'helper'
import BookItem from './components/BookItem'
import Pagination from './components/Pagination'

function Books() {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
  // console.log(params.q);

  const [books, setBooks] = useState([])
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [noPage, setNoPage] = useState(1)
  const [perPage, setPetPage] = useState(30)
  const [query, setQuery] = useState(searchParams.get('q') || '')
  console.log(books)
  // console.log(page)

  const queryRef = useRef()

  const navigate = useNavigate()

  useLayoutEffect(() => {
    navigate({
      search: `?q=${query}&page=${page}`,
    })
    axiosClient.get('/books', { params: { page, q: query, perPage } }).then((rs) => {
      // console.log(rs);
      setBooks(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
    console.log(page, query)
  }, [page, query])

  function handleSearch(e) {
    e.preventDefault()

    const q = queryRef.current.value

    setPage(1)
    setQuery(q)
  }

  return (
    <section className='product_list '>
      <div className='container'>
        <div className='slider-area'>
          <div className='single-slider slider-height2 d-flex align-items-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='hero-cap text-center'>
                    <h2>Tìm kiếm sách</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <form onSubmit={handleSearch}>
              <div className='product_sidebar'>
                <div className='single_sedebar'>
                  <input type='text' ref={queryRef} defaultValue={query} placeholder='Nhập từ khóa ...' />
                  <i className='ti-search' />
                </div>
                {/* <div className='single_sedebar'>
                <div className='select_option'>
                  <div className='select_option_list'>
                    Category <i className='right fas fa-caret-down' />
                  </div>
                </div>
              </div>
              <div className='single_sedebar'>
                <div className='select_option'>
                  <div className='select_option_list'>
                    Type <i className='right fas fa-caret-down' />
                  </div>
                  </div>
                </div> */}
                <input className='btn_3 float-end' type='Submit' value={'Tìm Kiếm'} />
              </div>
            </form>
          </div>
          <div className='col-md-9'>
            <div className='product_list'>
              <div className='row'>
                {books.map((book) => (
                  <BookItem key={book._id} book={book} />
                ))}
              </div>
              <div className='load_more_btn text-center float-end'>
                <Pagination page={page} noPage={noPage} setPage={setPage} range={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Books
