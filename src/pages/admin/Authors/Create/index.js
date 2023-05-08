import { isEmptyObject } from 'helper'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function AuthorCreate() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    // console.log(formData.get('name'));

    axiosClient
      .post(`/authors/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((rs) => navigate(`/admin/authors/${rs.data.data.doc._id}`))
  }

  return (
    <div className='card'>
      <div className='card-header bg-dark'>
        <h3 className='card-title'>Author Create</h3>
        {/* <Link to={`/admin/authors/${id}`} className='btn btn-primary float-right'>
          <i class='fa-solid fa-angle-left'></i> Back
        </Link> */}
      </div>
      <form onSubmit={handleSubmit} className='m-0'>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Name</label>
            <input type='text' name='name' className='form-control' placeholder=''  />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Description</label>
            <input type='text' name='description' className='form-control' placeholder=''  />
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

export default AuthorCreate
