import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  path: string,
  name: string
}

const TechStack: React.FC<cardProps> = () => {
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
      path: "../icons/stack-icons/React.svg",
      name: "Reactjs"
    },
    {
      path: "../icons/stack-icons/Nextjs.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/Vue.svg",
      name: "Javascript"
    },
    {
      path: "../icons/stack-icons/NPM.svg",
      name: "HTML5"
    },
    {
      path: "../icons/stack-icons/yarn.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/Nodejs.svg",
      name: "Javascript"
    }
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
    {
      path: "../icons/stack-icons/Webpack.svg",
      name: "HTML5"
    },
    {
      path: "../icons/stack-icons/Tailwindcss.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/Bootstrap.svg",
      name: "Javascript"
    },
    {
      path: "../icons/stack-icons/Github.svg",
      name: "HTML5"
    },
    {
      path: "../icons/stack-icons/VSCode.svg",
      name: "CSS3"
    },
    {
      path: "../icons/stack-icons/Postman.svg",
      name: "Javascript"
    },
  ]
  return (
    <>
    <div className='overflow-hidden flex flex-col space-y-3'>
      <div className='flex flex-row space-x-[47px] techStackCarousel1 relative'>
        {TechStackContents1.map((stack) => <img src={stack.path} alt={stack.name}/>)}
      </div>
      <div className='flex flex-row space-x-[47px] techStackCarousel2 relative'>
        {TechStackContents2.map((stack2) => <img src={stack2.path} alt={stack2.name}/>)}
      </div>
    </div>
    </>
  )
}

export default TechStack