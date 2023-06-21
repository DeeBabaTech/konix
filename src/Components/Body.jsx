import React from 'react'
import Questions from './Questions'
import How from './How'
import ScrollAnimation from 'react-animate-on-scroll'
import './../animate.css'
import apple from './../assets/apple.png'
import google from './../assets/google.png'
import slider from './../assets/slider.jpg'
import phone4 from './../assets/phone4.png'
import phone5 from './../assets/phone5.png'
import adidas from './../assets/adidas.png'
import prada from './../assets/prada.png'
import nike from './../assets/nike.png'
import fendi from './../assets/fendi.png'
import dior from './../assets/dior.png'
import louis from './../assets/louis.png'
import bitcoin from './../assets/bitcoin.png'
import card from './../assets/card.png'
import search from './../assets/search.png'

function Body() {
    return (
        <div className=''>
            <div className='w-10/12 2xl:w-3/4 m-auto md:mb-20 mb-10 mt-5 lg:mt-14 md:mt-10 text-center'>
                <h1 className='2xl:text-8xl lg:text-6xl md:text-4xl text-3xl md:w-10/12 m-auto font-extrabold  animate__animated animate__slideInUp animate__slow'>
                    Get all your luxury items in
                    <span className='text-[#936DFF]'> one place </span>
                </h1>
                <p className='lg:w-5/12 md:w-7/12 2xl:w-7/12 m-auto font text-slate-500 2xl:text-3xl mt-5 2xl:mt-10 lg:mb-10 mb-7 2xl:mb-16 animate__animated animate__slideInUp animate__slow'>
                    We provide a doorway to all the major luxury brands you love,
                    a seemless shopping experience and more.
                </p>
                <div className="flex justify-center  animate__animated animate__zoomIn animate__slow">
                    <img src={apple} className='md:w-36 2xl:w-56 w-28 mr-5' alt="" />
                    <img src={google} className='md:w-36 2xl:w-56 w-28' alt="" />
                </div>
                <img src={slider} className='mt-10 w-full 2xl:mt-20' alt="" />
            </div>


            <div className="w-10/12 2xl:w-3/4 m-auto">
                <div className="text-sm 2xl:text-xl mx-auto w-fit text-center md:text-start text-slate-500 font-bold my-10 2xl:my-20">
                    SOME MAJOR BRANDS OUR APP PROVIDES ACCESS TO
                </div>
                <ScrollAnimation
                    animateIn='animate__fadeIn'
                    animateOnce={true}
                    duration='1'
                >
                    <div className="flex flex-wrap justify-between items-center md:mb-20">
                        <img src={adidas} className='w-[30%] 2xl:w-[8%] mb-12 md:mb-0 md:w-fit' alt="" />
                        <img src={prada} className='w-1/2 2xl:w-[8%] mb-12 md:mb-0 md:w-fit' alt="" />
                        <img src={nike} className='w-[35%] 2xl:w-[8%] mb-12 mt-3 md:mt-0 md:mb-0 md:w-fit' alt="" />
                        <img src={fendi} className='w-[40%] 2xl:w-[8%] -mt-5 md:mt-0 mb-12 md:mb-0 md:w-fit' alt="" />
                        <img src={dior} className='w-[40%] 2xl:w-[8%] mb-12 md:mb-0 md:w-fit' alt="" />
                        <img src={louis} className='w-[25%] 2xl:w-[8%] mr-5 md:mr-0 mb-12 md:mb-0 md:w-fit' alt="" />
                    </div>
                </ScrollAnimation>
            </div>
            <div className="bg-black text-white" id='benefits'>
                <div className="w-10/12 2xl:w-3/4 m-auto md:pt-20 pt-10 text-center md:text-start">
                    <div className="md:flex items-center">
                        <div className="md:text-5xl 2xl:text-6xl text-4xl font-extrabold md:mr-28 mb-5 md:mb-0">Benefits</div>
                        <p className='md:w-7/12 md:text-2xl 2xl:text-3xl font text-xl text-slate-300'>
                            No worries, we do it all for you. Make all orders from the comfort of your home.
                        </p>
                    </div>
                    <div className="py-20 md:flex justify-between 2xl:text-2xl">
                        <div className="md:w-[28%]">
                            <img src={search} className='w-20 mx-auto md:mx-0' alt="" />
                            <h5 className='my-5 text-2xl font-extrabold'>Search Favourite Store</h5>
                            <p className='text-slate-300 font'>
                                We provide a doorway to all the major luxury brands you love, a seemless shopping experience and more.
                            </p>
                        </div>
                        <div className="md:w-[28%] mt-14 md:mt-0">
                            <img src={card} className='w-20 mx-auto md:mx-0' alt="" />
                            <h5 className='my-5 text-2xl font-extrabold'>No limitations</h5>
                            <p className='text-slate-300 md:w-4/5 font'>
                                Shop on any store even if your destination isn’t an eligible shipping destinations.
                            </p>
                        </div>
                        <div className="md:w-[28%] mt-14 md:mt-0">
                            <img src={bitcoin} className='w-20 mx-auto md:mx-0' alt="" />
                            <h5 className='my-5 text-2xl font-extrabold'>Pay in Naira or Crypto </h5>
                            <p className='text-slate-300 md:w-11/12 font'>
                                Fund your wallet in Naira and Crypto. NO need pulling your hair out over exchange rates and currency policies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto lg:pt-16 pt-12 bg-[#F9F9F9]" id='how'>
                <ScrollAnimation
                    animateIn='animate__zoomIn'
                    animateOnce={true}
                    duration='3'
                >
                    <h1 className="text-center md:text-5xl text-3xl font-extrabold lg:mb-16 md:mb-7 mb-5">
                        How it Works
                    </h1>
                </ScrollAnimation>
                <How />
            </div>
            <div className="w-10/12 m-auto pt-16 lg:pb-20 md:pb-14 pb-10" id='faqs'>
                <ScrollAnimation
                    animateIn='animate__zoomIn'
                    animateOnce={true}
                    duration='3'
                >
                    <h1 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold lg:mb-16 mb-7">
                        Frequently asked questions
                    </h1>
                </ScrollAnimation>
                <Questions
                    question='Can I shop from more than one store?'
                    answer='Yes you can,but ensure to check out from a store before the other.'
                />
                <Questions
                    question='How long will my delivery take?'
                    answer='5-7 days from Uk and 7-14 days from Usa and other parts of the world'
                />
                <Questions
                    question='How secure are my card details?'
                    answer='Konix app does not store your card details,your details only gets to the payment gateway which is Flutterwave which is safe and secured'
                />
                <Questions
                    question='Is there a standard exchange rate?'
                    answer='Depends on the bank rate and black market rate at the said time of shopping, but we guarantee the best rate at all times.'
                />
                <Questions
                    question='Can I pay with my Naira Card?'
                    answer='Yes you can, inclusive of bank transfers.'
                />
            </div>
            <div className="bg-gradient-to-r from-[#936DFF] 2xl:text-xl to-[#CB6CE6] text-center md:py-16 py-10 relative">
                <img src={phone4} className='absolute bottom-0 md:w-72 lg:w-96 2xl:w-[35rem] left-0 lg:left-20 2xl:left-32 hidden lg:block' alt="" />
                <img src={phone5} className='absolute bottom-0 md:w-72 lg:w-96 2xl:w-[35rem] right-0 lg:right-20 2xl:right-32 hidden lg:block' alt="" />
                <h1 className='md:text-4xl text-3xl 2xl:text-5xl w-10/12 m-auto font-extrabold'>Download Konix App Today!</h1>
                <p className='lg:w-1/3 md:w-1/2 w-10/12 m-auto font-semibold my-5 2xl:my-10 text-slate-800 font'>
                    We provide a doorway to all the major luxury brands you love, a seemless shopping experience and more.
                </p>
                <div className="flex justify-center">
                    <img src={apple} className='md:w-36 2xl:w-56 w-28 mr-5' alt="" />
                    <img src={google} className='md:w-36 2xl:w-56 w-28' alt="" />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Body