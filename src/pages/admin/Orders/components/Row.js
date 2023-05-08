import { truncate } from 'helper'
import { redirect, useNavigate } from 'react-router-dom'
import dvhcvn from 'assets/json/dvhcvn'

function Row({ order, deleteOrder }) {
  const city = dvhcvn.data.find((city) => (city.id = order.address?.city))
  const provine = city?.sub.find((provine) => (provine.id = order.address?.provine))
  const district = provine?.sub.find((district) => (district.id = order.address?.district))

  const navigate = useNavigate()

  function handleDelete(e) {
    e.stopPropagation()

    if (window.confirm(`Bạn có chắc là bạn muốn xóa "${order.name}"?`)) deleteOrder()
  }

  function handleNavigate(e) {
    console.log(order._id)
    navigate(`/admin/orders/${order._id}`)
  }
  return (
    <tr onClick={handleNavigate}>
      <td>{order._id}</td>
      {/* <th>Order</th>
                <th>Status</th>
                <th>Address</th>
                <th>Details</th>
                <th>Note</th>
                <th>Edit</th> */}
      <td>{`${order.user.lastName} ${order.user.firstName}`}</td>
      <td>{order.status}</td>
      <td>{city?.name}</td>
      <td>{order.phoneNumber}</td>
      <td>{}</td>
      <td>{order.note}</td>
      <td>
        <button className='btn btn-outline-danger btn-sm' onClick={handleDelete}>
          <i className='fa-regular fa-x'></i>
        </button>
      </td>
    </tr>
  )
}

export default Row
