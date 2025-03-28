import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function Skill() {

  const [isOpen, setIsOpen] = useState(false)

  const sideBarVariants = {
    hidden: {x : "-100%"},
    visible: {x: "0%"}
  }

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div style={{
      position: "relative",
      height: "100vh",
      overflow: "hidden"
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        {isOpen ? "x" : "+"}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial= "hidden"
            animate= "visible"
            exit="hidden"
            variants={sideBarVariants}
            transition={{
              duration: 0.5,
              ease: 'easeInOut'
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "250px",
              backgroundColor: "#333",
              color: "#fff",
              padding: "20px",
              boxShadow: "2px 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <ul 
              style={{
                listStyle: "none",
                padding: 0
              }}
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    color:"#ffcc00"
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  style={{
                    margin: "20px 0",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skill