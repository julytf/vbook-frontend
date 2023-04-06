import { truncate } from "helper"

function Row({ book, deleteBook }) {

  function handleDelete() {
    if(window.confirm(`Bạn có chắc là bạn muốn xóa "${book.name}"?`))
      deleteBook()
  }
  return (
    <tr>
      <td>{book._id}</td>
      <td>{truncate(book.name, 40)}</td>
      <td>{book.language}</td>
      <td>{truncate(book.description, 20)}</td>
      <td>{book.quantity}</td>
      <td>{book.status}</td>
      <td>{book.price.toLocaleString()}</td>
      <td><button onClick={handleDelete}><i class="fa-regular fa-x"></i></button></td>
    </tr>
  )
}

export default Row
