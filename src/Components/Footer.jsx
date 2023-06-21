import React from 'react'
import logo from './../assets/logo2.png'
import location from './../assets/location.png'
import email from './../assets/email.png'
import call from './../assets/call.png'

function Footer() {
    return (
        <div className="bg-black font">
            <div className='w-10/12 m-auto 2xl:text-xl text-center md:text-start md:flex justify-between items-center text-white md:py-20 py-10'>
                <div className="md:w-1/3 mb-10 md:mb-0 md:mr-10 lg:mr-0">
                    <img src={logo} className='mx-auto md:mx-0' alt="" />
                    <p className='mt-5'>Bringing luxury to your doorstep.</p>
                    <div className="w-full h-[0.15rem] my-5 bg-[#936DFF]" />
                    <p>
                        Konix simplifies the process of shopping abroad, by bringing all your favorite brands to you under one roof and providing a seemless payment option.
                    </p>
                </div>
                <div className="md:flex justify-between">
                    <div className='mb-10 md:mb-0'>
                        <div className="font-extrabold text-lg 2xl:text-2xl md:mb-5 mb-3">Product</div>
                        <p className='mb-2'>How it Works</p>
                        <p>Benefits</p>
                        <p className='my-2'>What customers say</p>
                        <p>FAQs</p>
                    </div>
                    <div className='md:w-1/3 mx-auto mb-10 md:mb-0'>
                        <div className="font-extrabold text-lg 2xl:text-2xl mb-3">Contact</div>
                        <div className='mb-2 flex items-center justify-center md:justify-start'>
                            <img src={call} alt="" />
                            <p className='ml-2'> 1 800 234 3432 </p>
                        </div>
                        <div className='flex items-center justify-center md:justify-start'>
                            <img src={location} alt="" />
                            <p className='ml-2'> 10, Afeez Jakande Alausa, Ikeja, Lagos.</p>
                        </div>
                        <div className='mt-2 flex items-center justify-center md:justify-start'>
                            <img src={email} alt="" />
                            <a href='mailto:info@konix.com' className='ml-2'> info@konix.com </a>
                        </div>
                    </div>
                    <div className=''>
                        <div className="font-extrabold text-lg 2xl:text-2xl mb-3">Legal</div>
                        <p className='mb-2'>Terms of Use</p>
                        <p>Private Policy</p>
                    </div>
                </div>
            </div>
            <div className="text-center 2xl:text-2xl text-white py-5">
                © Konix 2022. All rights reserved.
            </div>
        </div>
    )
}

export default Footer