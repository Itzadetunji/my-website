import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'

function about() {
  return (
    <>
      <Navbar/>
      <div className="w-64 h-auto mx-auto mt-8 items-center justify-center">
        <img src="/images/me.jpeg" className="mt-5 rounded-full"/>
      </div>
      <ParticleComponent/>
      <Footer/>
    </>
  )
}

export default about