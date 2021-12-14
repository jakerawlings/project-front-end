import React from "react";
import {Link} from "react-router-dom";

const Navigation = (
    {
      active = 'home'
    }) => {
  return (
      <>
        <ul className="nav nav-tabs mb-2">
          <li className="nav-item">
            <Link to="/"
                  className={`nav-link ${active === 'home' ? 'active' : ''}`}
            >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile"
                  className={`nav-link ${active === 'profile' ? 'active' : ''}`}
            >Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/search"
                  className={`nav-link ${active === 'search' ? 'active' : ''}`}
            >Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/login"
                  className={`nav-link ${active === 'login' ? 'active' : ''}`}
            >Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy-policy"
                  className={`nav-link ${active === 'privacy-policy' ? 'active'
                      : ''}`}
            >Privacy Policy</Link>
          </li>
        </ul>
      </>
  );
}
export default Navigation;