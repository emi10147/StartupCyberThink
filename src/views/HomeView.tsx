'use client'

import React from 'react'
import { HeroSection } from '@/components/sections/HeroSection'

export function HomeView() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Main Content */}
      <main className="relative z-10 w-full">
        <HeroSection />
      </main>
    </div>
  )
}