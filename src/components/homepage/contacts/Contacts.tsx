import initTranslations from '@/app/[lng]/i18n';
import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
     lng: string;
} 

const Contacts: React.FC<Props> = async ({ lng }) => {
  const { t } = await initTranslations(lng, ["translation"]);
  return (
    <main id='contacts'>
        <Container>
            <div className="mt-40 pb-10">
                <h2 className='text-[40px]'>{t("Partner")}</h2>
                <p className='text-[20px] w-[330px] mt-5 mb-12'>
                    {t("Open")}
                </p>
                <a className='text-[25px]' href="mailto:itsw1nterleaf@gmail.com">itsw1nterleaf@gmail.com</a>
                <div className="flex gap-3 mt-3">

                    <Link href={'https://github.com/w1nterleaf'} className='flex items-center' target='_blank'>
                    <Image src='/icons/github-original.png' width={50} height={60} alt='logo' className='rounded-full'/>
                    </Link>

                    <Link href={'https://t.me/w1nterleaf'} className='flex items-center' target='_blank'>
                    <Image src='/icons/telegram.png' width={40} height={60} alt='logo' className='rounded-full'/>
                    </Link>
                </div>
            </div>
        </Container>
    </main>
  )
}

export default Contacts