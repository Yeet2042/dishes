import {useTranslations} from 'next-intl'
import React from 'react'
import RecipesCloud from '../canvas/RecipesCloud'
import NumberTicker from '../canvas/NumberTicker'
import TypingAnimation from '../canvas/TypingAnimation'

type Props = {}

export default function HeroSection({}: Props) {
  const tHomePage = useTranslations('HomePage')
  return (
    <section
      id='hero'
      className='conatiner w-full h-screen overflow-hidden bg-background'
    >
      <div className='flex h-full mt-16'>
        <div className='w-1/2'>
          <div className='flex flex-col w-full h-1/2 pt-32 pl-[200px] gap-8'>
            <TypingAnimation
              className='text-left text-7xl font-bold'
              duration={50}
              text={tHomePage('header1')}
            />
            <TypingAnimation
              className='text-left text-7xl font-bold text-primary'
              duration={50}
              text={tHomePage('header2')}
            />
            <TypingAnimation
              className='text-left text-7xl font-bold'
              duration={50}
              text={tHomePage('header3')}
            />
          </div>
          <div className='flex flex-col gap-8 pl-[300px] h-1/2'>
            <div className='flex flex-col gap-4'>
              <div className='flex item-center gap-4'>
                <NumberTicker
                  className='text-6xl font-bold'
                  value={297480}
                  delay={2}
                />
                <p className='text-6xl'>🔥</p>
              </div>
              <p className='text-xl'>{tHomePage('totalRecipes')}</p>
            </div>
            <div className='flex flex-col gap-4'>
              <NumberTicker
                className='text-6xl font-bold'
                value={2492}
                delay={2}
              />
              <p className='text-xl'>{tHomePage('totalAuthor')}</p>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <RecipesCloud/>
        </div>
      </div>
    </section>
  )
}