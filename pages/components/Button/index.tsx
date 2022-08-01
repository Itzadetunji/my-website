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
    <a href={link}>
      <div className={`mx-auto rounded-full text-center items-center justify-center grey w-[200px] h-[72.3px] custom-shadow duration-500 ease-in delay-[10ms] flex space-x-[8px]`}>
        <p className='text-[20px] text-white'>{text}</p>
        <img src="./icons/arrow.svg" alt="" className='w-[30px] animate-arrow'/>
      </div>
    </a>
  )
}

export default Button;