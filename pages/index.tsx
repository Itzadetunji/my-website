import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Social_Links from './components/SocialLinks'
import Button from './components/Button'
import Link from 'next/link'
import SideSocialLinks from './components/SideSocialLinks'

const index : NextPage = () => {
  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)")
  }, []);
  return (
    <>
      <Navbar/>
      <div className='mt-[50px] lg:mx-[60px]'>
        <div className="mx-auto justify-center">
          <div className='mx-[35px] lg:mx-0'>
            <div className='lg:hidden'>
              <p className='text-white font-[600] text-[55px]'>I'm</p>
              <p className='text-white font-[600] text-[55px] leading-[60px]'>Adetunji Adeyinka</p>
              <div className='w-[224px] sm:w-[204px]'>
                <hr className='light-blue border-[3px] w-full sm:w-full mt-[25px] animate-line'/>
              </div>
            </div>
            <div className='text-white mt-[70px] xl:-mt-[20px] lg:flex lg:flex-row md:items-end lg:space-x-[100px] xl:space-x-[170px] 2xl:space-x-[280px]'>
              <img src="./images/me.jpeg" alt="" className='w-[363px] xl:w-[400px] h-[528px] xl:h-[582px] mx-auto lg:mx-[0px]'/>
              <div className='mt-[100px] lg:mt-[0px] text-center lg:text-left'>
                <p className='text-white font-[600] text-[55px] lg:text-[35px] hidden lg:block'>I'm</p>
                <p className='text-white font-[600] text-[55px] lg:text-[37px] leading-[60px] hidden lg:block'>Adetunji Adeyinka</p>
                <div className='w-[224px] sm:w-[204px] lg:w-[140px]'>
                  <hr className='light-blue border-[3px] mt-[35px] lg:mt-[20px] hidden lg:block animate-line'/>
                </div>
                <div className='lg:w-[360px] xl:w-[450px] text-center lg:text-left mx-auto font-light text-[25px] lg:text-[16px] xl:text-[20px] xl:leading-[30px] 2xl:leading-[33px]'>
                  <p className='mt-[20px] lg:mt-[40px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius porro deserunt quod, totam fugit architecto vero quae, explicabo deleniti minima, ratione iste repellendus officia. Nisi, 
                  </p>
                  <p className='mt-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus nam aliquam rem repudiandae, ullam iste deserunt praesentium repellat eos?</p>
                  <p className='mt-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus iste ipsa eaque ipsum quasi consectetur blanditiis! Amet? </p>
                  <div className='hidden lg:block mt-[20px]'>
                    {/* <div className='w-[200px] h-[72.3px] grey rounded-full flex space-x-3 hovering-arrow mt-[30px]'>
                      <p className='text-[16px]'>Know more</p>
                      <img src="./icons/arrow.svg" alt="" className='arrow animate-arrow'/>
                    </div> */}
                    <a href='/about'>
                      <div className={`rounded-full text-center items-center justify-center grey w-[180px] h-[60.07px] custom-shadow duration-500 ease-in delay-[10ms] flex space-x-[8px] animate-arrow-div`}>
                        <p className='text-[18px] text-white'>Know More</p>
                        <img src="./icons/arrow.svg" alt="" className='w-[30px] animate-arrow'/>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <SideSocialLinks/>
          </div>
        </div>
        <div className='mt-[100px] lg:hidden'>
          <Button link={'/about'} text={'Know More'} height={'260px'} width={'94px'}/>
        </div>
        <div className='mt-[95px] lg:hidden'>
          <Social_Links/>
        </div>
        <div className=''>
          {/* <ParticleComponent/> */}
        </div>
      </div>
      {/* <div className='hidden lg:block lg:mt-[165px] lg:mx-[89px]'>
        <div className='flex flex-row space-x-[181px]'>
          <div>
            <img src="./images/me.jpeg" alt="" className='w-[363px] h-[528px]'/>
          </div>
          <div>
            <p className='text-white font-[600] text-[55px]'>I'm</p>
            <p className='text-white font-[600] text-[55px] leading-[60px]'>Adetunji Adeyinka</p>
            <hr className='light-blue border-[3px] w-[224px] md:w-[204px]  mt-[35px]'/>
            <p className='w-[426px] leading-[35px] text-white pt-[]'>I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 and now I have over 4+ years of experience. I love finding new ways to solve existing problems ;) I also have this excessive hunger to continue learning new things everyday 😅</p>
          </div>
        </div>
      </div> */}
      <div className='lg:hidden'>
        <Footer/>
      </div>
    </>
  )
};
export default index
