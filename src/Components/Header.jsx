import React, { useState } from 'react'
import logo from './../assets/logo.png'
import './Header.css'



function Header() {
    const value = false
    const [click, setClick] = useState(value);

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <nav className="flex items-center md:justify-start justify-between font w-10/12 2xl:w-3/4 m-auto pt-5 2xl:pt-20" >
                <img src={logo} className="md:w-44 w-36" alt="" />
                <ul className={click ? 'nav-menu active' : 'nav-menu w-2/5 2xl:w-[30%] mx-auto 2xl:text-2xl'} >
                    <div className='option2 text-2xl p-8' onClick={handleClick}>
                        <i className='fa fa-times' />
                    </div>
                    <li className="inline-block md:mr-5 lg:mr-10 mb-10 md:mb-0" onClick={handleClick}>
                       <a href="#benefits"> Benefits </a>
                    </li>
                    <li className='inline-block md:mr-5 lg:mr-10 mb-10 md:mb-0' onClick={handleClick}>
                        <a href="#how"> How it Works </a>
                    </li>
                    <li className='inline-block md:mr-5 lg:mr-10 mb-10 md:mb-0' onClick={handleClick}>
                        <a href="#faqs"> FAQs </a>
                    </li>
                </ul>
                <div className='option mb-2' >
                    <i className='fa fa-bars text-2xl' onClick={handleClick} />
                </div>
            </nav>
        </>
    )
}

export default Header