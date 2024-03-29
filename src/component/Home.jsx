import React from 'react'
import resume from './Kadam Kiran resume.pdf'
import bgimg from '../style/Create a visual 1b82e7f3-7966-421a-a9af-4f940bf6f2f7.png'

function Home() {
  let whatsapp_message = "https://wa.me/919359731028?text=I want to hire you"

  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center'>
      
        <div className=" d-flex flex-column justify-content-center align-items-center text-center">

          <h1>Hello, I am <span className='text-danger display-2 fw-bold'>Kiran</span></h1>
          <p className='my-info w-50 , para'>
            I am professional web developer looking for the opportunity to express my knowledge. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid velit dicta voluptatum rem blanditiis magnam voluptatibus vitae. Ipsum, dignissimos unde molestias at hic optio voluptatum beatae nihil, velit quaerat ratione. Quae sed neque fugiat ex!
          </p>
          <div>
            <a href={resume} className='btn btn-outline-danger mx-3' download>Resume</a>

            <a href={whatsapp_message} className='btn btn-danger'>Let's Talk</a>

          </div>
          
        </div>
       
    </div>
  )
}

export default Home