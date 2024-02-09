import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
<div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand text-light" to="/">Electricity Board Applications Manager</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link text-light" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="/application-tracker">Applications Tracker</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</div>
  )
}

export default Header
