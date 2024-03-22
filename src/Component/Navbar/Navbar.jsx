import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../Image/Logo.png'
import girl from '../../Image/Character14.svg'

function Navbar() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        console.log('click')
    };

    return (
        <>
            <div className="container ">
                <div className="mobile">
                    <div className="mleft">

                        <NavLink to='/'>
                            <img id='logo2' className='logoimg2' src={logo} alt="" />
                        </NavLink>

                    </div>
                    <div className="mright">
                        <svg
                            onClick={handleClick}
                            className='barsvg'
                            width="46"
                            height="46"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect y="3" width="24" height="2" fill="currentColor" />
                            <rect y="11" width="24" height="2" fill="currentColor" />
                            <rect y="19" width="24" height="2" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div className="mMenu">
                    <div className="mMenuDiv mt-3">
                        <NavLink to='/' className='nav-link'><p>Home</p></NavLink>
                        <NavLink to='/about' className='nav-link'><p>About Us</p></NavLink>
                        {/* <NavLink to='/exam' className='nav-link'><p>Exam</p></NavLink> */}
                        <NavLink to='/enquiry' className='nav-link'><p>Enquiry Form</p></NavLink>
                        <NavLink to='/service' className='nav-link'><p>Services</p></NavLink>
                        <NavLink to='/contact' className='nav-link'><p>Contact Us</p></NavLink>
                    </div>
                    <div className="girlimg">
                        <img className='girl' src={girl} alt="girl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar