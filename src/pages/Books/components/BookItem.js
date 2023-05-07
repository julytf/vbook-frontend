import { truncate } from 'helper'
import { Link } from 'react-router-dom'

function BookItem({ book }) {
  const discountPrice = book.price * (1 - book.discountPercent / 100)
  return (
    <div className='col-2'>
      <div className='single-product mb-60'>
        <div className='product-img'>
          <Link to={`/books/${book._id}`}>
            <img src={book.images[0]?.file} alt='' />
          </Link>
        </div>
        <div className='product-caption'>
          {/* <div className='product-ratting'>
            <i className='far fa-star' />
            <i className='far fa-star' />
            <i className='far fa-star' />
            <i className='far fa-star low-star' />
            <i className='far fa-star low-star' />
          </div> */}
          <h4>
            <a className='fs-6 text-black'>{truncate(book.name,25)}</a>
          </h4>
          <div className='price'>
            <ul>
              <li className='text-black d-inline'>{discountPrice.toLocaleString()}</li>
              {book.discountPercent != 0 && (
                <li className='discount d-inline ms-3' style={{ color: '#ff003c', textDecoration: 'line-through' }}>
                  {book.price.toLocaleString()}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookItem
