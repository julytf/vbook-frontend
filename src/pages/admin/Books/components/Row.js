import { truncate } from 'helper'
import { redirect, useNavigate } from 'react-router-dom'

function Row({ book, deleteBook }) {
  const navigate = useNavigate()

  function handleDelete(e) {
    e.stopPropagation()

    if (window.confirm(`Bạn có chắc là bạn muốn xóa "${book.name}"?`)) deleteBook()
  }

  function handleNavigate(e) {
    console.log(book._id)
    navigate(`/admin/books/${book._id}`)
  }
  return (
    <tr onClick={handleNavigate}>
      <td>{book._id}</td>
      <td>{truncate(book.name, 40)}</td>
      <td>{book.language}</td>
      <td>{truncate(book.description, 20)}</td>
      <td>{book.quantity}</td>
      <td>{book.status}</td>
      <td>{book.price.toLocaleString()}</td>
      <td>
        <button onClick={handleDelete}>
          <i className='fa-regular fa-x'></i>
        </button>
      </td>
    </tr>
  )
}

export default Row
