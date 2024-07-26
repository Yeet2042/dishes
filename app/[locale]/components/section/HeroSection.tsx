import {useTranslations} from 'next-intl'
import React from 'react'
import RecipesCloud from '../canvas/RecipesCloud'
import NumberTicker from '../canvas/NumberTicker'
import TypingAnimation from '../canvas/TypingAnimation'
import TestCloud from '../canvas/TestCloud'

type Props = {}

export default function HeroSection({}: Props) {
  const tHomePage = useTranslations('HomePage')
  return (
    <section
      id='hero'
      className='conatiner relative w-full h-full md:h-screen overflow-hidden z-10'
    >
      <div className='flex flex-col lg:flex-row h-full mt-16'>
        <div className='flex flex-col w-full lg:w-1/2 gap-0 lg:gap-6'>
          <div className='flex flex-col w-full h-1/2 gap-6 justify-center mt-10 md:mt-20 lg:mt-10 px-8 lg:px-20'>
            <TypingAnimation
              className='text-left text-5xl sm:text-6xl lg:text-7xl font-bold'
              duration={50}
              text={tHomePage('header1')}
            />
            <TypingAnimation
              className='text-left text-5xl sm:text-6xl lg:text-7xl font-bold text-primary'
              duration={50}
              text={tHomePage('header2')}
            />
            <TypingAnimation
              className='text-left text-5xl sm:text-6xl lg:text-7xl font-bold'
              duration={50}
              text={tHomePage('header3')}
            />
          </div>
          <div className='flex flex-col h-1/2 gap-4 mt-10 md:mt-16 lg:mt-10 px-16 md:px-20 lg:px-40'>
            <div className='flex flex-col gap-2 sm:gap-4'>
              <div className='flex item-center gap-1 m:gap-4'>
                <NumberTicker
                  className='text-3xl sm:text-6xl lg:text-7xl font-bold'
                  value={297480}
                />
                <p className='text-3xl sm:text-6xl lg:text-7xl'>🔥</p>
              </div>
              <p className='text-sm sm:text-xl'>{tHomePage('totalRecipes')}</p>
            </div>
            <div className='flex flex-col gap-2 sm:gap-4'>
              <NumberTicker
                className='text-3xl sm:text-5xl lg:text-6xl font-bold'
                value={2492}
              />
              <p className='text-sm sm:text-xl'>{tHomePage('totalAuthor')}</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <RecipesCloud/>
        </div>
      </div>
    </section>
  )
}