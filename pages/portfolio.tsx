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

const portfolio : NextPage = () => {
  return (
    <>
    {/* <ParticleComponent/> */}
    <div className=''>
    {/* <Navbar/> */}
      <div className='mx-auto'>
        <div className="mt-[165px] mx-[90px]">
          <div className='mx-[30px]'>
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
        <div className='mt-[65px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]'>
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
        <div className='mt-[120px] mx-[90px]'>
          <div>
            <p className='text-white font-[600] text-[40px]'>Let's Talk</p>
            <hr className='light-blue border-[3px] w-[55px] mt-[16px]'/>
          </div>
          <div className='grid grid-cols-2 gap-x-[276px] mt-[70px]'>
            <div className='flex flex-col'>
              <p className='w-[495px] text-white text-[30px] font-[400]'>Hi 👋🏿, Adetunji here. Lets get in touch sometime to work on something great 😅</p>
              <div className='mt-[60px]'>
                <a href='/contact'>
                  <div className={`rounded-full text-center items-center justify-center grey w-[200px] h-[72.3px] custom-shadow duration-500 ease-in delay-[10ms] flex space-x-[8px]`}>
                    <p className='text-[19px] text-white'>Legoooo</p>
                    <img src="./icons/Arrow.svg" alt="" className='w-[30px]'/>
                  </div>
                </a>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='w-[495px] text-white text-[30px] font-[400]'>My handle is itzadetunji on all social media 😊. Lets give each other a follow 🤗</p>
              <div className='mt-[60px]'>
                <SocialLinks/>
              </div>
            </div>
          </div>
        </div>
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
