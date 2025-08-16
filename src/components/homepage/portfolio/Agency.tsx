'use client'
import Container from '@/components/common/Container'
import React from 'react'
import { agency } from '@/data/portfolio.data'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'

const Agency = () => {
  return (
    <main>
      <Container>
        <div className="mt-50 relative">

                   <div className="absolute inset-0 flex items-center justify-center left-0  md:left-[40%] -z-10 overflowx-hidden">
                      <div
                        className="
                          w-[180px] h-[180px] 
                          sm:w-[250px] sm:h-[250px] 
                          md:w-[350px] md:h-[350px] 
                          lg:w-[450px] lg:h-[450px]
                          rounded-full 
                          bg-[radial-gradient(circle,_rgba(255,66,148,0.6)_0%,_rgba(77,160,255,0.5)_100%)] 
                          blur-3xl
                        "
                      />
                    </div>

          <div className="flex flex-col items-center  md:flex-row md:items-center md:justify-around gap-8">

            <div className="w-full max-w-[500px] order-1 md:order-0 text-center md:text-left">
              <Link href={'https://theagency-global.com/ru'} className='max-w-[100px]' target='_blank'>
                <h3 className="text-3xl sm:text-[40px]">The Agency</h3>
              </Link>
              
              <div className="mt-5 backdrop-blur-md bg-white/10 border border-white/10 rounded-[20px] p-4">
                <p className="text-lg sm:text-[20px]">
                  A multilingual website for an international PR and marketing agency. 
                  Features include service descriptions, case studies, and dynamic contact forms, all tailored to reflect the brand’s upscale and modern aesthetic.
                </p>
              </div>
            </div>

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
