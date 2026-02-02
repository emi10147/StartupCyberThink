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
    <div className="relative w-full min-h-screen overflow-hidden bg-[#01030a] text-white">
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
          {/* Static layered gradients for stability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#041029] via-[#060b1a] to-[#0c0f1f]" />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-purple-900/14 mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.1),transparent_32%),radial-gradient(circle_at_50%_75%,rgba(6,182,212,0.1),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08), transparent 45%)', mixBlendMode: 'screen' }} />

          {/* Particles removed for stability */}

          <main className="relative z-30 w-full opacity-100">
            <HeroSection />
          </main>
        </>
      )}
    </div>
  )
}