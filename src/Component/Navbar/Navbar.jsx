import React, { useState } from 'react'
import logo from '../../Image/Logo.png'
import girl from '../../Image/Character14.svg'
import './Navbar.css'
// import finger from '../../Image/drag.png'
import { NavLink } from 'react-router-dom'


function Navbar() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        console.log('click')
    };


    return (
        <>
            <div className="container mt-3 navbar" id='ForDesktop'>
                <NavLink to='/'>
                    <img className='logoimg' src={logo} alt="" />
                </NavLink>
                <div className="nav">
                    <ul>
                        <li><NavLink to='/' className='nav-link'><p>Home</p></NavLink></li>
                        <li><NavLink to='/about' className='nav-link'><p>About Us</p></NavLink></li>
                        <li><NavLink to='/exam' className='nav-link'><p>Exams <i class="fa-solid fa-angle-down"></i></p></NavLink></li>
                        <li><NavLink to='/enquiry' className='nav-link'><p>Enquiry Form</p></NavLink></li>
                        <li><NavLink to='/service' className='nav-link'><p>Services</p></NavLink></li>
                        <li><NavLink to='/contact' className='nav-link'><p>Contact Us</p></NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="container-fluid mt-2" id='ForMobile' >
                <div className="mobileNav">
                    <NavLink to='/'>
                        <img id='logo2' className='logoimg2' src={logo} alt="" />
                    </NavLink>
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

                {/* <div className="mobilemenu ">
                    <div className='mobileUldiv' >
                        <ul className={isClicked ? 'clickOnMobileUl' : 'mobileUl'}>
                            <li><NavLink to='/' className='nav-link'><p>Home</p></NavLink></li>
                            <li><NavLink to='/about' className='nav-link'><p>About Us</p></NavLink></li>
                            <li><NavLink to='/exam' className='nav-link'><p>Exam</p></NavLink></li>
                            <li><NavLink to='/enquiry' className='nav-link'><p>Enquiry Form</p></NavLink></li>
                            <li><NavLink to='/service' className='nav-link'><p>Services</p></NavLink></li>
                            <li><NavLink to='/contact' className='nav-link'><p>Contact Us</p></NavLink></li>
                            <div className="girlimg">
                                <img className='girl' src={girl} alt="" />
                            </div>
                        </ul>

                    </div>

                </div> */}


                <div className={isClicked ? 'mobileMenu mt-3' : 'mobileMenu2 mt-3'}>
                    <div className="mMenu">
                        <NavLink to='/' className='nav-link'><p>Home</p></NavLink>
                        <NavLink to='/about' className='nav-link'><p>About Us</p></NavLink>
                        {/* <NavLink to='/exam' className='nav-link'><p>Exam</p></NavLink> */}
                        <NavLink to='/enquiry' className='nav-link'><p>Enquiry Form</p></NavLink>
                        <NavLink to='/service' className='nav-link'><p>Services</p></NavLink>
                        <NavLink to='/contact' className='nav-link'><p>Contact Us</p></NavLink>
                    </div>
                    <div className="girlimg">
                        <img className='girl' src={girl} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar