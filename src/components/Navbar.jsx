'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Logo.svg'
import burguer from '../../public/menu-01.svg'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const toggle = () => {
        setMenu(!menu)
        console.log(menu);
    }

    const NavMobile = () => {
        return (
            <>
                <ul className='text-[#C9C9C9] py-2 flex flex-col gap-3 '>
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
            <nav className=' flex items-center justify-between py-4 '>
                <div>
                    <Image src={logo} />
                </div>
                <ul className='hidden md:flex md:gap-5 lg:gap-[50px]'>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'>About us</li>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'>Services</li>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'>Latest Work</li>
                    <li className='md:text-[15px] lg:text-[16px] text-[#C9C9C9]'>Testmonials</li>
                </ul>
                <a href="" className='hidden md:flex text-[#444] bg-[#3DD47E] px-5 py-2 rounded-lg'>Contat Us</a>
                <span className={`${menu ? 'block md:hidden bg-close w-[40px] h-10 bg-no-repeat bg-right bg-cover' : 'md:hidden h-10  block bg-open w-[40px] bg-cover bg-right  bg-no-repeat'}`} onClick={toggle} width='auto' alt='menu' />
            </nav>
            {menu ? <NavMobile /> : ''}

        </>

    )
}

export default Navbar
