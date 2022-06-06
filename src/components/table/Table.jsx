import React from 'react'
import './table.css'

const Table = ({ filtered }) => {
  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
            {filtered.map((user) => {
                return(<tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td><a href={user.web} target='_blank'>{user.web}</a></td>
                </tr>)
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Table