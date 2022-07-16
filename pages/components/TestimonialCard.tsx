import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  imagepath: string,
  name: string,
  role: string,
  description: string
}

const TestimonialCard: React.FC<cardProps> = ({imagepath, name, role, description}) => {
  return (
    <div className='grey w-[334px] rounded-[30px] mx-auto drop-shadow duration-500 ease-in delay-[10ms] pb-[20px] mt-[45px]'>
      <div className='flex'>
        <img src={imagepath} alt="" width="76" height="76" className='ml-[30px] mt-[21px]'/>
        <div className='flex flex-col ml-[22px] mt-[21px] space-y-[3px]'>
          <p className='text-white font-bold text-[18.2px]'>{name}</p>
          <p className='light-blue-text font-bold text-[15.2px]'>{role}</p>
        </div>
      </div>
      <p className='text-white mt-[25px] text-center mx-[25px] leading-[27px] font-[400]'>{description}</p>
    </div>
  )
}

export default TestimonialCard