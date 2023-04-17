import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

import './style.css'

function BookDetail() {
  const { bookId } = useParams()

  const [book, setBook] = useState({})
  const [quantity, setQuantity] = useState(1)
  const maxQuantity = 100

  function handleQuantityChange(e) {
    setQuantity(e.target.value)
  }

  useLayoutEffect(() => {
    axiosClient.get(`/books/${bookId}`).then((rs) => setBook(rs.data.data.doc))
  }, [])

  return (
    <div className='product_image_area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-5'>
            <div className='product_img_slide owl-carousel owl-loaded owl-drag'>
              <div className='owl-stage-outer'>
                <div
                  className='owl-stage'
                  style={{
                    transform: 'translate3d(-4560px, 0px, 0px)',
                    transition: 'all 0.25s ease 0s',
                    width: '7980px',
                  }}
                >
                  {book.images.map((image) => (
                    <div className='owl-item' style={{ width: '1140px' }}>
                      <div className='single_product_img'>
                        <img src={image.file} alt='#' className='img-fluid' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className='owl-nav'>
                <button type='button' role='presentation' className='owl-prev'>
                  {' '}
                  <i className='ti-angle-left' />{' '}
                </button>
                <button type='button' role='presentation' className='owl-next'>
                  <i className='ti-angle-right' />{' '}
                </button>
              </div> */}
              <div className='owl-dots disabled' />
            </div>
          </div>
          <div className='col-7'>
            <div className='single_product_text text-center'>
              <h3>{book.name}</h3>
              <p>
                {book.description}
              </p>
              <div className='card_area'>
                <div className='product_count_area'>
                  <p>Quantity</p>
                  <div className='product_count d-inline-block'>
                    <span className='product_count_item inumber-decrement'>
                      {' '}
                      <i className='ti-minus' />
                    </span>
                    <input className='product_count_item input-number' type='text' defaultValue={1} min={0} max={10} />
                    <span className='product_count_item number-increment'>
                      {' '}
                      <i className='ti-plus' />
                    </span>
                  </div>
                  <p>$5</p>
                </div>
                <div className='add_to_cart'>
                  <a href='#' className='btn_3'>
                    add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
