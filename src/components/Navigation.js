import React from 'react';

import { NavLink } from 'react-router-dom';
import './Components.css';

const Navigation = () => {
  return (
    <div>
      <nav className="nav navbar-expand-md navbar-dark bg-primary">
        <div className="navbar-collapse collapse w-10 order-1 order-md-0 dual-collapse2" style={{ opacity: 0, cursor: 'default'}}>
          <NavLink className="btn balancers" to="/">Home</NavLink>
          <NavLink className="btn balancers" to="/about">About</NavLink>
          <NavLink className="btn balancers" to="/contact">Contact</NavLink>
        </div>
        <div className="mx-auto order-1">
          <h1 className="fun">Character Spots</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2"><span className="navbar-toggler-icon"></span></button>
        </div>
        <div className="navbar-collapse collapse w-10 order-1 dual-collapse2">
          <ul className="navbar-nav ml-auto navList">
            <li className="nav-item">
              <NavLink className="btn" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
}

export default Navigation;