import { useLayoutEffect, useState } from 'react'
import axiosClient from 'utils/axiosClient'

import Row from './components/Row'
import Paginate from './components/Paginate'

function Users() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [noPage, setNoPage] = useState(0)
  console.log(users)

  useLayoutEffect(() => {
    loadUsers()
  }, [])

  function deleteUser(userId) {
    axiosClient.delete(`/users/${userId}`).then((rs) => loadUsers())
  }

  function loadUsers() {
    axiosClient.get('/users').then((rs) => {
      setUsers(rs.data.data.docs)
      setNoPage(rs.data.data.noPage)
    })
  }

  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h3 className='card-title'>Responsive Hover Table</h3>
          <div className='card-tools'>
            <div className='input-group input-group-sm' style={{ width: '150px' }}>
              <input type='text' name='table_search' className='form-control float-right' placeholder='Search' />
              <div className='input-group-append'>
                <button type='submit' className='btn btn-default'>
                  <i className='fas fa-search' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body table-responsive p-0'>
          <table className='table table-hover text-nowrap'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>FullName</th>
                <th>Gender</th>
                <th>PhoneNumber</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <Row user={user} deleteUser={() => deleteUser(user._id)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate range={3} page={page} noPage={noPage} setPage={setPage} />
    </>
  )
}

export default Users