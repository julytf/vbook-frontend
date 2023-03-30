import { useContext, useLayoutEffect } from 'react'
import CartContext from 'utils/CartContext'
import CartItem from './components/CartItem'
import './style.css'

function Cart() {
  const { cart } = useContext(CartContext)
  console.log('Cart rerender')

  return (
    <div className='page-template-default page page-id-998 wp-custom-logo theme-astra woocommerce-cart woocommerce-page woocommerce-js ast-desktop ast-plain-container ast-no-sidebar astra-4.0.2 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-1345'>
      <div id='content' className='site-content'>
        <div className='ast-container'>
          <div id='primary' className='content-area primary'>
            <main id='main' className='site-main'>
              <article
                className='post-998 page type-page status-publish ast-article-single'
                id='post-998'
                itemType='https://schema.org/CreativeWork'
                itemScope='itemscope'
              >
                <header className='entry-header ast-no-thumbnail'>
                  <h1 className='entry-title' itemProp='headline'>
                    Cart
                  </h1>
                </header>
                {/* .entry-header */}
                <div className='entry-content clear' itemProp='text'>
                  <div className='woocommerce'>
                    <div className='woocommerce-notices-wrapper' />
                    <div className='woocommerce-cart-form'>
                      <table
                        className='shop_table shop_table_responsive cart woocommerce-cart-form__contents'
                        cellSpacing={0}
                      >
                        <thead>
                          <tr>
                            <th className='product-remove'>
                              <span className='screen-reader-text'>Remove item</span>
                            </th>
                            <th className='product-thumbnail'>
                              <span className='screen-reader-text'>Thumbnail image</span>
                            </th>
                            <th className='product-name'>Product</th>
                            <th className='product-price'>Price</th>
                            <th className='product-quantity'>Quantity</th>
                            <th className='product-subtotal'>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item) => (
                            <CartItem CartItem={item} />
                          ))}
                          {/* <tr className="woocommerce-cart-form__cart-item cart_item">
                            <td className="product-remove">
                              <a
                                href="https://websitedemos.net/earth-store-02/cart/?remove_item=47a658229eb2368a99f1d032c8848542&_wpnonce=472053c994"
                                className="remove"
                                aria-label="Remove this item"
                                data-product_id={1136}
                                data-product_sku
                              >
                                <span className="ahfb-svg-iconset ast-inline-flex">
                                  <svg
                                    className="ast-mobile-svg ast-close-svg"
                                    fill="currentColor"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
                                  </svg>
                                </span>
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="https://websitedemos.net/earth-store-02/product/poster-v3/">
                                <img
                                  width={1000}
                                  height={1000}
                                  src="./Cart - Planet Earth Store_files/Poster4-1000x1000.jpg"
                                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                  alt=""
                                  decoding="async"
                                  loading="lazy"
                                  srcSet="
                                      https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg 1000w,
                                      https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-100x100.jpg    100w,
                                      https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-150x150.jpg    150w
                                    "
                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                />
                              </a>
                            </td>
                            <td className="product-name" data-title="Product">
                              <a href="https://websitedemos.net/earth-store-02/product/poster-v3/">
                                Poster V3
                              </a>
                            </td>
                            <td className="product-price" data-title="Price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  14.99
                                </bdi>
                              </span>
                            </td>
                            <td
                              className="product-quantity"
                              data-title="Quantity"
                            >
                              <div className="quantity buttons_added">
                                <label
                                  className="screen-reader-text"
                                  htmlFor="minus_qty"
                                >
                                  Minus Quantity
                                </label>
                                <a
                                  href="javascript:void(0)"
                                  id="minus_qty"
                                  className="minus"
                                >
                                  -
                                </a>
                                <label
                                  className="screen-reader-text"
                                  htmlFor="quantity_642048807a762"
                                >
                                  Poster V3 quantity
                                </label>
                                <input
                                  type="number"
                                  id="quantity_642048807a762"
                                  className="input-text qty text"
                                  name="cart[47a658229eb2368a99f1d032c8848542][qty]"
                                  defaultValue={1}
                                  title="Qty"
                                  size={4}
                                  min={0}
                                  max
                                  step={1}
                                  placeholder
                                  inputMode="numeric"
                                  autoComplete="off"
                                />
                                <label
                                  className="screen-reader-text"
                                  htmlFor="plus_qty"
                                >
                                  Plus Quantity
                                </label>
                                <a
                                  href="javascript:void(0)"
                                  id="plus_qty"
                                  className="plus"
                                >
                                  +
                                </a>
                              </div>
                            </td>
                            <td
                              className="product-subtotal"
                              data-title="Subtotal"
                            >
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  14.99
                                </bdi>
                              </span>
                            </td>
                          </tr> */}
                          <tr>
                            <td colSpan={6} className='actions'>
                              <div className='coupon'>
                                <label htmlFor='coupon_code' className='screen-reader-text'>
                                  Coupon:
                                </label>
                                <input
                                  type='text'
                                  name='coupon_code'
                                  className='input-text'
                                  id='coupon_code'
                                  placeholder='Coupon code'
                                />
                                <button
                                  type='submit'
                                  className='button wp-element-button'
                                  name='apply_coupon'
                                  value='Apply coupon'
                                >
                                  Apply coupon
                                </button>
                              </div>
                              <button
                                type='submit'
                                className='button wp-element-button'
                                name='update_cart'
                                value='Update cart'
                                disabled
                                aria-disabled='true'
                              >
                                Update cart
                              </button>
                              <input
                                type='hidden'
                                id='woocommerce-cart-nonce'
                                name='woocommerce-cart-nonce'
                                defaultValue='472053c994'
                              />
                              <input type='hidden' name='_wp_http_referer' defaultValue='/earth-store-02/cart/' />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='cart-collaterals'>
                      <div className='cart_totals'>
                        <h2>Cart totals</h2>
                        <table cellSpacing={0} className='shop_table shop_table_responsive'>
                          <tbody>
                            <tr className='cart-subtotal'>
                              <th>Subtotal</th>
                              <td data-title='Subtotal'>
                                <span className='woocommerce-Price-amount amount'>
                                  <bdi>
                                    <span className='woocommerce-Price-currencySymbol'>$</span>
                                    32.98
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                            <tr className='order-total'>
                              <th>Total</th>
                              <td data-title='Total'>
                                <strong>
                                  <span className='woocommerce-Price-amount amount'>
                                    <bdi>
                                      <span className='woocommerce-Price-currencySymbol'>$</span>
                                      32.98
                                    </bdi>
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='wc-proceed-to-checkout'>
                          <a
                            href='https://websitedemos.net/earth-store-02/checkout/'
                            className='checkout-button button alt wc-forward wp-element-button'
                          >
                            Proceed to checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .entry-content .clear */}
              </article>
              {/* #post-## */}
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
        </div>
        {/* ast-container */}
      </div>
    </div>
  )
}

export default Cart
