import React from 'react'
import Navbar from './component/Nav'
import Landing from './component/Landing'
import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Featured from './component/Featured'
import ReadyToStart from './component/ReadyToStart'
import Footer from './component/Footer'

import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
     
      <Navbar></Navbar>
      <Landing></Landing>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Featured></Featured>
      <ReadyToStart></ReadyToStart>
      <Footer></Footer>
     
    </div>
  )
}

export default App
