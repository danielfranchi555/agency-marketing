'use client'
import React from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const FadeLeft = ({className,children}) => {
    const ref = useRef(null)
    const isinView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isinView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }

    }, [isinView])

  return (
    <div ref={ref}>
       <motion.div
       variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0}
    }}
    initial='hidden'
    animate={mainControls}
    exit='hidden'
    transition={{duration:0.5,delay:0.5}}
    className={className}
       >
        {children}
       </motion.div>
    </div>
  )
}

export default FadeLeft
