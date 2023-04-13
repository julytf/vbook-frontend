import { statusEnum as userStatusEnum, genderEnum as userGenderEnum, roleEnum as userRoleEnum } from 'enums/User'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function UserEdit() {
  const { id } = useParams()

  const [user, setUser] = useState({})
  console.log(user)

  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/users/${id}`).then((rs) => setUser(rs.data.data.doc))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    console.log(e.target)
    const formData = new FormData(e.target)

    axiosClient
      .patch(`/users/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(navigate(`/admin/users/${id}`))
  }

  return (
    <div className='card card-success'>
      <div className='card-header'>
        <h3 className='card-title'>User detail</h3>
        <span className='ml-5'>ID: {id}</span>
        <Link to={`/admin/users/${id}`} className='btn btn-primary float-right'>
          <i class='fa-solid fa-angle-left'></i> Back
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>LastName</label>
              <input type='text' name='lastName' className='form-control' placeholder='' defaultValue={user.lastName} />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>FirstName</label>
              <input type='text' name='firstName' className='form-control' defaultValue={user.firstName} />
            </div>
          </div>
          <div className='form-group col-6'>
            <label htmlFor='exampleInputPassword1'>Gender</label>
            <select name='gender' class='form-control'>
              {Object.keys(userGenderEnum).map((gender) => (
                <option selected={gender == user.gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Phone Number</label>
              <input
                type='text'
                name='phoneNumber'
                className='form-control'
                placeholder=''
                defaultValue={user.phoneNumber}
              />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Email</label>
              <input type='text' name='email' className='form-control' placeholder='' defaultValue={user.email} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Status</label>
              <select name='status' class='form-control'>
                {Object.keys(userStatusEnum).map((status) => (
                  <option selected={status == user.status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>Role</label>
              <select name='role' class='form-control'>
                {Object.keys(userRoleEnum).map((role) => (
                  <option selected={role == user.role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
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

export default UserEdit
