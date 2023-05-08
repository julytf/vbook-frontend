import Image from "pages/components/Image"
import { Link } from "react-router-dom"

function BookItem({book}) {
  const discountPrice = book.price*(1-(book.discountPercent/100))
  return (
    <div className='col-3'>
          <Link to={`/books/${book._id}`}>
      <div className='single-product mb-60'>
        <div className='product-img'>
          <Image src={book.images[0].file} alt='' />
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
            <a>{book.name}</a>
          </h4>
          <div className='price'>
            <ul>
              <li className="text-black">{discountPrice.toLocaleString()}</li>
              {book.discountPercent != 0 && <li className='discount'>{book.price.toLocaleString()}</li>}
            </ul>
          </div>
        </div>
      </div>
          </Link>
    </div>
  )
}

export default BookItem
