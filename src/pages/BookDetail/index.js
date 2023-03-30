import { useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "utils/axiosClient"

import "./style.css"

import RelatedProducts from "./components/RelatedProducts"

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
    <div className='product-template-default single single-product postid-1131 wp-custom-logo theme-astra woocommerce woocommerce-page woocommerce-js ast-desktop ast-plain-container ast-no-sidebar astra-4.0.2 ast-blog-single-style-1 ast-custom-post-type ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-1345'>
      <div id='content' className='site-content'>
        <div className='ast-container'>
          <div id='primary' className='content-area primary'>
            <main id='main' className='site-main'>
              <div className='ast-woocommerce-container'>
                <div className='woocommerce-notices-wrapper' />
                <div
                  id='product-1131'
                  className='ast-article-single ast-woo-product-no-review desktop-align-left tablet-align-left mobile-align-left product type-product post-1131 status-publish first instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple'
                >
                  <div
                    className='woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images'
                    data-columns={4}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.25s ease-in-out 0s",
                    }}
                  >
                    <a href='#' className='woocommerce-product-gallery__trigger'>
                      <img
                        draggable='false'
                        role='img'
                        className='emoji'
                        alt='🔍'
                        src='https://s.w.org/images/core/emoji/14.0.0/svg/1f50d.svg'
                      />
                    </a>
                    <figure className='woocommerce-product-gallery__wrapper'>
                      <div
                        data-thumb='https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-100x100.jpg'
                        data-thumb-alt
                        className='woocommerce-product-gallery__image'
                        style={{ position: "relative", overflow: "hidden" }}
                      >
                        <a href='https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min.jpg'>
                          <img
                            width={1000}
                            height={667}
                            src={book.images?.[0].file}
                            className='wp-post-image'
                            alt=''
                            decoding='async'
                            loading='lazy'
                            title='PostcardV2-min'
                            data-caption
                            data-large_image_width={1500}
                            data-large_image_height={1000}
                            sizes='(max-width: 1000px) 100vw, 1000px'
                          />
                        </a>
                        <img
                          role='presentation'
                          alt=''
                          src='https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min.jpg'
                          className='zoomImg'
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            opacity: 0,
                            width: "1500px",
                            height: "1000px",
                            border: "none",
                            maxWidth: "none",
                            maxHeight: "none",
                          }}
                        />
                      </div>
                    </figure>
                  </div>
                  <div className='summary entry-summary'>
                    <nav className='woocommerce-breadcrumb'>
                      <a href='https://websitedemos.net/earth-store-02'>Home</a>
                      &nbsp;/&nbsp;
                      <a href='https://websitedemos.net/earth-store-02/product-category/postcards/'>Postcards</a>
                      &nbsp;/&nbsp;Postcard V2
                    </nav>
                    <span className='single-product-category'>
                      <a href='https://websitedemos.net/earth-store-02/product-category/postcards/' rel='tag'>
                        Postcards
                      </a>
                    </span>
                    <h1 className='product_title entry-title'>{book.name}</h1>
                    <p className='price'>
                      <span className='woocommerce-Price-amount amount'>
                        <bdi>
                          {/* <span className="woocommerce-Price-currencySymbol">
                            $
                          </span> */}
                          {book.price?.toLocaleString()}
                        </bdi>
                      </span>
                    </p>
                    <div className='woocommerce-product-details__short-description'>
                      <p>{/* {book.description} */}</p>
                    </div>
                    <div className='cart quantity-control'>
                      <div className='quantity buttons_added'>
                        <label className='screen-reader-text' htmlFor='minus_qty'>
                          Minus Quantity
                        </label>
                        <button
                          onClick={() => setQuantity((cur) => (cur - 1 > 0 ? cur - 1 : 0))}
                          id='minus_qty'
                          className='minus'
                        >
                          -
                        </button>
                        <label className='screen-reader-text' htmlFor='quantity_642102ee7f7d0'>
                          Postcard V2 quantity
                        </label>
                        <input
                          type='number'
                          className='input-text qty text'
                          name='quantity'
                          title='Qty'
                          size={4}
                          min={1}
                          max
                          step={1}
                          value={quantity}
                          onChange={handleQuantityChange}
                        />
                        <label className='screen-reader-text' htmlFor='plus_qty'>
                          Plus Quantity
                        </label>
                        <button
                          onClick={() => setQuantity((cur) => (cur + 1 < maxQuantity ? cur + 1 : maxQuantity))}
                          id='plus_qty'
                          className='plus'
                        >
                          +
                        </button>
                      </div>
                      <button
                        type='submit'
                        name='add-to-cart'
                        value={1131}
                        className='single_add_to_cart_button button alt wp-element-button'
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className='product_meta'>
                      <span className='posted_in'>
                        Category:
                        <a href='https://websitedemos.net/earth-store-02/product-category/postcards/' rel='tag'>
                          Postcards
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className='woocommerce-tabs wc-tabs-wrapper'>
                    <ul className='tabs wc-tabs' role='tablist'>
                      <li
                        className='description_tab active'
                        id='tab-title-description'
                        role='tab'
                        aria-controls='tab-description'
                      >
                        <a href='#tab-description'> Description </a>
                      </li>
                      <li className='reviews_tab' id='tab-title-reviews' role='tab' aria-controls='tab-reviews'>
                        <a href='#tab-reviews'> Reviews (0) </a>
                      </li>
                    </ul>
                    <div
                      className='woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab'
                      id='tab-description'
                      role='tabpanel'
                      aria-labelledby='tab-title-description'
                      style={{}}
                    >
                      {/* <p className="ProductDescription-attributeHeader">
                        <strong>Paper Type: Matte</strong>
                      </p> */}
                      <div className='ProductDescription-attributeValueInfo'>
                        <div className='ProductDescription-attributeValueDescription'>
                          <ul>
                            <li>
                              <b>Tác giả:</b> {book.author}
                            </li>
                            <li>
                              <b>NXB:</b> {book.publisher}
                            </li>
                            <li>
                              <b>Ngôn Ngữ:</b> {book.language}
                            </li>
                            <li>
                              <b>Trọng lượng (gr):</b> {book.weight}
                            </li>
                            <li>
                              <b>Kích Thước Bao Bì:</b> {book.form}
                            </li>
                            <li>
                              <b>Số trang:</b> {book.noPage}
                            </li>
                            <li>
                              <b>Hình thức:</b> {book.form}
                            </li>
                          </ul>
                          {/* <p className="ProductDescription-attributeHeader">
                            <strong>Paper Type: Semi-Gloss</strong>
                          </p>
                          <div className="ProductDescription-attributeValueInfo">
                            <div className="ProductDescription-attributeValueDescription">
                              <ul>
                                <li>12.5 pt thickness / 110 lb weight</li>
                                <li>Bright white, semi-gloss finish</li>
                                <li>50% recycled content</li>
                                <li>FSC certified</li>
                                <li>Paper imported from Italy; printed in the USA</li>
                              </ul>
                            </div>
                          </div> */}
                          {/* <p>
                            <strong>Note:</strong>&nbsp;
                            <em>There may be a slight difference in actual color, due to the colors of display.</em>
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className='woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab'
                      id='tab-reviews'
                      role='tabpanel'
                      aria-labelledby='tab-title-reviews'
                      style={{ display: "none" }}
                    >
                      <div id='reviews' className='woocommerce-Reviews'>
                        <div id='comments'>
                          <h2 className='woocommerce-Reviews-title'>Reviews</h2>
                          <p className='woocommerce-noreviews'>There are no reviews yet.</p>
                        </div>
                        <div id='review_form_wrapper'>
                          <div id='review_form'>
                            <div id='respond' className='comment-respond'>
                              <span id='reply-title' className='comment-reply-title'>
                                Be the first to review “Postcard V2”
                                <small>
                                  <a
                                    rel='nofollow'
                                    id='cancel-comment-reply-link'
                                    href='/earth-store-02/product/postcard-v2/#respond'
                                    style={{ display: "none" }}
                                  >
                                    Cancel reply
                                  </a>
                                </small>
                              </span>
                              <form
                                action='https://websitedemos.net/earth-store-02/wp-comments-post.php'
                                method='post'
                                id='commentform'
                                className='comment-form'
                              >
                                <p className='comment-notes'>
                                  <span id='email-notes'>Your email address will not be published.</span>
                                  <span className='required-field-message'>
                                    Required fields are marked
                                    <span className='required'>*</span>
                                  </span>
                                </p>
                                <div className='comment-form-rating'>
                                  <label htmlFor='rating'>
                                    Your rating&nbsp;
                                    <span className='required'>*</span>
                                  </label>
                                  <p className='stars'>
                                    <span>
                                      <a className='star-1' href='#'>
                                        1
                                      </a>
                                      <a className='star-2' href='#'>
                                        2
                                      </a>
                                      <a className='star-3' href='#'>
                                        3
                                      </a>
                                      <a className='star-4' href='#'>
                                        4
                                      </a>
                                      <a className='star-5' href='#'>
                                        5
                                      </a>
                                    </span>
                                  </p>
                                  <select name='rating' id='rating' required style={{ display: "none" }}>
                                    <option value>Rate…</option>
                                    <option value={5}>Perfect</option>
                                    <option value={4}>Good</option>
                                    <option value={3}>Average</option>
                                    <option value={2}>Not that bad</option>
                                    <option value={1}>Very poor</option>
                                  </select>
                                </div>
                                <p className='comment-form-comment'>
                                  <label htmlFor='comment'>
                                    Your review&nbsp;
                                    <span className='required'>*</span>
                                  </label>
                                  <textarea
                                    autoComplete='new-password'
                                    id='comment'
                                    name='ebd1feafec'
                                    cols={45}
                                    rows={8}
                                    required
                                    defaultValue={""}
                                  />
                                  <textarea
                                    id='af4cb073646b03c241984b4a5afebeb2'
                                    aria-label='hp-comment'
                                    aria-hidden='true'
                                    name='comment'
                                    autoComplete='new-password'
                                    style={{
                                      padding: "0 !important",
                                      clip: "rect(1px, 1px, 1px, 1px) !important",
                                      position: "absolute !important",
                                      whiteSpace: "nowrap !important",
                                      height: "1px !important",
                                      width: "1px !important",
                                      overflow: "hidden !important",
                                    }}
                                    tabIndex={-1}
                                    defaultValue={""}
                                  />
                                </p>
                                <p className='comment-form-author'>
                                  <label htmlFor='author'>
                                    Name&nbsp;
                                    <span className='required'>*</span>
                                  </label>
                                  <input id='author' name='author' type='text' defaultValue size={30} required />
                                </p>
                                <p className='comment-form-email'>
                                  <label htmlFor='email'>
                                    Email&nbsp;
                                    <span className='required'>*</span>
                                  </label>
                                  <input id='email' name='email' type='email' defaultValue size={30} required />
                                </p>
                                <p className='comment-form-cookies-consent'>
                                  <input
                                    id='wp-comment-cookies-consent'
                                    name='wp-comment-cookies-consent'
                                    type='checkbox'
                                    defaultValue='yes'
                                  />
                                  <label htmlFor='wp-comment-cookies-consent'>
                                    Save my name, email, and website in this browser for the next time I comment.
                                  </label>
                                </p>
                                <p className='form-submit'>
                                  <input
                                    name='submit'
                                    type='submit'
                                    id='submit'
                                    className='submit'
                                    defaultValue='Submit'
                                  />
                                  <input
                                    type='hidden'
                                    name='comment_post_ID'
                                    defaultValue={1131}
                                    id='comment_post_ID'
                                  />
                                  <input type='hidden' name='comment_parent' id='comment_parent' defaultValue={0} />
                                </p>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className='clear' />
                      </div>
                    </div>
                  </div>
                  {/* <RelatedProducts/> */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
