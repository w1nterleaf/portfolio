import  { useState } from "react";
import { toggleTheme } from '../../store/theme/themeSlice'
import moon from '../Navbar/sun.png'
import styles from '../Navbar/Navbar.module.scss'

import { useDispatch } from "react-redux";
import menuIcon from "../../assets/nav/menuIcon.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch()
  return (
    <nav className={styles.navbar}>
      
      <a className={styles.title} href="/">
      WINTERLEAF
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
         
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#home">Главная</a>
          </li>
          <li>
            <a href="#skills">Навыки</a>
          </li>
          <li>
            <a href="#projects">Проекты</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
          <button className={styles.btn__theme}
               style={{ cursor: 'pointer'}} 
               onClick={() => dispatch(toggleTheme())}
               >
                 <img src={moon} alt="" className={styles.theme__icon}/> 
               </button>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar
// import s from '../Navbar/Navbar.module.scss'
// import moon from '../Navbar/sun.png'
// /* import menu from '../Navbar/menu.svg' */

// import { useDispatch } from 'react-redux'
// import { toggleTheme } from '../../store/theme/themeSlice'

// const Navbar = () => {
//   const dispatch = useDispatch()

//   return (
//     <>
//         <nav className={s.nav}>
//          <div className={s.glass__container}>
          
//          <a href="#" className={s.logo}>WINTERLEAF</a>
       

//             <ul className={s.nav__list}>
//               <li><a href=""></a></li>
//                 <li><a href="#home" className={s.nav__link}>Главная</a></li>
//                 <li><a href="#skills" className={s.nav__link}>Навыки</a></li>
//                 <li><a href="#projects" className={s.nav__link}>Проекты</a></li>
//                 <li><a href="#contact" className={s.nav__link}>Контакты</a></li>
                
//                             <div className={s.btn}>

//             <button className={s.btn__theme}
//               style={{ cursor: 'pointer'}} 
//               onClick={() => dispatch(toggleTheme())}
//               >
//                 <img src={moon} alt="" className={s.theme__icon}/> 
//               </button>

              
//             </div>
              
//             </ul>

//          </div>
            

//         </nav>

//     </>
//   )
// }

// export default Navbar