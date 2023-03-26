import './style.css'

function Books() {
  return (
    <div id="content" className="site-content">
      <div className="ast-container">
        <div
          className="widget-area secondary"
          id="secondary"
          itemType="https://schema.org/WPSideBar"
          itemScope="itemscope"
        >
          <div className="sidebar-main">
            <div className="ast-filter-wrap">
              <div
                id="block-8"
                className="ast-woo-sidebar-widget widget widget_block widget_search"
              >
                <form
                  role="search"
                  method="get"
                  action="https://websitedemos.net/earth-store-02/"
                  className="wp-block-search__button-outside wp-block-search__icon-button wp-block-search"
                >
                  <label
                    htmlFor="wp-block-search__input-1"
                    className="wp-block-search__label screen-reader-text"
                  >
                    Search
                  </label>
                  <div className="wp-block-search__inside-wrapper ">
                    <input
                      type="search"
                      id="wp-block-search__input-1"
                      className="wp-block-search__input wp-block-search__input"
                      name="s"
                      defaultValue
                      placeholder="Search products…"
                      required
                    />
                    <input
                      type="hidden"
                      name="post_type"
                      defaultValue="product"
                    />
                    <button
                      type="submit"
                      className="wp-block-search__button has-icon wp-element-button"
                      aria-label="Search"
                    >
                      <svg
                        className="search-icon"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div
                id="block-30"
                className="ast-woo-sidebar-widget widget widget_block"
              >
                <div
                  data-block-name="woocommerce/filter-wrapper"
                  data-filter-type="price-filter"
                  data-heading="Filter by price"
                  className="wp-block-woocommerce-filter-wrapper"
                >
                  <div className="wc-blocks-filter-wrapper">
                    <h3 className>Filter by price</h3>
                    <div className="wp-block-woocommerce-price-filter">
                      <div className="wc-block-price-slider">
                        <div className="wc-block-price-filter wc-block-components-price-slider wc-block-price-filter--has-input-fields wc-block-components-price-slider--has-input-fields wc-block-components-price-slider--is-input-inline">
                          <div className="wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper">
                            <div aria-hidden="true">
                              <div
                                className="wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress"
                                style={{ "--low": "-0.5%", "--high": "100.5%" }}
                              />
                              <input
                                type="range"
                                className="wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min"
                                aria-label="Filter products by minimum price"
                                aria-valuetext={10}
                                step={1}
                                min={1000}
                                max={3000}
                                tabIndex={-1}
                                defaultValue={1000}
                              />
                              <input
                                type="range"
                                className="wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max"
                                aria-label="Filter products by maximum price"
                                aria-valuetext={30}
                                step={1}
                                min={1000}
                                max={3000}
                                tabIndex={-1}
                                defaultValue={3000}
                              />
                            </div>
                          </div>
                          <div className="wc-block-price-filter__controls wc-block-components-price-slider__controls">
                            <input
                              className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min"
                              aria-label="Filter products by minimum price"
                              type="text"
                              defaultValue="$10.00"
                              inputMode="numeric"
                            />
                            <input
                              className="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max"
                              aria-label="Filter products by maximum price"
                              type="text"
                              defaultValue="$30.00"
                              inputMode="numeric"
                            />
                          </div>
                          <div className="wc-block-components-price-slider__actions" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="block-16"
                className="ast-woo-sidebar-widget widget widget_block"
              >
                <div
                  className="is-layout-constrained wp-container-2 wp-block-group has-ast-global-color-0-color has-text-color"
                  style={{
                    paddingTop: "0px",
                    paddingRight: "0px",
                    paddingBottom: "20px",
                    paddingLeft: "0px",
                  }}
                >
                  <div className="wp-block-group__inner-container">
                    <h2
                      className="has-ast-global-color-2-color has-text-color"
                      style={{ fontSize: "1.2em" }}
                    >
                      Categories
                    </h2>
                    <div
                      data-block-name="woocommerce/product-categories"
                      data-style='{"elements":{"link":{"color":{"text":"var:preset|color|ast-global-color-2"}}}}'
                      data-text-color="ast-global-color-0"
                      className="wp-elements-6cfc94774cd31a0945252ec8b477d717 wp-block-woocommerce-product-categories wc-block-product-categories is-list has-text-color has-ast-global-color-0-color"
                      style={{}}
                    >
                      <ul className="wc-block-product-categories-list wc-block-product-categories-list--depth-0">
                        {" "}
                        <li className="wc-block-product-categories-list-item">
                          {" "}
                          <a
                            style={{
                              color:
                                "var(--wp--preset--color--ast-global-color-2)",
                            }}
                            href="https://websitedemos.net/earth-store-02/product-category/postcards/"
                          >
                            <span className="wc-block-product-categories-list-item__name">
                              Postcards
                            </span>
                          </a>
                          <span className="wc-block-product-categories-list-item-count">
                            <span aria-hidden="true">6</span>
                            <span className="screen-reader-text">
                              6 products
                            </span>
                          </span>{" "}
                        </li>{" "}
                        <li className="wc-block-product-categories-list-item">
                          {" "}
                          <a
                            style={{
                              color:
                                "var(--wp--preset--color--ast-global-color-2)",
                            }}
                            href="https://websitedemos.net/earth-store-02/product-category/posters/"
                          >
                            <span className="wc-block-product-categories-list-item__name">
                              Posters
                            </span>
                          </a>
                          <span className="wc-block-product-categories-list-item-count">
                            <span aria-hidden="true">6</span>
                            <span className="screen-reader-text">
                              6 products
                            </span>
                          </span>{" "}
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="woocommerce_recently_viewed_products-3"
                className="ast-woo-sidebar-widget widget woocommerce widget_recently_viewed_products"
              >
                <h2 className="widget-title">Recently Viewed</h2>
                <ul className="product_list_widget">
                  <li>
                    <a href="https://websitedemos.net/earth-store-02/product/poster-v2/">
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster6-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />{" "}
                      <span className="product-title">Poster V2</span>
                    </a>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        17.99
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="primary" className="content-area primary">
          <main id="main" className="site-main">
            <div className="ast-woocommerce-container">
              <nav className="woocommerce-breadcrumb">
                <a href="https://websitedemos.net/earth-store-02">Home</a>
                &nbsp;/&nbsp;Shop
              </nav>
              <header className="woocommerce-products-header">
                <h1 className="woocommerce-products-header__title page-title">
                  Shop
                </h1>
              </header>
              <div className="woocommerce-notices-wrapper" />
              <p className="woocommerce-result-count">Showing all 12 results</p>
              <form className="woocommerce-ordering" method="get">
                <select
                  name="orderby"
                  className="orderby"
                  aria-label="Shop order"
                >
                  <option value="menu_order" selected="selected">
                    Default sorting
                  </option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="paged" defaultValue={1} />
              </form>
              <ul className="products columns-3">
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1132 status-publish first instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v1/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Postcard1-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1132"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1132}
                      data-product_sku
                      aria-label="Add “Postcard V1” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Postcards </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v1/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Postcard V1
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          23.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1131 status-publish instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v2/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/PostcardV2-min-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1131"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1131}
                      data-product_sku
                      aria-label="Add “Postcard V2” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Postcards </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v2/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Postcard V2
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          17.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1130 status-publish last instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v3/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Postcard3-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1130"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1130}
                      data-product_sku
                      aria-label="Add “Postcard V3” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Postcards </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v3/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Postcard V3
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          14.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1129 status-publish first instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v4/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Postcard-6-min-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Postcard-6-min-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Postcard-6-min-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Postcard-6-min-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1129"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1129}
                      data-product_sku
                      aria-label="Add “Postcard V4” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Postcards </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v4/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Postcard V4
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          23.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1128 status-publish instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v5/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/PostcardV5-min-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV5-min-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV5-min-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV5-min-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1128"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1128}
                      data-product_sku
                      aria-label="Add “Postcard V5” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Postcards </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v5/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Postcard V5
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          17.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-698 status-publish last instock product_cat-postcards has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v6/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/PostcardV6-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=698"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={698}
                      data-product_sku
                      aria-label="Add “Postcard V6” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Postcards </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/postcard-v6/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Postcard V6
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          14.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1138 status-publish first instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v1/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster5-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1138"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1138}
                      data-product_sku
                      aria-label="Add “Poster V1” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Posters </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v1/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Poster V1
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          23.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1137 status-publish instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v2/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster6-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1137"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1137}
                      data-product_sku
                      aria-label="Add “Poster V2” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Posters </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v2/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Poster V2
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          17.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1136 status-publish last instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v3/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster4-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1136"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1136}
                      data-product_sku
                      aria-label="Add “Poster V3” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Posters </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v3/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Poster V3
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          14.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1135 status-publish first instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v4/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster2-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster2-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster2-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster2-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1135"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1135}
                      data-product_sku
                      aria-label="Add “Poster V4” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Posters </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v4/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Poster V4
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          23.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1134 status-publish instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v5/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster3-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster3-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster3-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster3-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1134"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1134}
                      data-product_sku
                      aria-label="Add “Poster V5” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Posters </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v5/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Poster V5
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          17.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="ast-grid-common-col ast-full-width ast-article-post desktop-align-left tablet-align-left mobile-align-left product type-product post-1133 status-publish last instock product_cat-posters has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div className="astra-shop-thumbnail-wrap">
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v6/"
                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                    >
                      <img
                        width={1000}
                        height={1000}
                        src="./Shop - Planet Earth Store_files/Poster1-1000x1000.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster1-1000x1000.jpg 1000w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster1-100x100.jpg 100w, https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster1-150x150.jpg 150w"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                      />
                    </a>
                    <a
                      href="https://websitedemos.net/earth-store-02/shop/?add-to-cart=1133"
                      data-quantity={1}
                      className="ast-on-card-button ast-select-options-trigger product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={1133}
                      data-product_sku
                      aria-label="Add “Poster V6” to your cart"
                      rel="nofollow"
                    >
                      {" "}
                      <span className="ast-card-action-tooltip">
                        {" "}
                        Add to cart{" "}
                      </span>{" "}
                      <span className="ahfb-svg-iconset">
                        {" "}
                        <span className="ast-icon icon-bag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="ast-bag-icon-svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="826 826 140 140"
                            enableBackground="new 826 826 140 140"
                            xmlSpace="preserve"
                          >
                            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </a>
                  </div>
                  <div className="astra-shop-summary-wrap">
                    {" "}
                    <span className="ast-woo-product-category">Posters </span>
                    <a
                      href="https://websitedemos.net/earth-store-02/product/poster-v6/"
                      className="ast-loop-product__link"
                    >
                      <h2 className="woocommerce-loop-product__title">
                        Poster V6
                      </h2>
                    </a>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          14.99
                        </bdi>
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Books;
