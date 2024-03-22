import React from 'react'
import './Home.css'
import img1 from '../../Image/11669618_20943839.svg'
import rocket from '../../Image/3d-business-space-rocket.png'

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12">
            <div className='headline'>Welcome to Suvidha OverSeas <img className='rocket' src={rocket} alt="rocket" /></div>
            <div className="para">We Empower your Dreams</div>
            <div className="para2">Study abroad along with us and reach new heights.</div>
            <div className="btndiv">
              <div className="btn1">
                Services
              </div>
              <div className="btn2">
                Enquiry
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12">
            <img className='img1' src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home