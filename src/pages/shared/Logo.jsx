import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router'
export default function Logo() {
    return (
        <Link to='/'>
            <div className='flex items-baseline'>
                <img src={logo} alt="" />
                <p className='text-3xl -ml-3 font-extrabold'>ProFast</p>
            </div>
        </Link>
    )
}
