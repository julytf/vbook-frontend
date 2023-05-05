import { truncate } from 'helper'
import { redirect, useNavigate } from 'react-router-dom'

function Row({ publisher, deletePublisher }) {
  const navigate = useNavigate()

  function handleDelete(e) {
    e.stopPropagation()

    if (window.confirm(`Bạn có chắc là bạn muốn xóa "${publisher.name}"?`)) deletePublisher()
  }

  function handleNavigate(e) {
    console.log(publisher._id)
    navigate(`/admin/publishers/${publisher._id}`)
  }
  return (
    <tr onClick={handleNavigate}>
      <td>{publisher._id}</td>
      <td>{publisher.name}</td>
      <td>{publisher.description}</td>
      <td>
        <button className='btn btn-outline-danger btn-sm' onClick={handleDelete}>
          <i className='fa-regular fa-x'></i>
        </button>
      </td>
    </tr>
  )
}

export default Row
