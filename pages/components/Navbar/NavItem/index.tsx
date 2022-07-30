import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

interface NavProps {
  active: boolean,
  title: string,
}

const index:React.FC<NavProps> = ({active, title}) => {
  return (
    <Link href={''}>
      <p className={`pr-[50px] ${active && 'text-[#5CBEFF]'} hover:text-[#5CBEFF] transition-all duration-300`}>
        {title}
      </p>
    </Link>
  )
}

export default index