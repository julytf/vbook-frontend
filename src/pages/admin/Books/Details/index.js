import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function BookDetail() {
  const { id } = useParams()

  const [book, setBook] = useState({})
  console.log(book);

  useEffect(() => {
    axiosClient.get(`/books/${id}`).then((rs) => setBook(rs.data.data.doc))
  }, [])

  return (
    <div className='card card-primary'>
      <div className='card-header'>
        <h3 className='card-title'>Book detail</h3>
      </div>
      <form>
        <div className='card-body'>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} disabled />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Name</label>
            <input type='text' className='form-control' placeholder='' defaultValue={book.name} />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputFile'>File input</label>
            <div className='input-group'>
              <div className='custom-file'>
                <input type='file' className='custom-file-input' id='exampleInputFile' />
                <label className='custom-file-label' htmlFor='exampleInputFile'>
                  Choose file
                </label>
              </div>
              <div className='input-group-append'>
                <span className='input-group-text'>Upload</span>
              </div>
            </div>
          </div>
          <div className='form-check'>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              Check me out
            </label>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookDetail
