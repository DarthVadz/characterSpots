import React from 'react'; //this page is unused atm
import './Nav.css';

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav navbar-expand-md navbar-dark bg-primary">
        <div className="navbar-collapse collapse w-10 order-1 order-md-0 dual-collapse2" style={{opacity: 0}}>
          <p>Home</p>
        </div>
        <div className="mx-auto order-1">
          <h1>Character Spots</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2"><span className="navbar-toggler-icon"></span></button>
        </div>
        <div className="navbar-collapse collapse w-10 order-1 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}