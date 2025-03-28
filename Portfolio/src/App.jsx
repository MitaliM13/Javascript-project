// import {motion, AnimatePresence} from "framer-motion"
// import { useState } from "react"
// import About from './components/About'
// import Contact from './components/Contact'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Skill from "./components/Skill"
function App() {

  // const [isVisible, setIsVisible ] = useState(true)

  return (
    <>
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Footer/> */}
    {/* <Header/> */}
    <Skill/>
      {/* <motion.button 
        className="m-2 bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsVisible(!isVisible)}
        layout
        >
          Show/Hide
      </motion.button>
      <AnimatePresence>
    {isVisible && (
      <motion.div 
      initial={{
        rotate:'0deg',
        scale: 0,
        y: 0
      }}
      animate={{
        rotate:'200deg',
        scale: 1,
        y: [20,40,80,-100,0]
      }}
      exit={{
        rotate: '0deg',
        scale:0,
        y: 0
      }}
      transition={{
        duration: 3,
        type:"spring",
        time: [0,0.25,0.5,0.85,1]
      }}
      className="flex flex-col justify-center m-10 w-40 h-40 bg-black">
    </motion.div>
    )}
      </AnimatePresence> */}
    </>
  )
}

export default App
