import React from 'react'
import '../style/About.css'
import img1 from '../style/profile.jpeg'

function AboutMe() {
  return (
    <div className='bg-dark text-light min-vh-100'>
      <header className='bg-dark'>
        <h1>About Me</h1>
      </header>


      <div class="about-me-content bg-white text-white border rounded p-4">
        <img src={img1} alt="" />
        <p>
          Hello! My name is Kiran Kadam . I am passionate about Development.
          This is my personal website where I share my thoughts, projects, and experiences.

          I am computer science BTech graduate from Dbatu Univercity.<br></br>

          Feel free to explore and get to know me better. If you have any questions or want to connect,
          you can reach me at kadamkiran2555@gmail.com.
        </p>
      </div>
    </div>
  )
}

export default AboutMe