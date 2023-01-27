import React, { useMemo } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/flex'
import { useLoader } from '@react-three/fiber'
import { Html, useTexture } from '@react-three/drei'
import Image, { StaticImageData } from 'next/image'

interface Props {
  src: StaticImageData
  key?: number
  args?: [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ]
}

export default function ImageComponent({ src, key, args = [0.3, 0.3] }: Props) {
  return
}
