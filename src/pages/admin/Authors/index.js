import { useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import Row from './components/Row'
import Paginate from '../components/Paginate'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

function Authors() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [authors, setAuthors] = useState([])
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [noPage, setNoPage] = useState(0)
  console.log(authors)
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const perPage = 10


  const queryRef = useRef()

  const navigate = useNavigate()
  

  useLayoutEffect(() => {
    loadAuthors()
  }, [page])

  function deleteAuthor(authorId) {
    axiosClient.delete(`/authors/${authorId}`).then((rs) => loadAuthors())
  }

  function loadAuthors() {
    axiosClient.get(`/authors`, { params: { q: query, page, perPage } }).then((rs) => {
      setAuthors(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }

  useLayoutEffect(() => {
    navigate({
      search: `?q=${query}&page=${page}`,
    })
    loadAuthors()
    console.log(page, query)
  }, [page, query])

  function handleSearch(e) {
    e.preventDefault()

    const q = queryRef.current.value

    setPage(1)
    setQuery(q)
  }

  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h3 className='card-title'>Responsive Hover Table</h3>
          <div className='card-tools d-flex align-items-center'>
            <Link to={'/admin/authors/create'} className='btn btn-primary btn-sm me-3'>
              Create
            </Link>
            <form onSubmit={handleSearch} className='m-0'>
              <div className='input-group input-group-sm'>
                <input
                  type='text'
                  ref={queryRef}
                  defaultValue={query}
                  className='form-control float-right'
                  placeholder='Search'
                />
                <div className='input-group-append'>
                  <button type='submit' on className='btn btn-default'>
                    <i className='fas fa-search' />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='card-body table-responsive p-0'>
          <table className='table table-hover text-nowrap'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <Row author={author} deleteAuthor={() => deleteAuthor(author._id)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
    </>
  )
}

export default Authors