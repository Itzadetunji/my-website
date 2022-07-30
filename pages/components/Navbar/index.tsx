import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const index: NextPage = () => {
  return (
    <nav className='dark-blue w-full h-[109px]'>
      <div className='flex flex-row mx-[60px] py-[20px] justify-between'>
        <div>
          <img src="/icons/logo.svg" alt="" />
        </div>
        <div className='flex text-white text-[21px] my-[20px]'>
          <p className='pr-[50px] text-[#5CBEFF]'>Home</p>
          <p className='pr-[50px] hover:text-[#5CBEFF] transition-all duration-300'>About</p>
          <p className='pr-[50px] hover:text-[#5CBEFF] transition-all duration-300'>Portfolio</p>
          <p className='hover:text-[#5CBEFF] transition-all duration-300'>Contact</p>
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