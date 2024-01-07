import Image from 'next/image'
import React from 'react'
import imageAbout from '../images/Section-Image.png'
import imageTwo from '../images/image-hero-2.png'
import FadeLeft from './FadeLeft'
import Reveal from './Reveal'





const About = () => {
    return (
        <div id='about' className='flex flex-col w-[90%] mx-auto  items-center gap-5 md:grid md:grid-cols-2 md:mt-[180px] '>
            <Reveal>
                <div>
                    <Image src={imageTwo} width='auto' height='auto' className='md:hidden' />
                    <Image src={imageAbout} width='auto' height='auto' className='hidden md:block' />
                </div>
            </Reveal>

            <div className='grid gap-7'>
                <FadeLeft>
                    <h4 className='text-[#fff] text-[25px] lg:text-[40px] font-semibold lg:max-w-[400px]'>Why should you choose Zebra</h4>
                    <p className='text-[#C9C9C9] text-[15px] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </FadeLeft>
                <FadeLeft>
                    <a href="" className='bg-[#3DD47E] px-5 py-2 rounded-lg  max-w-max inline-block'>Contact Us</a>
                </FadeLeft>
            </div>



        </div>
    )
}

export default About
