import { NextPage } from 'next'
import React from 'react'

const PortfolioCard: NextPage = () => {
  return (
    <div className="flex flex-col space-y-[70px] pb-[40px]">
        <div>
          <img src={`images/portfolio/portfolio1.png`} alt="" className='w-full rounded-t-[30px]'/>
          <div className='mx-[32px] mt-[45px] text-white'>
            <p className='text-[32px] font-[600]'>{'Signals - Product Tracker'}</p>
            <p className='text-[20px] font-[200] leading-[35px] mt-[5px]'>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. quidem quibusdam sapiente maxime corrupti est fugiat qui,'}</p>
            <div className='flex flex-row space-x-[15px] mt-[25px]'>
              {(activeLink) && <a href="">
                <img src="../icons/link.svg" alt="Live Preview icon" />
              </a>}
              {(gitLink) && <a href="">
                <img src="../icons/stack-icons/Github.svg" className='w-[39px] h-[39px]' alt="Github icon" />
              </a>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioCard