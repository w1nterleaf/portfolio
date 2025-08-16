'use client'
import Container from '@/components/common/Container'
import React from 'react'
import { ledart } from '@/data/portfolio.data'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'

const Ledart = () => {
  return (
    <main>
      <Container>
        <div className="mt-50 relative ">
            <div className="absolute inset-0 max-w-[300px] max-h-[400px] left-[30%] rounded-full bg-[radial-gradient(circle,_rgba(255,66,148,1)_0%,_rgba(77,160,255,1)_100%)] blur-2xl scale-125 -z-10" />
<div className="flex flex-col items-center md:flex-row md:items-center md:justify-around gap-8">

  <div className="w-full max-w-[450px]">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      autoplay
      loop
      speed={1000}
      className="w-full"
    >
      {ledart.map((el) => (
        <SwiperSlide key={el.id} className="flex justify-center">
          <div className="w-full h-64 sm:h-80 relative">
            <Image
              src={el.img}
              alt="gallasia"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <div className="w-full max-w-[500px] text-center md:text-left">
    <Link href={'https://ledart.kz/ru'} className='max-w-[100px]' target='_blank'>
      <h3 className="text-3xl sm:text-[40px]">LedArt</h3>
    </Link>
    
    <div className="mt-5 backdrop-blur-md bg-white/10 border border-white/10 rounded-[20px] p-4">
      <p className="text-lg sm:text-[20px]">
        Ledart.kz — a company offering sale and installation of LED screens across Kazakhstan. 
        Website highlights consulting, product catalog, turnkey installation, and after-sales support
      </p>
    </div>
  </div>
</div>
        </div>
        
      </Container>
    </main>
  )
}

export default Ledart
