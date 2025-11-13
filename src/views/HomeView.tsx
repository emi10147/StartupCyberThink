'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/HeroSection'
import { FluidWebGLBackground } from '@/components/webgl/FluidWebGLBackground'
import { WebGLBackground } from '@/components/webgl/WebGLBackground'

export function HomeView() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* WebGL Backgrounds */}
      <FluidWebGLBackground />
      <WebGLBackground />
      
      {/* Main Content */}
      <main className="relative z-10 w-full">
        <HeroSection />
      </main>
    </div>
  )
}