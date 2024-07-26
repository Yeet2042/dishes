'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function ThemeSelector({}: Props) {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  if (!currentTheme) {
    return null
  }

  return (
    <Button
      isIconOnly
      variant='light'
      onPress={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}
    >
      {currentTheme == 'dark' ? <MoonIcon className='h-5 w-5'/> : <SunIcon className='h-5 w-5'/>}
    </Button>
  )
}