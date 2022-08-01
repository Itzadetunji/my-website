import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Social_Links: NextPage = () => {
  return (
    <div className="flex mt-5 space-x-[30px] mx-auto justify-center">
      <hr className='border w-[70px] my-[15px]'/>
      <div className="mx-auto flex space-x-[40px]">
        <Link href="https://www.facebook.com/adetunji.adeyinka.1238" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <img src="icons/social-icons/facebook.svg" alt=""/>
          </a>
        </Link>
        <Link href="https://www.instagram.com/itzadetunji/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <img src="icons/social-icons/instagram.svg" alt=""/>
          </a>
        </Link>
        <Link href="https://twitter.com/itzadetunji1" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <img src="icons/social-icons/twitter.svg" alt=""/>
          </a>
        </Link>
      </div>
      <div className='w-[70px] my-[15px]'>
        <hr className='border animate-line'/>
      </div>
    </div>
  )
}

export default Social_Links