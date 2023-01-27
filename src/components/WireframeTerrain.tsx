import * as THREE from 'three'
import React, { useEffect, useMemo } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { MeshWobbleMaterial, Plane, useTexture } from '@react-three/drei'

export default function WireframeTerrain() {
  const { scene } = useThree()
  // const [height, normal] = useTexture(['displacement.png', 'normal.png'])

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0, 0.08)
  }, [scene])

  return (
    <Plane
      position={[0, -13, -16]}
      rotation={[-Math.PI / 2, 0, 0]}
      args={[128, 128, 128, 128]}
    >
      <MeshWobbleMaterial
        factor={0.05}
        speed={0.5}
        // normalMap={normal}
        // displacementMap={height}
        color="gold"
        attach="material"
        wireframe
        metalness={0.3}
        // side={THREE.DoubleSide}
      />
    </Plane>
  )
}
