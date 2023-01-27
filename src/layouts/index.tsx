import { Canvas } from '@react-three/fiber'
import {
  Html,
  Scroll,
  ScrollControls,
  Stats,
  Loader,
  useDetectGPU,
  Stars,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import React, { Suspense, ReactNode } from 'react'
import WireframeTerrain from '../components/WireframeTerrain'

export default function Layout({ children }: { children?: ReactNode }) {
  const GPUTier = useDetectGPU()
  console.log(GPUTier)
  return (
    <>
      {process.env.NODE_ENV === 'development' && <Stats />}
      <main>
        <Canvas
          gl={{ alpha: false }}
          camera={{ position: [0, 0, 2], zoom: 1 }}
          // orthographic
          // pixelRatio={window.devicePixelRatio}
        >
          <pointLight position={[0, 1, 4]} intensity={0.1} />
          <ambientLight intensity={0.3} />
          <spotLight
            position={[1, 1, 1]}
            penumbra={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Suspense
            fallback={
              <Html center>
                <Loader />
              </Html>
            }
          >
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={1}
              fade
              speed={1}
            />
            <ScrollControls pages={4}>
              <Scroll>
                <WireframeTerrain />
                {children}
              </Scroll>
            </ScrollControls>
          </Suspense>
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.3}
              luminanceSmoothing={0.9}
              height={1024}
            />
          </EffectComposer>
        </Canvas>
        <footer className="absolute bottom-0 right-0 opacity-40">
          <span className="tex-sm text-[#F9F9F9]">
            &copy; Copyright Lumen Limitless. All rights reserved.
          </span>
        </footer>
      </main>
    </>
  )
}
