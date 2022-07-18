import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'
import Social_Links from './components/SocialLinks'
import Button from './components/Button'
import Link from 'next/link'

const index : NextPage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className='lg:mx-[50px]'>
        <div className="mt-[165px] mx-auto justify-center">
          <div className='mx-[35px] lg:mx-0'>
            <div className='lg:hidden'>
              <p className='text-white font-[600] text-[55px]'>I'm</p>
              <p className='text-white font-[600] text-[55px] leading-[60px]'>Adetunji Adeyinka</p>
              <hr className='light-blue border-[3px] w-[224px] sm:w-[204px] mt-[35px]'/>
            </div>
            <div className='text-white mt-[73px] lg:flex lg:flex-row lg:space-x-[100px]'>
              <img src="./images/me.jpeg" alt="" className='w-[363px] h-[528px] mx-auto lg:mx-[0px]'/>
              <div className='mt-[100px] lg:mt-[0] text-[25px] lg:text-[16px] text-center lg:text-left'>
                <p className='text-white font-[600] text-[55px] lg:text-[40px] hidden lg:block'>I'm</p>
                <p className='text-white font-[600] text-[55px] lg:text-[40px] leading-[60px] hidden lg:block'>Adetunji Adeyinka</p>
                <hr className='light-blue border-[3px] w-[224px] sm:w-[204px] lg:w-[150px] mt-[35px] lg:mt-[20px] hidden lg:block'/>
                <div className='w-[300px]'>
                  <p className='mt-[20px]'>
                  I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 and now I have over 4+ years of experience. 
                  </p>
                  <p className='mt-[20px]'>I love finding new ways to solve existing problems ;)</p>
                  <p className='mt-[20px]'>I also have this excessive hunger to continue learning new things everyday 😅 </p>
                </div>
              </div>
              <div className='flex flex-col mt-5 space-y-[30px]'>
                <div className='border-l-white border-l-[1px] h-[70px]'/>
                <div className="mx-auto flex flex-col space-y-[40px]">
                  <Link href="https://www.facebook.com/adetunji.adeyinka.1238" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <img src="icons/social-icons/facebook.svg" alt=""/>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/itzadetunji/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <img src="icons/social-icons/instagram.svg" alt=""/>
                    </a>
                  </Link>
                  <Link href="https://twitter.com/itzadetunji1" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <img src="icons/social-icons/twitter.svg" alt=""/>
                    </a>
                  </Link>
                </div>
                <div className='border-l-white border-l-[1px] h-[70px]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <Button link={'/about'} text={'Know More'} height={'260px'} width={'94px'}/>
        </div>
        <div className='mt-[95px]'>
          <Social_Links/>
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
