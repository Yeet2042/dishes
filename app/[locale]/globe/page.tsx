'use client'
import { Cloud, ICloud } from 'react-icon-cloud'
import React, { useState, useEffect } from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"

type Props = {}

export default function Page({}: Props) {
  const [isLoaded, setIsLoaded] = useState(false)

  const cloudProps: Omit<ICloud, 'children'> = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40
      }
    },
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: true,
      tooltip: "native",
      tooltipDelay: 0,
      wheelZoom: false
    }
  }

  useEffect(() => {
    // Simulate a delay or async operation
    const loadCloud = async () => {
      // Simulate async load
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoaded(true);
    }
    loadCloud();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>; // Or some other loading indicator
  }

  return (
    <>
      <Cloud {...cloudProps}>
        <a href="">
          asdknaiosdasdjopasdo
          <Image
            height="100"
            width="100"
            alt="Visual Studio Code"
            src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          />
        </a>
        <a href="">
          asdknaiosdasdjopasdo
          <Image
            height="42"
            width="42"
            alt="Visual Studio Code"
            src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          />
        </a>
        <a href="">
          asdknaiosdasdjopasdo
          <Image
            height="42"
            width="42"
            alt="Visual Studio Code"
            src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          />
        </a>
        <a href="">
          asdknaiosdasdjopasdo
          <Image
            height="42"
            width="42"
            alt="Visual Studio Code"
            src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          />
        </a>
        <a href="">
          asdknaiosdasdjopasdo
          <Image
            height="42"
            width="42"
            alt="Visual Studio Code"
            src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          />
        </a>
        <a href="">
          asdknaiosdasdjopasdo
          <Image
            height="42"
            width="42"
            alt="Visual Studio Code"
            src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
          />
        </a>
      </Cloud>
    </>
  )
}