import React, { useEffect, useState } from "react";

function Eyes() {

  const [rotate , setRotate] = useState(0);
   useEffect(()=>{


   
    window.addEventListener("mousemove" , (e)=>{
       let mouseX = e.clientX;
       let mouseY = e.clientY;

       let deltaX = mouseX-window.innerWidth/2;
       let deltaY = mouseY-window.innerHeight/2;

       var angle = Math.atan2(deltaY ,deltaX)*(180/Math.PI);
       setRotate(angle-180);
    })
   })


  return (
    <div className=" eyes w-full h-screen overflow-hidden  rounded-tl-3xl  rounded-tr-3xl   ">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
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

export default Eyes;



// 1:49:25 