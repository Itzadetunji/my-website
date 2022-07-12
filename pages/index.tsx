import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'
import Social_Links from './components/Social_Links'

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-[165px] mx-[35px]">
        <div>
          <p className='text-white font-[600] text-[55px]'>I'm</p>
          <p className='text-white font-[600] text-[55px] leading-[60px]'>Adetunji Adeyinka</p>
        </div>
      </div>
      <ParticleComponent/>
      {/* <Footer/> */}
    </>
  )
};
export default Home
