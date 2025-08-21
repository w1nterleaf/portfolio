import Container from '@/components/common/Container'
import React from 'react'
import { experience } from '@/data/experience.data'
import Image from 'next/image'
import initTranslations from '@/app/[lng]/i18n';

interface Props {
     lng: string;
} 
const Experience: React.FC<Props> = async ({ lng }) => {
    const { t } = await initTranslations(lng, ["translation"]);
  return (
    <main id='experience'>
        <Container>
            <div className="relative mt-40 ">
                   <div className="absolute inset-0 flex items-center justify-center -z-10 overflowx-hidden">
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
                <h3 className='text-[40px] z-10 flex justify-center'>{t("EduExp")}</h3>
                <div className=" flex flex-col items-center md:flex-row md:justify-around">
                    {experience.map((el, id) => {
                        return (
                        <div key={id} className="w-[300px] md:w-[500px] mt-5 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
                            <div className="w-full h-40 bg-sky-300 rounded-2xl">
                                <Image src={el.img} alt='logo' width={8000} height={8000} className='w-full h-40 object-cover' quality={100}/>
                            </div>
                            <div className="">
                                <p className="text-[30px] font-extrabold">{el.title}</p>
                                <p className="text-[20px]">{el.descr}</p>
                                <p className="text-[20px]">{el.time}</p>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
            </div>
           
        </Container>
    </main>
  )
}

export default Experience