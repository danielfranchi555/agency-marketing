import Image from 'next/image'
import React from 'react'
import imageOne from '../images/Image-1.png'
import imageTwo from '../images/Image-2.png'
import imageThree from '../images/Image-3.png'
import FadeLeft from './fadeLeft'
import Reveal from './Reveal'

const LatestWork = () => {
  return (
    <div id='latestWork' className='w-[90%] mx-auto'>
      <FadeLeft>
        <h5 className='text-[#fff] font-semibold text-[30px] lg:text-[40px] mt-[150px]'>Our latest work</h5>
      </FadeLeft>
      <div className='flex gap-5 flex-col md:grid md:grid-cols-3 md:gap-5 mt-[41px]'>
        <Reveal>
          <div className=' flex flex-col gap-2'>
            <Image src={imageOne} width='auto' height='auto' alt='imageWork' className='w-full' />
            <span className='text-[#fff] lg:text-[25px] font-semibold'>Artem - Digital Marketing campaign</span>
            <p className='text-[#C9C9C9] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          </div>
        </Reveal>

        <Reveal>
          <div className=' flex flex-col gap-2'>
            <Image src={imageTwo} width='auto' height='auto' alt='imageWork' className='w-full' />
            <span className='text-[#fff] lg:text-[25px] font-semibold'>Artem - Digital Marketing campaign</span>
            <p className='text-[#C9C9C9] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          </div>
        </Reveal>

        <Reveal>
          <div className=' flex flex-col gap-2'>
            <Image src={imageThree} width='auto' height='auto' alt='imageWork' className='w-full' />
            <span className='text-[#fff] lg:text-[25px] font-semibold'>Artem - Digital Marketing campaign</span>
            <p className='text-[#C9C9C9] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          </div>
        </Reveal>

      </div>
    </div>
  )
}

export default LatestWork
