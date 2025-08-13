'use client'
import Container from '@/components/common/Container'
import React from 'react'
import { agency } from '@/data/portfolio.data'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Agency = () => {
  return (
    <main>
      <Container>
        <div className="mt-50 relative">
          {/* Фон */}
          <div className="absolute inset-0 max-w-[300px] max-h-[400px] left-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,66,148,1)_0%,_rgba(77,160,255,1)_100%)] blur-2xl scale-125 -z-10" />

          {/* Контент */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-8">
            
            {/* Текст */}
            <div className="w-full max-w-[500px] order-1 md:order-0 text-center md:text-left">
              <h3 className="text-3xl sm:text-[40px]">The Agency</h3>
              <div className="mt-5 backdrop-blur-md bg-white/10 border border-white/10 rounded-[20px] p-4">
                <p className="text-lg sm:text-[20px]">
                  A multilingual website for an international PR and marketing agency. 
                  Features include service descriptions, case studies, and dynamic contact forms, all tailored to reflect the brand’s upscale and modern aesthetic.
                </p>
              </div>
            </div>

            {/* Свайпер */}
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
                {agency.map((el) => (
                  <SwiperSlide key={el.id} className="flex justify-center">
                    <div className="w-full h-64 sm:h-80 relative">
                      <Image
                        src={el.img}
                        alt="gallasia"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </Container>
    </main>
  )
}

export default Agency
