import { NextPage } from 'next'
import React from 'react'

const PortfolioCard: NextPage = () => {
  const PortfolioContents = [
    {
      imagepath: '../images/portfolio1.png',
      title: 'Signals - Product Tracker',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. quidem quibusdam sapiente maxime corrupti est fugiat qui,',
      activelink: '11',
      gitlink: '11',
    }
  ]
  return (
    <div className="flex flex-col space-y-[70px] pb-[40px]">
      {PortfolioContents.map((portfolio) => 
        <div>
          <img src={portfolio.imagepath} alt="" className='w-full rounded-t-[30px]'/>
          <div className='mx-[32px] mt-[45px] text-white'>
            <p className='text-[32px] font-[600]'>{portfolio.title}</p>
            <p className='text-[20px] font-[200] leading-[35px] mt-[5px]'>{portfolio.description}</p>
            <div className='flex flex-row space-x-[15px] mt-[25px]'>
              {(portfolio.activelink.length > 1) && <a href="">
                <img src="../icons/link.svg" alt="Live Preview icon" />
              </a>}
              {(portfolio.activelink.length > 1) && <a href="">
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