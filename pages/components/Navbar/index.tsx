import { NextPage } from 'next'
import { useRouter } from "next/router"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavItem from './NavItem'
import ParticleComponent from '../ParticleComponent'

const index: NextPage = () => {
  const router = useRouter().pathname;
  const [activeHam, setActiveHam] = useState(false);
  useEffect(() => {
    if(activeHam == true) {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
  }, [activeHam]);
  return (
    <nav className={`dark-blue w-full h-[109px] lg:sticky top-0 z-50 sticky ${activeHam && 'relative'}`}>
      <div className='flex flex-row ml-[60px] lg:ml-[60px] mr-[60px] lg:mr-[75px] py-[20px] justify-between'>
        <Link href={'/'}>
          <div className='cursor-pointer'>
            <img src="/icons/repeated.svg" className='w-[65px] h-[65px]' alt="" />
          </div>
        </Link>
        <div className='hidden lg:flex text-white text-[21px] my-[20px]'>
          <a href={'/'}>
            <div className='pr-[50px] cursor-pointer'>
              <NavItem active={router.includes('about') || router.includes('contact') || router.includes('portfolio') ? false : true} title={'Home'} />
            </div>
          </a>
          <a href={'/about'}>
            <div className='pr-[50px] cursor-pointer'>
              <NavItem active={router.includes('about') && true} title={'About'} />
            </div>
          </a>
          <Link href={'/portfolio'}>
            <div className='pr-[50px] cursor-pointer'>
              <NavItem active={router.includes('portfolio') && true} title={'Portfolio'} />
            </div>
          </Link>
          <Link href={'/contact'}>
            <div className='cursor-pointer'>
              <NavItem active={router.includes('contact') && true} title={'Contact'} />
            </div>
          </Link>
        </div>
        <div className='hidden lg:flex my-[15px]'>
          <Link href={'https://github.com/itzadetunji'}>
            <div className='cursor-pointer'>
              <img src="/icons/social-icons/github.svg" className='w-[34px] h-[34px] mr-[30px]' alt="" />
            </div>
          </Link>
          <Link href={'linkedin.com/in/itzadetunji'}>
            <div className='cursor-pointer'>            
              <img src="/icons/social-icons/linkedin.svg" className='w-[34px] h-[34px]' alt="" />
            </div>
          </Link>
        </div>
        <div className={`py-[8px] px-[10px] flex lg:hidden hover:bg-[grey] rounded-[10px] ${activeHam && 'bg-[#323C42] border-[3px] border-[#363C42]'}`}>
          <img src="/icons/hamburger-repeated.svg"
            className='h-[49px] w-[59px]'
            onClick={() => setActiveHam(!activeHam)}
            alt="" 
          />
        </div>
      </div>
      <div className={`${activeHam ? 'absolute' : 'hidden'} lg:hidden top-[100px] pr-[60px] h-screen w-full dark-blue`}>
        <div className='flex flex-col space-y-[50px] mt-[40px]'>
          <Link href={'/'}>
            <div className={`border-r-[6px] ${router.includes('about') || router.includes('contact') || router.includes('portfolio') ? 'text-white border-r-[#0A141D]' : 'border-r-[#5CBEFF] text-[#5CBEFF]'} hover:border-r-[#5CBEFF] transition-all duration-300 cursor-pointer`}>
              <p className='pr-[20px] py-[15px] text-[22px] hover:text-[#5CBEFF] float-right'>Home</p>
            </div>
           </Link> 
          <Link href={'/about'}>
            <div className={`border-r-[6px] ${router.includes('about') ? 'border-r-[#5CBEFF] text-[#5CBEFF]' : 'text-white border-r-[#0A141D]'} hover:border-r-[#5CBEFF] transition-all duration-300 cursor-pointer`}>
              <p className='pr-[20px] py-[15px] hover:text-[#5CBEFF] transition-all duration-300 text-[22px] float-right'>About</p>
            </div>
           </Link> 
          <Link href={'/portfolio'}>
            <div className={`border-r-[6px] ${router.includes('portfolio') ? 'border-r-[#5CBEFF] text-[#5CBEFF]' : 'text-white border-r-[#0A141D]'} hover:border-r-[#5CBEFF] transition-all duration-300 cursor-pointer`}>
              <p className='pr-[20px] py-[15px] hover:text-[#5CBEFF] transition-all duration-300 text-[22px] float-right'>Portfolio</p>
            </div>
           </Link> 
          <Link href={'/contact'}>
            <div className={`border-r-[6px] ${router.includes('contact') ? 'border-r-[#5CBEFF] text-[#5CBEFF]' : 'text-white border-r-[#0A141D]'} hover:border-r-[#5CBEFF] transition-all duration-300 cursor-pointer`}>
              <p className='pr-[20px] py-[15px] hover:text-[#5CBEFF] transition-all duration-300 text-[22px] float-right'>Contact</p>
            </div>
           </Link> 
        </div>
        <div className='flex space-x-[30px] pl-[43%] mt-[50px]'>
          <Link href={'https://github.com/itzadetunji'}>
            <div className='cursor-pointer'>
              <img src="/icons/social-icons/github.svg" className='w-[34px] h-[34px] mr-[30px]' alt="" />
            </div>
          </Link>
          <Link href={'linkedin.com/in/itzadetunji'}>
            <div className='cursor-pointer'>            
              <img src="/icons/social-icons/linkedin.svg" className='w-[34px] h-[34px]' alt="" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default index