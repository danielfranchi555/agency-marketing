import React from 'react'
import asus from '../../public/asus-logo.svg'
import alianz from '../../public/allianz.svg'
import chase from '../../public/chase.svg'
import linkedin from '../../public/linkedin.svg'
import newYorktTimes from '../../public/new-york-times.svg'

import Image from 'next/image'
const Certification = () => {
  return (
    <div className='mt-[90px] w-[90%] mx-auto'>
      <div className='flex divide-x py-4 items-center'>
          <h2 className='text-[16px] md:text-[25px] text-[#fff] border-r pr-4 '>Featured in</h2>
          <p className='text-[#C9C9C9] md:text-[20px] text-[15px] font-semibold px-4'>Our Certification</p>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid md:grid-cols-5'>
        <div className=' bg-[#181818] px-4 rounded-md py-8 flex items-center justify-center'>
          <Image src={asus} width='auto' height='auto' alt='asus' />
        </div>
        <div className=' bg-[#181818] px-5 rounded-md py-8 flex items-center justify-center'>
          <Image src={alianz} width='auto' height='auto' alt='asus' />
        </div>
        <div className=' bg-[#181818] px-5 py-8 rounded-md flex items-center justify-center'>
          <Image src={chase} width='auto' height='auto' alt='asus' />
        </div>
        <div className=' bg-[#181818] px-5 py-8 rounded-md flex items-center justify-center'>
          <Image src={newYorktTimes} width='auto' height='auto' alt='asus' />
        </div>
        <div className=' bg-[#181818] px-5 py-8 rounded-md flex items-center justify-center'>
          <Image src={linkedin} width='auto' height='auto' alt='asus' />
        </div>
      </div>
    </div>
  )
}

export default Certification
