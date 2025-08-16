import Image from 'next/image';
import Link from 'next/link';
import BurgerNav from './BurgerNav';


interface PropTypes {
   setIsOpen: (value: boolean) => void;
}

const BurgerModal = ({ setIsOpen}: PropTypes) => {

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <div className='relative w-full h-full mt-[20px] pt-5 pb-[60px] max-w-[1260px] px-[30px]'>
         <button onClick={closeModal} className='p-[10px] absolute right-0 top-0' type='button' aria-label='close'>
            <Image src={'/icons/close-modal.svg'} width={28} height={28} alt='close' className='w-7 h-7 lg:w-[60px] lg:h-[60px]' />
         </button>
         <div className={`md:flex md:items-start md:justify-between `}>
            <Image
               src={'/icons/logo.png'}
               width={150}
               height={150}
               alt='the agency logo'
               className='h-auto w-full max-w-[100px] aspect-[10/10] md:max-w-[150px] md:aspect-[150/18]'
            />

            <div className= {`flex gap-[5px] text-[10px] leading-120% -tracking-0.02 mt-5 text-[#ffffff] font-medium md:text-[14px] md:mt-0 md:flex-col  `}>
               
               <p>designed and developed by w1nterleaf</p>
            </div>
            <div className="flex  gap-[80px]">
            <Link href='/#form' 
                  className='hidden gap-[10px] font-medium -tracking-0.02 md:flex group'  onClick={closeModal}>
                     <span className='relative'>
                        Сontact us
                        <span className='absolute left-0 -bottom-[4px] w-0 h-[1px] bg-[#ED760E] transition-all duration-500 group-hover:w-full'></span>
                     </span>
                     
                     
                     <Image
                        src={'/icons/orange-arrow.svg'}
                        alt=''
                        width={8}
                        height={8}
                        className='group-hover:translate-x-[2px] group-hover:translate-y-[2px] duration-300'
                     />
                  </Link>
            <div className="hidden md:block">
               
            </div>
            </div>



         </div>
         <div className='relative mt-10 grid grid-cols-2 md:grid-cols-[1fr_1fr_19%] justify-between md:gap-[15px] md:mr-[120px]'>
            <BurgerNav closeModal={closeModal} />
            <div className='flex flex-col justify-between'>

               <div className={`flex items-end flex-col order-1 gap-5  md:items-start `}>
                  <Link href={'https://t.me/w1nterleaf'} onClick={closeModal} className='text-[#848484] hover:text-white duration-300'>
                     telegram
                  </Link>
                  <a href="mailto:itsw1nterleaf@gmail.com"onClick={closeModal} className='text-[#848484] hover:text-white duration-300'>
                     email
                  </a>

               </div>
               <div className=" block order-2 md:hidden ">

                  </div>
            </div>

         </div>
         <Link href='/#contacts' className='flex  md:hidden gap-[10px] order-3 font-medium -tracking-0.02 justify-center mt-10' onClick={closeModal}>
            Contact us
            <Image src={'/icons/orange-arrow.svg'} alt='arrow' width={15} height={10} />
         </Link>
      </div>
   );
};

export default BurgerModal;
