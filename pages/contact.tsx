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
import PortfolioCard from './components/PortfolioCard'

const contact : NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-[165px] mx-auto justify-center">
        <div className='mx-[35px]'>
        <div>
            <p className='text-white font-[600] text-[40px]'>Let's chat</p>
            <hr className='light-blue border-[3px] w-[85px] mt-[16px]'/>
          </div>
          <div className='text-white mt-[80px] mx-auto'>
            <form action="">
              <div className='mt-[45px] flex flex-col space-y-[33px]'>
                <input type="text" name='name' placeholder='What’s your name ?' className='grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] '/>
                <input type="text" name='name' placeholder='Why are you sending this?' className='grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] '/>
                <input type="text" name='name' placeholder='What’s your email ?' className='grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] '/>
                <textarea name="message" id="" className='grey rounded-[30px] h-[214px] resize-none px-[20px] placeholder:text-white placeholder:text-[16px] pt-[14px] text-[16px]' placeholder='What do you want to talk about?'></textarea>
              </div>
              <input type="submit" name="send" className='mt-[40px] custom-shadow mx-[100px] rounded-full text-center items-center justify-center grey w-[150px] h-[60.3px] duration-500 ease-in delay-[10ms]' />
            </form>
          </div>
        </div>
      </div>
      {/* <ParticleComponent/> */}
      <div className='mt-[95px]'>
        <Social_Links/>
      </div>
      <Footer/>
    </>
  )
};
export default contact
