import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';
import rocket from '../../Image/3d-business-space-rocket.png'


function Card(mj) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 ">

                <div class="card sercard">
                    <img  src={mj.img} class=" cardimg cardbg" alt="..." />
                    <div class="card-body cardbg">
                        <h4 style={{color:'white'}} class="card-title"><b>{mj.title}</b></h4>
                        <NavLink style={{color:'white'}} className="nav-link active " aria-current="page" to={mj.visit}><h2 className='learn unicodeArrow'>Start Now <img className='rocket2' src={rocket} alt="rocket" /></h2></NavLink>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Card