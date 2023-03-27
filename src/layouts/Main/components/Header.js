import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
      id="masthead"
      itemType="https://schema.org/WPHeader"
      itemScope="itemscope"
      itemID="#masthead"
    >
      <div id="ast-desktop-header" data-toggle-type="dropdown">
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div
            className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
            data-section="section-primary-header-builder"
          >
            <div
              className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
              data-section="section-primary-header-builder"
            >
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="title_tagline"
                  >
                    <div
                      className="site-branding ast-site-identity"
                      itemType="https://schema.org/Organization"
                      itemScope="itemscope"
                    >
                      <span className="site-logo-img">
                        <a
                          href="https://websitedemos.net/earth-store-02/"
                          className="custom-logo-link"
                          rel="home"
                          aria-current="page"
                        >
                          <img
                            width={200}
                            height={35}
                            src="./Home - Planet Earth Store_files/EARTH-STORE-200x35.png"
                            className="custom-logo"
                            alt="Planet Earth Store"
                            decoding="async"
                            srcSet="
                                https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-200x35.png 200w,
                                https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-300x53.png 300w,
                                https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE.png        400w
                              "
                            sizes="(max-width: 200px) 100vw, 200px"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div
                    className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                    data-section="section-hb-menu-1"
                  >
                    <div className="ast-main-header-bar-alignment">
                      <div className="main-header-bar-navigation">
                        <nav
                          className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                          id="primary-site-navigation"
                          aria-label="Site Navigation"
                          itemType="https://schema.org/SiteNavigationElement"
                          itemScope="itemscope"
                        >
                          <div className="main-navigation ast-inline-flex">
                            <ul
                              id="ast-hf-menu-1"
                              className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile"
                              aria-expanded="false"
                            >
                              <li
                                id="menu-item-1343"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-25 current_page_item menu-item-1343"
                              >
                                <Link
                                  href="https://websitedemos.net/earth-store-02/"
                                  aria-current="page"
                                  className="menu-link"
                                  to={"/"}
                                >
                                  Home
                                </Link>
                              </li>
                              <li
                                id="menu-item-1341"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1341"
                              >
                                <a
                                  href="https://websitedemos.net/earth-store-02/about/"
                                  className="menu-link"
                                >
                                  About
                                </a>
                              </li>
                              <li
                                id="menu-item-1344"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1344"
                              >
                                <Link
                                  href="https://websitedemos.net/earth-store-02/shop/"
                                  className="menu-link"
                                  to={"/books"}
                                >
                                  Shop
                                </Link>
                              </li>
                              <li
                                id="menu-item-1342"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1342"
                              >
                                <a
                                  href="https://websitedemos.net/earth-store-02/contact/"
                                  className="menu-link"
                                >
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ast-builder-layout-element site-header-focus-item ast-header-woo-cart"
                    data-section="section-header-woo-cart"
                  >
                    <div
                      id="ast-site-header-cart"
                      className="ast-site-header-cart ast-menu-cart-with-border ast-desktop-cart-flyout ast-menu-cart-outline"
                    >
                      <div className="ast-site-header-cart-li">
                        <Link
                          to={"/cart"}
                          className="cart-container ast-cart-desktop-position- ast-cart-mobile-position- ast-cart-tablet-position-"
                        >
                          <div className="ast-addon-cart-wrap ast-desktop-cart-position- ast-cart-mobile-position- ast-cart-tablet-position-">
                            <i
                              className="astra-icon ast-icon-shopping-bag"
                              data-cart-total={0}
                            >
                              <span className="ast-icon icon-bag">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsxlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  id="ast-bag-icon-svg"
                                  x="0px"
                                  y="0px"
                                  width={100}
                                  height={100}
                                  viewBox="826 826 140 140"
                                  enableBackground="new 826 826 140 140"
                                  xmlspace="preserve"
                                >
                                  <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                                </svg>
                              </span>
                            </i>
                          </div>
                        </Link>
                      </div>
                      <div className="ast-site-header-cart-data">
                        <div className="widget woocommerce widget_shopping_cart">
                          {/* <div className="widget_shopping_cart_content">
                              <p className="woocommerce-mini-cart__empty-message">
                                No products in the cart.
                              </p>
                              <div className="ast-mini-cart-empty">
                                <div className="ast-mini-cart-message">
                                  <p className="woocommerce-mini-cart__empty-message">
                                    No products in the cart.
                                  </p>
                                </div>
                                <div className="woocommerce-mini-cart__buttons">
                                  <a
                                    href="https://websitedemos.net/earth-store-02/shop/"
                                    className="button wc-forward"
                                  >
                                    Continue Shopping
                                  </a>
                                </div>
                              </div>
                            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ast-builder-layout-element site-header-focus-item ast-header-account"
                    data-section="section-header-account"
                  >
                    <div className="ast-header-account-wrap">
                      <a
                        className="ast-header-account-link ast-header-account-type-icon ast-account-action-link"
                        aria-label="Account icon link"
                        href="https://websitedemos.net/earth-store-02/"
                      >
                        <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                          <svg
                            version="1.1"
                            className="account-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsxlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 120 120"
                            enableBackground="new 0 0 120 120"
                            xmlspace="preserve"
                          >
                            <path d="M84.6,62c-14.1,12.3-35.1,12.3-49.2,0C16.1,71.4,3.8,91,3.8,112.5c0,2.1,1.7,3.8,3.8,3.8h105c2.1,0,3.8-1.7,3.8-3.8 C116.2,91,103.9,71.4,84.6,62z" />
                            <circle cx={60} cy="33.8" r={30} />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ast-desktop-header-content content-align-flex-start"
          style={{ display: "none" }}
        />
      </div>
      {/* <div
          id="ast-mobile-header"
          className="ast-mobile-header-wrap"
          data-type="dropdown"
        >
          <div className="ast-main-header-wrap main-header-bar-wrap">
            <div
              className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
              data-section="section-primary-header-builder"
            >
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="title_tagline"
                  >
                    <div
                      className="site-branding ast-site-identity"
                      itemType="https://schema.org/Organization"
                      itemScope="itemscope"
                    >
                      <span className="site-logo-img">
                        <a
                          href="https://websitedemos.net/earth-store-02/"
                          className="custom-logo-link"
                          rel="home"
                          aria-current="page"
                        >
                          <img
                            width={200}
                            height={35}
                            src="./Home - Planet Earth Store_files/EARTH-STORE-200x35.png"
                            className="custom-logo"
                            alt="Planet Earth Store"
                            decoding="async"
                            srcSet="
                              https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-200x35.png 200w,
                              https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-300x53.png 300w,
                              https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE.png        400w
                            "
                            sizes="(max-width: 200px) 100vw, 200px"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div
                    className="ast-builder-layout-element site-header-focus-item ast-header-woo-cart"
                    data-section="section-header-woo-cart"
                  >
                    <div
                      id="ast-site-header-cart"
                      className="ast-site-header-cart ast-menu-cart-with-border ast-desktop-cart-flyout ast-menu-cart-outline"
                    >
                      <div className="ast-site-header-cart-li">
                        <a
                          href="https://websitedemos.net/earth-store-02/cart/"
                          className="cart-container ast-cart-desktop-position- ast-cart-mobile-position- ast-cart-tablet-position-"
                        >
                          <div className="ast-addon-cart-wrap ast-desktop-cart-position- ast-cart-mobile-position- ast-cart-tablet-position-">
                            <i
                              className="astra-icon ast-icon-shopping-bag"
                              data-cart-total={0}
                            >
                              <span className="ast-icon icon-bag">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsxlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  id="ast-bag-icon-svg"
                                  x="0px"
                                  y="0px"
                                  width={100}
                                  height={100}
                                  viewBox="826 826 140 140"
                                  enableBackground="new 826 826 140 140"
                                  xmlspace="preserve"
                                >
                                  <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z" />
                                </svg>
                              </span>
                            </i>
                          </div>
                        </a>
                      </div>
                      <div className="ast-site-header-cart-data">
                        <div className="widget woocommerce widget_shopping_cart">
                          <div className="widget_shopping_cart_content">
                            <p className="woocommerce-mini-cart__empty-message">
                              No products in the cart.
                            </p>
                            <div className="ast-mini-cart-empty">
                              <div className="ast-mini-cart-message">
                                <p className="woocommerce-mini-cart__empty-message">
                                  No products in the cart.
                                </p>
                              </div>
                              <div className="woocommerce-mini-cart__buttons">
                                <a
                                  href="https://websitedemos.net/earth-store-02/shop/"
                                  className="button wc-forward"
                                >
                                  Continue Shopping
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="section-header-mobile-trigger"
                  >
                    <div className="ast-button-wrap">
                      <button
                        type="button"
                        className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-fill"
                        aria-expanded="false"
                        data-index={0}
                      >
                        <span className="screen-reader-text">Main Menu</span>
                        <span className="mobile-menu-toggle-icon">
                          <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                            <svg
                              className="ast-mobile-svg ast-menu2-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={28}
                              viewBox="0 0 24 28"
                            >
                              <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z" />
                            </svg>
                          </span>
                          <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
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
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ast-mobile-header-content content-align-flex-start">
            <div
              className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
              data-section="section-hb-menu-1"
            >
              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <nav
                    className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                    id="primary-site-navigation"
                    aria-label="Site Navigation"
                    itemType="https://schema.org/SiteNavigationElement"
                    itemScope="itemscope"
                  >
                    <div className="main-navigation ast-inline-flex">
                      <ul
                        id="ast-hf-menu-1"
                        className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile"
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-25 current_page_item menu-item-1343">
                          <a
                            href="https://websitedemos.net/earth-store-02/"
                            aria-current="page"
                            className="menu-link"
                          >
                            Home
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1341">
                          <a
                            href="https://websitedemos.net/earth-store-02/about/"
                            className="menu-link"
                          >
                            About
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1344">
                          <a
                            href="https://websitedemos.net/earth-store-02/shop/"
                            className="menu-link"
                          >
                            Shop
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1342">
                          <a
                            href="https://websitedemos.net/earth-store-02/contact/"
                            className="menu-link"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </header>
  );
}

export default Header;
