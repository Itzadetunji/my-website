import { NextPage } from 'next'
import React from 'react'
import Button from './components/Button'
import Card from './components/card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'

const about: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-[165px] mx-auto justify-center">
        <div className='mx-[35px]'>
          <div>
            <p className='text-white font-[600] text-[40px]'>About Me</p>
            <hr className='light-blue border-[3px] w-[110px] mt-[16px]'/>
          </div>
          <div className='text-white mt-[73px]'>
            <img src="./images/me.jpeg" alt="" className='w-[363px] h-[528px]'/>
            <div className='mt-[100px] text-[20px] text-center'>
              <p>I’m a fullstack web developer who provides quality services of industry satandard.</p>
              <p className='mt-[20px]'>I love finding new ways to solve existing problems ;</p>
              <p className='mt-[20px]'>
              I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 through a friend. 
              </p>
              <p className='mt-[20px]'>I love finding new ways to solve existing problems ;</p>
              <p className='mt-[20px]'>I also have this excessive hunger to continue learning new things everyday 😅 </p>
            </div>
          </div>
          <div className='mt-[100px]'>
            <Button link={'#'} text={'GET CV'} height={'200px'} width={'72.3px'} />
          </div>
          <div className='mt-[100px]'>
            <p className='text-white font-[600] text-[40px]'>My Services</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[13px]'/>
          </div>
          <Card icon={''} text={''} title={''}/>
        </div>
      </div>
      {/* <ParticleComponent/> */}
      <Footer/>
    </>
  )
}

export default about