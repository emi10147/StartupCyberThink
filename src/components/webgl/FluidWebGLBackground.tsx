'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FluidBackground() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mousePos = useRef(new THREE.Vector2(0, 0))

  // Create fluid gradient shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(1920, 1080) },
        u_mouse: { value: new THREE.Vector2() },
        u_color1: { value: new THREE.Color(0x001F3F) }, // Deep Blue
        u_color2: { value: new THREE.Color(0x0047AB) }, // Medium Blue
        u_color3: { value: new THREE.Color(0x007FFF) }, // Bright Blue
        u_color4: { value: new THREE.Color(0x00BFFF) }, // Sky Blue
        u_color5: { value: new THREE.Color(0x00FFFF) }, // Cyan
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform vec3 u_color3;
        uniform vec3 u_color4;
        uniform vec3 u_color5;
        varying vec2 vUv;

        // Noise function for organic movement
        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        // Smooth noise
        float smoothNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float a = noise(i);
          float b = noise(i + vec2(1.0, 0.0));
          float c = noise(i + vec2(0.0, 1.0));
          float d = noise(i + vec2(1.0, 1.0));
          
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        // Fractal noise
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          
          for(int i = 0; i < 6; i++) {
            value += amplitude * smoothNoise(p * frequency);
            amplitude *= 0.5;
            frequency *= 2.0;
          }
          return value;
        }

        // Distance function for organic shapes (gentler movement)
        float sdOrganicShape(vec2 p, float time) {
          float d1 = length(p - vec2(sin(time * 0.3) * 0.15, cos(time * 0.2) * 0.2)) - 0.7;
          float d2 = length(p - vec2(cos(time * 0.25) * 0.2, sin(time * 0.35) * 0.15)) - 0.6;
          float d3 = length(p - vec2(sin(time * 0.4) * 0.1, cos(time * 0.45) * 0.25)) - 0.5;
          
          return min(min(d1, d2), d3);
        }

        void main() {
          vec2 uv = (vUv - 0.5) * 2.0;
          uv.x *= u_resolution.x / u_resolution.y;
          
          float time = u_time * 0.3;
          
        // Create flowing organic shapes (more subtle)
        vec2 p1 = uv + vec2(sin(time * 0.15) * 0.08, cos(time * 0.2) * 0.12);
        vec2 p2 = uv + vec2(cos(time * 0.25) * 0.1, sin(time * 0.1) * 0.08);
        vec2 p3 = uv + vec2(sin(time * 0.35) * 0.12, cos(time * 0.3) * 0.06);          // Generate noise patterns (slower)
          float noise1 = fbm(p1 * 1.8 + time * 0.05);
          float noise2 = fbm(p2 * 1.3 + time * 0.07);
          float noise3 = fbm(p3 * 2.0 + time * 0.04);
          
        // Create organic distance fields (slower movement)
        float shape1 = sdOrganicShape(p1, time * 0.6);
        float shape2 = sdOrganicShape(p2 + vec2(0.5, -0.3), time * 0.4);
        float shape3 = sdOrganicShape(p3 - vec2(-0.4, 0.6), time * 0.7);          // Create glow effects
          float glow1 = exp(-abs(shape1) * 3.0) * noise1;
          float glow2 = exp(-abs(shape2) * 4.0) * noise2;
          float glow3 = exp(-abs(shape3) * 2.5) * noise3;
          
          // Mix colors based on position and noise
          vec3 color = vec3(0.0);
          
          // Deep blue base with gentle flowing movement
          color += u_color1 * glow1 * (0.6 + 0.4 * sin(time * 0.5 + uv.x * 1.0));
          
          // Medium blue flows
          color += u_color2 * glow2 * (0.5 + 0.5 * cos(time * 0.4 + uv.y * 1.5));
          
          // Bright blue accents
          color += u_color3 * glow3 * (0.4 + 0.6 * sin(time * 0.6 + length(uv) * 1.0));
          
          // Sky blue edges
          float edge = smoothstep(0.8, 1.2, length(uv));
          color += u_color4 * edge * 0.2;
          
          // Cyan highlights (subtle)
          float highlight = smoothstep(0.3, 0.0, abs(sin(time * 0.5 + uv.x * 2.0) * cos(time * 0.4 + uv.y * 1.5)));
          color += u_color5 * highlight * 0.3;
          
          // Add overall atmospheric glow
          float atmosphericGlow = 1.0 - length(uv) * 0.3;
          color *= atmosphericGlow;
          
          // Subtle brightness and contrast
          color = color * 1.2;
          color = pow(color, vec3(0.9)); // Gentle gamma correction
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    })
  }, [])

  // Handle mouse movement for interactive effects
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window !== 'undefined') {
        mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1
        mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Update uniforms on every frame
  useFrame((state) => {
    if (material && material.uniforms) {
      material.uniforms.u_time.value = state.clock.elapsedTime
      material.uniforms.u_mouse.value.copy(mousePos.current)
      material.uniforms.u_resolution.value.set(
        typeof window !== 'undefined' ? window.innerWidth : 1920,
        typeof window !== 'undefined' ? window.innerHeight : 1080
      )
    }
  })

  return (
    <mesh ref={meshRef} scale={[6, 6, 1]} material={material}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  )
}

export function FluidWebGLBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-20" style={{ minHeight: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1}
        style={{ width: '100%', height: '100%' }}
      >
        <FluidBackground />
      </Canvas>
    </div>
  )
}