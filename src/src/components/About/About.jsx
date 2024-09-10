import s from '../About/About.module.scss'
import { motion } from 'framer-motion'
import htmlImg from '../About/images/html.svg'
import cssImg from '../About/images/css.svg'
import jsImg from '../About/images/javascript.svg'
import reactImg from '../About/images/react.svg'
import tsImg from '../About/images/typescript.svg'
import scssImg from '../About/images/scss.png'
import gitImg from '../About/images/git.png'

const About = () => {
  return (
    <>
        <section className={s.section} id='skills'>
          <motion.h2             
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{
              ease: "linear",
              x: { duration: 2 }
            }}
            className={s.about}>Мои навыки:</motion.h2>
            <div className={s.items__container}>
              
            </div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              x: { duration: 1 }
            }} 
            className={s.about__item}>

              <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={htmlImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>85%</h4>
                  <p className={s.spin__text}>HTML</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}> HTML — это стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере</p>
                  </div>
                </div>
              </div>
              <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={cssImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>85%</h4>
                  <p className={s.spin__text}>CSS</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}> CSS (Cascading Style Sheets «каскадные таблицы стилей») —  формальный язык декодирования и описания внешнего вида документа</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              x: { duration: 1 }
            }} 
            className={s.about__item__second}>
              <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={jsImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>80%</h4>
                  <p className={s.spin__text}>JS</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}> JavaScript — однопоточный мультипарадигменный язык программирования</p>
                  </div>
                </div>
              </div>

              <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={reactImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>73%</h4>
                  <p className={s.spin__text}>React</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}> React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</p>
                  </div>
                </div>
              </div>

              <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={tsImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>40%</h4>
                  <p className={s.spin__text}>TS</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}>TypeScript — это расширенная и строго типизированная версия языка JavaScript</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              x: { duration: 1 }
            }}  
            className={s.about__item__third}>
            <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={scssImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>80%</h4>
                  <p className={s.spin__text}>SCSS</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}>SCSS — это надмножество языка CSS, которое добавляет дополнительную функциональность для CSS</p>
                  </div>
                </div>
              </div>
            <div className={s.card}>
                <div className={s.card__inner}>
                  <div className={s.card__front}>
                  <img src={gitImg} alt="" className={s.spin__img} />
                  <h4 className={s.spin__title}>78%</h4>
                  <p className={s.spin__text}>git</p>
                  </div>
                  <div className={s.card__back}>
                    <p className={s.card__back_text}>Git — это распределённая система управления версиями</p>
                  </div>
                </div>
              </div>
            </motion.div>
        </section>
    </>
  )
}

export default About