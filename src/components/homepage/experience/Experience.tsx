import Container from '@/components/common/Container'
import React from 'react'
import { experience } from '@/data/experience.data'
import Image from 'next/image'

const Experience = () => {
  return (
    <main id='experience'>
        <Container>
            <div className="relative mt-40">
                <div className="absolute inset-0 max-w-[400px] max-h-[400px] left-[40%] rounded-full bg-[radial-gradient(circle,_rgba(255,66,148,1)_0%,_rgba(77,160,255,1)_100%)] blur-2xl scale-125 -z-10" />
                <h3 className='text-[40px] z-10'>Educational Courses and Work Experience</h3>
                <div className="flex justify-around">
                    {experience.map((el, id) => {
                        return (
                        <div key={id} className="w-[500px] mt-5 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
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