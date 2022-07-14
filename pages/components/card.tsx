import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  icon: string,
  text: string,
  title: string
}

const Card: React.FC<cardProps> = ({icon, text, title}) => {
  return (
    <div className='grey w-full rounded-[30px]'>
      <div className='flex flex-col mt-[79px]'>
        <img src='./icons/bullseye.svg' alt="" className='w-[105px] h-[105px] items-center justify-center mx-auto'/>
        <p className='text-center text-white'>Goal Oriented</p>
        <p className='text-center text-white'>I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.</p>
      </div>
    </div>
  )
}

export default Card