import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SPA</Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
