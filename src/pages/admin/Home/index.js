import { useLayoutEffect, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import Row from './components/Row'
import Paginate from './components/Paginate'

function Home() {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [noPage, setNoPage] = useState(0)
  console.log(books)

  useLayoutEffect(() => {
    loadBooks()
  }, [])

  function deleteBook(bookId) {
    axiosClient.delete(`/books/${bookId}`).then((rs) => loadBooks())
  }

  function loadBooks() {
    axiosClient.get('/books').then((rs) => {
      setBooks(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }

  return (
    <>
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
        <div className='card-body table-responsive p-0'>
          <table className='table table-hover text-nowrap'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Language</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <Row book={book} deleteBook={() => deleteBook(book._id)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
    </>
  )
}

export default Home
