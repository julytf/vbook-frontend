import { truncate } from "helper"

function Row({ book }) {
  return (
    <tr>
      <td>{book._id}</td>
      <td>{truncate(book.name, 10)}</td>
    </tr>
  )
}

export default Row
