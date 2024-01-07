import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className='bg-dark text-light min-vh-100'>
        <header className='bg-dark'>
          <h1>Skills</h1>
        </header>
        <div class="skill-con   border rounded p-4">
          <div style={{ width: "85%" }}>
            <div className='d-flex text-dark justify-content-between'>
              <h3 className='text-dark'>Java </h3>
              <h6>85%</h6>
            </div>

            <progress id="file" value="85" max="100" style={{ width: "115%" }} className='mb-4'> 85% </progress>
          </div>

          <div style={{ width: "85%" }}>
            <div className='d-flex text-dark justify-content-between'>
            <h3 className='text-dark'>JavaScript </h3>
            <h6>80%</h6>
          </div>
            <progress id="file" value="80" max="100" style={{ width: "115%" }} className='mb-4'> 80% </progress>
          </div>

          <div style={{ width: "85%" }}>
            <div className='d-flex text-dark justify-content-between'>
            <h3 className='text-dark'>ReactJS </h3>
            <h6>70%</h6>
          </div>
            <progress id="file" value="70" max="100" style={{ width: "115%" }}className='mb-4'> 80% </progress>
          </div>

          <div style={{ width: "85%" }}>
            <div className='d-flex text-dark justify-content-between'>
            <h3 className='text-dark'>MySQL </h3>
            <h6>85%</h6>
          </div>
            <progress id="file" value="85" max="100" style={{ width: "115%" }}className='mb-4'> 80% </progress>
          </div>

          <div style={{ width: "85%" }}>
            <div className='d-flex text-dark justify-content-between'>
            <h3 className='text-dark'>HTML-5 </h3>
            <h6>80%</h6>
          </div>
            <progress id="file" value="80" max="100" style={{ width: "115%" }}className='mb-4'> 80% </progress>
          </div>

          <div style={{ width: "85%" }}>
            <div className='d-flex text-dark justify-content-between'>
            <h3 className='text-dark'>CSS </h3>
            <h6>85%</h6>
          </div>
            <progress id="file" value="85" max="100" style={{ width: "115%" }}className='mb-4'> 80% </progress>
          </div>

        </div>
      </div>
    </div >

  )
}

export default Skills