'use client';
import Image from 'next/image';
import BurgerModal from './BurgerModal';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

const Burger = () => {
   const lenis =useLenis();
   const [isOpen, setIsOpen] = useState(false);
   function openModal() {
      setIsOpen(true);
   }
   useEffect(() => {
      if (isOpen) {
         const scrollWidth = window.innerWidth - document.body.clientWidth;
         lenis?.stop();
         document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
         lenis?.start();
         document.body.style.paddingRight = '';
      }

      return () => {
         lenis?.start();
         document.body.style.paddingRight = '';
      };
   }, [isOpen]);
   return (
      <>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  onClick={() => setIsOpen(false)}
                  className='fixed top-0 left-0 w-full h-full z-[9999] backdrop-blur-md'
                  initial={{
                     opacity: 0,
                  }}
                  animate={{
                     opacity: 1,
                  }}
                  exit={{
                     opacity: 0,
                  }}
                  transition={{
                     duration: 0.3,
                  }}>
                  <motion.div
                     initial={{
                        y: '-100%',
                     }}
                     animate={{
                        y: 0,
                     }}
                     exit={{
                        y: '-100%',
                     }}
                     transition={{
                        duration: 0.3,
                     }}
                     onClick={e => e.stopPropagation()}
                     className='h-max w-full bg-[#1C1C1C] flex justify-center items-center'>
                     <BurgerModal setIsOpen={setIsOpen} />
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
         <button type='button' onClick={openModal} aria-label='menu' className='max-w-[47px] w-full h-[40px] p-[10px]'>
            <Image src={'/icons/burger-white.svg'} alt='burger' width={60} height={12} className='w-full h-full' />
         </button>
      </>
   );
};

export default Burger;
