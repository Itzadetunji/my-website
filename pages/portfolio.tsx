import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'
import SocialLinks from './components/SocialLinks'
import Button from './components/Button'
import PortfolioCard from './components/PortfolioCard'
import Link from 'next/link'
import LargeSocialLinks from './components/LargeSocialLinks'

const portfolio : NextPage = () => {
  return (
    <>
    {/* <ParticleComponent/> */}
    <div className=''>
    <Navbar/>
      <div className='mx-auto mt-[80px]'>
        <div className="mt-[165px] mx-[30px] lg:mx-[60px] xl:mx-[90px]">
          <div>
            <p className='text-white font-[600] text-[40px] lg:text-[50px]'>My Portfolio</p>
            <div className='border-[#5CBEFF] border-[3px] h-0 w-[55px] lg:w-[64px] mt-[16px]'/>
          </div>
          <div className='text-white mt-[73px]'>
            <div className='mt-[45px] text-[25px] md:text-[30px] text-center'>
              <p>Here is a sneak peek 👀 of what I have done 🙈</p>
            </div>
          </div>
        </div>
        <div className='mt-[65px] mx-auto lg:mx-[20px] xl:mx-auto grid grid-cols-1 place-content-between lg:grid-cols-2 gap-y-[65px]'>
          <PortfolioCard 
            imagePath={'portfolio1.png'} 
            title={'Service Track'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iure provident mollitia ex facilis adipisci et perspiciatis error suscipit dignissimos?'} 
            activeLink={'https://google.com'} 
            gitLink={'https://google.com'}
          />
          <PortfolioCard 
            imagePath={'portfolio1.png'} 
            title={'Service Track'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iure provident mollitia ex facilis adipisci et perspiciatis error suscipit dignissimos?'} 
            activeLink={'https://google.com'} 
            gitLink={'https://google.com'}
          />
          <PortfolioCard 
            imagePath={'portfolio1.png'} 
            title={'Service Track'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iure provident mollitia ex facilis adipisci et perspiciatis error suscipit dignissimos?'} 
            activeLink={'https://google.com'} 
            gitLink={'https://google.com'}
          />
          <PortfolioCard 
            imagePath={'portfolio1.png'} 
            title={'Service Track'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iure provident mollitia ex facilis adipisci et perspiciatis error suscipit dignissimos?'} 
            activeLink={'https://google.com'} 
            gitLink={'https://google.com'}
          />
        </div>
        <LargeSocialLinks/>
      </div>
      <div className='mt-[95px] lg:hidden'>
        <SocialLinks/>
      </div>
      <Footer/>
    </div>
    </>
  )
};
export default portfolio
