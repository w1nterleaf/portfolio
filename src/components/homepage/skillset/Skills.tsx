import Container from '@/components/common/Container'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <main id='skills'>
        <Container>
            <div className="mt-20">
                <h2 className='text-[40px] flex justify-end gap-2'>But what about <span className='text-[#7700ff]'> skills</span>?</h2>
                <p className='text-[30px] flex justify-end'>⬐ Some tech I’m familiar with. My skill set always grows</p>
                <div className="flex justify-center mt-20">
                    <Image src='/images/skills.png' width={8000} height={8000} alt='skills' className='max-w-[500px] h-50 z-10' quality={100}/>
                </div>
                <div className=" relative flex justify-center -mt-24">
                    <Image src='/icons/logo.png' width={250} height={60} alt='logo' className='absolute bottom-45 pr-5'/>
                    <Image src='/images/ellipse.png' width={8000} height={8000} alt='skills' className='max-w-full' quality={100} />
                </div>
            </div>
        </Container>
    </main>
  )
}

export default Skills