function Admin() {
  return (
    <div className='wrapper'>
      <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' data-widget='pushmenu' href='#' role='button'>
              <i className='fas fa-bars' />
            </a>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <a href='../../index3.html' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <a href='#' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' data-widget='navbar-search' href='#' role='button'>
              <i className='fas fa-search' />
            </a>
            <div className='navbar-search-block'>
              <form className='form-inline'>
                <div className='input-group input-group-sm'>
                  <input
                    className='form-control form-control-navbar'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-navbar' type='submit'>
                      <i className='fas fa-search' />
                    </button>
                    <button className='btn btn-navbar' type='button' data-widget='navbar-search'>
                      <i className='fas fa-times' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='far fa-comments' />
              <span className='badge badge-danger navbar-badge'>3</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <a href='#' className='dropdown-item'>
                <div className='media'>
                  <img
                    src='../../dist/img/user1-128x128.jpg'
                    alt='User Avatar'
                    className='img-size-50 mr-3 img-circle'
                  />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      Brad Diesel
                      <span className='float-right text-sm text-danger'>
                        <i className='fas fa-star' />
                      </span>
                    </h3>
                    <p className='text-sm'>Call me whenever you can...</p>
                    <p className='text-sm text-muted'>
                      <i className='far fa-clock mr-1' /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <div className='media'>
                  <img
                    src='../../dist/img/user8-128x128.jpg'
                    alt='User Avatar'
                    className='img-size-50 img-circle mr-3'
                  />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      John Pierce
                      <span className='float-right text-sm text-muted'>
                        <i className='fas fa-star' />
                      </span>
                    </h3>
                    <p className='text-sm'>I got your message bro</p>
                    <p className='text-sm text-muted'>
                      <i className='far fa-clock mr-1' /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <div className='media'>
                  <img
                    src='../../dist/img/user3-128x128.jpg'
                    alt='User Avatar'
                    className='img-size-50 img-circle mr-3'
                  />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      Nora Silvester
                      <span className='float-right text-sm text-warning'>
                        <i className='fas fa-star' />
                      </span>
                    </h3>
                    <p className='text-sm'>The subject goes here</p>
                    <p className='text-sm text-muted'>
                      <i className='far fa-clock mr-1' /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item dropdown-footer'>
                See All Messages
              </a>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='far fa-bell' />
              <span className='badge badge-warning navbar-badge'>15</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <span className='dropdown-item dropdown-header'>15 Notifications</span>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fas fa-envelope mr-2' /> 4 new messages
                <span className='float-right text-muted text-sm'>3 mins</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fas fa-users mr-2' /> 8 friend requests
                <span className='float-right text-muted text-sm'>12 hours</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fas fa-file mr-2' /> 3 new reports
                <span className='float-right text-muted text-sm'>2 days</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item dropdown-footer'>
                See All Notifications
              </a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-widget='fullscreen' href='#' role='button'>
              <i className='fas fa-expand-arrows-alt' />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' data-widget='control-sidebar' data-slide='true' href='#' role='button'>
              <i className='fas fa-th-large' />
            </a>
          </li>
        </ul>
      </nav>
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        <a href='../../index3.html' className='brand-link'>
          <img
            src='../../dist/img/AdminLTELogo.png'
            alt='AdminLTE Logo'
            className='brand-image img-circle elevation-3'
            style={{ opacity: '.8' }}
          />
          <span className='brand-text font-weight-light'>AdminLTE 3</span>
        </a>
        <div className='sidebar'>
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img src='../../dist/img/user2-160x160.jpg' className='img-circle elevation-2' alt='User Image' />
            </div>
            <div className='info'>
              <a href='#' className='d-block'>
                Alexander Pierce
              </a>
            </div>
          </div>
          <div className='form-inline'>
            <div className='input-group' data-widget='sidebar-search'>
              <input
                className='form-control form-control-sidebar'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <div className='input-group-append'>
                <button className='btn btn-sidebar'>
                  <i className='fas fa-search fa-fw' />
                </button>
              </div>
            </div>
            <div className='sidebar-search-results'>
              <div className='list-group'>
                <a href='#' className='list-group-item'>
                  <div className='search-title'>
                    <strong className='text-light' />N<strong className='text-light' />o
                    <strong className='text-light' /> <strong className='text-light' />e
                    <strong className='text-light' />l<strong className='text-light' />e
                    <strong className='text-light' />m<strong className='text-light' />e
                    <strong className='text-light' />n<strong className='text-light' />t
                    <strong className='text-light' /> <strong className='text-light' />f
                    <strong className='text-light' />o<strong className='text-light' />u
                    <strong className='text-light' />n<strong className='text-light' />d
                    <strong className='text-light' />!<strong className='text-light' />
                  </div>
                  <div className='search-path' />
                </a>
              </div>
            </div>
          </div>
          <nav className='mt-2'>
            <ul
              className='nav nav-pills nav-sidebar flex-column'
              data-widget='treeview'
              role='menu'
              data-accordion='false'
            >
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-tachometer-alt' />
                  <p>
                    Dashboard
                    <i className='right fas fa-angle-left' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../../index.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../../index2.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../../index3.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='../widgets.html' className='nav-link'>
                  <i className='nav-icon fas fa-th' />
                  <p>
                    Widgets
                    <span className='right badge badge-danger'>New</span>
                  </p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-copy' />
                  <p>
                    Layout Options
                    <i className='fas fa-angle-left right' />
                    <span className='badge badge-info right'>6</span>
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../layout/top-nav.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/top-nav-sidebar.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/boxed.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/fixed-sidebar.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/fixed-sidebar-custom.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/fixed-topnav.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/fixed-footer.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../layout/collapsed-sidebar.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-chart-pie' />
                  <p>
                    Charts
                    <i className='right fas fa-angle-left' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../charts/chartjs.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../charts/flot.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../charts/inline.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Inline</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../charts/uplot.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>uPlot</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-tree' />
                  <p>
                    UI Elements
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../UI/general.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>General</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/icons.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/buttons.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/sliders.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/modals.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Modals &amp; Alerts</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/navbar.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Navbar &amp; Tabs</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/timeline.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../UI/ribbons.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Ribbons</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item menu-open'>
                <a href='#' className='nav-link active'>
                  <i className='nav-icon fas fa-edit' />
                  <p>
                    Forms
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../forms/general.html' className='nav-link active'>
                      <i className='far fa-circle nav-icon' />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../forms/advanced.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../forms/editors.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../forms/validation.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-table' />
                  <p>
                    Tables
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../tables/simple.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../tables/data.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../tables/jsgrid.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-header'>EXAMPLES</li>
              <li className='nav-item'>
                <a href='../calendar.html' className='nav-link'>
                  <i className='nav-icon far fa-calendar-alt' />
                  <p>
                    Calendar
                    <span className='badge badge-info right'>2</span>
                  </p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='../gallery.html' className='nav-link'>
                  <i className='nav-icon far fa-image' />
                  <p>Gallery</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='../kanban.html' className='nav-link'>
                  <i className='nav-icon fas fa-columns' />
                  <p>Kanban Board</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon far fa-envelope' />
                  <p>
                    Mailbox
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../mailbox/mailbox.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../mailbox/compose.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../mailbox/read-mail.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-book' />
                  <p>
                    Pages
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../examples/invoice.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/profile.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/e-commerce.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/projects.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/project-add.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/project-edit.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/project-detail.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/contacts.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/faq.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/contact-us.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon far fa-plus-square' />
                  <p>
                    Extras
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>
                        Login &amp; Register v1
                        <i className='fas fa-angle-left right' />
                      </p>
                    </a>
                    <ul className='nav nav-treeview'>
                      <li className='nav-item'>
                        <a href='../examples/login.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='../examples/register.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='../examples/forgot-password.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='../examples/recover-password.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Recover Password v1</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>
                        Login &amp; Register v2
                        <i className='fas fa-angle-left right' />
                      </p>
                    </a>
                    <ul className='nav nav-treeview'>
                      <li className='nav-item'>
                        <a href='../examples/login-v2.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='../examples/register-v2.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='../examples/forgot-password-v2.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='../examples/recover-password-v2.html' className='nav-link'>
                          <i className='far fa-circle nav-icon' />
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/lockscreen.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/legacy-user-menu.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/language-menu.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/404.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/500.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/pace.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../examples/blank.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../../starter.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-search' />
                  <p>
                    Search
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='../search/simple.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='../search/enhanced.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-header'>MISCELLANEOUS</li>
              <li className='nav-item'>
                <a href='../../iframe.html' className='nav-link'>
                  <i className='nav-icon fas fa-ellipsis-h' />
                  <p>Tabbed IFrame Plugin</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='https://adminlte.io/docs/3.1/' className='nav-link'>
                  <i className='nav-icon fas fa-file' />
                  <p>Documentation</p>
                </a>
              </li>
              <li className='nav-header'>MULTI LEVEL EXAMPLE</li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='fas fa-circle nav-icon' />
                  <p>Level 1</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fas fa-circle' />
                  <p>
                    Level 1
                    <i className='right fas fa-angle-left' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>
                        Level 2
                        <i className='right fas fa-angle-left' />
                      </p>
                    </a>
                    <ul className='nav nav-treeview'>
                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          <i className='far fa-dot-circle nav-icon' />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          <i className='far fa-dot-circle nav-icon' />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          <i className='far fa-dot-circle nav-icon' />
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='fas fa-circle nav-icon' />
                  <p>Level 1</p>
                </a>
              </li>
              <li className='nav-header'>LABELS</li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon far fa-circle text-danger' />
                  <p className='text'>Important</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon far fa-circle text-warning' />
                  <p>Warning</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon far fa-circle text-info' />
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <footer className='main-footer'>
        <div className='float-right d-none d-sm-block'>
          <b>Version</b> 3.2.0
        </div>
        <strong>
          Copyright © 2014-2021 <a href='https://adminlte.io'>AdminLTE.io</a>.
        </strong>{' '}
        All rights reserved.
      </footer>
      <aside className='control-sidebar control-sidebar-dark' style={{ display: 'none' }}>
        <div className='p-3 control-sidebar-content' style={{}}>
          <h5>Customize AdminLTE</h5>
          <hr className='mb-2' />
          <div className='mb-4'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Dark Mode</span>
          </div>
          <h6>Header Options</h6>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Fixed</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Dropdown Legacy Offset</span>
          </div>
          <div className='mb-4'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>No border</span>
          </div>
          <h6>Sidebar Options</h6>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Collapsed</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Fixed</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} defaultChecked='checked' className='mr-1' />
            <span>Sidebar Mini</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Sidebar Mini MD</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Sidebar Mini XS</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Nav Flat Style</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Nav Legacy Style</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Nav Compact</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Nav Child Indent</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Nav Child Hide on Collapse</span>
          </div>
          <div className='mb-4'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Disable Hover/Focus Auto-Expand</span>
          </div>
          <h6>Footer Options</h6>
          <div className='mb-4'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Fixed</span>
          </div>
          <h6>Small Text Options</h6>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Body</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Navbar</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Brand</span>
          </div>
          <div className='mb-1'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Sidebar Nav</span>
          </div>
          <div className='mb-4'>
            <input type='checkbox' defaultValue={1} className='mr-1' />
            <span>Footer</span>
          </div>
          <h6>Navbar Variants</h6>
          <div className='d-flex'>
            <select className='custom-select mb-3 text-light border-0 bg-white'>
              <option className='bg-primary'>Primary</option>
              <option className='bg-secondary'>Secondary</option>
              <option className='bg-info'>Info</option>
              <option className='bg-success'>Success</option>
              <option className='bg-danger'>Danger</option>
              <option className='bg-indigo'>Indigo</option>
              <option className='bg-purple'>Purple</option>
              <option className='bg-pink'>Pink</option>
              <option className='bg-navy'>Navy</option>
              <option className='bg-lightblue'>Lightblue</option>
              <option className='bg-teal'>Teal</option>
              <option className='bg-cyan'>Cyan</option>
              <option className='bg-dark'>Dark</option>
              <option className='bg-gray-dark'>Gray dark</option>
              <option className='bg-gray'>Gray</option>
              <option className='bg-light'>Light</option>
              <option className='bg-warning'>Warning</option>
              <option className='bg-white'>White</option>
              <option className='bg-orange'>Orange</option>
            </select>
          </div>
          <h6>Accent Color Variants</h6>
          <div className='d-flex' />
          <select className='custom-select mb-3 border-0'>
            <option>None Selected</option>
            <option className='bg-primary'>Primary</option>
            <option className='bg-warning'>Warning</option>
            <option className='bg-info'>Info</option>
            <option className='bg-danger'>Danger</option>
            <option className='bg-success'>Success</option>
            <option className='bg-indigo'>Indigo</option>
            <option className='bg-lightblue'>Lightblue</option>
            <option className='bg-navy'>Navy</option>
            <option className='bg-purple'>Purple</option>
            <option className='bg-fuchsia'>Fuchsia</option>
            <option className='bg-pink'>Pink</option>
            <option className='bg-maroon'>Maroon</option>
            <option className='bg-orange'>Orange</option>
            <option className='bg-lime'>Lime</option>
            <option className='bg-teal'>Teal</option>
            <option className='bg-olive'>Olive</option>
          </select>
          <h6>Dark Sidebar Variants</h6>
          <div className='d-flex' />
          <select className='custom-select mb-3 text-light border-0 bg-primary'>
            <option>None Selected</option>
            <option className='bg-primary'>Primary</option>
            <option className='bg-warning'>Warning</option>
            <option className='bg-info'>Info</option>
            <option className='bg-danger'>Danger</option>
            <option className='bg-success'>Success</option>
            <option className='bg-indigo'>Indigo</option>
            <option className='bg-lightblue'>Lightblue</option>
            <option className='bg-navy'>Navy</option>
            <option className='bg-purple'>Purple</option>
            <option className='bg-fuchsia'>Fuchsia</option>
            <option className='bg-pink'>Pink</option>
            <option className='bg-maroon'>Maroon</option>
            <option className='bg-orange'>Orange</option>
            <option className='bg-lime'>Lime</option>
            <option className='bg-teal'>Teal</option>
            <option className='bg-olive'>Olive</option>
          </select>
          <h6>Light Sidebar Variants</h6>
          <div className='d-flex' />
          <select className='custom-select mb-3 border-0'>
            <option>None Selected</option>
            <option className='bg-primary'>Primary</option>
            <option className='bg-warning'>Warning</option>
            <option className='bg-info'>Info</option>
            <option className='bg-danger'>Danger</option>
            <option className='bg-success'>Success</option>
            <option className='bg-indigo'>Indigo</option>
            <option className='bg-lightblue'>Lightblue</option>
            <option className='bg-navy'>Navy</option>
            <option className='bg-purple'>Purple</option>
            <option className='bg-fuchsia'>Fuchsia</option>
            <option className='bg-pink'>Pink</option>
            <option className='bg-maroon'>Maroon</option>
            <option className='bg-orange'>Orange</option>
            <option className='bg-lime'>Lime</option>
            <option className='bg-teal'>Teal</option>
            <option className='bg-olive'>Olive</option>
          </select>
          <h6>Brand Logo Variants</h6>
          <div className='d-flex' />
          <select className='custom-select mb-3 border-0'>
            <option>None Selected</option>
            <option className='bg-primary'>Primary</option>
            <option className='bg-secondary'>Secondary</option>
            <option className='bg-info'>Info</option>
            <option className='bg-success'>Success</option>
            <option className='bg-danger'>Danger</option>
            <option className='bg-indigo'>Indigo</option>
            <option className='bg-purple'>Purple</option>
            <option className='bg-pink'>Pink</option>
            <option className='bg-navy'>Navy</option>
            <option className='bg-lightblue'>Lightblue</option>
            <option className='bg-teal'>Teal</option>
            <option className='bg-cyan'>Cyan</option>
            <option className='bg-dark'>Dark</option>
            <option className='bg-gray-dark'>Gray dark</option>
            <option className='bg-gray'>Gray</option>
            <option className='bg-light'>Light</option>
            <option className='bg-warning'>Warning</option>
            <option className='bg-white'>White</option>
            <option className='bg-orange'>Orange</option>clear
          </select>
        </div>
      </aside>
      <div id='sidebar-overlay' />
    </div>
  )
}

export default Admin