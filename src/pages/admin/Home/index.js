import { useLayoutEffect, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import Row from './components/Row'
import Paginate from './components/Paginate'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <div className='small-box bg-dark'>
            <div className='inner'>
              <Link to={'/admin/'} className='nav-link'>
                <h3 className='p-3'>Dashboard</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='small-box bg-dark'>
            <div className='inner'>
              <Link to={'/admin/books'} className='nav-link'>
                <h3 className='p-3'>Books</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='small-box bg-dark'>
            <div className='inner'>
              <Link to={'/admin/users'} className='nav-link'>
                <h3 className='p-3'>Users</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='small-box bg-dark'>
            <div className='inner'>
              <Link to={'/admin/authors'} className='nav-link'>
                <h3 className='p-3'>Authors</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='small-box bg-dark'>
            <div className='inner'>
              <Link to={'/admin/publishers'} className='nav-link'>
                <h3 className='p-3'>Publishers</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='small-box bg-dark'>
            <div className='inner'>
              <Link to={'/admin/orders'} className='nav-link'>
                <h3 className='p-3'>Orders</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
