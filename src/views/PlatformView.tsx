'use client'

import React from 'react'
import { FluidWebGLBackground } from '@/components/webgl/FluidWebGLBackground'
import { WebGLBackground } from '@/components/webgl/WebGLBackground'
import { DesignToolHero } from '@/components/DesignToolHero'
import { SubtleParticleOverlay } from '@/components/SubtleParticleOverlay'

export function PlatformView() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Same WebGL Backgrounds as main page */}
      <FluidWebGLBackground />
      <WebGLBackground />
      
      {/* Subtle Particle Overlay */}
      <SubtleParticleOverlay />
      
      {/* Hero Content */}
      <DesignToolHero />
    </div>
  )
}