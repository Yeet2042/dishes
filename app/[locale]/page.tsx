import React from 'react'
import HeroSection from './components/section/HeroSection'
import BestSection from './components/section/BestSection'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
      <div>
        <HeroSection/>
        <BestSection/>
        <div
          className='absolute bg-primary rounded-full size-[500px] top-[300px] right-[250px] blur-3xl opacity-10'
        />
        <div
          className='absolute bg-primary rounded-full size-[1000px] bottom-[-500px] left-[-200px] blur-3xl opacity-10'
        />
      </div>
    </>
  )
}