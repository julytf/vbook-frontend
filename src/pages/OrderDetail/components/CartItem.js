import { useContext } from "react"
import GlobalContext from "utils/GlobalContext"

function CartItem({ cartItem }) {
  return (
    <tr className="cart_item">
      <td>
        <div className='media'>
          <div className='d-flex'>
            <img src='assets/img/arrivel/arrivel_1.png' alt='' />
          </div>
          <div className='media-body'>
            <img src={cartItem.book?.images?.[0].file}/>
            <p>{cartItem.book.name}</p>
          </div>
        </div>
      </td>
      <td>
        <h4>{cartItem.book.price?.toLocaleString()}</h4>
      </td>
      <td>
        <div className='product_count'>
        {cartItem.quantity}
        </div>
      </td>
      <td>
        <h4>{(cartItem.book.price * +cartItem.quantity).toLocaleString()}</h4>
      </td>
    </tr>
  )
}

export default CartItem
