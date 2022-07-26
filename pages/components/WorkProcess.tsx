import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  iconpath: string,
  width: string,
  height: string,
  title: string,
  description: string
}

const servicecontent = 1;

const WorkProcess: React.FC<cardProps> = ({iconpath, width, height, title, description}) => {
  return (
    <div className='grey w-[290px] h-[260px] rounded-[67px] mx-auto custom-shadow duration-500 ease-in delay-[10ms]'>
      <div className='flex flex-col py-[30px]'>
        <div className='h-[60px]'>
          <img src={iconpath} alt="" className={`w-[${width}] h-[${height}] items-center justify-center mx-auto`}/>
        </div>
        <p className='text-center text-white pt-[7px] font-bold light-blue-text text-[23px]'>{title}</p>
        <p className='text-center text-white mx-[22px] pt-[7px] pb-[37px] text-[12.4px] leading-[27px]'>{description}</p>
      </div>
    </div>
  )
}

export default WorkProcess