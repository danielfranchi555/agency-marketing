import Image from 'next/image'
import React from 'react'
import imageAbout from '../images/Section-Image.png'
import imageTwo from '../images/image-hero-2.png'





const About = () => {
    return (
        <div className='flex flex-col  items-center gap-5 md:grid md:grid-cols-2 md:mt-[180px] '>
            <div>
                <Image src={imageTwo} width='auto' height='auto' className='md:hidden' />
                <Image src={imageAbout} width='auto' height='auto' className='hidden md:block' />
            </div>
            <div className='grid gap-7'>
                <h4 className='text-[#fff] text-[25px] lg:text-[40px] font-semibold lg:max-w-[400px]'>Why should you choose Zebra</h4>
                <p className='text-[#C9C9C9] text-[15px] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                <a href="" className='bg-[#3DD47E] px-5 py-2 rounded-lg  max-w-max inline-block'>Contact Us</a>
            </div>



        </div>
    )
}

export default About
