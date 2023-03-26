import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes'

import './assets/css/main.min.css'

import './assets/css/1.css'
import './assets/css/astra-theme-css-inline-css.2.css'
import './assets/css/astra-google-fonts-css.3.css'
import './assets/css/woocommerce-general-inline-css.4.css'
import './assets/css/woocommerce-inline-inline-css.5.css'
import './assets/css/google-fonts-1-css.6.css'
import './assets/css/global-styles-inline-css.7.css'
import './assets/css/wp-custom-css.8.css'
import './assets/css/9.css'
import './assets/css/10.css'
import './assets/css/11.css'

import './assets/css/style.min.css'
import './assets/css/woocommerce-layout-grid.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/woocommerce-smallscreen-grid.min.css'
import './assets/css/wc-blocks-style.css'
import './assets/css/wc-blocks-vendors-style.css'

import './assets/css/style-main.css'

import './assets/css/frontend-lite.min.css'
import './assets/css/widget-icon-box.min.css'
import './assets/css/woocommerce-grid.min.css'

// import './assets/css/elementor-icons.min.css'
// import './assets/css/solid.min.css'
import './assets/css/blocks.css'
import './assets/css/post-1345.css'
import './assets/css/post-25.css'
import './assets/css/swiper.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);