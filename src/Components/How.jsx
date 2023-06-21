import React, { useState } from 'react'
import iPhone from './../assets/iPhone.png'
import iPhone1 from './../assets/iPhone1.png'
import iPhone2 from './../assets/iPhone2.png'

function How() {

    const [bg1, setBg1] = useState(true)
    const [bg2, setBg2] = useState(false)
    const [bg3, setBg3] = useState(false)

    const phone = <img src={iPhone} className='animate__animated animate__zoomIn w-72 mx-auto md:w-full' alt="" />
    const phone2 = <img src={iPhone2} className='animate__animated animate__fadeInLeft w-72 mx-auto md:w-full' alt="" />
    const phone3 = <img src={iPhone1} className='w-72 mx-auto md:w-full' alt="" />

    const [image, setImage] = useState(phone)

    const handleFirstChange = () => {
        setBg1(true);
        setImage(phone);
        setBg2(false);
        setBg3(false);
    }

    const handleSecondChange = () => {
        setBg1(false);
        setImage(phone2);
        setBg2(true);
        setBg3(false);
    }

    const handleThirdChange = () => {
        setBg1(false);
        setImage(phone3);
        setBg2(false);
        setBg3(true);
    }


    return (
        <div className="md:flex justify-evenly 2xl:justify-around items-center 2xl:w-3/4 m-auto">
            <div className={bg3 ? 'animate__animated animate__fadeInLeft' : ''}>
                {image}
            </div>
            <div className='md:w-[45%] 2xl:text-xl 2xl:w-1/2 w-10/12 m-auto md:m-0 cursor-pointer'>
                <div className={bg1 ? "bg-black relative p-5 rounded-r-xl mb-3 before:h-full before:w-2 before:bg-[#936DFF] before:-left-2 before:absolute before:-mt-5 before:rounded-l-xl" : "p-5"} onClick={handleFirstChange}>
                    <h1 className={bg1 ? 'text-white font-extrabold md:text-2xl text-xl' : 'font-extrabold md:text-2xl text-xl'} > 1. Fund Wallet </h1>
                    <p className='text-slate-400 mt-3 font'>
                        Easily fund your app wallet for seamless transactions and instant access
                        to your digital assets. Experience hassle-free funding today!
                    </p>
                </div>
                <div className={bg2 ? "bg-black relative p-5 rounded-r-xl mb-3 before:h-full before:w-2 before:bg-[#936DFF] before:-left-2 before:absolute before:-mt-5 before:rounded-l-xl" : "p-5"} onClick={handleSecondChange}>
                    <h1 className={bg2 ? 'text-white font-extrabold md:text-2xl text-xl' : 'font-extrabold md:text-2xl text-xl'}> 2. Search Favorite Store </h1>
                    <p className="text-slate-400 mt-3 font">
                        Discover a world of convenience at your fingertips.
                        Easily search and explore your favorite stores for endless shopping
                        possibilities. Start exploring today!
                    </p>
                </div>
                <div className={bg3 ? "bg-black relative p-5 rounded-r-xl mb-3 before:h-full before:w-2 before:bg-[#936DFF] before:-left-2 before:absolute before:-mt-5 before:rounded-l-xl" : "p-5"} onClick={handleThirdChange}>
                    <h1 className={bg3 ? 'text-white font-extrabold md:text-2xl text-xl' : 'font-extrabold md:text-2xl text-xl'}> 3. Add to cart </h1>
                    <p className='text-slate-400 mt-3 font'>
                        Take control of your shopping experience! Add items effortlessly from your cart,
                        tailoring your selections to perfection. Enjoy the freedom to customize your
                        shopping journey!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default How