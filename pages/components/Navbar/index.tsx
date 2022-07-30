import { NextPage } from 'next'
import React from 'react'

const index: NextPage = () => {
  return (
    <nav className='dark-blue w-full h-[109px]'>
      <div className='flex flex-row mx-[30px] py-[20px] justify-between'>
        <div>
          <img src="/icons/logo.svg" alt="" />
        </div>
        <div className='flex spcae-x-[30px] text-white'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className='flex spcae-x-[30px]'>
          <img src="/icons/social-icons/github.svg" alt="" />
          <img src="/icons/social-icons/linkedin.svg" className='w-[34px] h-[34px]' alt="" />
        </div>
      </div>
    </nav>
  )
}

export default index