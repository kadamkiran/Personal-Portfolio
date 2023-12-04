import React from 'react'

function NavBar() {
  return (
    <ul className="nav justify-content-center btn-hover">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Skill</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='#' aria-disabled="true">Contact</a>
  </li>
</ul>
 
  )
}

export default NavBar