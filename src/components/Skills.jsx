import Image from 'next/image'
import React from 'react'
import icon from '../../public/Icon.png'
import iconUno from '../../public/icon.svg'
import iconDos from '../../public/chase.svg'
import iconTres from '../../public/icon-2.svg'
import iconCuatro from '../../public/icon-3.svg'
import iconCinco from '../../public/icon-4.svg'
import iconSeis from '../../public/icon-5.svg'


const Skills = () => {
    return (
        <div className='mt-[128px] grid gap-5 '>
            <div className='md:hidden '>
                <h3 className='text-[#fff] lg:text-[40px] text-[25px] font-semibold'>Our DigitalMarketing Expertise</h3>
                <p className='text-[#C9C9C9] lg:text-[18px] text-[15px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
            </div>
            <div className='grid grid-cols-2 gap-4  md:grid md:grid-cols-4'>
                <div className='bg-[#131313] px-5 py-3 '>
                    <div className='h-[40px] lg:h-[90px]  '>
                    <Image src={icon} width='auto' height='auto' alt='icon' className='w-[40px] lg:w-[70px] h-full ' />
                    </div>
                    <p className='text-[#C9C9C9] text-[17px]  py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className='h-[40px] lg:h-[90px]'>
                        {/* <Image src={iconDos} width='auto' height='auto' alt='icon' className='w-[40px] lg:w-[70px] h-full ' /> */}
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2 '>Search Engine Optimization</p>
                </div>
                <div className=' hidden md:block col-span-2 px-5 py-5'>
                    <h3 className='text-[#fff] lg:text-[40px] text-[25px] font-semibold'>Our DigitalMarketing Expertise</h3>
                    <p className='text-[#C9C9C9] lg:text-[18px] text-[15px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className='h-[40px] lg:h-[90px]'>
                        {/* <Image src={iconTres} width='auto' height='auto' alt='icon' className='w-[40px] lg:w-[70px] h-full' /> */}
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className='h-[40px] lg:h-[90px]'>
                        {/* <Image src={iconCuatro} width='auto' height='auto' alt='icon' className='w-[35px] lg:w-[70px] h-full' /> */}
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className=' h-[50px] lg:h-[90px]'>
                        {/* <Image src={iconCinco} width='auto' height='auto' alt='icon' className='w-[40px] lg:w-[70px] h-full' /> */}
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className=' h-[50px] lg:h-[90px]' >
                        {/* <Image src={iconSeis} width='auto' height='auto' alt='icon' className='w-[30px] lg:w-[60px] h-full' /> */}
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2 '>Search Engine Optimization</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
