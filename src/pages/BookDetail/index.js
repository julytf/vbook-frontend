import { useContext, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

import './style.css'
import CartContext from 'utils/CartContext'

function BookDetail() {
  const { bookId } = useParams()

  const [book, setBook] = useState({})
  const [quantity, setQuantity] = useState(1)
  const maxQuantity = 100

  const { addItem,sync } = useContext(CartContext)

  function handleQuantityChange(e) {
    setQuantity(e.target.value)
  }

  function handleAddToCart() {
    addItem({ book, quantity })
    sync()
  }

  useLayoutEffect(() => {
    axiosClient.get(`/books/${bookId}`).then((rs) => setBook(rs.data.data.doc))
  }, [])

  return (
    <div className='product_image_area'>
      <div className='container'>
        <div className='row justify-content-center'>
          {/* <div className='col-5'>
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
                  {book.images?.map((image) => (
                    <div className='owl-item' style={{ width: '1140px' }}>
                      <div className='single_product_img'>
                        <img src={image.file} alt='#' className='img-fluid' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='owl-dots disabled' />
            </div>
          </div> */}
          <div className='col-7'>
            <div className='single_product_text text-center'>
              <h3>{book.name}</h3>
              <p>{book.description}</p>
              <div className='card_area'>
                <div className='product_count_area'>
                  <p>Quantity</p>
                  <div className='product_count d-inline-block'>
                    <div class='input-group input-group-sm'>
                      <button
                        onClick={() => setQuantity((cur) => cur - 1)}
                        class='input-group-text'
                      >
                        -
                      </button>
                      <input
                        type='text'
                        class='form-control text-center'
                        value={quantity}
                        onChange={handleQuantityChange}
                        style={{ width: '75px' }}
                      />
                      <button
                        onClick={() => setQuantity((cur) => cur + 1)}
                        class='input-group-text'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p>{book.price?.toLocaleString()}</p>
                </div>
                <div className='add_to_cart'>
                  <button onClick={handleAddToCart} className='btn_3'>
                    add to cart
                  </button>
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
