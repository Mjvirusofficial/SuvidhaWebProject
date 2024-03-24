import React from 'react'
import './Home.css'
import img1 from '../../Image/11669618_20943839.svg'
import rocket from '../../Image/3d-business-space-rocket.png'
import england from '../../Image/England.5d6762b582366cf35c6d.jpg'

function Home() {


  return (
    <>
      <div className="container homepageDiv">
        <div className="row ">
          <div className="col-12 col-lg-6 col-md-12">
            <div className='headline m-0'>Welcome to Suvidha OverSeas <img className='rocket' src={rocket} alt="rocket" /></div>
            <div className="para">We Empower your Dreams</div>
            <div className="para2">Study abroad along with us and reach new heights.</div>
            <div className="btndiv container mt-3 row">
              <div className="btn1 text-center   col-5 ">
                Services
              </div>
              <div className="btn2 text-center col-5">
                Enquiry
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12">
            <img className='img1' src={img1} alt="" />
          </div>
        </div>
      </div>

      <div className="2ndDiv container">
        <div className="nextDiv">
          <div className="topStudy text-center">
            Top Study Abroad Destination
          </div>
          <div className="topStudy2 text-center">
            Study in best Universities accross the world
          </div>
        </div>
      </div>

      <div className="container">
      
      </div>
    </>
  )
}

export default Home