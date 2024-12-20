import React from 'react'
import '../assets/Styles/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  let loc=useLocation()
  let bool=loc.pathname.startsWith('/adminportal')
  return (
    <>
     <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="links">
            {
              bool?
              <ul>
              <li><NavLink to='/adminportal/'>HOME</NavLink></li>
              <li><NavLink to='/adminportal/books'>BOOKS</NavLink></li>
              <li><NavLink to='/adminportal/addbooks'>ADD BOOKS</NavLink></li>
              <li><NavLink to='/adminportal/users'>USERS</NavLink></li>
              <li><NavLink to='/adminportal/addusers'>ADD USERS</NavLink></li>
              <li><NavLink to='/'>LOGOUT</NavLink></li>
          </ul>
          :
          <ul>
          <li><NavLink to='/usersportal/'>HOME</NavLink></li>
          <li><NavLink to='/usersportal/books'>BOOKS</NavLink></li>
          <li><NavLink to='/usersportal/users'>USERS</NavLink></li>
          <li><NavLink to='/'>LOGOUT</NavLink></li>
         </ul>
            }
        </div>
     </div>
    </>
  )
}

export default Navbar
