'use client'
import Image from 'next/image'
import React from 'react'
import avatarUno from '../../public/avatar-1.svg'
import avatarTwO from '../../public/avatar-2.svg'
import avatarThree from '../../public/avatar-3.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Testmonials = () => {
    const test = [
        {
            imagen: avatarUno,
            nombre: 'Zoe Mantis',
            founder: 'Founder, Alpha Group',
            testmonio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
        },
        {
            imagen: avatarTwO,
            nombre: 'Zoe Mantis',
            founder: 'Founder, Alpha Group',
            testmonio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
        },
        {
            imagen: avatarThree,
            nombre: 'Zoe Mantis',
            founder: 'Founder, Alpha Group',
            testmonio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
        },
        {
            imagen: avatarUno,
            nombre: 'Zoe Mantis',
            founder: 'Founder, Alpha Group',
            testmonio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
        },
        {
            imagen: avatarTwO,
            nombre: 'Zoe Mantis',
            founder: 'Founder, Alpha Group',
            testmonio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
        },
        {
            imagen: avatarThree,
            nombre: 'Zoe Mantis',
            founder: 'Founder, Alpha Group',
            testmonio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div id='testmonials' className='w-[100%] mt-[150px] bg-[#131313] py-20'>
            <div className='w-[90%] mx-auto'>
                <h6 className='lg:text-[40px] text-[30px] font-semibold text-[#fff]'>Testimonials</h6>
                <Slider {...settings} className='mt-3'>
                    {test.map((item) => (
                        <div className='bg-[#0D0D0D] shadow-lg flex rounded-md py-7 px-3'>
                            <div className='flex gap-3 '>
                                <Image src={item.imagen} width='full' className='rounded-full w-[50px]' height='auto' />
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[#fff] lg:text-[16px] text-[15px]'>{item.nombre}</span>
                                    <span className='text-[#C9C9C9] lg:text-[13px] text-[10px]'>{item.founder}</span>
                                </div>
                            </div>
                            <p className=' text-[#C9C9C9] lg:text-[18px] text-[15px] py-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                        </div>
                    ))}
                </Slider>
            </div>



        </div>
    )
}

export default Testmonials
