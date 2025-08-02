'use client'
import Container from '@/components/common/Container'
import React from 'react'
import { gallasia } from '@/data/portfolio.data'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Ledart = () => {
  return (
    <main>
      <Container>
        <div className="mt-50 relative ">
            <div className="absolute inset-0 max-w-[300px] max-h-[400px] left-[23%] rounded-full bg-[radial-gradient(circle,_rgba(255,66,148,1)_0%,_rgba(77,160,255,1)_100%)] blur-2xl scale-125 -z-10" />
            <div className="flex justify-around items-center">
                <div className="">
                <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                autoplay
                loop
                speed={1000}
                className="w-full max-w-md"
                >
                {gallasia.map((el) => (
                    <SwiperSlide key={el.id} className="flex justify-center">
                    <div className="w-[400px] h-80 relative">
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
                <div className="w-[500px] ">
                    <h3 className='text-[40px]'>LedArt</h3>

                    <div className="mt-5 backdrop-blur-md bg-white/10 border border-white/10 rounded-[20px] p-4 z-12">
                        <p className='z-12 text-[20px]'>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
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
