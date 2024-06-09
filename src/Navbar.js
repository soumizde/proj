import React from 'react';
import './Navbar.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            WELLS FARGO
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/customer-navigation">Customer Navigation</Link>
            </li>
            <li>
              <Link to="/product-analytics">Product Analytics</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;