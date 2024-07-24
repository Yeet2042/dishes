'use client'
import { Button, Card, Image } from '@nextui-org/react'
import {useTranslations} from 'next-intl'
import React, { useState } from 'react'

type Props = {}

const buttons = [
  {
    title: "All",
    value: "all"
  },
  {
    title: "Healhty",
    value: "healhty"
  },
  {
    title: "Junk",
    value: "junk"
  },
  {
    title: "Vegan",
    value: "vegan"
  },
  {
    title: "Thai",
    value: "thai"
  },
  {
    title: "Janpanese",
    value: "japanese"
  },
  {
    title: "Korean",
    value: "korean"
  },
  {
    title: "Chinese",
    value: "chinese"
  },
  {
    title: "American",
    value: "american"
  },
  {
    title: "Italian",
    value: "italian"
  },
]

const mockRecipes = [
  {
    title: "Burger",
    src: "/images/burger.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.8,
  },
  {
    title: "Sushi",
    src: "/images/sushi.jpg",
    alt: "sushi",
    author: "by Yeet2042",
    star: 4.1,
  },
  {
    title: "Burger",
    src: "/images/pizza.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.9,
  },
  {
    title: "Tom Yam",
    src: "/images/tomyam.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.9,
  },
  {
    title: "Som Tam",
    src: "/images/somtam.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.9,
  },
  {
    title: "Som Tam",
    src: "/images/somtam.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.9,
  },
  {
    title: "Som Tam",
    src: "/images/somtam.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.9,
  },
  {
    title: "Som Tam",
    src: "/images/somtam.jpg",
    alt: "burger",
    author: "by Yeet2042",
    star: 4.9,
  },
]

export default function BestRecipesSection({}: Props) {
  const [select, setSelect] = useState('all')
  return (
    <section
      id='bestRecipes'
      className='conatiner relative z-10 max-w-7xl mx-auto'
    >
      <div className='m-16'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-3xl font-bold'>Best Recipes🔥</h1>
          <div className='flex gap-2'>
            {buttons.map((button, index) => (
              <Button
                key={index}
                color={select == button.value ? 'primary' : 'default'}
                value={button.value}
                onPress={() => setSelect(button.value)}
                variant={select == button.value ? 'flat' : 'light'}
              >
                {button.title}
              </Button>
            ))}
          </div>
          <div className='flex'>
            {mockRecipes.map((recipe, index) => (
              <Card
                key={index}
              >
                <div>
                  <Image
                    width={200}
                    src=""
                    alt={recipe.alt}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}