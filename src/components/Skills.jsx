import Image from 'next/image'
import React from 'react'
import icon from '../../public/Icon.png'


const Skills = () => {
    return (
        <div className='mt-[128px] grid gap-5 w-[90%] mx-auto'>
            <div className='md:hidden '>
                <h3 className='text-[#fff] lg:text-[40px] text-[25px] font-semibold'>Our DigitalMarketing Expertise</h3>
                <p className='text-[#C9C9C9] lg:text-[18px] text-[15px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
            </div>
            <div className='grid grid-cols-2 gap-4  md:grid md:grid-cols-4'>
                <div className='bg-[#131313] px-5 py-4 '>
                    <div className='h-[40px] lg:h-[90px]  '>
                        <span className='icon icon-chart-bar-outline text-[35px] md:text-[40px] lg:text-[70px] text-[#3DD47E]'></span>
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className='h-[40px] lg:h-[90px] '>
                    <span className='icon text-[#3DD47E] icon-group-outline text-[35px] md:text-[40px] lg:text-[70px]'></span>
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2 '>Search Engine Optimization</p>
                </div>
                <div className=' hidden md:block col-span-2 px-5 py-5'>
                    <h3 className='text-[#fff] lg:text-[40px] text-[25px] font-semibold'>Our DigitalMarketing Expertise</h3>
                    <p className='text-[#C9C9C9] lg:text-[18px] text-[15px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className='h-[40px] lg:h-[90px]'>
                    <span className='icon text-[#3DD47E] icon-video-outline text-[35px] md:text-[40px] lg:text-[70px]'></span>
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className='h-[40px] lg:h-[90px]'>
                    <span className='icon text-[#3DD47E] icon-edit text-[35px] md:text-[40px] lg:text-[70px]'></span>
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className=' h-[50px] lg:h-[90px]'>
                    <span className='icon text-[#3DD47E] icon-code-outline text-[35px] md:text-[40px] lg:text-[70px]'></span>
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2'>Search Engine Optimization</p>
                </div>
                <div className='bg-[#131313] px-5 py-4'>
                    <div className=' h-[50px] lg:h-[90px]' >
                    <span className='icon text-[#3DD47E] icon-one-finger-click text-[35px] md:text-[40px] lg:text-[70px]'></span>
                    </div>
                    <p className='text-[#C9C9C9] text-[17px] py-2 '>Search Engine Optimization</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
