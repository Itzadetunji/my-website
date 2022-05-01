import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ParticleComponent from './components/ParticleComponent'

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-32">
        <h1 className="text-white ml-9 font-semibold text-4xl">I'm</h1>
        <br/>
        <h1 className="text-white ml-9 font-semibold leading-10 -mt-4 text-4xl">Adetunji <br/>Adeyinka</h1>
        <hr className="light-blue w-[150px] h-1 ml-[35px] border-transparent my-4"/>
        <div className="w-64 h-auto mx-auto mt-8 items-center justify-center">
          <p className="text-white">I’m a fullstack web developer who provides quality services of industry satandard Dire was here.</p>
          <img src="/icons/learn-more.svg" alt="" className="w-auto h-5 mt-2"/>
          <img src="/images/me.jpeg" className="mt-5 rounded-full"/>
        </div>
        
      </div>
      <ParticleComponent/>
      <Footer/>
    </>
  )
};
export default Home
