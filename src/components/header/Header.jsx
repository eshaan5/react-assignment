import React from 'react'
import './header.css'

const Header = ({ onSearch }) => {
  return (
    <div className='header'>
        <h1>Users</h1>
        <input type='search' placeholder='Search by first name or last name' className='pa2 b--red' style={{width: '40vw', height: '6vh'}} onChange={onSearch} />
    </div>
  )
}

export default Header