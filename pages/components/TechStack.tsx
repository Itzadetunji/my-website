import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  path: string,
  name: string
}

const TestimonialCard: React.FC<cardProps> = () => {
  const TechStackContents1 =[
    {
      path: "../icons/stack-icons/HTML5.svg",
      name: "HTML5"
    },
    {
      path: "../icons/stack-icons/CSS3.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/Javascript.svg",
      name: "Javascript"
    },
    {
      path: "../icons/stack-icons/Typescript.svg",
      name: "HTML5"
    },
    {
      path: "../icons/stack-icons/mysql.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/mongodb.svg",
      name: "Javascript"
    },
  ]
  const TechStackContents2 =[
    {
      path: "../icons/stack-icons/Typescript.svg",
      name: "HTML5"
    },
    {
      path: "../icons/stack-icons/mysql.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/mongodb.svg",
      name: "Javascript"
    },
  ]
  return (
    <>
      <div className='flex flex-row space-x-[47px] techStackCarousel'>
        {TechStackContents1.map((stack) => <img src={stack.path} alt={stack.name}/>)}
      </div>
      {/* <div className='flex flex-row space-x-[47px]'>
        {TechStackContents2.map((stack2) => <img src={stack2.path} alt={stack2.name}/>)}
      </div> */}
    </>
  )
}

export default TestimonialCard