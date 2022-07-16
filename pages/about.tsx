import { NextPage } from 'next'
import React from 'react'
import Button from './components/Button'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'
import ParticleComponent from './components/ParticleComponent'

const about: NextPage = () => {

  const ServiceCardContents = [
    {
        iconpath: '/icons/bullseye.svg', 
        title: 'Goal Oriented', 
        description: 'I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.'
    },
    {
        iconpath: '/icons/scalable.svg', 
        title: 'Scalability', 
        description: 'I develop scalable websites with your goals in mind. I make websites easy to update and maintenance so your team has full control.'
    },
    {
        iconpath: '/icons/quality.svg', 
        title: 'Quality Assured', 
        description: 'I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.'
    },
  ]

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
          <div>
            {ServiceCardContents.map((service, index) => <ServiceCard iconpath={service.iconpath} title={service.title} description={service.description} key={index}/>)}
          </div>
          <div>
            
          </div>
        </div>
      </div>
      {/* <ParticleComponent/> */}
      <Footer/>
    </>
  )
}

export default about