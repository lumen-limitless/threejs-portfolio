import React from 'react'
import { Html } from '@react-three/drei'
import { Box } from '@react-three/flex'
import { Text } from '../components/Text'
import Image from 'next/image'

import javascript from '../../public/javascript.webp'
import typescript from '../../public/typescript.webp'
import python from '../../public/python.webp'
import solidity from '../../public/solidity.webp'
import tailwind from '../../public/tailwind.webp'
import react from '../../public/react.webp'
import three from '../../public/three.webp'
import next from '../../public/next.webp'
import ethers from '../../public/ethers.webp'
import commerce from '../../public/commerce.webp'
import framer from '../../public/framer.webp'
import mocha from '../../public/mocha.webp'
import jest from '../../public/jest.webp'
import storybook from '../../public/storybook.webp'
import hardhat from '../../public/hardhat.webp'
const TECHNOLOGIES = [
  javascript,
  typescript,
  python,
  solidity,
  tailwind,
  react,
  three,
  next,
  ethers,
  commerce,
  framer,
  mocha,
  jest,
  storybook,
  hardhat,
]

interface Props {}

export default function Experience({}: Props) {
  return (
    <>
      <group position-z={-0.3}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          width="100%"
          marginTop={0.3}
          marginBottom={0.3}
        >
          <Box marginLeft={0}>
            <Text fontSize={0.5} maxWidth={1}>
              EXPERIENCE
              <meshStandardMaterial />
            </Text>
          </Box>
        </Box>
      </group>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        width="100%"
      >
        <Box margin={0.05}>
          <mesh position={[2.2 / 2, -1, 0]}>
            <planeBufferGeometry args={[2.2, 2]} />
            <meshStandardMaterial
              color={['#2d4059', '#decdc3', '#e5e5e5'][0 % 4]}
            />
          </mesh>
          <Box flexDirection="column" padding={0.1}>
            <Box marginBottom={0.1} width="100%">
              <Text fontSize={0.2} letterSpacing={0.1} textAlign="center">
                Technologies
                <meshStandardMaterial />
              </Text>
            </Box>
            <Box
              flexDirection="row"
              flexWrap="wrap"
              justifyContent={'center'}
              alignItems="center"
              width={2}
              flexGrow={1}
            >
              <Html>
                <div className="flex h-full w-[512px] flex-wrap items-center justify-center gap-8">
                  {TECHNOLOGIES.map((src, i) => (
                    <Image
                      src={src}
                      alt=""
                      height={64}
                      width={64}
                      // priority
                      key={i}
                    />
                  ))}
                </div>
              </Html>
            </Box>
          </Box>
        </Box>
        <Box margin={0.05}>
          <mesh position={[2.2 / 2, -1, 0]}>
            <planeBufferGeometry args={[2.2, 2]} />
            <meshStandardMaterial
              color={['#777777', '#decdc3', '#e5e5e5'][0 % 4]}
            />
          </mesh>
          <Box flexDirection="column" padding={0.1}>
            <Box marginBottom={0.1} width="100%">
              <Text fontSize={0.2} letterSpacing={0.1} textAlign="center">
                Examples
                <meshStandardMaterial />
              </Text>
            </Box>
            <Box
              flexDirection="row"
              flexWrap="wrap"
              justifyContent={'center'}
              alignItems="center"
              width={2}
              flexGrow={1}
            >
              <Text>Coming Soon</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
