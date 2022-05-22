import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div>


<nav className="navbar navbar-expand-lg color">
  <div className="container">
    <Link className="navbar-brand" to='/'><span className='headers'> Shopping </span> <span className='headers1'>Store</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex align-items-lg-center justify-content-lg-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link shopping" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link shopping" to='/products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link shopping" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link shopping " to='/cart'>Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link shopping " to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}
