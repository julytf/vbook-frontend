import { useContext, useState } from 'react'
import CartContext from 'utils/CartContext'
import OrderDetail from './components/OrderDetail'

import './style.css'

function Checkout() {
  const [anotherAddress, setAnotherAddress] = useState(false)

  const { cart, totalCost } = useContext(CartContext)

  return (
    <div className='checkout page-template-default page page-id-999 wp-custom-logo theme-astra woocommerce-checkout woocommerce-page woocommerce-js ast-desktop ast-plain-container ast-no-sidebar astra-4.1.2 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-1345'>
      <div id='content' className='site-content'>
        <div className='ast-container'>
          <div id='primary' className='content-area primary'>
            <main id='main' className='site-main'>
              <article
                className='post-999 page type-page status-publish ast-article-single'
                id='post-999'
                itemType='https://schema.org/CreativeWork'
                itemScope='itemscope'
              >
                <header className='entry-header ast-no-thumbnail'>
                  <h1 className='entry-title' itemProp='headline'>
                    Checkout
                  </h1>
                </header>
                <div className='entry-content clear' itemProp='text'>
                  <div className='woocommerce'>
                    <div className='woocommerce-notices-wrapper' />
                    {/* <div className='woocommerce-form-coupon-toggle'>
                      <div className='woocommerce-info'>
                        Have a coupon?
                        <a href='#' className='showcoupon'>
                          Click here to enter your code
                        </a>
                      </div>
                    </div> */}
                    {/* <form className='checkout_coupon woocommerce-form-coupon' method='post' style={{ display: 'none' }}>
                      <p>If you have a coupon code, please apply it below.</p>
                      <p className='form-row form-row-first'>
                        <label htmlFor='coupon_code' className='screen-reader-text'>
                          Coupon:
                        </label>
                        <input
                          type='text'
                          name='coupon_code'
                          className='input-text'
                          placeholder='Coupon code'
                          id='coupon_code'
                          defaultValue
                        />
                      </p>
                      <p className='form-row form-row-last'>
                        <button
                          type='submit'
                          className='button wp-element-button'
                          name='apply_coupon'
                          value='Apply coupon'
                        >
                          Apply coupon
                        </button>
                      </p>
                      <div className='clear' />
                    </form> */}
                    <div className='woocommerce-notices-wrapper' />
                    <form
                      name='checkout'
                      method='post'
                      className='checkout woocommerce-checkout'
                      action='https://websitedemos.net/earth-store-02/checkout/'
                      encType='multipart/form-data'
                      noValidate='novalidate'
                    >
                      <div className='col2-set' id='customer_details'>
                        <div className='col-1'>
                          <div className='woocommerce-billing-fields'>
                            <h3>Thông tin giao hàng</h3>
                            <div className='woocommerce-billing-fields__field-wrapper'>
                              {/* <p
                                className='form-row form-row-first validate-required'
                                id='billing_first_name_field'
                                data-priority={10}
                              >
                                <label htmlFor='billing_first_name' className>
                                  First name&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_first_name'
                                    id='billing_first_name'
                                    placeholder
                                    defaultValue
                                    autoComplete='given-name'
                                  />
                                </span>
                              </p>
                              <p
                                className='form-row form-row-last validate-required'
                                id='billing_last_name_field'
                                data-priority={20}
                              >
                                <label htmlFor='billing_last_name' className>
                                  Last name&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_last_name'
                                    id='billing_last_name'
                                    placeholder
                                    defaultValue
                                    autoComplete='family-name'
                                  />
                                </span>
                              </p> */}
                              {/* <p className='form-row form-row-wide' id='billing_company_field' data-priority={30}>
                                <label htmlFor='billing_company' className>
                                  Company name&nbsp;<span className='optional'>(optional)</span>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_company'
                                    id='billing_company'
                                    placeholder
                                    defaultValue
                                    autoComplete='organization'
                                  />
                                </span>
                              </p> */}
                              {/* <p
                                className='form-row form-row-wide address-field update_totals_on_change validate-required'
                                id='billing_country_field'
                                data-priority={40}
                              >
                                <label htmlFor='billing_country' className>
                                  Country / Region&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <select
                                    name='billing_country'
                                    id='billing_country'
                                    className='country_to_state country_select select2-hidden-accessible'
                                    autoComplete='country'
                                    data-placeholder='Select a country / region…'
                                    data-label='Country / Region'
                                    tabIndex={-1}
                                    aria-hidden='true'
                                  >
                                    <option value>Select a country / region…</option>
                                    <option value='AF'>Afghanistan</option>
                                    <option value='AX'>Åland Islands</option>
                                    <option value='AL'>Albania</option>
                                    <option value='DZ'>Algeria</option>
                                    <option value='AS'>American Samoa</option>
                                    <option value='AD'>Andorra</option>
                                    <option value='AO'>Angola</option>
                                    <option value='AI'>Anguilla</option>
                                    <option value='AQ'>Antarctica</option>
                                    <option value='AG'>Antigua and Barbuda</option>
                                    <option value='AR'>Argentina</option>
                                    <option value='AM'>Armenia</option>
                                    <option value='AW'>Aruba</option>
                                    <option value='AU'>Australia</option>
                                    <option value='AT'>Austria</option>
                                    <option value='AZ'>Azerbaijan</option>
                                    <option value='BS'>Bahamas</option>
                                    <option value='BH'>Bahrain</option>
                                    <option value='BD'>Bangladesh</option>
                                    <option value='BB'>Barbados</option>
                                    <option value='BY'>Belarus</option>
                                    <option value='PW'>Belau</option>
                                    <option value='BE'>Belgium</option>
                                    <option value='BZ'>Belize</option>
                                    <option value='BJ'>Benin</option>
                                    <option value='BM'>Bermuda</option>
                                    <option value='BT'>Bhutan</option>
                                    <option value='BO'>Bolivia</option>
                                    <option value='BQ'>Bonaire, Saint Eustatius and Saba</option>
                                    <option value='BA'>Bosnia and Herzegovina</option>
                                    <option value='BW'>Botswana</option>
                                    <option value='BV'>Bouvet Island</option>
                                    <option value='BR'>Brazil</option>
                                    <option value='IO'>British Indian Ocean Territory</option>
                                    <option value='BN'>Brunei</option>
                                    <option value='BG'>Bulgaria</option>
                                    <option value='BF'>Burkina Faso</option>
                                    <option value='BI'>Burundi</option>
                                    <option value='KH'>Cambodia</option>
                                    <option value='CM'>Cameroon</option>
                                    <option value='CA'>Canada</option>
                                    <option value='CV'>Cape Verde</option>
                                    <option value='KY'>Cayman Islands</option>
                                    <option value='CF'>Central African Republic</option>
                                    <option value='TD'>Chad</option>
                                    <option value='CL'>Chile</option>
                                    <option value='CN'>China</option>
                                    <option value='CX'>Christmas Island</option>
                                    <option value='CC'>Cocos (Keeling) Islands</option>
                                    <option value='CO'>Colombia</option>
                                    <option value='KM'>Comoros</option>
                                    <option value='CG'>Congo (Brazzaville)</option>
                                    <option value='CD'>Congo (Kinshasa)</option>
                                    <option value='CK'>Cook Islands</option>
                                    <option value='CR'>Costa Rica</option>
                                    <option value='HR'>Croatia</option>
                                    <option value='CU'>Cuba</option>
                                    <option value='CW'>Curaçao</option>
                                    <option value='CY'>Cyprus</option>
                                    <option value='CZ'>Czech Republic</option>
                                    <option value='DK'>Denmark</option>
                                    <option value='DJ'>Djibouti</option>
                                    <option value='DM'>Dominica</option>
                                    <option value='DO'>Dominican Republic</option>
                                    <option value='EC'>Ecuador</option>
                                    <option value='EG'>Egypt</option>
                                    <option value='SV'>El Salvador</option>
                                    <option value='GQ'>Equatorial Guinea</option>
                                    <option value='ER'>Eritrea</option>
                                    <option value='EE'>Estonia</option>
                                    <option value='SZ'>Eswatini</option>
                                    <option value='ET'>Ethiopia</option>
                                    <option value='FK'>Falkland Islands</option>
                                    <option value='FO'>Faroe Islands</option>
                                    <option value='FJ'>Fiji</option>
                                    <option value='FI'>Finland</option>
                                    <option value='FR'>France</option>
                                    <option value='GF'>French Guiana</option>
                                    <option value='PF'>French Polynesia</option>
                                    <option value='TF'>French Southern Territories</option>
                                    <option value='GA'>Gabon</option>
                                    <option value='GM'>Gambia</option>
                                    <option value='GE'>Georgia</option>
                                    <option value='DE'>Germany</option>
                                    <option value='GH'>Ghana</option>
                                    <option value='GI'>Gibraltar</option>
                                    <option value='GR'>Greece</option>
                                    <option value='GL'>Greenland</option>
                                    <option value='GD'>Grenada</option>
                                    <option value='GP'>Guadeloupe</option>
                                    <option value='GU'>Guam</option>
                                    <option value='GT'>Guatemala</option>
                                    <option value='GG'>Guernsey</option>
                                    <option value='GN'>Guinea</option>
                                    <option value='GW'>Guinea-Bissau</option>
                                    <option value='GY'>Guyana</option>
                                    <option value='HT'>Haiti</option>
                                    <option value='HM'>Heard Island and McDonald Islands</option>
                                    <option value='HN'>Honduras</option>
                                    <option value='HK'>Hong Kong</option>
                                    <option value='HU'>Hungary</option>
                                    <option value='IS'>Iceland</option>
                                    <option value='IN'>India</option>
                                    <option value='ID'>Indonesia</option>
                                    <option value='IR'>Iran</option>
                                    <option value='IQ'>Iraq</option>
                                    <option value='IE'>Ireland</option>
                                    <option value='IM'>Isle of Man</option>
                                    <option value='IL'>Israel</option>
                                    <option value='IT'>Italy</option>
                                    <option value='CI'>Ivory Coast</option>
                                    <option value='JM'>Jamaica</option>
                                    <option value='JP'>Japan</option>
                                    <option value='JE'>Jersey</option>
                                    <option value='JO'>Jordan</option>
                                    <option value='KZ'>Kazakhstan</option>
                                    <option value='KE'>Kenya</option>
                                    <option value='KI'>Kiribati</option>
                                    <option value='KW'>Kuwait</option>
                                    <option value='KG'>Kyrgyzstan</option>
                                    <option value='LA'>Laos</option>
                                    <option value='LV'>Latvia</option>
                                    <option value='LB'>Lebanon</option>
                                    <option value='LS'>Lesotho</option>
                                    <option value='LR'>Liberia</option>
                                    <option value='LY'>Libya</option>
                                    <option value='LI'>Liechtenstein</option>
                                    <option value='LT'>Lithuania</option>
                                    <option value='LU'>Luxembourg</option>
                                    <option value='MO'>Macao</option>
                                    <option value='MG'>Madagascar</option>
                                    <option value='MW'>Malawi</option>
                                    <option value='MY'>Malaysia</option>
                                    <option value='MV'>Maldives</option>
                                    <option value='ML'>Mali</option>
                                    <option value='MT'>Malta</option>
                                    <option value='MH'>Marshall Islands</option>
                                    <option value='MQ'>Martinique</option>
                                    <option value='MR'>Mauritania</option>
                                    <option value='MU'>Mauritius</option>
                                    <option value='YT'>Mayotte</option>
                                    <option value='MX'>Mexico</option>
                                    <option value='FM'>Micronesia</option>
                                    <option value='MD'>Moldova</option>
                                    <option value='MC'>Monaco</option>
                                    <option value='MN'>Mongolia</option>
                                    <option value='ME'>Montenegro</option>
                                    <option value='MS'>Montserrat</option>
                                    <option value='MA'>Morocco</option>
                                    <option value='MZ'>Mozambique</option>
                                    <option value='MM'>Myanmar</option>
                                    <option value='NA'>Namibia</option>
                                    <option value='NR'>Nauru</option>
                                    <option value='NP'>Nepal</option>
                                    <option value='NL'>Netherlands</option>
                                    <option value='NC'>New Caledonia</option>
                                    <option value='NZ'>New Zealand</option>
                                    <option value='NI'>Nicaragua</option>
                                    <option value='NE'>Niger</option>
                                    <option value='NG'>Nigeria</option>
                                    <option value='NU'>Niue</option>
                                    <option value='NF'>Norfolk Island</option>
                                    <option value='KP'>North Korea</option>
                                    <option value='MK'>North Macedonia</option>
                                    <option value='MP'>Northern Mariana Islands</option>
                                    <option value='NO'>Norway</option>
                                    <option value='OM'>Oman</option>
                                    <option value='PK'>Pakistan</option>
                                    <option value='PS'>Palestinian Territory</option>
                                    <option value='PA'>Panama</option>
                                    <option value='PG'>Papua New Guinea</option>
                                    <option value='PY'>Paraguay</option>
                                    <option value='PE'>Peru</option>
                                    <option value='PH'>Philippines</option>
                                    <option value='PN'>Pitcairn</option>
                                    <option value='PL'>Poland</option>
                                    <option value='PT'>Portugal</option>
                                    <option value='PR'>Puerto Rico</option>
                                    <option value='QA'>Qatar</option>
                                    <option value='RE'>Reunion</option>
                                    <option value='RO'>Romania</option>
                                    <option value='RU'>Russia</option>
                                    <option value='RW'>Rwanda</option>
                                    <option value='ST'>São Tomé and Príncipe</option>
                                    <option value='BL'>Saint Barthélemy</option>
                                    <option value='SH'>Saint Helena</option>
                                    <option value='KN'>Saint Kitts and Nevis</option>
                                    <option value='LC'>Saint Lucia</option>
                                    <option value='SX'>Saint Martin (Dutch part)</option>
                                    <option value='MF'>Saint Martin (French part)</option>
                                    <option value='PM'>Saint Pierre and Miquelon</option>
                                    <option value='VC'>Saint Vincent and the Grenadines</option>
                                    <option value='WS'>Samoa</option>
                                    <option value='SM'>San Marino</option>
                                    <option value='SA'>Saudi Arabia</option>
                                    <option value='SN'>Senegal</option>
                                    <option value='RS'>Serbia</option>
                                    <option value='SC'>Seychelles</option>
                                    <option value='SL'>Sierra Leone</option>
                                    <option value='SG'>Singapore</option>
                                    <option value='SK'>Slovakia</option>
                                    <option value='SI'>Slovenia</option>
                                    <option value='SB'>Solomon Islands</option>
                                    <option value='SO'>Somalia</option>
                                    <option value='ZA'>South Africa</option>
                                    <option value='GS'>South Georgia/Sandwich Islands</option>
                                    <option value='KR'>South Korea</option>
                                    <option value='SS'>South Sudan</option>
                                    <option value='ES'>Spain</option>
                                    <option value='LK'>Sri Lanka</option>
                                    <option value='SD'>Sudan</option>
                                    <option value='SR'>Suriname</option>
                                    <option value='SJ'>Svalbard and Jan Mayen</option>
                                    <option value='SE'>Sweden</option>
                                    <option value='CH'>Switzerland</option>
                                    <option value='SY'>Syria</option>
                                    <option value='TW'>Taiwan</option>
                                    <option value='TJ'>Tajikistan</option>
                                    <option value='TZ'>Tanzania</option>
                                    <option value='TH'>Thailand</option>
                                    <option value='TL'>Timor-Leste</option>
                                    <option value='TG'>Togo</option>
                                    <option value='TK'>Tokelau</option>
                                    <option value='TO'>Tonga</option>
                                    <option value='TT'>Trinidad and Tobago</option>
                                    <option value='TN'>Tunisia</option>
                                    <option value='TR'>Turkey</option>
                                    <option value='TM'>Turkmenistan</option>
                                    <option value='TC'>Turks and Caicos Islands</option>
                                    <option value='TV'>Tuvalu</option>
                                    <option value='UG'>Uganda</option>
                                    <option value='UA'>Ukraine</option>
                                    <option value='AE'>United Arab Emirates</option>
                                    <option value='GB'>United Kingdom (UK)</option>
                                    <option value='US' selected='selected'>
                                      United States (US)
                                    </option>
                                    <option value='UM'>United States (US) Minor Outlying Islands</option>
                                    <option value='UY'>Uruguay</option>
                                    <option value='UZ'>Uzbekistan</option>
                                    <option value='VU'>Vanuatu</option>
                                    <option value='VA'>Vatican</option>
                                    <option value='VE'>Venezuela</option>
                                    <option value='VN'>Vietnam</option>
                                    <option value='VG'>Virgin Islands (British)</option>
                                    <option value='VI'>Virgin Islands (US)</option>
                                    <option value='WF'>Wallis and Futuna</option>
                                    <option value='EH'>Western Sahara</option>
                                    <option value='YE'>Yemen</option>
                                    <option value='ZM'>Zambia</option>
                                    <option value='ZW'>Zimbabwe</option>
                                  </select>
                                  <span
                                    className='select2 select2-container select2-container--default'
                                    dir='ltr'
                                    style={{ width: '100%' }}
                                  >
                                    <span className='selection'>
                                      <span
                                        className='select2-selection select2-selection--single'
                                        aria-haspopup='true'
                                        aria-expanded='false'
                                        tabIndex={0}
                                        aria-label='Country / Region'
                                        role='combobox'
                                      >
                                        <span
                                          className='select2-selection__rendered'
                                          id='select2-billing_country-container'
                                          role='textbox'
                                          aria-readonly='true'
                                          title='United States (US)'
                                        >
                                          United States (US)
                                        </span>
                                        <span className='select2-selection__arrow' role='presentation'>
                                          <b role='presentation' />
                                        </span>
                                      </span>
                                    </span>
                                    <span className='dropdown-wrapper' aria-hidden='true' />
                                  </span>
                                  <noscript>
                                    &lt;button type="submit" name="woocommerce_checkout_update_totals" value="Update
                                    country / region"&gt;Update country / region&lt;/button&gt;
                                  </noscript>
                                </span>
                              </p> */}
                              <p
                                className='form-row address-field validate-required form-row-wide'
                                id='billing_address_1_field'
                                data-priority={50}
                              >
                                <label htmlFor='billing_address_1' className>
                                  Địa chỉ &nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_address_1'
                                    id='billing_address_1'
                                    placeholder='Số nhà, tên đường, ...'
                                    autoComplete='address-line1'
                                    data-placeholder='House number and street name'
                                  />
                                </span>
                              </p>
                              <p
                                className='form-row address-field form-row-wide'
                                id='billing_address_2_field'
                                data-priority={60}
                              >
                                {/* <label htmlFor='billing_address_2' className='screen-reader-text'>
                                  Apartment, suite, unit, etc.&nbsp;<span className='optional'>(optional)</span>
                                </label> */}
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_address_2'
                                    id='billing_address_2'
                                    placeholder='Tòa nhà, số tầng, số phòng, ...'
                                    autoComplete='address-line2'
                                    data-placeholder='Apartment, suite, unit, etc. (optional)'
                                  />
                                </span>
                              </p>
                              <p
                                className='form-row address-field validate-required form-row-wide'
                                id='billing_city_field'
                                data-priority={70}
                                data-o_class='form-row form-row-wide address-field validate-required'
                              >
                                <label htmlFor='billing_city' className>
                                  Quận / Huyện&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_city'
                                    id='billing_city'
                                    placeholder='Quận / Huyện'
                                    autoComplete='address-level2'
                                  />
                                </span>
                              </p>
                              <p
                                className='form-row address-field validate-required validate-state form-row-wide'
                                id='billing_state_field'
                                data-priority={80}
                                data-o_class='form-row form-row-wide address-field validate-required validate-state'
                              >
                                <label htmlFor='billing_state' className>
                                  Tỉnh / Thành phố&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <select
                                    name='billing_state'
                                    id='billing_state'
                                    className='state_select select2-hidden-accessible'
                                    autoComplete='address-level1'
                                    data-placeholder='Select an option…'
                                    data-input-classes
                                    data-label='State'
                                    tabIndex={-1}
                                    aria-hidden='true'
                                  >
                                    <option value>Chọn tỉnh / thành phố…</option>
                                    <option value='88'>An Giang</option>
                                    <option value='79'>Bà Rịa – Vũng Tàu</option>
                                    <option value='96'>Bạc Liêu</option>
                                    <option value='26'>Bắc Kạn</option>
                                    <option value='23'>Bắc Giang</option>
                                    <option value='22'>Bắc Ninh</option>
                                    <option value='93'>Bến Tre</option>
                                    <option value='82'>Bình Dương</option>
                                    <option value='59'>Bình Định</option>
                                    <option value='83'>Bình Phước</option>
                                    <option value='80'>Bình Thuận</option>
                                    <option value='97'>Cà Mau</option>
                                    <option value='27'>Cao Bằng</option>
                                    <option value='92'>Cần Thơ</option>
                                    <option value='55'>Đà Nẵng</option>
                                    <option value='63'>Đắk Lắk</option>
                                    <option value='64'>Đắk Nông</option>
                                    <option value='38'>Điện Biên</option>
                                    <option value='81'>Đồng Nai</option>
                                    <option value='87'>Đồng Tháp</option>
                                    <option value='60'>Gia Lai</option>
                                    <option value='31'>Hà Giang</option>
                                    <option value='40'>Hà Nam</option>
                                    <option value='15'>Hà Nội</option>
                                    <option value='48'>Hà Tĩnh</option>
                                    <option value='17'>Hải Dương</option>
                                    <option value='18'>Hải Phòng HP</option>
                                    <option value='91'>Hậu Giang</option>
                                    <option value='35'>Hòa Bình</option>
                                    <option value='76'>Thành phố Hồ Chí Minh</option>
                                    <option value='16'>Hưng Yên</option>
                                    <option value='65'>Khánh Hòa</option>
                                    <option value='92'>Kiên Giang</option>
                                    <option value='58'>Kon Tum</option>
                                    <option value='39'>Lai Châu</option>
                                    <option value='24'>Lạng Sơn</option>
                                    <option value='33'>Lào Cai</option>
                                    <option value='67'>Lâm Đồng</option>
                                    <option value='85'>Long An</option>
                                    <option value='42'>Nam Định</option>
                                    <option value='47'>Nghệ An NA 37</option>
                                    <option value='43'>Ninh Bình</option>
                                    <option value='66'>Ninh Thuận</option>
                                    <option value='29'>Phú Thọ</option>
                                    <option value='62'>Phú Yên</option>
                                    <option value='51'>Quảng Bình</option>
                                    <option value='56'>Quảng Nam</option>
                                    <option value='57'>Quảng Ngãi</option>
                                    <option value='20'>Quảng Ninh</option>
                                    <option value='52'>Quảng Trị</option>
                                    <option value='95'>Sóc Trăng</option>
                                    <option value='36'>Sơn La</option>
                                    <option value='84'>Tây Ninh</option>
                                    <option value='41'>Thái Bình</option>
                                    <option value='25'>Thái Nguyên</option>
                                    <option value='45'>Thanh Hóa TH 36</option>
                                    <option value='53'>Thừa Thiên Huế</option>
                                    <option value='86'>Tiền Giang</option>
                                    <option value='94'>Trà Vinh</option>
                                    <option value='30'>Tuyên Quang</option>
                                    <option value='89'>Vĩnh Long</option>
                                    <option value='28'>Vĩnh Phúc</option>
                                    <option value='32'>Yên Bái</option>
                                  </select>
                                  {/* <span
                                    className='select2 select2-container select2-container--default'
                                    dir='ltr'
                                    style={{ width: '100%' }}
                                  >
                                    <span className='selection'>
                                      <span
                                        className='select2-selection select2-selection--single'
                                        aria-haspopup='true'
                                        aria-expanded='false'
                                        tabIndex={0}
                                        aria-label='State'
                                        role='combobox'
                                      >
                                        <span
                                          className='select2-selection__rendered'
                                          id='select2-billing_state-container'
                                          role='textbox'
                                          aria-readonly='true'
                                          title='California'
                                        >
                                          California
                                        </span>
                                        <span className='select2-selection__arrow' role='presentation'>
                                          <b role='presentation' />
                                        </span>
                                      </span>
                                    </span>
                                    <span className='dropdown-wrapper' aria-hidden='true' />
                                  </span> */}
                                </span>
                              </p>
                              {/* <p
                                className='form-row address-field validate-required validate-postcode form-row-wide'
                                id='billing_postcode_field'
                                data-priority={90}
                                data-o_class='form-row form-row-wide address-field validate-required validate-postcode'
                              >
                                <label htmlFor='billing_postcode' className>
                                  ZIP Code&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='text'
                                    className='input-text '
                                    name='billing_postcode'
                                    id='billing_postcode'
                                    placeholder
                                    defaultValue
                                    autoComplete='postal-code'
                                  />
                                </span>
                              </p> */}
                              <p
                                className='form-row form-row-wide validate-required validate-phone'
                                id='billing_phone_field'
                                data-priority={100}
                              >
                                <label htmlFor='billing_phone' className>
                                  Số điện thoại&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='tel'
                                    className='input-text '
                                    name='billing_phone'
                                    id='billing_phone'
                                    placeholder
                                    autoComplete='tel'
                                  />
                                </span>
                              </p>
                              <p
                                className='form-row form-row-wide validate-required validate-email'
                                id='billing_email_field'
                                data-priority={110}
                              >
                                <label htmlFor='billing_email' className>
                                  Email&nbsp;
                                  <abbr className='required' title='required'>
                                    *
                                  </abbr>
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <input
                                    type='email'
                                    className='input-text '
                                    name='billing_email'
                                    id='billing_email'
                                    placeholder
                                    autoComplete='email username'
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className='woocommerce-shipping-fields'></div>
                          <div className='woocommerce-additional-fields'>
                            <h3>Thông tin bổ sung</h3>
                            <div className='woocommerce-additional-fields__field-wrapper'>
                              <p className='form-row notes' id='order_comments_field' data-priority>
                                <label htmlFor='order_comments' className>
                                  Ghi chú&nbsp;
                                </label>
                                <span className='woocommerce-input-wrapper'>
                                  <textarea
                                    name='order_comments'
                                    className='input-text '
                                    id='order_comments'
                                    placeholder='Ghi chú...'
                                    rows={2}
                                    cols={5}
                                    defaultValue={''}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-2'></div>
                      </div>
                      <h3 id='order_review_heading'>Your order</h3>
                      <div id='order_review' className='woocommerce-checkout-review-order'>
                        <table className='shop_table woocommerce-checkout-review-order-table'>
                          <thead>
                            <tr>
                              <th className='product-name'>Product</th>
                              <th className='product-total'>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((item) => (
                              <OrderDetail item={item} />
                            ))}
                            {/* <tr className='cart_item'>
                              <td className='product-name'>
                                Poster V3&nbsp; <strong className='product-quantity'>×&nbsp;1</strong>
                              </td>
                              <td className='product-total'>
                                <span className='woocommerce-Price-amount amount'>
                                  <bdi>
                                    <span className='woocommerce-Price-currencySymbol'>$</span>14.99
                                  </bdi>
                                </span>
                              </td>
                            </tr> */}
                          </tbody>
                          <tfoot>
                            {/* <tr className='cart-subtotal'>
                              <th>Subtotal</th>
                              <td>
                                <span className='woocommerce-Price-amount amount'>
                                  <bdi>
                                    <span className='woocommerce-Price-currencySymbol'>$</span>32.98
                                  </bdi>
                                </span>
                              </td>
                            </tr> */}
                            <tr className='order-total'>
                              <th>
                                <h2>Tổng: </h2>
                              </th>
                              <td>
                                <strong>
                                  <span className='woocommerce-Price-amount amount'>
                                    <bdi>
                                      {/* <span className='woocommerce-Price-currencySymbol'>$</span> */}
                                      <h4>{totalCost.toLocaleString()}</h4>
                                    </bdi>
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                        <div id='payment' className='woocommerce-checkout-payment'>
                          {/* <ul className='wc_payment_methods payment_methods methods' >
                            <li className='woocommerce-notice woocommerce-notice--info woocommerce-info'>
                              Sorry, it seems that there are no available payment methods for your state. Please contact
                              us if you require assistance or wish to make alternate arrangements.
                            </li>
                          </ul> */}
                          <div className='form-row place-order'>
                            <noscript>
                              Since your browser does not support JavaScript, or it is disabled, please ensure you click
                              the &lt;em&gt;Update Totals&lt;/em&gt; button before placing your order. You may be
                              charged more than the amount stated above if you fail to do so. &lt;br/&gt;&lt;button
                              type="submit" class="button alt wp-element-button"
                              name="woocommerce_checkout_update_totals" value="Update totals"&gt;Update
                              totals&lt;/button&gt;
                            </noscript>
                            <div className='woocommerce-terms-and-conditions-wrapper'>
                              <div className='woocommerce-privacy-policy-text' />
                            </div>
                            <button
                              type='submit'
                              className='button alt wp-element-button'
                              name='woocommerce_checkout_place_order'
                              id='place_order'
                              value='Place order'
                              data-value='Place order'
                            >
                              Place order
                            </button>
                            <input
                              type='hidden'
                              id='woocommerce-process-checkout-nonce'
                              name='woocommerce-process-checkout-nonce'
                              defaultValue='46f392cb04'
                            />
                            <input
                              type='hidden'
                              name='_wp_http_referer'
                              defaultValue='/earth-store-02/?wc-ajax=update_order_review'
                            />
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Checkout
