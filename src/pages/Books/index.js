import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'
import { useNavigate } from 'react-router-dom'

import './style.css'

function Books() {
  const navigate = useNavigate()

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
  // console.log(params.q);

  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [noPage, setNoPage] = useState(0)
  const [query, setQuery] = useState(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    return params.q
  })
  console.log(books)
  // console.log(page)

  const queryRef = useRef()

  useLayoutEffect(() => {
    axiosClient.get('/books', { params: { page, q: query } }).then((rs) => {
      // console.log(rs);
      setBooks(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
    console.log(page, query)
  }, [page, query])

  function handleSearch(e) {
    e.preventDefault()

    const q = queryRef.current.value

    navigate({
      pathname: '/books',
      search: `?q=${q}`,
    })

    setQuery(q)
  }

  return (
    <section className='product_list section_padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='product_sidebar'>
              <div className='single_sedebar'>
                <form action='#'>
                  <input type='text' name='#' placeholder='Search keyword' />
                  <i className='ti-search' />
                </form>
              </div>
              <div className='single_sedebar'>
                <div className='select_option'>
                  <div className='select_option_list'>
                    Category <i className='right fas fa-caret-down' />{' '}
                  </div>
                  <div className='select_option_dropdown' style={{ display: 'none' }}>
                    <p>
                      <a href='#'>Category 1</a>
                    </p>
                    <p>
                      <a href='#'>Category 2</a>
                    </p>
                    <p>
                      <a href='#'>Category 3</a>
                    </p>
                    <p>
                      <a href='#'>Category 4</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='single_sedebar'>
                <div className='select_option'>
                  <div className='select_option_list'>
                    Type <i className='right fas fa-caret-down' />{' '}
                  </div>
                  <div className='select_option_dropdown' style={{ display: 'none' }}>
                    <p>
                      <a href='#'>Type 1</a>
                    </p>
                    <p>
                      <a href='#'>Type 2</a>
                    </p>
                    <p>
                      <a href='#'>Type 3</a>
                    </p>
                    <p>
                      <a href='#'>Type 4</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='product_list'>
              <div className='row'>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product6.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Cervical pillow for airplane car office nap pillow</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product2.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Geometric striped flower home classy decor</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product5.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Foam filling cotton slow rebound pillows</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product6.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Memory foam filling cotton Slow rebound pillows</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product1.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Memory foam filling cotton Slow rebound pillows</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product4.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Sleeping orthopedic sciatica Back Hip Joint Pain relief</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product5.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Memory foam filling cotton Slow rebound pillows</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product3.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Sleeping orthopedic sciatica Back Hip Joint Pain relief</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product2.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Geometric striped flower home classy decor</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6'>
                  <div className='single_product_item'>
                    <img src='assets/img/categori/product1.png' alt='' className='img-fluid' />
                    <h3>
                      {' '}
                      <a href='single-product.html'>Geometric striped flower home classy decor</a>{' '}
                    </h3>
                    <p>From $5</p>
                  </div>
                </div>
              </div>
              <div className='load_more_btn text-center'>
                <a href='#' className='btn_3'>
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Books
