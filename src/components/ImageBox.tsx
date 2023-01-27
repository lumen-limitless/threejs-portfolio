import React, { useMemo } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/flex'
import { useLoader } from '@react-three/fiber'
import { Image, useTexture } from '@react-three/drei'

interface Props {
  imageUrl: string
  key?: number
  args?: [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ]
}

export default function ImageBox({ imageUrl, key, args = [0.3, 0.3] }: Props) {
  const texture = useTexture(imageUrl)

  return (
    <Box margin={0.05} scale={[1, 1, 1]} key={key}>
      <mesh position={[0.3 / 2, -0.3 / 2, 0]}>
        <planeBufferGeometry args={args} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Box>
  )
}
