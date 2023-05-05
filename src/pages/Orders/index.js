import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from 'utils/GlobalContext'

import './style.css'
import axiosClient from 'utils/axiosClient'
import OrderItem from './components/OrderItem'

function Orders() {
  const [orders, setOrders] = useState([])
  console.log(orders)

  useEffect(() => {
    axiosClient.get('/orders').then((rs) => setOrders(rs.data.data.docs))
  }, [])

  return (
    <section className='cart_area orders_area section_padding'>
      <div className='container'>
        {orders.map((order) => (
          <div className='cart_inner' key={order._id}>
            <div className='head'>
              <div className='date d-inline'>{Date(order.createdAt)}</div>
              <Link to={`/orders/${order._id}`} className='float-end text-success ms-5 p-2'>Chi tiết</Link>
              <div className='status float-end'>{order.status}</div>
            </div>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.details.map((item) => (
                    <OrderItem item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Orders
