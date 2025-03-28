import {motion, MotionConfig} from "framer-motion"
function About() {
  return (
   <>
    <MotionConfig
      transition={{
        duration: 0.75,
        ease:"easeInOut"
      }}
    >
    <motion.button 
      className="bg-teal-200 p-2 rounded-md m-40"
        whileHover={{
          scale:1.5
        }}
        whileTap={{
          scale: 0.8,
          rotate: '70deg'
        }}
    >CLick Me!</motion.button>
    <motion.button 
      className="bg-yellow-200 p-2 rounded-md m-40"
      whileHover={{
        scale:1.5
      }}
      whileTap={{
        scale: 1,
        rotate: '-70deg'
      }}
      transition={{
        duration:1,
        ease:"easeInOut"
      }}
    >
      Click me too!
    </motion.button>
    </MotionConfig>
   </>
  )
}

export default About