import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GlobalContext from 'utils/GlobalContext'
import dvhcvn from 'assets/json/dvhcvn.json'
import { statusEnum as orderStatusEnum } from 'enums/Order'

import './style.css'
import CartItem from './components/CartItem'
import axiosClient from 'utils/axiosClient'

function OrderDetail() {
  const { orderId } = useParams()

  const [order, setOrder] = useState({})
  console.log(order)

  const city = dvhcvn.data.find((city) => (city.id = order.address?.city))
  const provine = city?.sub.find((provine) => (provine.id = order.address?.provine))
  const district = provine?.sub.find((district) => (district.id = order.address?.district))

  useEffect(() => {
    axiosClient.get(`/orders/${orderId}`).then((rs) => setOrder(rs.data.data.doc))
  }, [])

  function handleCancelOrder() {
    axiosClient.get(`/orders/${orderId}/cancel-order`).then(() => {
      order.status = orderStatusEnum.CANCELED
      setOrder({ ...order })
    })
  }

  return (
    <section className='cart_area section_padding'>
      <div className='container'>
        <h3>Thông tin giao hàng</h3>
        <h3 className='col form-group float-end top-0'>
          <div>{order.status}</div>
          {order.status == orderStatusEnum.PENDING && (
            <button onClick={handleCancelOrder} className='btn_3 btn_red mt-3'>
              Hủy đơn hàng
            </button>
          )}
        </h3>
        <div className='col form-group'>{order.address?.fullName}</div>
        <div className='col form-group'>{order.address?.phoneNumber}</div>
        <div className='col form-group'>{`${city?.name}, ${provine?.name}, ${district?.name}`}</div>
        <div className='col form-group'>{order.address?.address}</div>
        <div className='col form-group'>{order.address?.address2}</div>
        <div className='col form-group mt-5 h5'>Hình thức thanh toán: {order.paymentMethod == 'COD' ? 'Khi nhận hàng' : 'Thẻ'}</div>
        {order.paymentMethod == 'CARD' && (
          <div className='col form-group h5'>Trạng thái thanh toán: {order.paymentMethod == 'COD' ? 'Khi nhận hàng' : order.payment.paid ? 'Đã thanh toán' : 'Chưa thành toán'}</div>
        )}

        <h3 className='mt-5'>Sản phẩm</h3>
        <div className='cart_inner'>
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
                {order.details?.map((item) => (
                  <CartItem key={item.book._id} cartItem={item} />
                ))}
                <tr>
                  <td />
                  <td />
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h2>{order.details?.reduce((prev, cur) => prev + cur.book.price * cur.quantity, 0).toLocaleString()}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderDetail
