import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Cube() {
  const mesh = useRef<THREE.Mesh>(null)
  const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(1, 1, 0))
  const quat2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0))
  const euler = new THREE.Euler(0, 0, 0)
  useFrame(() => {
    // euler.set(state.top / 1000, state.top / 1000, 0)
    quat.slerp(quat2.setFromEuler(euler), 0.1)
    mesh.current?.rotation.setFromQuaternion(quat)
  })
  return (
    <mesh
      ref={mesh as any}
      position={[0, 0, -1.5]}
      onClick={() => console.log('clicked')}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#272730" />
    </mesh>
  )
}
