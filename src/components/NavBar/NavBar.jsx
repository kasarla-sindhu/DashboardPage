import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav-container'>
        <h1>Dashboard</h1>
        <div className='search-user-con'>
          <div className='input-con'>
            <input type="search" placeholder='Search' />
            <CiSearch className='searchIcon' />
          </div>
          <div className='user-details'>
            <CgProfile className='userIcon' />
            <h3>Accuknox</h3>
          </div>
        </div>
      </nav>
  )
}

export default NavBar