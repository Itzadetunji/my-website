import { NextPage } from 'next'
import { useRouter } from "next/router"
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'

const index: NextPage = () => {
  const router = useRouter().pathname;
  return (
    <nav className='dark-blue w-full h-[109px]'>
      <div className='flex flex-row mx-[60px] py-[20px] justify-between'>
        <div>
          <img src="/icons/logo.svg" alt="" />
        </div>
        <div className='flex text-white text-[21px] my-[20px]'>
          <div className='pr-[50px]'>
            <NavItem active={!router.includes('about') || !router.includes('contact') || !router.includes('portfolio') ? true : false} title={'Home'} />
          </div>
          <div className='pr-[50px]'>
            <NavItem active={router.includes('about') && true} title={'About'} />
          </div>
          <div className='pr-[50px]'>
            <NavItem active={router.includes('portfolio') && true} title={'Portfolio'} />
          </div>
          <div>
            <NavItem active={router.includes('contact') && true} title={'Contact'} />
          </div>
        </div>
        <div className='flex  my-[15px]'>
          <Link href={''}>
            <img src="/icons/social-icons/github.svg" className='w-[34px] h-[34px] mr-[30px]' alt="" />
          </Link>
          <Link href={''}>
            <img src="/icons/social-icons/linkedin.svg" className='w-[34px] h-[34px]' alt="" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default index