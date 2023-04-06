import Row from "./Row"

function Table({books}) {
  return (
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
          </tr>
        </thead>
        <tbody>
          {books.map(book => <Row book={book}/>)}
          {/* <tr>
          <td>219</td>
          <td>Alexander Pierce</td>
          <td>11-7-2014</td>
          <td>
            <span className='tag tag-warning'>Pending</span>
          </td>
          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr>
        <tr>
          <td>657</td>
          <td>Bob Doe</td>
          <td>11-7-2014</td>
          <td>
            <span className='tag tag-primary'>Approved</span>
          </td>
          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr>
        <tr>
          <td>175</td>
          <td>Mike Doe</td>
          <td>11-7-2014</td>
          <td>
            <span className='tag tag-danger'>Denied</span>
          </td>
          <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Table
