import React from "react";
import "./About.css";

function About() {
  return (
    <div  className="w-full p-20 bg-[#CDEA68]  rounded-tl-3xl  rounded-tr-3xl rounded-bl-3xl  rounded-br-3xl text-black">
      <h1 className="headings text-5xl">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="border-t-[1px]  border-zinc-600  mt-[3vw]"></div>

      <div className="Aboutmiddle w-full h-[43vh]  flex">
        <div className="LeftAbout w-1/2 h-full  py-[2vw] px-[1vw] ">
          <p>What you can expect:</p>
        </div>
        <div className="RightAbout w-1/2 h-full  flex">
          <div className="AboutPara h-full w-1/2  py-[2vw] px-[1vw] flex flex-col gap-[2.5vw]">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="links h-full w-1/2 flex justify-center items-center">
           
           
              <div>
                <div>
                    S:
                </div>
              <ul class="list-none p-0">
              <li className="mb-1">
                <a
                  href="https://www.instagram.com"
                  className=" hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-1">
                <a href="https://www.behance.net" className=" hover:underline">
                  Behance
                </a>
              </li>
              <li className="mb-1">
                <a href="https://www.facebook.com" className=" hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className=" hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
              </div>
           
            
          </div>
        </div>
      </div>

      <div className="border-t-[1px]  border-zinc-600  mt-[3vw]"></div>

      <div className="ApproachDiv  w-full h-[70vh]  mt-[1vw] flex">
        <div className="leftDiv h-full w-1/2">
            <h4 className="text-[3.7vw]">
            Our approach:
            </h4>

            <button className=" bg-black text-white text-[1.1vw] py-[1vw] px-[2vw] flex items-center gap-7 rounded-[5vw] mt-2">
                <div> READ MORE</div>
                <div className="h-[10px] w-[10px] bg-white rounded-[50%]"></div>

            </button>
        </div>
        <div className="rightDiv  h-full w-1/2">
            <img  className ="h-full rounded-[2vw] object-cover"src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>


  );
}

export default About;
