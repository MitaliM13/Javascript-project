import {  motion ,useAnimation,useInView,useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef } from 'react'

const App = () => {
  
  const gridContainerVariants = {
  hidden: {opacity: 0},
  show: {
    opacity:1,
    transition: {
    staggerChildren: 0.25
      }
    }
  }

  const gridBoxVariants = {
    hidden : {opacity: 0}, 
    show: {opacity: 1}
  }
  
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {once: true})

  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)",
    },
  }
 
   
  const { scrollYProgress  } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })
  
  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <h1 className='flex justify-center items-center font-semibold text-3xl text-white m-2'>Framer Motion Animations</h1>
      <motion.section
        variants={gridContainerVariants} 
        initial = "hidden"
        animate = "show"
        className="grid grid-cols-3 px-10 gap-10">

        <motion.div 
          variants={gridBoxVariants}
          className="bg-slate-300 aspect-square rounded-lg justify-center flex items-center gap-4">
            <motion.div className='w-10 h-10 bg-black rounded-lg'
              initial= {{
                opacity:0, y:100
              }}
              animate = {{
                opacity:1, y: 0
              }}
              transition={{
                duration:1, 
                ease: 'easeInOut',
                delay:0.2
              }}
            ></motion.div>
            <motion.div className='w-10 h-10 bg-black rounded-full'
              initial= {{
                opacity:0, y: -100
              }}
              animate = {{
                opacity:1, y: 0
              }}
              transition={{
                duration:1, 
                ease: 'easeInOut',
                delay:0.4
              }}
            ></motion.div>
        </motion.div>

        <motion.div 
          variants={gridBoxVariants}
          className="bg-slate-300 aspect-square rounded-lg justify-center flex items-center">
            <motion.div className='h-20 w-20 bg-pink-400'
              animate={{
                scale: [1,2,2,1],
                rotate:[0,90,90,0],
                borderRadius: ["10%","30%","50%","10%"]
              }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1
              }}
            ></motion.div>
        </motion.div>

        <motion.div 
          variants={gridBoxVariants}
          className="bg-slate-300 aspect-square rounded-lg justify-center flex items-center">
            <motion.button 
              className='bg-emerald-300 py-2 px-4 rounded-md text-white'
                whileTap={{scale: 0.9}}
                whileHover={{
                  scale: 1.1,
                  background: "yellow",
                  color: "black"
                }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 600
                }}
              >
                Tap me or <br />
              Hover over me
            </motion.button>
        </motion.div>

        <motion.div 
          variants={gridBoxVariants}
          className="bg-slate-300 aspect-square rounded-lg justify-center flex items-center">
            <motion.div className='w-1/2 bg-indigo-400 h-1/2 rounded-lg cursor-grab flex justify-center items-center text-white'
              drag
              dragConstraints = {{
                top: -60,
                left: -60,
                right: 60,
                bottom: 60,
              }}
            >
              Drag Me
            </motion.div>
        </motion.div>

        <motion.div
          variants={gridBoxVariants}
          className="bg-slate-300 aspect-square rounded-lg justify-center flex items-center"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: scrollYProgress }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={gridBoxVariants}
          className="bg-slate-300 aspect-square rounded-lg justify-center flex items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-1/2 stroke-amber-500 stroke-[0.5]"
            >
              <motion.path
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                variants={svgIconVariants}
                initial = "hidden"
                animate = "visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
              />
            </motion.svg>
        </motion.div>
      </motion.section>
      <section className='flex flex-col gap-10 mb-10' ref={containerRef}> 
        <motion.h1 
          className='text-5xl tracking-wide text-slate-100 text-center' 
          animate = {mainControls}
          initial = "hidden"
          variants={{
            hidden: {
              opacity:0,
              y: 75
            },
            visible: {
              opacity:1,
              y:0
            }
          }}
          transition={{delay:0.3}}
        >Just Keep scrolling
        </motion.h1>
        <motion.p 
          className='text-slate-100 font-thin text-4xl w-1/2 mx-auto'
          style={{translateX: paragraphOneValue}}  
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est non sed sequi possimus tenetur consequatur quae labore soluta. Cupiditate distinctio voluptatum eum vitae tempore beatae optio eaque veniam obcaecati?
        Sequi magni deserunt qui vitae debitis sunt. Accusamus odit iusto dolor sapiente fugiat consequuntur distinctio ipsa minus modi, reiciendis tempora veritatis voluptatem adipisci excepturi officiis quis odio eos aut deserunt.
        Itaque ducimus nisi distinctio commodi quidem necessitatibus exercitationem illum aut expedita culpa earum iure rerum beatae nobis accusantium tempore enim non odit, qui, eaque vel magni molestias est alias. Eius?</motion.p>
        <motion.p 
          className='text-slate-100 font-thin text-4xl w-1/2 mx-auto'
          style={{translateX: paragraphTwoValue}}  
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio est non sed sequi possimus tenetur consequatur quae labore soluta. Cupiditate distinctio voluptatum eum vitae tempore beatae optio eaque veniam obcaecati?
        Sequi magni deserunt qui vitae debitis sunt. Accusamus odit iusto dolor sapiente fugiat consequuntur distinctio ipsa minus modi, reiciendis tempora veritatis voluptatem adipisci excepturi officiis quis odio eos aut deserunt.
        Itaque ducimus nisi distinctio commodi quidem necessitatibus exercitationem illum aut expedita culpa earum iure rerum beatae nobis accusantium tempore enim non odit, qui, eaque vel magni molestias est alias. Eius?</motion.p>
      </section>
    </div>
  )
}

export default App
