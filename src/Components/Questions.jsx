import React, { useState } from 'react'
import plus from './../assets/plus.png'
import cancel from './../assets/cancel.png'
import './../animate.css'

function Questions(props) {
    const [showContent, setShowContent] = useState(false)
    const [icon, setIcon] = useState(plus)

    const handleClick = () => {
        setShowContent(!showContent)
        showContent ? setIcon(plus) : setIcon(cancel)
    }

    return (
        <div className="lg:w-4/5 m-auto 2xl:text-xl bg-[#E7EBEE] relative border border-slate-100">
            <div className="flex justify-between items-center font-bold cursor-pointer p-5 pt-7 bg-white" onClick={handleClick}>
                <p> {props.question} </p>
                <img src={icon} className={showContent ? 'cursor-pointer animate__animated animate__rotateIn' : 'cursor-pointer'} alt="" />
            </div>
            <div className={showContent ? "font transition-all duration-200  py-5 px-10 animate__animated animate__fadeIn animate__slower" : "h-0 px-10 transition-all text-white"}>
                {props.answer}
            </div>
        </div>
    )
}

export default Questions