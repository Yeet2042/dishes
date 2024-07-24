import React from 'react'
import HeroSection from './components/section/HeroSection'
import BestRecipesSection from './components/section/BestRecipesSection'
import BestAuthorSection from './components/section/BestAuthorSection'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
      <div className='relative bg-background'>
        <HeroSection/>
        <BestAuthorSection/>
        <BestRecipesSection/>
        <div
          className='absolute z-0 bg-primary rounded-full size-[1000px] bottom-[-500px] left-[-200px] blur-3xl opacity-10'
        />
      </div>
    </>
  )
}