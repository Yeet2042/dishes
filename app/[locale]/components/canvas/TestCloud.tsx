'use client'
import React, { useEffect, useState } from 'react'
import { Cloud } from 'react-icon-cloud'
import { CloudProps } from './props'
import { Image } from '@nextui-org/react'

type Props = {}

export default function TestCloud({}: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Cloud {...CloudProps}>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
        <a href="">
          <Image
            alt='hello'
            height={100}
            width={100}
            src='/images/sushi.jpg'
          />
        </a>
      </Cloud>
    </>
  )
}