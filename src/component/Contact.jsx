import React from 'react'

function Contact() {
  return (
    <div className="container-fluid bg-dark text-light min-vh-100 justify-content-center align-items-center" >
    <div className="row ">
      <div className="col-md-6 offset-md-3 min-vh-100 justify-content-center align-items-center " style={{    marginTop: "100px"}}>
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Your Email" required/>
          </div>
          <div className="form-group">
            <label for="inputMessage">Message</label>
            <textarea className="form-control " id="inputMessage" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact