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

const index : NextPage = () => {
  return (
    <>
      <Navbar/>
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
      <Footer/>
    </>
  )
};
export default index
