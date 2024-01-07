import Image from 'next/image'
import React from 'react'
import imagen from '../images/empresaria-6.png'
import iconOne from '../../public/icon-1-hero.svg'
import iconTwo from '../../public/icon-2-hero.svg'
import iconFour from '../../public/icon-4-hero.svg'
import iconFive from '../../public/icon-5-hero.svg'
import iconSix from '../../public/rectangle-orange.svg'
import MotionTransition from './MotionTransition'
import Reveal from './Reveal'


const Hero = () => {
    return (
        <Reveal  className= 'w-[90%] md:w-[90%] md:mx-auto pb-10 md:pb-0 mx-auto lg:w-[90%] lg:mx-auto flex flex-col gap-5 md:grid md:grid-cols-2  md:items-center lg:gap-0 bg-[#444] lg:h-[650px]  overflow-hidden'>
            <div className='flex items-center justify-center md:order-2  lg:w-full  '>
                    <Image src={imagen} width='auto' height='auto' alt='image-hero' className='lg:w-[80%] h-full' /> 
            </div>
            <div className='flex flex-col gap-3 md:gap-6 lg:w-full'>
                <div className='lg:max-w-[650px]'>
                    <h1 className='text-[#fff] text-[30px] font-semibold lg:text-[60px]'>Creative Digital Marketing Agency</h1>
                </div>
                <div className='lg:max-w-[500px]'>
                    <p className='text-[#C9C9C9] text-[15px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </div>
                <a href="" className='bg-[#3DD47E] px-5 py-3 inline-block max-w-max rounded-lg'>Contact Us</a>
            </div>

        </Reveal>
    )
}

export default Hero
