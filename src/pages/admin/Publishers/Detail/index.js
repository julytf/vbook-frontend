import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from 'utils/axiosClient'

function PublisherDetail() {
  const { id } = useParams()

  const [publisher, setPublisher] = useState({})
  console.log(publisher)

  useEffect(() => {
    axiosClient.get(`/publishers/${id}`).then((rs) => setPublisher(rs.data.data.doc))
  }, [])

  return (
    <div className='card card-success'>
      <div className='card-header'>
        <h3 className='card-title'>Publisher detail</h3>
        <span className='ml-5'>ID: {id}</span>
        <Link to={`/admin/publishers/${id}/edit`} className='btn btn-primary float-right'>
          Edit
        </Link>
      </div>
      <form>
        <div className='card-body'>
          {/* <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>ID</label>
            <input type='text' className='form-control' defaultValue={id} disabled />
          </div> */}
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Name</label>
              <input type='text' className='form-control' placeholder='' defaultValue={publisher.name} disabled />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Description</label>
              <input type='text' className='form-control' placeholder='' defaultValue={publisher.description} disabled />
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

export default PublisherDetail
