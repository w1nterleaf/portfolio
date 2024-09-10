
import s from '../Description/Description.module.scss'
import aboutImg from '../Description/about.png'
import { motion } from 'framer-motion'

const Description = () => {
  
  return (
    <>
        <section className={s.about} id='home'>
            <div className={s.about__container}>
              <div
                className={s.wrapper}>
              <div className={s.main__container}>
                <motion.div 
                className={s.descr__container}>
                  <div className={s.glass__container}>
                  <h2 className={s.title}>Привет, я Лана</h2>
                  <div className={s.main__info}>
                  <h3 className={s.descr}>и я: <span className={s.span}></span></h3>                
                <p className={s.descr__text}> Рада видеть вас на моём сайте! Я начинающий фронтенд-разработчик из Ташкента, однако создание сайтов далеко не единственный мой талант. Устраивайтесь поудобнее, приятного прочтения :) </p>
                  </div>
                
                  </div>
                
                </motion.div>
               
                <motion.div
                 
                 className={s.img__container}>
                  <img src={aboutImg} alt="" className={s.about__img} />
                </motion.div>
            </div>
              </div>
              
            </div>
        </section>
    </>
  )
}

export default Description