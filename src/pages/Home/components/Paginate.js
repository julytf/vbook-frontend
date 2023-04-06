function Paginate({ page, noPage, setPage, range }) {
  page = +page
  const perPage = 12
  let from = page - range > 0 ? page - range : 1
  let to = page + range < noPage ? page + range : noPage
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
          <button>...</button>
        </li>
      )}
      {pages.map((e) => (
        <li>
          <button data-page={e} onClick={handleChangePage} className={page === e ? "active" : ""}>
            {e}
          </button>
        </li>
      ))}
      {to < noPage && (
        <li>
          <button>...</button>
        </li>
      )}
    </ul>
  )
}

export default Paginate
