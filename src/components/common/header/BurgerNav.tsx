import Link from 'next/link'
import Image from 'next/image'

interface BurgerNavProps {
  closeModal: () => void
  lng: 'en' | 'ru' // можно добавить еще языков
}

const BurgerNav = ({ closeModal, lng }: BurgerNavProps) => {
  const navigation = [
    {
      id: 0,
      title: { en: 'Home', ru: 'Главная' },
      slug: '/',
    },
    {
      id: 1,
      title: { en: 'Experience', ru: 'Опыт' },
      slug: '/#experience',
    },
    {
      id: 2,
      title: { en: 'Skills', ru: 'Навыки' },
      slug: '/#skills',
    },
    {
      id: 3,
      title: { en: 'Projects', ru: 'Проекты' },
      slug: '/#projects',
    },
  ]

  return (
    <ul className="flex flex-col w-max gap-[15px] md:gap-5 ">
      {navigation
        .filter((el) => el.id !== 2) // skills скрываем
        .map((el) => {
          return (
            <li key={el.id}>
              <Link
                className="w-max h-full flex gap-[25px] items-center font-medium text-[20px] leading-120% -tracking-0.02 md:text-[60px] md:leading-105%"
                href={el.slug}
                onClick={closeModal}
              >
                <span>{el.title[lng]}</span>
                <Image
                  src={'/icons/orange-arrow.svg'}
                  alt="arrow"
                  width={60}
                  height={60}
                  className="w-[20px] h-[20px] md:w-[60px] md:h-[60px] md:relative md:top-2"
                />
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default BurgerNav
