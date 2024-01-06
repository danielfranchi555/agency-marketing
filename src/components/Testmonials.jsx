import Image from 'next/image'
import React from 'react'
import avatarUno from '../../public/avatar-1.svg'
import avatarTwO from '../../public/avatar-2.svg'
import avatarThree from '../../public/avatar-3.svg'


const Testmonials = () => {
    return (
        <div className='bg-[#131313] mt-[150px] py-10 grid gap-5 '>
            <div className='w-[90%] mx-auto'>
                <h6 className='text-[#fff] lg:text-[40px] text-[30px] font-semibold'>Testimonials</h6>
                <div className='grid gap-5 md:grid md:grid-cols-3'>
                    <div className='bg-[#0D0D0D] rounded-md grid px-5 py-4 gap-4'>
                        <div className='flex gap-2'>
                            <Image src={avatarUno} width='auto' height='auto' alt='avatar' className='rounded-full' />
                            <div className='flex flex-col gap-1 items-start justify-center'>
                                <span className='lg:text-[16px] text-[10px] font-semibold text-[#fff]'>Zoe Mantis</span>
                                <span className='lg:text-[13px] text-[7px] text-[#C9C9C9]'> Founder, Alpha Group</span>
                            </div>
                        </div>


                        <p className='text-[#C9C9C9] text-[13px] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    <div className='bg-[#0D0D0D] rounded-md grid gap-4 px-5 py-4'>
                        <div className='flex gap-2'>
                            <Image src={avatarTwO} width='auto' height='auto' alt='avatar' className='rounded-full' />
                            <div className='flex flex-col gap-1 items-start justify-center'>
                                <span className='lg:text-[16px] text-[10px] font-semibold text-[#fff]'>Zoe Mantis</span>
                                <span className='lg:text-[13px] text-[7px] text-[#C9C9C9]'> Founder, Alpha Group</span>
                            </div>
                        </div>


                        <p className='text-[#C9C9C9] text-[13px] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    <div className='bg-[#0D0D0D] rounded-md grid gap-4 px-5 py-4'>
                        <div className='flex gap-2'>
                            <Image src={avatarThree} width='auto' height='auto' alt='avatar' className='rounded-full' />
                            <div className='flex flex-col gap-1 items-start justify-center'>
                                <span className='lg:text-[16px] text-[10px] font-semibold text-[#fff]'>Zoe Mantis</span>
                                <span className='lg:text-[13px] text-[7px] text-[#C9C9C9]'> Founder, Alpha Group</span>
                            </div>
                        </div>


                        <p className='text-[#C9C9C9] text-[13px] lg:text-[18px] font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testmonials
