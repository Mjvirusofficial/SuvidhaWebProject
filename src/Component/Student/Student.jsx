import React from 'react'
import './Student.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Student(mj) {
  return (
    <div className='studentComponent m-3'>
      <div className="container ">
        <div className="row ">
          <div className="col-3 mt-4">

            <img src={mj.pic} className='studentimg ' alt="student" />
          </div>
          <div className="studentText mt-4 col-9 ">
            {mj.text}
            <div className="sname mt-3">
              {mj.name}
            </div>
            <div className=" mb-4">
            <i className="fas fa-star" style={{ color: '#6C63FF' }}></i>
            <i className="fas fa-star" style={{ color: '#6C63FF' }}></i>
            <i className="fas fa-star" style={{ color: '#6C63FF' }}></i>
            <i className="fas fa-star" style={{ color: '#6C63FF' }}></i>
            <i className="fas fa-star-half-alt " style={{ color: '#6C63FF' }}></i>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Student;