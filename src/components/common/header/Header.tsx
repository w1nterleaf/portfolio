import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import Burger from './Burger'
import { NavInterface } from '@/interfaces/NavInterface'

interface Props {
     lng: string;
     nav: NavInterface;
}

const Header: React.FC<Props> = ({ lng, nav }) => {
  return (
    <header className='fixed z-20 w-full font-roboto bg-[#0a0a0a] p-5 '>
        <Container>
            <div className="flex justify-between items-center w-full">
                <div className="">
                    <Link href={'/'} className='flex items-center'>
                    <Image src='/icons/logo.png' width={50} height={60} alt='logo'/>
                    <p className='-ml-3 text-[#3eccef]'>interleaf</p>
                    </Link>
                </div>
                <div className="hidden md:flex">
                    <ul className='flex gap-5'>
                        {nav.map((el, id) => {
                            return (
                                <Link key={id} href={el.href} className='text-[#a7a7a7] hover:text-white duration-300'>
                                    {el.title}
                                </Link>
                            )
                        })}
                    </ul>
                    
                </div>
                <div className="flex md:hidden">
                    <Burger />
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header