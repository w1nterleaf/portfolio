import s from "../Works/Works.module.scss"
import gotrip from "../Works/images/gotrip.jpg"
import oku from "../Works/images/oku.jpg"
import grayson from "../Works/images/grayson.jpg"
import vue from "../Works/images/vuecinema.jpg"
import airpods from "../Works/images/airpods.jpg"
import bank from "../Works/images/bank.jpg"
import totembo from "../Works/images/totembo.jpg"
import silver from "../Works/images/silver.jpg"
import { motion } from "framer-motion"
function SimpleSlider() {
    return (
      <>
      <h3 className={s.title} id='projects'>Мои работы:</h3> 
      <section className={s.projects}>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }}
      className={s.container}>

        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={gotrip} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Go Trip</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/gotrip/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={oku} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Oku</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/oku/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={grayson} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Grayson</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/grayson/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={vue} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Vue Cinema</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/vue/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={airpods} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Airpods</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/BoulevardMarket/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={bank} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Tanish Bank</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/bank/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={totembo} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Totembo</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/totembo/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={silver} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Silver House</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/SilverHouse/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{
        ease: "linear",
        x: { duration: 2 }
      }} className={s.card}>
          <div className={s.card__image}>
          <img src={silver} alt="Image 1" className={s.slide_image} />
          </div>
          <p className={s.card__title}>Silver House</p>
          <div className={s.button__container}>
          <button className={s.card__btn}>
          <a href="https://w1nterleaf.github.io/SilverHouse/" className={s.slide__url}>Посмотреть</a>
          </button>
          </div>
        </motion.div>
        
      </motion.div>
      </section>  
      </>

    );
  }

export default SimpleSlider