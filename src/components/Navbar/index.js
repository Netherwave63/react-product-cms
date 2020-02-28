import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../constants/routes'

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            Brand
          </a>
          <a role='button' className={active ? 'navbar-burger burger is-active' : 'navbar-burger burger'} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample' onClick={() => setActive(!active)}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' class={active ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div class='navbar-start'>
            <a class='navbar-item'>
              <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
            </a>
            <a class='navbar-item'>
              <Link to={ROUTES.PRODUCTS}>Products</Link>
            </a>
            <a class='navbar-item'>
              <Link to={ROUTES.CUSTOMERS}>Customers</Link>
            </a>
            <a class='navbar-item'>
              <Link to={ROUTES.ARCHIEVES}>Archieves</Link>
            </a>
            <a class='navbar-item'>
              <Link to={ROUTES.NOTES}>Notes</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
