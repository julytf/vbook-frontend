import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'
import dvhcvn from 'assets/json/dvhcvn.json'
import { statusEnum as orderStatusEnum } from 'enums/Order'


function OrderEdit() {
  const { id } = useParams()

  const [order, setOrder] = useState({})
  console.log(order)

  const [citys, setCitys] = useState(dvhcvn.data)
  const [provines, setProvines] = useState(citys.find((city) => city.id === order?.user?.address?.city)?.sub || [])
  const [districts, setDistricts] = useState(
    provines.find((provine) => provine.id === order?.user?.address?.provine)?.sub || []
  )

  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/orders/${id}`).then((rs) => setOrder(rs.data.data.doc))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    console.log(e.target)
    const formData = new FormData(e.target)

    axiosClient
      .patch(`/orders/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(navigate(`/admin/orders/${id}`))
  }

  function handleCityChange(e) {
    // console.log(e.target.value);
    const provines = citys.find((city) => city.id === e.target.value)?.sub || []
    setProvines(provines)
    handleProvineChange()
  }

  function handleProvineChange(e) {
    // console.log(e.target.value);
    const districts = provines.find((city) => city.id === e?.target?.value)?.sub || []
    setDistricts(districts)
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-title'>Order detail</h3>
        <span className='ml-5'>ID: {id}</span>
        
        <Link to={`/admin/orders/${id}/edit`} className='btn btn-primary float-right'>
          Edit
        </Link>
      </div>
      <form onSubmit={handleSubmit} className='m-0'>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <h4>Khách hàng</h4>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>ID</label>
              <input
                type='text'
                name='lastName'
                className='form-control'
                placeholder=''
                defaultValue={order.user?._id}
                disabled
              />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Họ Tên</label>
              <input
                type='text'
                name='firstName'
                className='form-control'
                value={`${order.user?.lastName || ''} ${order.user?.firstName || ''}`}
                disabled
              />
            </div>
          </div>
          <h4>Đơn hàng</h4>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Trạng thái</label>
              <select name='form' class='form-control'
                disabled>
                {Object.keys(orderStatusEnum).map((status) => (
                  <option selected={status == order.status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h4>Địa chỉ giao hàng</h4>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Họ tên</label>
              <input
                type='text'
                name='phoneNumber'
                className='form-control'
                placeholder=''
                defaultValue={order.address?.fullName}
                disabled
              />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Số điện thoại</label>
              <input
                type='text'
                name='email'
                className='form-control'
                placeholder=''
                defaultValue={order.address?.phoneNumber}
                disabled
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>Tỉnh / Thành Phố</label>
              <select name='address.city' onChange={handleCityChange} className='form-control'
                disabled>
                <option value={''}>Chọn Thành phố</option>
                {citys.map((city) => (
                  <option value={city.id} key={city.id}>
                    {city?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>Quận / Huyện</label>
              <select name='address.provine' onChange={handleProvineChange} className='form-control'
                disabled>
                <option value={''}>Chọn Quận/Huyện</option>
                {provines.map((provine) => (
                  <option value={provine.id} key={provine.id}>
                    {provine?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>Phường / Xã</label>
              <select name='address.district' className='form-control'
                disabled>
                <option value={''}>Chọn Phường/Xã</option>
                {districts.map((district) => (
                  <option value={district.id} key={district.id}>
                    {district?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-12'>
              <label htmlFor='exampleInputPassword1'>Địa chỉ</label>
              <input
                type='text'
                name='address.address'
                className='form-control'
                placeholder=''
                defaultValue={order.address?.address}
                disabled
              />
            </div>
            <div className='form-group col-12'>
              <label htmlFor='exampleInputPassword1'>Số tầng / Số phòng</label>
              <input
                type='text'
                name='address.address2'
                className='form-control'
                placeholder=''
                defaultValue={order.address?.address2}
                disabled
              />
            </div>
          </div>
          <h4>Đơn hàng</h4>
          <div className='row'>
            <div className='form-group col-12'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Condensed Full Width Table</h3>
                </div>
                <div className='card-body p-0'>
                  <table className='table table-sm'>
                    <thead>
                      <tr>
                        <th>Sách</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.details?.map((item) => (
                        <tr key={item.book?._id}>
                          <td>
                            <img src={item.book?.images?.[0]?.file} style={{height: '50px'}}/>
                            {item.book?.name}
                          </td>
                          <td>{item.book?.price.toLocaleString()}</td>
                          <td>{item.quantity}</td>
                          <td>{(item.book?.price * item.quantity).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary float-right'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderEdit
