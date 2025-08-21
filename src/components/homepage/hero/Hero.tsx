import Container from '@/components/common/Container'
import React from 'react'
import Image from 'next/image'
import initTranslations from '@/app/[lng]/i18n';

interface Props {
     lng: string;
} 

const Hero: React.FC<Props> = async ({ lng }) => {
  const { t } = await initTranslations(lng, ["translation"]);
  return (
    <main>
        <Container>
          <div className="flex-col flex items-center pt-25 md:flex-row md:justify-evenly">
          <div className="">
          <div className="relative mt-10 w-max ">
            <h2 className='text-[30px] mb-10'>{t("Hello")}<span className='text-[#7700ff] ml-2'>{t("name")}</span></h2>
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
            <p className='text-[25px]'>{t("role")}⬎</p>
            <h2 className='text-[60px] max-w-[390px] leading-[110%]'>{t("judges")} <span className='text-[#7700ff]'>{t("speed")}</span></h2>
            <Image 
              src="/icons/ellipse.png" 
              width={290} 
              height={240}
              alt='arrow' 
              className='absolute hidden bottom-6 right-0 z-10 sm:flex '
            />
            <p className='text-[20px] mt-3'>{t("closing")}</p>

          </div>
          </div>
        </Container>
    </main>
  )
}

export default Hero