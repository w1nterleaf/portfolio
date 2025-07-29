import React from 'react'
import Container from './Container'
import { navigation } from '@/data/header.data'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='font-roboto bg-[#0a0a0a] p-5'>
        <Container>
            <div className="flex justify-between items-center">
                <div className="">
                    <Link href={'/'} className='flex items-center'>
                    <Image src='/icons/logo.png' width={50} height={60} alt='logo'/>
                    <p className='-ml-3 text-[#3eccef]'>interleaf</p>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <ul className='flex gap-5'>
                        {navigation.map((el, id) => {
                            return (
                                <Link key={id} href={el.slug} className='text-[#a7a7a7] hover:text-white duration-300'>
                                    {el.title}
                                </Link>
                            )
                        })}
                    </ul>
                    <p>RU</p>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header