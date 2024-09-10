import { useDispatch, useSelector } from "react-redux"
import About from "./components/About/About"
import Description from "./components/Description/Description"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Works from "./components/Works/Works"

function App() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  
  return (
    <>
      <div className={`wrapper ${theme}`}>
        <Navbar/>
        <Description/>
        <About/>
        <Works/>
        <Footer/>
      </div>
    </>
  )
}

export default App
