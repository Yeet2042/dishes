import {useTranslations} from 'next-intl'
import React from 'react'
import RecipesCloud from './components/canvas/RecipesCloud'

type Props = {}

export default function Page({}: Props) {
  const tHomePage = useTranslations('HomePage')
  return (
    <>
      <div className="flex w-screen h-screen bg-default-50">
        <div className='absolute top-40 left-40 flex flex-col justify-end gap-y-10'>
          <h1 className='text-7xl font-bold'>{tHomePage('header1')}</h1>
          <h1 className='text-7xl font-bold text-primary'>{tHomePage('header2')}</h1>
          <h1 className='text-7xl font-bold'>{tHomePage('header3')}</h1>
        </div>
        <div className='absolute'>
          <RecipesCloud/>
        </div>
      </div>
    </>
  )
}