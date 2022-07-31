import { NextPage } from 'next'
import { useRouter } from "next/router"
import Link from 'next/link'
import { useState } from 'react'
import NavItem from './NavItem'

const index: NextPage = () => {
  const router = useRouter().pathname;
  const [activeHam, setActiveHam] = useState(false);
  return (
    <nav className='dark-blue w-full h-[109px] sticky top-0 z-50'>
      <div className='flex flex-row ml-[60px] lg:ml-[60px] mr-[60px] lg:mr-[75px] py-[20px] justify-between'>
        <div>
          <img src="/icons/repeated.svg" className='w-[65px] h-[65px]' alt="" />
        </div>
        <div className='hidden lg:flex text-white text-[21px] my-[20px] select-none'>
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
          <a href={'/portfolio'}>
            <div className='pr-[50px] cursor-pointer'>
              <NavItem active={router.includes('portfolio') && true} title={'Portfolio'} />
            </div>
          </a>
          <a href={'/contact'}>
            <div className='cursor-pointer'>
              <NavItem active={router.includes('contact') && true} title={'Contact'} />
            </div>
          </a>
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
        <div className='flex lg:hidden hover:bg-[pink]'>
          <img src="/icons/hamburger.svg" className='py-[5px] px-[5px]' alt="" />
        </div>
      </div>
    </nav>
  )
}

export default index