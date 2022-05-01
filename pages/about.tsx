import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'

function about() {
  return (
    <>
      <Navbar/>
      <div className='mt-16'>
        <h1 className="text-white ml-9 font-semibold leading-10 -mt-4 text-4xl">About Me</h1>
        <hr className="light-blue w-[150px] h-1 ml-[35px] border-transparent my-4"/>
      </div>
      <div className="w-64 h-auto mx-auto mt-8 items-center justify-center">
        <img src="/images/me.jpeg" className="mt-5 rounded-full"/>
      </div>
      <ParticleComponent/>
      <Footer/>
    </>
  )
}

export default about