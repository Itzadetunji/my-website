import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const index: NextPage = () => {
  return (
    <div className='hidden lg:block mt-[120px] mx-[60px]'>
      <div>
        <p className='text-white font-[600] text-[40px]'>Let's Talk</p>
        <div className='w-[85px] mt-[20px]'>
          <hr className='light-blue border-[3px] animate-line'/>
        </div>
      </div>
      <div className='flex flex-row justify-between mt-[70px]'>
        <div className='flex flex-col'>
          <p className='w-[300px] xl:w-[495px] text-white lg:text-[22px] font-[400]'>Hi 👋🏿, Adetunji here. Lets get in touch sometime to work on something great 😅</p>
          <div className='mt-[60px]'>
            <a href='/contact'>
              <div className={`rounded-full text-center items-center justify-center grey w-[180px] h-[60.07px] custom-shadow duration-500 ease-in delay-[10ms] flex space-x-[8px] animate-arrow-div`}>
                <p className='text-[18px] text-white'>Legooo</p>
                <img src="/icons/arrow.svg" alt="" className='w-[30px] animate-arrow'/>
              </div>
            </a>
          </div>
        </div>
        <div className='lg:flex flex-col'>
          <p className='w-[350px] xl:w-[495px] text-white lg:text-[22px] font-[400]'>My handle is itzadetunji on all social media 😊. Lets give each other a follow 🤗</p>
          <div className='mt-[60px]'>
            <div className="flex mt-5 space-x-[30px] mx-auto justify-center">
              <div className='h-0 my-[10px] w-[70px] xl:my-[13px]'>
                <div className='border animate-line'/>
              </div>
              <div className="mx-auto flex flex-row space-x-[10px] -mt-[17px]">
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
              <div className='h-0 my-[10px] w-[70px] xl:my-[13px] line-reversed'>
                <div className='border animate-line'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index