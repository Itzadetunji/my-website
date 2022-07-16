import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  path: string,
  name: string
}

const TestimonialCard: React.FC<cardProps> = ({path, name}) => {
  const TechStackContents =[
    {
      path: "",
      name: ""
    }
  ]
  return (
    <div className=''>
        {TechStackContents.map((stack, index) => <img src={stack.path} alt={stack.name}/>)}
    </div>
  )
}

export default TestimonialCard