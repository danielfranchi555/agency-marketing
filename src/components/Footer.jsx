import Image from 'next/image'
import React from 'react'
import phone from '../../public/phone.svg'
import images from '../images/image-footer.png'

const Footer = () => {
    return (
        <div className=' md:grid md:grid-cols-2 mt-[150px] w-[90%] mx-auto '>
            <div className='flex flex-col justify-center gap-5 md:gap-5 '>
                <h7 className='text-[#fff] text-[30px] lg:text-[50px] md:max-w-[500px] font-semibold'>Creative Digital Marketing Agency</h7>
                <p className='text-[#C9C9C9] text-[12px] lg:text-[18px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                <div className='flex justify-between items-center '>
                    <a href="" className='bg-[#2DCA72] rounded-md px-4 py-3'>Contact Us</a>
                    <span className='text-[#fff]'>OR</span>
                    <div className='flex gap-3'>
                        <Image src={phone} width='auto' height='auto' />
                        <span className='text-[#fff]'>+0 123 456-789</span>
                    </div>

                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <Image src={images} width='auto' height='auto' />

            </div>

        </div>
    )
}

export default Footer
