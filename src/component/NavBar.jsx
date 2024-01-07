import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <ul className="nav justify-content-center btn-hover bg-dark text-light">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/About">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Skill">Skill</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Projects">Projects</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/Contact' aria-disabled="true">Contact</Link>
  </li>
</ul>
 
  )
}

export default NavBar