import { languageEnum as bookLanguageEnum, formEnum as bookformEnum, statusEnum as bookStatusEnum } from 'enums/Book'
import { isEmptyObject } from 'helper'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function BookCreate() {
  const [authors, setAuthors] = useState([])
  const [publishers, setPublishers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/authors/get-all`).then((rs) => setAuthors(rs.data.data.docs))
    axiosClient.get(`/publishers/get-all`).then((rs) => setPublishers(rs.data.data.docs))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    // console.log(formData.get('name'));

    axiosClient
      .post(`/books`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((rs) => navigate(`/admin/books/${rs.data.data.doc._id}`))
  }

  return (
    <div className='card '>
      <div className='card-header bg-dark'>
        <h3 className='card-title'>Book Create</h3>
        {/* <Link to={`/admin/books`} className='btn btn-primary float-right'>
          <i class='fa-solid fa-angle-left'></i> Back
        </Link> */}
      </div>
      <form onSubmit={handleSubmit} className='m-0'>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <div className='row'>
            <div className='form-group col-10'>
              <label htmlFor='exampleInputPassword1'>Name</label>
              <input type='text' name='name' className='form-control' placeholder='' />
            </div>
            <div className='form-group col-2'>
              <label htmlFor='exampleInputPassword1'>language</label>
              <select name='language' class='form-control'>
                {Object.keys(bookLanguageEnum).map((language) => (
                  <option value={language}>{language}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>description</label>
            <textarea type='text' name='description' className='form-control' placeholder='' />
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>quantity</label>
              <input type='text' name='quantity' className='form-control' placeholder='' />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>status</label>
              <select name='status' class='form-control'>
                {Object.keys(bookStatusEnum).map((status) => (
                  <option value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>price</label>
              <input type='text' name='price' className='form-control' placeholder='' />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>discountPercent</label>
              <input type='text' name='discountPercent' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>author</label>
              <select name='author' class='form-control'>
                {authors.map((author) => (
                  <option value={author._id}>{author.name}</option>
                ))}
              </select>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>publisher</label>
              <select name='publisher' class='form-control'>
                {publishers.map((publisher) => (
                  <option value={publisher._id}>{publisher.name}</option>
                ))}
              </select>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>translator</label>
              <input type='text' name='translator' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>width</label>
              <div className='input-group'>
                <input type='text' name='width' className='form-control' placeholder='' />
                <div class='input-group-append'>
                  <span class='input-group-text'>CM</span>
                </div>
              </div>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>height</label>
              <div className='input-group'>
                <input type='text' name='height' className='form-control' placeholder='' />
                <div class='input-group-append'>
                  <span class='input-group-text'>CM</span>
                </div>
              </div>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>depth</label>
              <div className='input-group'>
                <input type='text' name='depth' className='form-control' placeholder='' />
                <div class='input-group-append'>
                  <span class='input-group-text'>CM</span>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>weight</label>
              <div className='input-group'>
                <input type='text' name='weight' className='form-control' placeholder='' />
                <div class='input-group-append'>
                  <span class='input-group-text'>gram</span>
                </div>
              </div>
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>noPage</label>
              <input type='text' name='noPage' className='form-control' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>form</label>
              <select name='form' class='form-control'>
                {Object.keys(bookformEnum).map((form) => (
                  <option value={form}>{form}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-1'>
              <label htmlFor='exampleInputPassword1'>rate</label>
              <input type='text' className='form-control' placeholder='' disabled />
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary float-right'>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookCreate
