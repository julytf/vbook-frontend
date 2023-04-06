function Paginate({ page, noPage, setPage, range }) {
  const perPage = 12
  page = +page
  let from = page - range > 0 ? page - range : 1
  let to = page + range < noPage ? page + range : noPage
  console.log(page, noPage, from, to)
  const pages = new Array(to - from + 1).fill().map((e, i) => from + i)

  function handleChangePage(page) {
    setPage(page)
  }

  return (
    <div className='row' style={{ margin: 0 }}>
      <div className='col-sm-12 col-md-5'>
        {/* <div className='dataTables_info' id='example2_info' role='status' aria-live='polite'>
          Showing {} to 10 of {noPage} entries
        </div> */}
      </div>
      <div className='col-sm-12 col-md-7'>
        <div className='dataTables_paginate paging_simple_numbers' id='example2_paginate'>
          <ul className='pagination' style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {from > 1 && (
              <li className='paginate_button page-item previous disabled' id='example2_previous'>
                <a href='#' aria-controls='example2' data-dt-idx='0' tabindex='0' className='page-link'>
                  ...
                </a>
              </li>
            )}
            {pages.map((e) => (
              <li className={'paginate_button page-item' + (e == page ? ' active' : '')}>
                <button onClick={handleChangePage} aria-controls='example2' data-dt-idx='1' tabindex='0' className='page-link'>
                  {e}
                </button>
              </li>
            ))}
            {to < noPage && (
              <li className='paginate_button page-item next' id='example2_next'>
                <a href='#' aria-controls='example2' data-dt-idx='0' tabindex='0' className='page-link'>
                  ...
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Paginate
