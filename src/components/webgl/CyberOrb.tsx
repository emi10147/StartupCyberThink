'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    color1: { value: new THREE.Color('#9333ea') },
    color2: { value: new THREE.Color('#c026d3') },
    color3: { value: new THREE.Color('#ec4899') },
  }), [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y += 0.01
      uniforms.time.value = state.clock.elapsedTime
    }
  })
  
  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color="#007FFF"
        emissive="#001F3F"
        emissiveIntensity={0.5}
        shininess={100}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export function CyberOrb() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#007FFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00BFFF" />
        <pointLight position={[0, 15, 5]} intensity={0.6} color="#00FFFF" />
        <AnimatedOrb />
      </Canvas>
    </div>
  )
}