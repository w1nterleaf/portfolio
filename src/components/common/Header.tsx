import React from 'react'
import Container from './Container'
import { navigation } from '@/data/header.data'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='font-roboto bg-[#0a0a0a] p-5'>
        <Container>
            <div className="flex justify-between items-center">
                <div className="">
                    <Link href={'/'}>WINTERLEAF</Link>
                </div>
                <div className="flex gap-5">
                    <ul className='flex gap-5'>
                        {navigation.map((el, id) => {
                            return (
                                <Link key={id} href={el.slug}>
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