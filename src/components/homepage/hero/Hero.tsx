import Container from '@/components/common/Container'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main>
        <Container>
          <div className="flex-col flex items-center pt-25 md:flex-row md:justify-evenly">
          <div className="flex-col flex items-center md:flex-row md:justify-evenly">
          <div className="relative mt-10 w-max ">
            <h2 className='text-[30px] mb-10'>Hello World! I am <span className='text-[#7700ff]'>Ruslana</span></h2>
            <Image 
            src="/icons/arrow.png" 
            width={120} 
            height={140}
            alt='arrow' 
            className='absolute top-5 right-0 scale-x-[-1] rotate-90 z-10'
            />
          </div>

          <div className="relative w-[180px] h-[180px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,66,148,1)_0%,_rgba(77,160,255,1)_100%)] blur-2xl scale-125 -z-10" />
            <Image
              src="/images/hero.jpg"
              alt="hero"
              width={180}
              height={150}
              className="rounded-full relative z-10"
            />
          </div>
          </div>
          <div className="flex flex-col justify-end h-auto relative">
            <p className='text-[25px]'>A Developer who ⬎</p>
            <h2 className='text-[60px] max-w-[390px] leading-[110%]'>Judges websites by their <span className='text-[#7700ff]'>loading time</span></h2>
            <Image 
              src="/icons/ellipse.png" 
              width={290} 
              height={240}
              alt='arrow' 
              className='absolute hidden bottom-6 right-0 z-10 sm:flex '
            />
            <p className='text-[20px] mt-3'>Because if it lags — I’m closing that tab.</p>

          </div>
          </div>
        </Container>
    </main>
  )
}

export default Hero