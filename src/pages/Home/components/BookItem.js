import { Link } from "react-router-dom"

function BookItem({book}) {
  return (
    <div className='col-2'>
      <div className='single-product mb-60'>
        <div className='product-img'>
          <Link to={`/books/${book._id}`}>
          <img src={book.images[0].file} alt='' />
          </Link>
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
            <a href='#'>{book.name}</a>
          </h4>
          <div className='price'>
            <ul>
              <li>{book.price.toLocaleString()}</li>
              <li className='discount'>$60.00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookItem
