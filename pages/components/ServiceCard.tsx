import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  icon: string,
  text: string,
  title: string
}

const ServiceCard: React.FC<cardProps> = ({icon, text, title}) => {
  return (
    <div className='grey w-[334px] rounded-[30px] mx-auto drop-shadow duration-500 ease-in delay-[10ms]'>
      <div className='flex flex-col mt-[79px]'>
        <img src='./icons/bullseye.svg' alt="" className='w-[90px] h-[90px] items-center justify-center mx-auto mt-[47px]'/>
        <p className='text-center text-white pt-[35px] font-bold light-blue-text text-[23px]'>Goal Oriented</p>
        <p className='text-center text-white mx-[27px] pt-[35px] pb-[37px] text-[17px]'>I check your website before making changes. I seek for potential user problems, big or small, and offer fixes to ensure your user is on the right path to attain their goals.</p>
      </div>
    </div>
  )
}

export default ServiceCard