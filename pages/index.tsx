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
      <Navbar/>
      <div className='lg:hidden'>
        <div className="mt-[165px] mx-auto justify-center">
          <div className='mx-[35px]'>
            <div>
              <p className='text-white font-[600] text-[55px]'>I'm</p>
              <p className='text-white font-[600] text-[55px] leading-[60px]'>Adetunji Adeyinka</p>
              <hr className='light-blue border-[3px] w-[224px] md:w-[204px]  mt-[35px]'/>
            </div>
            <div className='text-white mt-[73px]'>
              <img src="./images/me.jpeg" alt="" className='w-[363px] h-[528px]'/>
              <div className='mt-[100px] text-[25px] text-center'>
                <p className='mt-[20px]'>
                I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 and now I have over 4+ years of experience. 
                </p>
                <p className='mt-[20px]'>I love finding new ways to solve existing problems ;)</p>
                <p className='mt-[20px]'>I also have this excessive hunger to continue learning new things everyday 😅 </p>
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
      <div className='hidden lg:block lg:mt-[165px] lg:mx-[89px]'>
        <div className='flex flex-row space-x-[181px]'>
          <div>
            <img src="./images/me.jpeg" alt="" className='w-[436px] h-[590px] object-contain'/>
          </div>
          <div>
            <p className='text-white font-[600] text-[55px]'>I'm</p>
            <p className='text-white font-[600] text-[55px] leading-[60px]'>Adetunji Adeyinka</p>
            <hr className='light-blue border-[3px] w-[224px] md:w-[204px]  mt-[35px]'/>
            <p className='w-[426px] leading-[35px] text-white mt-[50px]'>I am a fullstack web developer based in Lagos State, Nigeria. I started my coding journey in 2017 and now I have over 4+ years of experience. </p>
            <p className='w-[426px] leading-[35px] text-white'>I love finding new ways to solve existing problems ;) I also have this excessive hunger to continue learning new things everyday 😅</p>
            <div className='mt-[30px]'>
              <a href='/about'>
                <div className={`rounded-full text-center items-center justify-center grey w-[120px] h-[43.38px] custom-shadow duration-500 ease-in delay-[10ms] flex space-x-[8px]`}>
                <p className='text-[10px] text-white'>Know More</p>
                <img src="./icons/Arrow.svg" alt="" className='w-[10px]'/>
                </div>
              </a>
            </div>
          </div>
          <div className='flex flex-col space-y-[40px] mt-[100px]'>
            <div className='border-l-[1px] border-l-white h-[70px] ml-[10px]'></div>
            <div className='flex flex-col space-y-[33px]'>
              <Link href="https://www.facebook.com/adetunji.adeyinka.1238" passHref>
                <a target="_blank" rel="noopener noreferrer" className=''>
                  <img src="icons/social-icons/facebook.svg" alt=""/>
                </a>
              </Link>
              <Link href="https://www.instagram.com/itzadetunji/" passHref>
                <a target="_blank" rel="noopener noreferrer" className='-ml-[5px]'>
                  <img src="icons/social-icons/instagram.svg" alt=""/>
                </a>
              </Link>
              <Link href="https://twitter.com/itzadetunji1" passHref>
                <a target="_blank" rel="noopener noreferrer" className='-ml-[5px]'>
                  <img src="icons/social-icons/twitter.svg" alt=""/>
                </a>
              </Link>
            </div>
            <div className='border-l-[1px] border-l-white h-[70px] ml-[10px]'></div>
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
        <Footer/>
      </div>
      <ParticleComponent/>
    </>
  )
};
export default index
