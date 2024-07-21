import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'

type Props = {}

const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']

export default function Confetti({}: Props) {
  useEffect(() =>{
    const duration = 1 * 1000; // 5 seconds
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        startVelocity: 100,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        startVelocity: 100,
        origin: { x: 1 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [])
  return null
}