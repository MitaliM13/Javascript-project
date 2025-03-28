import {motion, useInView} from 'framer-motion'
import { useEffect, useRef } from 'react'

function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log("Is in View ->", isInView);
  }, [isInView])
  return (
    <div style={{height: '150vh'}}>
      <motion.div
        className='h-40 bg-black'
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:1}}
      />
      <div
        ref={ref}
        style={{
          height:"10vh",
          background: isInView ? "blue" : "red",
          transition: "1s background"
        }}
      />
    </div>
  )
}

export default Footer