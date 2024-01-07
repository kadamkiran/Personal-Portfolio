import React from 'react'
import '../style/Footer.css'

function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-section contact">
          <h2>Contact</h2>
          <p>Email:kadamkiran2555@gmail.com</p>
          <p>Phone:93359731028</p>
        </div>
        <div class="footer-section social">
          <h2>Follow Me</h2>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Kiran Kadam. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer