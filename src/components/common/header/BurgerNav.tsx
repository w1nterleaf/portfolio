
import Link from 'next/link';
import arrow from '@/public/icons/arrow-forward.svg';
import Image from 'next/image';


interface BurgerNavProps {
   closeModal: () => void;
}
const BurgerNav = ({ closeModal }: BurgerNavProps) => {

   const navigation = [
    {
        id: 0,
        title: 'Home',
        slug: '/'
    },
    {
        id: 1,
        title: 'Experience',
        slug: '/#experience'
    },
    {
        id: 2,
        title: 'Skills',
        slug: '/#skills'
    },
    {
        id: 3,
        title: 'Projects',
        slug: '/#projects'
    },

   ];
   return (
      <ul className='flex flex-col w-max gap-[15px] md:gap-5 '>
         {navigation
         .filter(el => el.id !== 2)
         .map(el => {
            return (
               <li key={el.id}>
                  <Link
                     className='w-max h-full flex gap-[25px] items-center font-medium text-[20px] leading-120% -tracking-0.02 md:text-[60px] md:leading-105%'
                     href={el.slug}
                     onClick={closeModal}
                     >
                        
                     <span>{el.title}</span>
                     <Image
                        src={'/icons/orange-arrow.svg'}
                        alt='arrow'
                        width={60}
                        height={60}
                        className='w-[20px] h-[20px] md:w-[60px] md:h-[60px] md:relative md:top-2'
                     />
                  </Link>
               </li>
            );
         })}
         
      </ul>
   );
};

export default BurgerNav;
