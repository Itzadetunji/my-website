import React from 'react'

interface serviceCardProps {
  icon: string,
  title: string,
  text: string
}

const serviceCard : React.FC<serviceCardProps> = ({icon, title, text}) => {
  return (
    <div>serviceCard</div>
  )
}

export default serviceCard