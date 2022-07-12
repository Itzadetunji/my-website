import { NextPage } from 'next'
import React from 'react'

interface ButtonProps {
  link: string,
  text: string,
  width: string,
  height: string
}

const Button : React.FC<ButtonProps> = ({link, text, width, height}) => {
  return (
    <a>
      <div className={`mx-[84px] rounded-full text-center items-center justify-center grey w-[${height}] h-[${width}] button duration-500 ease-in delay-[10ms] flex space-x-[8px]`}>
        <p className='text-[25px] text-white'>{text}</p>
        <img src="./icons/Arrow.svg" alt="" />
      </div>
    </a>
  )
}

export default Button;