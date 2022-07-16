import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  iconpath: string,
  title: string,
  description: string
}

const TestimonialCard: React.FC<cardProps> = ({iconpath, title, description}) => {
  return (
    <div className='grey w-[334px] rounded-[30px] mx-auto drop-shadow duration-500 ease-in delay-[10ms]'>
      <div className='flex'>
        <img src="./images/testimonial1.png" alt="" />
        <div className='flex'>
          <p className='light-blue-text'>Ludwig Deiter</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard