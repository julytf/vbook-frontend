import { isEmptyObject } from 'helper'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function AuthorEdit() {
  const { id } = useParams()

  const [author, setAuthor] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/authors/${id}`).then((rs) => setAuthor(rs.data.data.doc))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    // console.log(formData.get('name'));

    axiosClient
      .patch(`/authors/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(navigate(`/admin/authors/${id}`))
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-title'>Author detail</h3>
        <span className='ml-5'>ID: {id}</span>
        <Link to={`/admin/authors/${id}`} className='btn btn-primary float-right'>
          <i class='fa-solid fa-angle-left'></i> Back
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Name</label>
            <input type='text' name='name' className='form-control' placeholder='' defaultValue={author.name} />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Description</label>
            <input type='text' name='description' className='form-control' placeholder='' defaultValue={author.description} />
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

export default AuthorEdit
