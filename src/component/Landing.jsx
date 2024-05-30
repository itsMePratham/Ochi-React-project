import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import "./Landing.css";
import { motion } from "framer-motion";



function Landing() {

 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen bg-zinc-900 pt-40">
      <div className="textstructure px-20">
        {["We Create", "Eye-opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker ">
              <div className={`w-fit flex items-center  `}>
                {index ===1 && (< motion.div 
                
                 initial ={{width:0}}
                 animate ={{width:"9vw"}}
                 transition ={{ease:[0.76,0,0.24,1] ,duration:1}}
                
                
                
                className="w-[9vw] overflow-hidden h-[5.5vw] mr-1 rounded-md relative -top-[-0.5vw]">
                  <img className=" object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="logo" />
                </motion.div>)}
              <h1 className=" flex items-center grotex uppercase text-[7.5vw] leading-[5.5vw] ">
                {item}
              </h1>
              </div>
             
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800  mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}

        <div className="start flex items-center gap-2">
             <div className="px-4 py-2 border-[2px] rounded-full border-zinc-500 font-light text-md uppercase">
                Start the project
             </div>
             <div className="w-8 h-8 rounded-full border-[2px]  border-zinc-500 flex items-center justify-center ">
            
             <span className="rotate-[45deg]">
             <FaLongArrowAltUp />
             </span>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;






// 47:05