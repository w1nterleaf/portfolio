import Container from '@/components/common/Container'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
<main id='skills'>
  <Container>
    <div className="mt-20 text-right">
      <h2 className="text-2xl sm:text-3xl md:text-[40px] flex flex-wrap justify-end gap-2">
        But what about <span className="text-[#7700ff]">skills</span>?
      </h2>
      <p className="text-lg sm:text-xl md:text-[30px] flex flex-wrap justify-end">
        ⬐ Some tech I’m familiar with. My skill set always grows
      </p>

      <div className="flex justify-center mt-10 sm:mt-20 max-w-full overflow-hidden">
        <div className="w-[90%] sm:w-[70%] md:w-[60%]">
          <Image
            src="/images/skills.png"
            width={8000}
            height={8000}
            alt="skills"
            className="w-full h-auto z-10"
            quality={100}
          />
        </div>
      </div>

      <div className="relative flex justify-center -mt-12 sm:-mt-24">
        <div className="absolute bottom-[20%] sm:bottom-[25%] w-[100px] sm:w-[150px] md:w-[200px] z-20">
          <Image
            src="/icons/logo.png"
            width={8000}
            height={8000}
            alt="logo"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/ellipse.png"
            width={8000}
            height={8000}
            alt="ellipse"
            className="w-full h-auto"
            quality={100}
          />
        </div>
      </div>
    </div>
  </Container>
</main>

  )
}

export default Skills