import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

import './style.css'
import GlobalContext from 'utils/GlobalContext'

function BookDetail() {
  console.log('detail rerender')
  const { bookId } = useParams()

  const [book, setBook] = useState({})
  const [quantity, setQuantity] = useState(1)
  // const [isSaved, setIsSaved] = useState(false)
  const maxQuantity = 100

  const { addItem, syncCart } = useContext(GlobalContext).cart
  const { isSaved, toggleSave } = useContext(GlobalContext).saves

  useLayoutEffect(() => {
    axiosClient.get(`/books/${bookId}`).then((rs) => {
      setBook(rs.data.data.doc)
      // axiosClient.get(`/saves/${rs.data.data.doc._id}`).then((rs) => setIsSaved(rs.data.data.isSaved))
    })
  }, [])
  function handleQuantityChange(e) {
    setQuantity(e.target.value)
  }

  useEffect(() => {}, [])

  async function handleAddItem() {
    await addItem({ book, quantity })
    await syncCart()
  }

  function handleToggleSave() {
    toggleSave(book)
  }

  return (
    <div className='product_image_area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-5'>
            <div id='carouselExample' className='carousel slide'>
              <div className='carousel-inner'>
                {book.images?.map((image, i) => (
                  <div className={`carousel-item${i == 0 ? ' active' : ''}`}>
                    <img src={image.file} className='d-block w-100' alt='...' />
                  </div>
                ))}
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='prev'
              >
                <i class='fa-solid fa-angle-left fa-2xl' style={{ color: '#50a060' }}></i>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='next'
              >
                <span className='carousel-control-next-icon' aria-hidden='true' />
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
          <div className='col-7'>
            <div className='single_product_text text-center'>
              <h3>{book.name}</h3>
              <p>{book.description}</p>
              <div className='card_area'>
                <div className='product_count_area'>
                  <p>Quantity</p>
                  {/* <div className='product_count d-inline-block'>
                    <span className='product_count_item inumber-decrement'>
                      
                      <i className='ti-minus' />
                    </span>
                    <input className='product_count_item input-number' type='text' defaultValue={1} min={0} max={10} />
                    <span className='product_count_item number-increment'>
                      
                      <i className='ti-plus' />
                    </span>
                  </div> */}
                  <div class='input-group mx-3 mb-3 w-25'>
                    <button onClick={() => setQuantity((cur) => cur - 1)} class='input-group-text'>
                      -
                    </button>
                    <input
                      type='text'
                      class='form-control text-center'
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                    <button onClick={() => setQuantity((cur) => cur + 1)} class='input-group-text'>
                      +
                    </button>
                  </div>
                  <p>{book.price?.toLocaleString()}</p>
                </div>
                <div className='add_to_cart'>
                  <button onClick={handleToggleSave} className='btn_3 btn_red me-3'>
                    {!isSaved(book._id) && <i class='fa-regular fa-heart'></i>}
                    {isSaved(book._id) && <i class='fa-solid fa-heart'></i>}
                    <span> save</span>
                  </button>
                  <button onClick={handleAddItem} className='btn_3'>
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
