import { useLayoutEffect, useState } from "react"
import axiosClient from "utils/axiosClient"

import Table from './components/Table'

function Home() {
  const [books, setBooks] = useState([])
  console.log(books);

  useLayoutEffect(() => {
    axiosClient.get('/books').then(rs => setBooks(rs.data.data.docs))
  }, [])

  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-title'>Responsive Hover Table</h3>
        <div className='card-tools'>
          <div className='input-group input-group-sm' style={{ width: '150px' }}>
            <input type='text' name='table_search' className='form-control float-right' placeholder='Search' />
            <div className='input-group-append'>
              <button type='submit' className='btn btn-default'>
                <i className='fas fa-search' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Table books={books}/>
    </div>
  )
}

export default Home
