'use client'

import React, { useEffect, useState } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { TypingProblemSection } from '@/components/sections/TypingProblemSection'
// Static background to keep first page stable

export function HomeView() {
  const [showIntro, setShowIntro] = useState(true)
  const [showProblem, setShowProblem] = useState(false)
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false)
      setShowProblem(true)
    }, 5000)
    return () => clearTimeout(introTimer)
  }, [])

  const handleProblemComplete = () => {
    setShowProblem(false)
    setShowHero(true)
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {showIntro && (
        <div className="preloader-stage">
          <div className="intro-typing preloader-text font-mono">TotalCISO</div>
          <div className="velocimeter" aria-label="Risk quantification loading indicator">
            <div className="label">The future of risk quantification</div>
            <div className="gauge-shell">
              <div className="gauge-arc" />
              <div className="gauge-arc glow" />
              <div className="gauge-needle" />
              <div className="gauge-center">
                <div className="gauge-score">99.7</div>
              </div>
            </div>
            <div className="gauge-foot-label">CONFIDENCE</div>
          </div>
        </div>
      )}

      {showProblem && (
        <TypingProblemSection onComplete={handleProblemComplete} />
      )}

      {showHero && (
        <>
          {/* Pure black background matching transformation page */}
          <div className="absolute inset-0 bg-black" />
          {/* Subtle cyan/blue glow overlay matching transformation page */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[460px] w-[460px] sm:h-[560px] sm:w-[560px] rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-transparent blur-3xl" />
          </div>
          <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-indigo-500/12 blur-3xl" />
          {/* Faint grid overlay */}
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)', backgroundSize: '52px 52px', mixBlendMode: 'screen' }} />

          <main className="relative z-30 w-full opacity-100">
            <HeroSection />
          </main>
        </>
      )}
    </div>
  )
}