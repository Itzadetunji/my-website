import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'

function about() {
  return (
    <>
      <Navbar/>
      <div className="mt-16">
        <h1 className="text-white ml-9 font-semibold leading-10 -mt-4 text-4xl">About Me</h1>
        <hr className="light-blue w-[100px] h-1 ml-[35px] border-transparent my-4"/>
      </div>
      <div className="w-64 h-auto mx-auto mt-8 items-center justify-center">
        <img src="/images/me.jpeg" className="mt-5 rounded-full"/>
        <p className="mx-auto mt-8 items-center justify-between text-white text-[13px]">I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 through a friend. I love finding new ways to solve existing problems ;)\n I also have this excessive hunger to continue learning new things everyday 😅</p>
      </div>
      <ParticleComponent/>
      <Footer/>
    </>
  )
}

export default about