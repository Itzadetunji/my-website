import { NextPage } from 'next'
import React from 'react'
interface ProfileCardProps {
  imagePath: string,
  title: string,
  description: string,
  activeLink: string,
  gitLink: string,
}

const PortfolioCard : React.FC<ProfileCardProps> = ({imagePath, title, description, activeLink, gitLink}) => {
  return (
    <div className="flex flex-col space-y-[70px] pb-[40px]">
        <div>
          <img src={`images/portfolio/${imagePath}`} alt="" className='w-full rounded-t-[30px]'/>
          <div className='mx-[32px] mt-[45px] text-white'>
            <p className='text-[32px] font-[600]'>{title}</p>
            <p className='text-[20px] font-[200] leading-[35px] mt-[5px]'>{description}</p>
            <div className='flex flex-row space-x-[15px] mt-[25px]'>
              {(activeLink) && <a href={activeLink}>
                <img src="../icons/link.svg" alt="Live Preview icon" />
              </a>}
              {(gitLink) && <a href={gitLink}>
                <img src="../icons/stack-icons/Github.svg" className='w-[39px] h-[39px]' alt="Github icon" />
              </a>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default PortfolioCard