import React from 'react'
import logo from "../../assets/logo.png"
export default function Logo() {
    return (
        <div className='flex items-baseline'>
            <img src={logo} alt="" />
            <p className='text-3xl -ml-3 font-extrabold'>ProFast</p>
        </div>
    )
}
