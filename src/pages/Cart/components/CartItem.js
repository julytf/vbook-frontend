import { useContext, useRef, useState } from "react"
import CartContext from "utils/CartContext"
import Cart from ".."

function CartItem({ cartItem }) {
  console.log("cartItem rerender")
  const { updateItem } = useContext(CartContext)

  function handleIncrease() {
    console.log('increase');
    updateItem({ book: cartItem.book._id, quantity: cartItem.quantity + 1 })
  }
  function handleDecrease() {
    console.log('decrease');
    updateItem({ book: cartItem.book._id, quantity: cartItem.quantity - 1 })
  }
  function handleChange(e) {
    updateItem({ book: cartItem.book._id, quantity: e.target.value })
  }
  return (
    <tr className='woocommerce-cart-form__cart-item cart_item'>
      <td className='product-remove'>
        <a
          href='https://websitedemos.net/earth-store-02/cart/?remove_item=801c14f07f9724229175b8ef8b4585a8&_wpnonce=472053c994'
          className='remove'
          aria-label='Remove this item'
          data-product_id={1137}
          data-product_sku
        >
          <span className='ahfb-svg-iconset ast-inline-flex'>
            <svg
              className='ast-mobile-svg ast-close-svg'
              fill='currentColor'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
            >
              <path d='M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z' />
            </svg>
          </span>
        </a>
      </td>
      <td className='product-thumbnail'>
        <a href='https://websitedemos.net/earth-store-02/product/poster-v2/'>
          <img
            width={1000}
            height={1000}
            src={cartItem.book?.images?.[0].file}
            className='attachment-woocommerce_thumbnail size-woocommerce_thumbnail'
            alt=''
            decoding='async'
            loading='lazy'
            sizes='(max-width: 1000px) 100vw, 1000px'
          />
        </a>
      </td>
      <td className='product-name' data-title='Product'>
        <a href='https://websitedemos.net/earth-store-02/product/poster-v2/'>{cartItem.book.name}</a>
      </td>
      <td className='product-price' data-title='Price'>
        <span className='woocommerce-Price-amount amount'>
          <bdi>
            {/* <span className='woocommerce-Price-currencySymbol'>$</span> */}
            {cartItem.book.price.toLocaleString()}
          </bdi>
        </span>
      </td>
      <td className='product-quantity' data-title='Quantity'>
        <div className='quantity buttons_added'>
          <label className='screen-reader-text' htmlFor='minus_qty'>
            Minus Quantity
          </label>
          <button onClick={handleDecrease} id='minus_qty' className='minus'>
            -
          </button>
          <label className='screen-reader-text' htmlFor='quantity_642048807a336'>
            Poster V2 quantity
          </label>
          <input
            type='number'
            className='input-text qty text'
            title='Qty'
            size={4}
            min={0}
            max
            step={1}
            value={cartItem.quantity}
            onChange={handleChange}
          />
          <label className='screen-reader-text' htmlFor='plus_qty'>
            Plus Quantity
          </label>
          <button onClick={handleIncrease} id='plus_qty' className='plus'>
            +
          </button>
        </div>
      </td>
      <td className='product-subtotal' data-title='Subtotal'>
        <span className='woocommerce-Price-amount amount'>
          <bdi>
            {/* <span className='woocommerce-Price-currencySymbol'>$</span> */}
            {(cartItem.quantity * cartItem.book.price).toLocaleString()}
          </bdi>
        </span>
      </td>
    </tr>
  )
}

export default CartItem
