import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function BookDetail() {
  const { id } = useParams()

  const [book, setBook] = useState({})
  console.log(book)

  useEffect(() => {
    axiosClient.get(`/books/${id}`).then((rs) => setBook(rs.data.data.doc))
  }, [])

  return (
    <div className='card card-success'>
      <div className='card-header'>
        <h3 className='card-title'>Book detail</h3>
        <span className='ml-5'>ID: {id}</span>
        <button type='' className='btn btn-primary float-right'>
          Edit
        </button>
      </div>
      <form>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} />
          </div> */}
          <div className='row'>
            <div className='form-group col-10'>
              <label htmlFor='exampleInputPassword1'>Name</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.name} />
            </div>
            <div className='form-group col-2'>
              <label htmlFor='exampleInputPassword1'>language</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.language} />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>description</label>
            <textarea type='text' className='form-control' placeholder='' defaultValue={book.description} />
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>quantity</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.quantity} />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>status</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.status} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>price</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.price} />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='exampleInputPassword1'>discountPercent</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.discountPercent} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>author</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.author} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>publisher</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.publisher} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>translator</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.translator} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>width</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.width} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>height</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.height} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>depth</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.depth} />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>weight</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.weight} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>noPage</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.noPage} />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='exampleInputPassword1'>form</label>
              <input type='text' className='form-control' placeholder='' defaultValue={book.form} />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>rate</label>
            <input type='text' className='form-control' placeholder='' defaultValue={book.rate} />
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

export default BookDetail
