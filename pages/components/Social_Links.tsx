import { NextPage } from 'next'
import React from 'react'

const Social_Links: NextPage = () => {
  return (
    <div className="flex mt-5 space-x-[30px] mx-[30px]">
      <hr className='border w-[70px] my-[15px]'/>
      <div className="mx-auto flex space-x-[40px]">
        <img src="/icons/facebook.svg" alt=""/>
        <img src="/icons/instagram.svg" alt=""/>
        <img src="/icons/twitter.svg" alt=""/>
      </div>
      <hr className='border w-[70px] my-[15px]'/>
    </div>
  )
}

export default Social_Links