import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

type Props = {}

const index:NextPage = () => {
  return (
    <div className='lg:absolute lg:top-[200px] xl:top-[150px] right-[50px]'>
      <div className='hidden lg:flex lg:flex-col mt-5 lg:space-y-[30px] xl:mt-[80px]'>
        <div className='h-[70px]'>
          <div className='border-l-white border-l-[1px] h-full lg:ml-[30px] animate-social-line'/>
        </div>
        <div className="mx-auto flex flex-col space-y-[40px]">
          <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
            <Link href="https://www.facebook.com/adetunji.adeyinka.1238" passHref>
              <a target="_blank" rel="noopener noreferrer" className=''>
                <img src="icons/social-icons/facebook.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
              </a>
            </Link>
          </div>
          <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
          <Link href="https://www.instagram.com/itzadetunji/" passHref>
            <a target="_blank" rel="noopener noreferrer" className=''>
              <img src="icons/social-icons/instagram.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
            </a>
          </Link>
          </div>
          <div className='w-14 h-14 flex hoverAnimation items-center justify-center'>
          <Link href="https://twitter.com/itzadetunji1" passHref>
            <a target="_blank" rel="noopener noreferrer" className=''>
              <img src="icons/social-icons/twitter.svg" className='w-[31.81px] h-[31.81px]' alt=""/>
            </a>
          </Link>
          </div>                  
        </div>
        <div className='h-[70px] line-flipped'>
          <div className='border-l-white border-l-[1px] h-full lg:ml-[30px] animate-social-line'/>
        </div>
      </div>
    </div>
  )
}

export default index