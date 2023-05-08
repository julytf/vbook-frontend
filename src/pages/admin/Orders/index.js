import { useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import Row from './components/Row'
import Paginate from '../components/Paginate'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [orders, setOrders] = useState([])
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [noPage, setNoPage] = useState(0)
  console.log(orders)
  const perPage = 10
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const queryRef = useRef()

  const navigate = useNavigate()

  useLayoutEffect(() => {
    loadOrders()
  }, [page])

  function deleteOrder(orderId) {
    axiosClient.delete(`/orders/${orderId}`).then((rs) => loadOrders())
  }

  function loadOrders() {
    axiosClient.get(`/orders`, { params: { q: query, page, perPage } }).then((rs) => {
      setOrders(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }

  useLayoutEffect(() => {
    navigate({
      search: `?q=${query}&page=${page}`,
    })
    loadOrders()
    console.log(page, query)
  }, [page, query])

  function handleSearch(e) {
    e.preventDefault()

    const q = queryRef.current.value

    setPage(1)
    setQuery(q)
  }
  return (
    <>
      <div className='card'>
        <div className='card-header bg-dark'>
          <h3 className='card-title'>Orders</h3>
          <div className='card-tools d-flex align-items-center'>
            {/* <Link to={'/admin/orders/create'} className='btn btn-primary btn-sm me-3'>
              Create
            </Link> */}
            <form onSubmit={handleSearch} className='m-1'>
              <div className='input-group input-group-sm'>
                <input
                  type='text'
                  ref={queryRef}
                  defaultValue={query}
                  className='form-control float-right'
                  placeholder='Search'
                />
                <div className='input-group-append'>
                  <button type='submit' on className='btn btn-default'>
                    <i className='fas fa-search' />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='card-body table-responsive p-0'>
          <table className='table table-hover text-nowrap'>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Status</th>
                <th>Address</th>
                <th>Details</th>
                <th>Note</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <Row order={order} deleteOrder={() => deleteOrder(order._id)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
    </>
  )
}

export default Orders
