'use client'

import React from 'react'
import { DesignToolHero } from '@/components/DesignToolHero'

export function PlatformView() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Hero Content */}
      <DesignToolHero />
    </div>
  )
}