'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Logo.svg'
import MotionTransition from './MotionTransition'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const toggle = () => {
        setMenu(!menu)
        console.log(menu);
    }

    const NavMobile = () => {
        return (
            <>
                <ul className='text-[#C9C9C9] w-[90%] mx-auto py-2 flex flex-col gap-3 '>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Latest Work</li>
                    <li>Testmonials</li>
                </ul>
            </>
        )
    }



    return (
        <>
            <MotionTransition className='w-[90%] mx-auto  flex items-center justify-between py-4 '>
                <div>
                    <Image src={logo} />
                </div>
                <ul className='hidden md:flex md:gap-5 lg:gap-[50px]'>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'> <a href="#about">About us</a></li>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'><a href="#latestWork">Latest Work </a></li>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'><a href="#testmonials">Testmonials</a></li>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'><a href="#services">Services</a></li>
                </ul>
                <a href="" className='hidden md:flex text-[#444] bg-[#3DD47E] px-5 py-2 rounded-lg'>Contat Us</a>
                    <span className={`${menu ? 'flex text-center text-[35px] md:hidden icon icon-times text-[#3DD47E] ' : 'md:hidden text-[30px] text-[#3DD47E]  flex icon icon-th-menu '}`} onClick={toggle} width='auto' alt='menu' />
            </MotionTransition>
            {menu ? <NavMobile /> : ''}

        </>

    )
}

export default Navbar
