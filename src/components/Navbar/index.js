import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../constants/routes'

const Navbar = () => {
  return (
    <aside className='menu'>
      <p className='menu-label'>
        General
      </p>
      <ul className='menu-list'>
        <li><Link className='navbar-item' to={ROUTES.DASHBOARD}>Dashboard</Link></li>
      </ul>
      <p className='menu-label'>
        Products
      </p>
      <ul className='menu-list'>
        <li><Link className='navbar-item' to={ROUTES.PRODUCTS}>Products</Link></li>
      </ul>
      <p className='menu-label'>
        Customers
      </p>
      <ul className='menu-list'>
        <li><Link className='navbar-item' to={ROUTES.CUSTOMERS}>Customers</Link></li>
      </ul>
      <p className='menu-label'>
        Archieves
      </p>
      <ul className='menu-list'>
        <li><Link className='navbar-item' to={ROUTES.ARCHIEVES}>Archieves</Link></li>
      </ul>
    </aside>
  )
}

export default Navbar
