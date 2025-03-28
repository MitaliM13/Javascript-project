import {motion, useAnimationControls } from 'framer-motion'
function Contact() {
  const flipControls = useAnimationControls()
  const handleClick = () => {
    flipControls.start("flip")
  }

  return (
    <div 
      className='flex justify-center flex-col m-10'
    >
      <button
        onClick={handleClick}
        className='bg-slate-500 p-2 mx-40'
      >Flip it</button>
      <motion.div className='w-20 h-20 bg-black'
        variants={{
          initial: {
            rotate:'0deg'
          },
          flip:{
            rotate: '360deg'
          }
        }}
        initial= "initial"
        animate={flipControls}
      >
      </motion.div>
    </div>
  )
}

export default Contact