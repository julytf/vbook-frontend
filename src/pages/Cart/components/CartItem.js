import { truncate } from "helper";
import { useContext } from "react"
import GlobalContext from "utils/GlobalContext"

function CartItem({ cartItem }) {
  // console.log("cartItem rerender")
  const { updateItem } = useContext(GlobalContext).cart

  function handleIncrease() {
    console.log('increase');
    updateItem({ book: cartItem.book._id, quantity: cartItem.quantity + 1 })
  }
  function handleDecrease() {
    // console.log('decrease');
    updateItem({ book: cartItem.book._id, quantity: cartItem.quantity - 1 })
  }
  function handleChange(e) {
    updateItem({ book: cartItem.book._id, quantity: e.target.value })
  }
  return (
    <tr className="cart_item">
      <td>
        <div className='media'>
          <div className='d-flex'>
            <img src='assets/img/arrivel/arrivel_1.png' alt='' />
          </div>
          <div className='media-body'>
            <img src={cartItem.book.images[0].file}/>
            <p>{truncate(cartItem.book.name,70)}</p>
          </div>
        </div>
      </td>
      <td>
        <h4>{cartItem.book.price.toLocaleString()}</h4>
      </td>
      <td>
        <div className='product_count'>
          <div className='input-group input-group-sm mb-3'>
            <button className='input-group-text' onClick={handleDecrease}>
              -
            </button>
            <input
              type='text'
              className='form-control p-0 text-center'
              value={cartItem.quantity}
              onChange={handleChange}
              style={{ width: '50px' }}
            />
            <button className='input-group-text' onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <h4>{(cartItem.book.price * +cartItem.quantity).toLocaleString()}</h4>
      </td>
    </tr>
  )
}

export default CartItem
