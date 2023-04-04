import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './style.css'
import BookItem from './components/BookItem'
import axiosClient from 'utils/axiosClient'
import Paginate from './components/Paginate'
import { useNavigate } from 'react-router-dom'

function Books() {
  const navigate = useNavigate()

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
  // console.log(params.q);

  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [noPage, setNoPage] = useState(0)
  const [query, setQuery] = useState(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    return params.q
  })
  console.log(books);
  // console.log(page)

  const queryRef = useRef()

  useLayoutEffect(() => {
    axiosClient.get('/books', { params: { page, q: query } }).then((rs) => {
      // console.log(rs);
      setBooks(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
    console.log(page, query);
  }, [page, query])

  function handleSearch(e) {
    e.preventDefault()

    const q = queryRef.current.value

    navigate({
      pathname: '/books',
      search: `?q=${q}`,
    })

    setQuery(q)
  }

  return (
    <div className='archive post-type-archive post-type-archive-product wp-custom-logo theme-astra woocommerce-shop woocommerce woocommerce-page woocommerce-js ast-desktop ast-plain-container ast-left-sidebar astra-4.0.2 columns-3 tablet-columns-3 mobile-columns-1 ast-woo-shop-archive ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-kit-1345'>
      <div id='content' className='site-content shop-content'>
        <div className='ast-container'>
          <div
            className='widget-area secondary'
            id='secondary'
            itemType='https://schema.org/WPSideBar'
            itemScope='itemscope'
          >
            <div className='sidebar-main'>
              <div className='ast-filter-wrap'>
                <div id='block-8' className='ast-woo-sidebar-widget widget widget_block widget_search'>
                  <form
                    onSubmit={handleSearch}
                    role='search'
                    className='wp-block-search__button-outside wp-block-search__icon-button wp-block-search'
                  >
                    <label htmlFor='wp-block-search__input-1' className='wp-block-search__label screen-reader-text'>
                      Search
                    </label>
                    <div className='wp-block-search__inside-wrapper '>
                      <input
                        type='search'
                        className='wp-block-search__input wp-block-search__input'
                        placeholder='Search products…'
                        ref={queryRef}
                        defaultValue={query}
                      />
                      <input type='hidden' name='post_type' />
                      <button
                        type='submit'
                        className='wp-block-search__button has-icon wp-element-button'
                        aria-label='Search'
                      >
                        <svg className='search-icon' viewBox='0 0 24 24' width={24} height={24}>
                          <path d='M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z' />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div id='block-30' className='ast-woo-sidebar-widget widget widget_block'>
                  <div
                    data-block-name='woocommerce/filter-wrapper'
                    data-filter-type='price-filter'
                    data-heading='Filter by price'
                    className='wp-block-woocommerce-filter-wrapper'
                  >
                    <div className='wc-blocks-filter-wrapper'>
                      <h3 className>Filter by price</h3>
                      <div className='wp-block-woocommerce-price-filter'>
                        <div className='wc-block-price-slider'>
                          <div className='wc-block-price-filter wc-block-components-price-slider wc-block-price-filter--has-input-fields wc-block-components-price-slider--has-input-fields wc-block-components-price-slider--is-input-inline'>
                            <div className='wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper'>
                              <div aria-hidden='true'>
                                <div
                                  className='wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress'
                                  style={{
                                    '--low': '-0.5%',
                                    '--high': '100.5%',
                                  }}
                                />
                                <input
                                  type='range'
                                  className='wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min'
                                  aria-label='Filter products by minimum price'
                                  aria-valuetext={10}
                                  step={1}
                                  min={1000}
                                  max={3000}
                                  tabIndex={-1}
                                  defaultValue={1000}
                                />
                                <input
                                  type='range'
                                  className='wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max'
                                  aria-label='Filter products by maximum price'
                                  aria-valuetext={30}
                                  step={1}
                                  min={1000}
                                  max={3000}
                                  tabIndex={-1}
                                  defaultValue={3000}
                                />
                              </div>
                            </div>
                            <div className='wc-block-price-filter__controls wc-block-components-price-slider__controls'>
                              <input
                                className='wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min'
                                aria-label='Filter products by minimum price'
                                type='text'
                                defaultValue='$10.00'
                                inputMode='numeric'
                              />
                              <input
                                className='wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max'
                                aria-label='Filter products by maximum price'
                                type='text'
                                defaultValue='$30.00'
                                inputMode='numeric'
                              />
                            </div>
                            <div className='wc-block-components-price-slider__actions' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id='block-16' className='ast-woo-sidebar-widget widget widget_block'>
                  <div
                    className='is-layout-constrained wp-container-2 wp-block-group has-ast-global-color-0-color has-text-color'
                    style={{
                      paddingTop: '0px',
                      paddingRight: '0px',
                      paddingBottom: '20px',
                      paddingLeft: '0px',
                    }}
                  >
                    <div className='wp-block-group__inner-container'>
                      <h2 className='has-ast-global-color-2-color has-text-color' style={{ fontSize: '1.2em' }}>
                        Categories
                      </h2>
                      <div
                        data-block-name='woocommerce/product-categories'
                        data-style='{"elements":{"link":{"color":{"text":"var:preset|color|ast-global-color-2"}}}}'
                        data-text-color='ast-global-color-0'
                        className='wp-elements-6cfc94774cd31a0945252ec8b477d717 wp-block-woocommerce-product-categories wc-block-product-categories is-list has-text-color has-ast-global-color-0-color'
                        style={{}}
                      >
                        <ul className='wc-block-product-categories-list wc-block-product-categories-list--depth-0'>
                          {' '}
                          <li className='wc-block-product-categories-list-item'>
                            {' '}
                            <a
                              style={{
                                color: 'var(--wp--preset--color--ast-global-color-2)',
                              }}
                              href='https://websitedemos.net/earth-store-02/product-category/postcards/'
                            >
                              <span className='wc-block-product-categories-list-item__name'>Postcards</span>
                            </a>
                            <span className='wc-block-product-categories-list-item-count'>
                              <span aria-hidden='true'>6</span>
                              <span className='screen-reader-text'>6 products</span>
                            </span>{' '}
                          </li>{' '}
                          <li className='wc-block-product-categories-list-item'>
                            {' '}
                            <a
                              style={{
                                color: 'var(--wp--preset--color--ast-global-color-2)',
                              }}
                              href='https://websitedemos.net/earth-store-02/product-category/posters/'
                            >
                              <span className='wc-block-product-categories-list-item__name'>Posters</span>
                            </a>
                            <span className='wc-block-product-categories-list-item-count'>
                              <span aria-hidden='true'>6</span>
                              <span className='screen-reader-text'>6 products</span>
                            </span>{' '}
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id='woocommerce_recently_viewed_products-3'
                  className='ast-woo-sidebar-widget widget woocommerce widget_recently_viewed_products'
                >
                  <h2 className='widget-title'>Recently Viewed</h2>
                  <ul className='product_list_widget'>
                    <li>
                      <a href='https://websitedemos.net/earth-store-02/product/poster-v2/'>
                        <img
                          width={1000}
                          height={1000}
                          src='./Shop - Planet Earth Store_files/Poster6-1000x1000.jpg'
                          className='attachment-woocommerce_thumbnail size-woocommerce_thumbnail'
                          alt=''
                          decoding='async'
                          loading='lazy'
                          srcSet='https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-150x150.jpg 150w'
                          sizes='(max-width: 1000px) 100vw, 1000px'
                        />{' '}
                        <span className='product-title'>Poster V2</span>
                      </a>
                      <span className='woocommerce-Price-amount amount'>
                        <bdi>
                          <span className='woocommerce-Price-currencySymbol'>$</span>
                          17.99
                        </bdi>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id='primary' className='content-area primary'>
            <main id='main' className='site-main'>
              <div className='ast-woocommerce-container'>
                <nav className='woocommerce-breadcrumb'>
                  <a href='https://websitedemos.net/earth-store-02'>Home</a>
                  &nbsp;/&nbsp;Shop
                </nav>
                <header className='woocommerce-products-header'>
                  <h1 className='woocommerce-products-header__title page-title'>Shop</h1>
                </header>
                <div className='woocommerce-notices-wrapper' />
                <p className='woocommerce-result-count'>Showing all 12 results</p>
                <form className='woocommerce-ordering' method='get'>
                  <select name='orderby' className='orderby' aria-label='Shop order'>
                    <option value='menu_order' selected='selected'>
                      Default sorting
                    </option>
                    <option value='popularity'>Sort by popularity</option>
                    <option value='rating'>Sort by average rating</option>
                    <option value='date'>Sort by latest</option>
                    <option value='price'>Sort by price: low to high</option>
                    <option value='price-desc'>Sort by price: high to low</option>
                  </select>
                  <input type='hidden' name='paged' defaultValue={1} />
                </form>
                <ul className='products columns-3'>
                  {books.map((book) => (
                    <BookItem book={book} key={book._id} />
                  ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
        <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
      </div>
    </div>
  )
}

export default Books
