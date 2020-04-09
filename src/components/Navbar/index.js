import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbar-item" style={{ fontSize: "22px" }}>Product management system</h1>
        <a role="button" className={isActive ? "is-active navbar-burger burger" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbar" onClick={() => setIsActive(!isActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className={isActive ? "is-active navbar-menu" : "navbar-menu"}>
        <div class="navbar-start">
          <a class="navbar-item">
            <Link to={ROUTES.DASHBOARD} onClick={() => setIsActive(!isActive)}>Dashboard</Link>
          </a>

          <a class="navbar-item">
            <Link to={ROUTES.CUSTOMERS} onClick={() => setIsActive(!isActive)}>Customers</Link>
          </a>
          
          <a class="navbar-item">
            <Link to={ROUTES.PRODUCTS} onClick={() => setIsActive(!isActive)}>Products</Link>
          </a>

          <a class="navbar-item">
            <Link to={ROUTES.VERSION} onClick={() => setIsActive(!isActive)}>Version</Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
