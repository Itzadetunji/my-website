import { NextPage } from 'next'
import React from 'react'
import Button from './components/Button'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'
import WorkProcess from './components/WorkProcess'
import ParticleComponent from './components/ParticleComponent'
import TestimonialCard from './components/TestimonialCard'
import TechStack from './components/TechStack'
import Social_Links from './components/SocialLinks'
import Link from 'next/link'

const index: NextPage = () => {
  return (
    <div className='hidden lg:block mt-[120px] mx-[90px]'>
      <div>
        <p className='text-white font-[600] text-[40px]'>Let's Talk</p>
        <hr className='light-blue border-[3px] w-[55px] mt-[16px]'/>
      </div>
      <div className='flex flex-row justify-between mt-[70px]'>
        <div className='flex flex-col'>
          <p className='w-[300px] xl:w-[495px] text-white lg:text-[22px] font-[400]'>Hi 👋🏿, Adetunji here. Lets get in touch sometime to work on something great 😅</p>
          <div className='mt-[60px]'>
            <a href='/contact'>
              <div className={`rounded-full text-center items-center justify-center grey w-[200px] h-[72.3px] custom-shadow duration-500 ease-in delay-[10ms] flex space-x-[8px]`}>
                <p className='text-[19px] text-white'>Legoooo</p>
                <img src="./icons/Arrow.svg" alt="" className='w-[30px]'/>
              </div>
            </a>
          </div>
        </div>
        <div className='lg:flex flex-col'>
          <p className='w-[350px] xl:w-[495px] text-white lg:text-[22px] font-[400]'>My handle is itzadetunji on all social media 😊. Lets give each other a follow 🤗</p>
          <div className='mt-[60px]'>
            <div className="flex mt-5 space-x-[30px] mx-auto justify-center">
              <div className='border w-[70px] h-0 my-[10px] xl:my-[13px]'/>
              <div className="mx-auto flex flex-row space-x-[10px] -mt-[17px]">
                <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
                  <Link href="https://www.facebook.com/adetunji.adeyinka.1238" passHref>
                    <a target="_blank" rel="noopener noreferrer" className=''>
                      <img src="icons/social-icons/facebook.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
                    </a>
                  </Link>
                </div>
                <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
                <Link href="https://www.instagram.com/itzadetunji/" passHref>
                  <a target="_blank" rel="noopener noreferrer" className=''>
                    <img src="icons/social-icons/instagram.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
                  </a>
                </Link>
                </div>
                <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
                <Link href="https://twitter.com/itzadetunji1" passHref>
                  <a target="_blank" rel="noopener noreferrer" className=''>
                    <img src="icons/social-icons/twitter.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
                  </a>
                </Link>
                </div>                  
              </div>
              <div className='border w-[70px] h-0 my-[10px] xl:my-[13px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index