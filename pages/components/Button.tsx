import { NextPage } from 'next'
import React from 'react'

type Props = {}

const Button: NextPage = () => {
  return (
    <div className='mx-[84px] rounded-full text-center items-center justify-center grey w-[260px] h-[94px] button'>
      <p className='pt-[28px] text-[25px] text-white'>Know More -></p>
    </div>
  )
}

export default Button;