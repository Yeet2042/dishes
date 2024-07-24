import { Avatar, Button, Card } from '@nextui-org/react'
import {useTranslations} from 'next-intl'
import React from 'react'

type Props = {}

const mockAuthor = [
  {
    uname: "Yeet2042",
    src: "/images/cat_meme.jpg"
  },
  {
    uname: "Yeet2042",
    src: "/images/cat_meme.jpg"
  },
  {
    uname: "Yeet2042",
    src: "/images/cat_meme.jpg"
  },
  {
    uname: "Yeet2042",
    src: "/images/cat_meme.jpg"
  },
  {
    uname: "Yeet2042",
    src: "/images/cat_meme.jpg"
  },
  {
    uname: "Yeet2042",
    src: "/images/cat_meme.jpg"
  },
]

export default function BestAuthorSection({}: Props) {
  return (
    <section
      id='bestAuthor'
      className='conatiner relative z-10 max-w-7xl mx-auto'
    >
      <div className='m-16'>
        <div>
          <h1 className='text-3xl font-bold drop-shadow-xl'>Top Auther 🔥</h1>
          <div className='flex my-10 justify-between gap-6'>
            {mockAuthor.map((author, index) => (
              <Card
                key={index}
                isPressable
                className='bg-opacity-5'
              >
                <div className='flex flex-col m-4 items-center gap-4'>
                  <Avatar
                    src={author.src}
                    className='h-28 w-28 shadow-xl'
                  />
                  <h2>{author.uname}</h2>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}