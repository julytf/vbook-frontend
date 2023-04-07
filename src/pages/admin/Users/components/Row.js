import { truncate } from 'helper'
import { redirect, useNavigate } from 'react-router-dom'

function Row({ user, deleteUser }) {
  const navigate = useNavigate()

  function handleDelete(e) {
    e.stopPropagation()

    if (window.confirm(`Bạn có chắc là bạn muốn xóa "${user.name}"?`)) deleteUser()
  }

  function handleNavigate(e) {
    console.log(user._id)
    navigate(`/admin/users/${user._id}`)
  }
  return (
    <tr onClick={handleNavigate}>
      <td>{user._id}</td>
      <td>{user.username}</td>
      <td>{`${user.lastName} ${user.firstName}`}</td>
      <td>{user.gender}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.email}</td>
      <td>{user.status}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={handleDelete}>
          <i className='fa-regular fa-x'></i>
        </button>
      </td>
    </tr>
  )
}

export default Row
