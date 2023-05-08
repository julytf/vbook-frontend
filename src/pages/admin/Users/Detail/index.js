import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function UserDetail() {
  const { id } = useParams()

  const [user, setUser] = useState({})
  console.log(user)

  useEffect(() => {
    axiosClient.get(`/users/${id}`).then((rs) => setUser(rs.data.data.doc))
  }, [])

  return (
    <div className='card'>
      <div className='card-header bg-dark'>
        <h3 className='card-title'>User detail</h3>
        <span className='ml-5'>ID: {id}</span>
        <Link to={`/admin/users/${id}/edit`} className='btn btn-primary float-right'>
          Edit
        </Link>
      </div>
      <form>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} disabled />
          </div> */}
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>LastName</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.lastName} disabled />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>FirstName</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.firstName} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Gender</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.gender} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Phone Number</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.phoneNumber} disabled />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Email</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.email} disabled />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Status</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.status} disabled />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Role</label>
              <input type='text' className='form-control' placeholder='' defaultValue={user.role} disabled />
            </div>
          </div>
        </div>
        {/* <div className='card-footer'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div> */}
      </form>
    </div>
  )
}

export default UserDetail
