import React from 'react'
import {motion} from 'framer-motion'
 import "./Marquee.css"


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full py-10 bg-[#004D43] rounded-tl-3xl  rounded-tr-3xl '>
      <div className='text border-t-2 border-b-2  border-zinc-300 flex whitespace-nowrap overflow-hidden   '>
        < motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear" , duration:8}} className=' MarqueeText text-[22vw] leading-none uppercase -mb-8 -mt-10 pr-20 '>We are Ochi  </motion.h1 >
        < motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity ,ease:"linear"  ,duration:8}} className=' MarqueeText text-[22vw] leading-none uppercase -mb-8 -mt-10 pr-20 '>We are Ochi  </motion.h1 >
       
      </div>
      
    </div>
  )
}

export default Marquee


// 1:08:12