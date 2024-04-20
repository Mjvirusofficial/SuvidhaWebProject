import React from 'react'
import './Home.css'
import img1 from '../../Image/11669618_20943839.svg'
import rocket from '../../Image/3d-business-space-rocket.png'
import Student from '../../Component/Student/Student'
// import england from '../../Image/England.5d6762b582366cf35c6d.jpg'
// import g from '../../Image/Germany.091def0de715add654cf.jpeg'
// import newYork from '../../Image/NewWork.jpg'
import s1 from '../../Image/s1.jpg'
import s2 from '../../Image/s2.jpg'





function Home() {


  return (
    <>
      <div className="container homepageDiv">
        <div className="row ">
          <div className="col-12 col-lg-6 col-md-12">
            <div className='headline m-0'>Welcome to Suvidha OverSeas <img className='rocket' src={rocket} alt="rocket" /></div>
            <div className="para">We c Empower your Dreams</div>
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

      {/* <div className="2ndDiv container">
        <div className="nextDiv">
          <div className="topStudy text-center">
            Top Study Abroad Destination
          </div>
          <div className="topStudy2 text-center">
            Study in best Universities accross the world
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="container Div3 ">
          <div className="heading3 text-center">
            What Our Students Say
          </div>
          <div className="text-center heading3TagLine mb-4">
            Discover the experiences of students who studied abroad with Suvidha Overseas.

          </div>
          <div className="row ">
            <div className="col-12  col-md-6 col-lg-6">
              <Student pic={s1} name={'Angel Singh'} text={'Studying abroad with XYZ Company was a truly transformative and enriching experience! The unwavering support and guidance provided by the dedicated team were nothing short of exceptional. It was more than just education; it was a journey of personal and academic growth.'} />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <Student name={'Aditya Rai'} pic={s2} text={'My heartfelt gratitude to XYZ Company for making my dream of studying abroad a reality. The entire process, from application to settling into a new academic environment, was impeccably smooth. The teams meticulous attention to detail and commitment to excellence set them apart.'} />
            </div>
          </div>
          <div className="row ">
            <div className="col-12 mx-auto  col-md-6 col-lg-6">
              <Student pic={s1} name={'Ruhi Singh'} text={'Studying abroad with XYZ Company was a truly transformative and enriching experience! The unwavering support and guidance provided by the dedicated team were nothing short of exceptional. It was more than just education; it was a journey of personal and academic growth.'} />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home