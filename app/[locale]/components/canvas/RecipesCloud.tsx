'use client'
import { Card, CardBody } from "@nextui-org/react"
import React, { useEffect, useRef, useState } from 'react'
import DomToImage from 'dom-to-image'
import ReactStars from 'react-stars'
import { CloudProps } from "./props"
import { Cloud } from "react-icon-cloud"

type Props = {}

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
]

export default function RecipesCloud({}: Props) {
  const refs = useRef<HTMLDivElement[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const addRef = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el)
    }
  }

  useEffect(() => {
    if (refs.current.length > 0) {
      console.log(refs)
      Promise.all(refs.current.map(ref => DomToImage.toPng(ref)))
        .then(dataUrl => setImageUrls(dataUrl))
        .catch(error => {
          console.error('Error generating image:', error)
        })
    }
  }, [refs])

  return (
    <div className="relative p-20">
      <div className="absolute top-0 left-0">
        {mockRecipes.map((recipe, index) => (
          <Card
            ref={addRef}
            id={`card-${index}`}
            key={index}
            className='border-none shadow-none bg-black w-80 pr-10 bg-opacity-30'
            style={{
              zIndex: '-9999'
            }}
          >
            <CardBody>
              <div className='flex gap-3'>
                <img
                  alt={recipe.alt}
                  src={recipe.src}
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <div className='flex flex-col justify-center'>
                  <h2 className="text-2xl font-bold">{recipe.title}</h2>
                  <p>{recipe.author}</p>
                  <div className='flex items-center gap-2'>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                    />
                    <p>{recipe.star}</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      {imageUrls &&
        <div className="">
          <Cloud {...CloudProps}>
            {imageUrls.map((src, index) => (
              <a key={index} href="">
                <img src={src} alt={mockRecipes[index].alt} />
              </a>
            ))}
          </Cloud>
        </div>
      }
    </div>
  )
}