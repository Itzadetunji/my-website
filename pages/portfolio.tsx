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

const index : NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-[165px] mx-auto justify-center">
        <div className='mx-[35px]'>
        <div>
            <p className='text-white font-[600] text-[40px]'>My Portfolio</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[16px]'/>
          </div>
          <div className='text-white mt-[73px]'>
            <div className='mt-[45px] text-[25px] text-center'>
              <p>Here is a sneak peek 👀 of what I have done 🙈</p>
            </div>
          </div>
        </div>
      </div>
      {/* <ParticleComponent/> */}
      <div className='mt-[100px] grey'>
        <PortfolioCard/>
      </div>
      <div className='mt-[95px]'>
        <Social_Links/>
      </div>
      <Footer/>
    </>
  )
};
export default index
