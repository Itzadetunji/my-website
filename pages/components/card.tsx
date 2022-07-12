import { NextPage } from 'next'
import React from 'react'

interface cardProps {
  icon: string,
  text: string,
  title: string
}

const Card: React.FC<cardProps> = () => {
  return (
    <div>card</div>
  )
}

export default Card