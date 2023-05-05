import { useLayoutEffect, useRef, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import Row from './components/Row'
import Paginate from '../components/Paginate'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

function Publishers() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [publishers, setPublishers] = useState([])
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [noPage, setNoPage] = useState(0)
  console.log(publishers)
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const perPage = 10

  const queryRef = useRef()

  const navigate = useNavigate()

  useLayoutEffect(() => {
    loadPublishers()
  }, [page])

  function deletePublisher(publisherId) {
    axiosClient.delete(`/publishers/${publisherId}`).then((rs) => loadPublishers())
  }

  function loadPublishers() {
    axiosClient.get(`/publishers`, { params: { q: query, page, perPage } }).then((rs) => {
      setPublishers(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }

  useLayoutEffect(() => {
    navigate({
      search: `?q=${query}&page=${page}`,
    })
    loadPublishers()
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
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher) => (
                <Row publisher={publisher} deletePublisher={() => deletePublisher(publisher._id)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
    </>
  )
}

export default Publishers
