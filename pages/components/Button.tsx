import { NextPage } from 'next'
import React from 'react'

type Props = {
  link: string,
  text: string
}

const Button: NextPage = () => {
  return (
    <a>
      <div className='mx-[84px] rounded-full text-center items-center justify-center grey w-[260px] h-[94px] button duration-500 ease-in delay-[10ms] flex space-x-[8px]'>
        <p className='text-[25px] text-white'>Know More</p>
        <img src="./icons/Arrow.svg" alt="" />
      </div>
    </a>
  )
}

export default Button;