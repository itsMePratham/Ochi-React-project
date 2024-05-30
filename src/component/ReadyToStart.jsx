import React from "react";
import { useEffect, useState } from "react";
import "./ReadyToStart.css";
function ReadyToStart() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  // 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className=" w-full relative h-[140vh] bg-[#CDEA68]  rounded-tl-3xl rounded-bl-3xl  rounded-br-3xl rounded-tr-3xl  ">
      <div className="headingText text-[15vw] leading-[11vw] uppercase text-black flex flex-col justify-center items-center pt-[10vw]">
        <h1>ready</h1>
        <h1>to start</h1>
        <h1>the project?</h1>
      </div>
      <div className="butttondiv  bg-[#CDEA68]  leading-none flex flex-col justify-center items-center py-[3vw] pb-[10vw] ">
        <div>
          <button className=" border-2 border-none uppercase py-6 px-7 bg-black text-white rounded-full flex items-center gap-2 ">
            <div>start the project</div>
            <div className="w-[10px] h-[10px] bg-white rounded-full"> </div>
          </button>

          <div className="flex justify-center py-[1.2vw]">OR</div>

          <button className=" border-2 border-black uppercase py-6 px-7 bg-[#CDEA68] text-black rounded-full flex items-center gap-2 ">
            <div>hello@ochi.design</div>
            <div className="w-[10px] h-[10px] bg-black rounded-full"> </div>
          </button>
        </div>
      </div>

      {/* ****************** */}

      <div className="w-full absolute top-0  h-full bg-transparent ">
      <div className=" flex gap-2  absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[12vw]  h-[12vw] bg-zinc-100 rounded-full ">
            <div className=" relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-2/3 h-2/3 rounded-full bg-black  flex justify-center items-center">
              <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}} className="  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] Line w-full h-6  ">
                <div className="pupil w-[25px] h-[25px] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className= " w-[12vw]  h-[12vw] bg-zinc-100 rounded-full ">
          <div className=" relative w-2/3 h-2/3 rounded-full bg-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center">
          <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}}  className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] Line w-full h-6">
                <div className="pupil w-[25px] h-[25px] rounded-full bg-white"></div>
              </div>
          </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ReadyToStart;






// 2:27:26