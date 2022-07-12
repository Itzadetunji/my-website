import { NextPage } from 'next'
import React from 'react'

const Social_Links: NextPage = () => {
  return (
    <div className="flex content-evenly flex-wrap mt-5">
      <div className="mx-auto">
        <img src="/icons/facebook.svg" alt="" className="w-8 h-8 mx-auto inline"/>
        <img src="/icons/instagram.svg" alt="" className="w-8 h-8 inline mx-3"/>
        <img src="/icons/twitter.svg" alt="" className="w-8 h-8 mx-auto inline"/>
      </div>
    </div>
  )
}

export default Social_Links