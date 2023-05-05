function Paginate({ page, noPage, setPage, range }) {
  const perPage = 12
  page = +page
  let from = page - range > 0 ? page - range : 1
  let to = page + range < noPage ? page + range : noPage
  console.log(page, noPage, from, to)
  const pages = new Array(to - from + 1).fill().map((e, i) => from + i)

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
            <li className='paginate_button page-item previous ' id='example2_previous'>
              <button onClick={() => setPage(1)} className='page-link'>
                «
              </button>
            </li>
            <li className='paginate_button page-item previous ' id='example2_previous'>
              <button onClick={() => setPage(Math.max(page - 1, 1))} className='page-link'>
                ‹
              </button>
            </li>
            {pages.map((e) => (
              <li className={'paginate_button page-item' + (e == page ? ' active' : '')}>
                <button onClick={() => setPage(e)} className='page-link'>
                  {e}
                </button>
              </li>
            ))}
            <li className='paginate_button page-item previous ' id='example2_previous'>
              <button onClick={() => setPage(Math.min(page + 1, noPage))} className='page-link'>
                ›
              </button>
            </li>
            <li className='paginate_button page-item previous ' id='example2_previous'>
              <button onClick={() => setPage(noPage)} className='page-link'>
                »
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Paginate
