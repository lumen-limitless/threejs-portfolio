import * as THREE from 'three'
import type { NextPage } from 'next'
import { useFrame, useThree } from '@react-three/fiber'
import { Html, useAspect } from '@react-three/drei'
import { Box, Flex } from '@react-three/flex'
import { Text } from '../components/Text'
import React, { useRef } from 'react'

import Landing from '../components/Landing'
import ImageBox from '../components/ImageBox'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

const PORTFOLIO = [
  {
    url: 'ascension.jpg',
    title: 'Ascension Protocol',
    desc: 'Decentralized Autonomous Organization',
  },
  { url: 'metamodels.jpg', title: 'MetaModels', desc: 'NFT Modeling Agency' },
]

const Home: NextPage = () => {
  const group = useRef<THREE.Group>(null)
  const { size } = useThree()
  const [vpWidth, vpHeight] = useAspect(size.width, size.height)

  return (
    <group ref={group}>
      <Flex
        flexDirection="column"
        size={[vpWidth, vpHeight, 0]}
        position={[-vpWidth / 2, vpHeight / 2, 0]}
      >
        <Landing />
        <Experience />

        <group position-z={0.4}>
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginTop={0.8}
            marginBottom={0.5}
          >
            <Box margin={0.1}>
              <Text fontSize={0.4} maxWidth={vpWidth * 0.8} textAlign="center">
                PORTFOLIO
                <meshStandardMaterial />
              </Text>
            </Box>
          </Box>
        </group>

        <Box
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          {PORTFOLIO.map((item, i) => (
            <Box
              flexDirection="row"
              key={i}
              alignItems="center"
              justifyContent="center"
              width="100vw"
            >
              <ImageBox imageUrl={item.url} args={[1.77, 1]} />
              <Box flexDirection="column">
                <Box>
                  <Text
                    fontSize={0.18}
                    letterSpacing={0.1}
                    anchorX="left"
                    anchorY="top"
                  >
                    {item.title}
                    <meshStandardMaterial />
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={0.1}>
                    {item.desc}
                    <meshStandardMaterial />
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Contact />
      </Flex>
    </group>
  )
}

export default Home
