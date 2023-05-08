import logo from 'assets/img/logo.png'
import './style.css'
import { useContext } from 'react'
import AuthAdminContext from 'utils/AuthAdminContext'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  const { admin, logout } = useContext(AuthAdminContext)

  function handleLogout() {
    logout()
  }

  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4 position-fixed vh-100'>
      <Link to={'/admin/'} className='brand-link'>
        <span className='brand-text font-weight-light'>
          <img className='logo' src={logo} />
          Admin
        </span>
      </Link>
      <div className='sidebar'>
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
          <div className='image'>
            {/* <img src='../../dist/img/user2-160x160.jpg' className='img-circle elevation-2' alt='User Image' /> */}
          </div>
          <div className='info w-100'>
            <a className='d-inline '>
              {`${admin.lastName} ${admin.firstName}`}
            </a>
            <button className='btn btn-primary btn-sm float-end' onClick={handleLogout}>
              Logout
            </button>
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
              <NavLink to={'/admin/'} className='nav-link'>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/admin/books'} className='nav-link'>
                <p>Books</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/admin/users'} className='nav-link'>
                <p>Users</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/admin/authors'} className='nav-link'>
                <p>Authors</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/admin/publishers'} className='nav-link'>
                <p>Publishers</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/admin/orders'} className='nav-link'>
                <p>Orders</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
