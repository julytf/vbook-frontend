import { truncate } from 'helper'
import { redirect, useNavigate } from 'react-router-dom'

function Row({ author, deleteAuthor }) {
  const navigate = useNavigate()

  function handleDelete(e) {
    e.stopPropagation()

    if (window.confirm(`Bạn có chắc là bạn muốn xóa "${author.name}"?`)) deleteAuthor()
  }

  function handleNavigate(e) {
    console.log(author._id)
    navigate(`/admin/authors/${author._id}`)
  }
  return (
    <tr onClick={handleNavigate}>
      <td>{author._id}</td>
      <td>{author.name}</td>
      <td>{author.description}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>
          <i className='fa-regular fa-x'></i>
        </button>
      </td>
    </tr>
  )
}

export default Row
