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
      <div className=''>

      </div>
      <ParticleComponent/>
      <Footer/>
    </>
  )
};
export default Home
