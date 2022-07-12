import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="text-center dark-blue h-[116px] mt-8 text-[17px]">
      <div className='py-[40px]'>
        <p className="mx-auto mt-8 items-center justify-center text-white text-[13px]">Copyright <span className='light-blue-text'> © </span>{`${date}`} <span className='light-blue-text'> | </span> Adetunji Adeyinka</p>
      </div>
    </div>
  )
}

export default Footer