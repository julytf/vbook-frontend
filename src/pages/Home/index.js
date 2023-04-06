import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'
import BookItem from './components/BookItem'
import Responses from './components/Responses'
import BottomBanner from './components/BottomBanner'
import Promises from './components/Promises'
import Paginate from './components/Paginate'

import banner from 'assets/img/library-book-bookshelf-read.jpg'

// import './style.css'

function Home() {
  const [books, setBooks] = useState([])
  // console.log(books);
  const [page, setPage] = useState(1)
  // console.log(page)
  const [noPage, setNoPage] = useState(0)

  const mainContentRef = useRef()

  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) return
    mainContentRef.current.scrollIntoView()
  }, [page])

  useLayoutEffect(() => {
    axiosClient.get('/books', { params: { page } }).then((rs) => {
      // console.log(rs);
      setBooks(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }, [page])

  useEffect(() => {
    firstRenderRef.current = false
  }, [])
  return (
    <div className='home page-template-default page page-id-25 wp-custom-logo theme-astra woocommerce-js ast-desktop ast-page-builder-template ast-no-sidebar astra-4.0.2 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header elementor-default elementor-kit-1345 elementor-page elementor-page-25 e--ua-blink e--ua-chrome e--ua-webkit'>
      <div id='content' class='site-content'>
        <div class='ast-container' style={{ width: '100%', 'max-width': '100%' }}>
          <div id='primary' class='content-area primary' style={{ width: '100%', padding: 0 }}>
            <main id='main' class='site-main'>
              <article
                class='post-25 page type-page status-publish ast-article-single'
                id='post-25'
                itemtype='https://schema.org/CreativeWork'
                itemscope='itemscope'
              >
                <header class='entry-header ast-no-thumbnail ast-no-title ast-header-without-markup'></header>
                <div class='entry-content clear' itemprop='text'>
                  <div data-elementor-type='wp-page' data-elementor-id='25' class='elementor elementor-25'>
                    <section
                      class='elementor-section elementor-top-section elementor-element elementor-element-ea83c2f elementor-section-height-min-height elementor-section-items-top elementor-section-boxed elementor-section-height-default'
                      data-id='ea83c2f'
                      data-element_type='section'
                      data-settings='{"background_background":"classic"}'
                      style={{height: '300px'}}
                    >
                      <div class='elementor-background-overlay' style={{backgroundImage: `url(${banner})`}}></div>
                      <div class='elementor-container elementor-column-gap-default' style={{bottom: '60px', right: 0}}>
                        <div
                          class='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-62c99715'
                          data-id='62c99715'
                          data-element_type='column'
                        >
                          <div class='elementor-widget-wrap elementor-element-populated'>
                            {/* <div
                              class='elementor-element elementor-element-28fa1df0 elementor-widget elementor-widget-heading'
                              data-id='28fa1df0'
                              data-element_type='widget'
                              data-widget_type='heading.default'
                            >
                              <div class='elementor-widget-container'>
                                <h1 class='elementor-heading-title elementor-size-default'>Vbook</h1>
                              </div>
                            </div> */}
                            <div
                              class='elementor-element elementor-element-6238991a elementor-widget elementor-widget-heading'
                              data-id='6238991a'
                              data-element_type='widget'
                              data-widget_type='heading.default'
                            >
                              <div class='elementor-widget-container'>
                                <h2 class='elementor-heading-title elementor-size-default' style={{color: 'white'}}>
                                  "Để cho con một hòm vàng không bằng dạy cho con một quyển sách hay."
                                </h2>
                              </div>
                            </div>
                            {/* <div
                              class="elementor-element elementor-element-317b7a4a elementor-align-center elementor-widget elementor-widget-button"
                              data-id="317b7a4a"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    href="https://websitedemos.net/earth-store-02/#"
                                    class="elementor-button-link elementor-button elementor-size-sm"
                                    role="button"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">Shop Now</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      class='elementor-section elementor-top-section elementor-element elementor-element-77e79a24 elementor-section-boxed elementor-section-height-default elementor-section-height-default'
                      data-id='77e79a24'
                      data-element_type='section'
                      id='main_content'
                      ref={mainContentRef}
                    >
                      <div class='elementor-container elementor-column-gap-wide' style={{ flexDirection: 'column' }}>
                        <div
                          class='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-77d92fb'
                          data-id='77d92fb'
                          data-element_type='column'
                        >
                          <div class='elementor-widget-wrap elementor-element-populated'>
                            <div
                              class='elementor-element elementor-element-3dfcf11 elementor-widget elementor-widget-shortcode'
                              data-id='3dfcf11'
                              data-element_type='widget'
                              data-widget_type='shortcode.default'
                            >
                              <div class='elementor-widget-container'>
                                <div class='elementor-shortcode'>
                                  <div class='woocommerce columns-3'>
                                    <ul class='products columns-3'>
                                      {books.map((book) => (
                                        <BookItem book={book} />
                                      ))}
                                      {/* <li class="ast-article-single desktop-align-left tablet-align-left mobile-align-left product type-product post-1137 status-publish instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                        <div class="astra-shop-thumbnail-wrap">
                                          <a
                                            href="https://websitedemos.net/earth-store-02/product/poster-v2/"
                                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                          >
                                            <img
                                              width="1000"
                                              height="1000"
                                              src="./Home - Planet Earth Store_files/Poster6-1000x1000.jpg"
                                              class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              srcset="
                                            https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg 1000w,
                                            https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-100x100.jpg    100w,
                                            https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-150x150.jpg    150w
                                          "
                                              sizes="(max-width: 1000px) 100vw, 1000px"
                                            />
                                          </a>
                                          <a
                                            href="https://websitedemos.net/earth-store-02/?add-to-cart=1137"
                                            data-quantity="1"
                                            class="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                                            data-product_id="1137"
                                            data-product_sku=""
                                            aria-label="Add “Poster V2” to your cart"
                                            rel="nofollow"
                                          >
                                            <span class="ast-card-action-tooltip">
                                              Add to cart
                                            </span>
                                            <span class="ahfb-svg-iconset">
                                              <span class="ast-icon icon-bag">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  version="1.1"
                                                  id="ast-bag-icon-svg"
                                                  x="0px"
                                                  y="0px"
                                                  width="100"
                                                  height="100"
                                                  viewBox="826 826 140 140"
                                                  enable-background="new 826 826 140 140"
                                                  xmlSpace="preserve"
                                                >
                                                  <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
                                                </svg>
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                        <div class="astra-shop-summary-wrap">
                                          <span class="ast-woo-product-category">
                                            Posters
                                          </span>
                                          <a
                                            href="https://websitedemos.net/earth-store-02/product/poster-v2/"
                                            class="ast-loop-product__link"
                                          >
                                            <h2 class="woocommerce-loop-product__title">
                                              Poster V2
                                            </h2>
                                          </a>
                                          <span class="price">
                                            <span class="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span class="woocommerce-Price-currencySymbol">
                                                  $
                                                </span>
                                                17.99
                                              </bdi>
                                            </span>
                                          </span>
                                        </div>
                                      </li>
                                      <li class="ast-article-single desktop-align-left tablet-align-left mobile-align-left product type-product post-1136 status-publish last instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                        <div class="astra-shop-thumbnail-wrap">
                                          <a
                                            href="https://websitedemos.net/earth-store-02/product/poster-v3/"
                                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                          >
                                            <img
                                              width="1000"
                                              height="1000"
                                              src="./Home - Planet Earth Store_files/Poster4-1000x1000.jpg"
                                              class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              srcset="
                                            https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg 1000w,
                                            https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-100x100.jpg    100w,
                                            https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-150x150.jpg    150w
                                          "
                                              sizes="(max-width: 1000px) 100vw, 1000px"
                                            />
                                          </a>
                                          <a
                                            href="https://websitedemos.net/earth-store-02/?add-to-cart=1136"
                                            data-quantity="1"
                                            class="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                                            data-product_id="1136"
                                            data-product_sku=""
                                            aria-label="Add “Poster V3” to your cart"
                                            rel="nofollow"
                                          >
                                            <span class="ast-card-action-tooltip">
                                              Add to cart
                                            </span>
                                            <span class="ahfb-svg-iconset">
                                              <span class="ast-icon icon-bag">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  version="1.1"
                                                  id="ast-bag-icon-svg"
                                                  x="0px"
                                                  y="0px"
                                                  width="100"
                                                  height="100"
                                                  viewBox="826 826 140 140"
                                                  enable-background="new 826 826 140 140"
                                                  xmlSpace="preserve"
                                                >
                                                  <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
                                                </svg>
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                        <div class="astra-shop-summary-wrap">
                                          <span class="ast-woo-product-category">
                                            Posters
                                          </span>
                                          <a
                                            href="https://websitedemos.net/earth-store-02/product/poster-v3/"
                                            class="ast-loop-product__link"
                                          >
                                            <h2 class="woocommerce-loop-product__title">
                                              Poster V3
                                            </h2>
                                          </a>
                                          <span class="price">
                                            <span class="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span class="woocommerce-Price-currencySymbol">
                                                  $
                                                </span>
                                                14.99
                                              </bdi>
                                            </span>
                                          </span>
                                        </div>
                                      </li> */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
                      </div>
                    </section>
                    {/* <Responses/> */}
                    {/* <BottomBanner/> */}
                    {/* <Promises/> */}
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
