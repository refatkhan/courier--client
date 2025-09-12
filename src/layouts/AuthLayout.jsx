import React from 'react'
import { Outlet } from 'react-router'
import authImg from "../assets/authImage.png"
import Logo from '../pages/shared/Logo'
export default function AuthLayout() {
    return (
        <div className="p-12 bg-base-200">
            <Logo></Logo>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
