import { Link } from 'react-router-dom'

function Pagination({ page = 1, noPage = 5, setPage = () => {}, range = 3 }) {
  page = +page
  let from = page - 3 > 0 ? page - 3 : 1
  let to = page + 3 < noPage ? page + 3 : noPage
  // console.log(page, noPage, from, to)
  const pages = new Array(to - from + 1).fill().map((e, i) => from + i)

  function handleChangePage(e) {
    const page = e.target.dataset.page
    if (!page) return
    setPage(page)
  }

  return (
    <ul className='paginate'>
      {from > 1 && (
        <li>
          <button data-page={1} onClick={handleChangePage} >«</button>
        </li>
      )}
      {pages.map((e) => (
        <li key={e}>
          <button data-page={e} onClick={handleChangePage} className={page === e ? 'active' : ''}>
            {e}
          </button>
        </li>
      ))}
      {to < noPage && (
        <li>
          <button data-page={noPage} onClick={handleChangePage} >»</button>
        </li>
      )}
    </ul>
  )
}
export default Pagination
