'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { BlackGalaxyBackground } from '../BlackGalaxyBackground'

export function HeroSection() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated galaxy backdrops */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: -2 }}>
        <BlackGalaxyBackground />
      </div>

      {/* Layered aurora gradients for richer depth */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: -2.5 as unknown as number }}>
        <div className="aurora-band" />
        <div className="aurora-band two" />
        <div className="nebula-veil" />
      </div>

      {/* Right-half world image blended into the background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-[55%] relative">
          <Image
            src="/world.jpg"
            alt="Global cybersecurity network visualization"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center brightness-[1.8] contrast-[1.35] saturate-[1.2] opacity-100"
          />
        </div>
        <div className="absolute right-6 bottom-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Light veil for text legibility without hiding the animation */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />

      {/* Faint grid and center glow to accent depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)',
          backgroundSize: '52px 52px',
          mixBlendMode: 'screen'
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[460px] w-[460px] sm:h-[560px] sm:w-[560px] rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-transparent blur-3xl" />
      </div>
      <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-indigo-500/12 blur-3xl" />

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Subtle background effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-blue-300 rounded-full opacity-30"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                filter: 'blur(0.5px)'
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 8
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col items-center lg:items-start justify-center min-h-screen">
            <div className="w-full max-w-5xl text-center lg:text-left py-8 sm:py-12 px-4 sm:px-6 lg:px-0">
              <AnimatePresence mode="wait">
                {showContent && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.4 }}
                      className="max-w-4xl md:max-w-5xl rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm px-4 sm:px-6 md:px-10 py-8 sm:py-10 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                    >
                      <div className="space-y-6 sm:space-y-8">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1.2, delay: 0.6 }}
                        >
                          <h1
                            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight"
                            style={{
                              textShadow: `
                                0 0 14px rgba(30, 70, 160, 0.55),
                                0 0 28px rgba(36, 82, 190, 0.38),
                                0 0 62px rgba(24, 58, 150, 0.32)
                              `
                            }}
                          >
                            <span
                              className="bg-gradient-to-r from-[#3f6ad6] via-[#2f55c7] to-[#1e7ccf] bg-clip-text text-transparent"
                              style={{
                                filter: `drop-shadow(0 0 12px rgba(48, 104, 210, 0.65))`
                              }}
                            >
                              Security Leadership Built on Precision
                            </span>
                          </h1>
                        </motion.div>

                        <motion.p
                          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide max-w-2xl lg:max-w-3xl"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.0, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          style={{ textShadow: `0 0 8px rgba(156, 163, 175, 0.3)` }}
                        >
                          Total CISO provides CISO as a Service supported by a mathematically driven risk analysis framework to help organizations reduce cyber risk, prevent costly incidents, and simplify compliance.
                        </motion.p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto"
                    >
                      {["Secure leadership", "Structured analysis", "Trust at scale"].map((label, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-cyan-500/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-sm text-gray-200 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                        >
                          {label}
                        </div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.85, delay: 1.55 }}
                      className="mt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
                    >
                      <button
                        onClick={() => router.push('/platform')}
                        className="px-4 py-2 rounded-md text-xs sm:text-sm font-semibold text-cyan-100 bg-white/5 border border-cyan-400/30 hover:bg-white/10 hover:border-cyan-300/60 transition-all duration-200"
                      >
                        See the Solution
                      </button>
                      <button
                        onClick={() => router.push('/security')}
                        className="px-4 py-2 rounded-md text-xs sm:text-sm font-semibold text-cyan-100 bg-white/5 border border-cyan-400/30 hover:bg-white/10 hover:border-cyan-300/60 transition-all duration-200"
                      >
                        How It Works
                      </button>
                      <button
                        onClick={() => router.push('/compare')}
                        className="px-4 py-2 rounded-md text-xs sm:text-sm font-semibold text-cyan-100 bg-white/5 border border-cyan-400/30 hover:bg-white/10 hover:border-cyan-300/60 transition-all duration-200"
                      >
                        Scale & About
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 1.9 }}
                      className="mt-10 max-w-5xl mx-auto text-left rounded-2xl border border-blue-500/25 bg-white/5 backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_40px_rgba(59,130,246,0.22)]"
                      style={{ boxShadow: '0 0 40px rgba(59,130,246,0.22), inset 0 0 18px rgba(59,130,246,0.1)' }}
                    >
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">The Cost of Subjective Security Decisions</h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-4">
                        Organizations today rely on fragmented tools, incomplete data, and subjective criteria to assess cybersecurity risk. This often leads to misclassified incidents, delayed responses, and ineffective controls. The consequences can be severe, including operational disruption, regulatory exposure, reputational damage, and financial losses that reach millions of dollars.
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-2">
                        At the same time, regulatory compliance has become increasingly complex and expensive. Repeated audits and evolving standards place a heavy burden on organizations that lack dedicated security leadership. For many small and mid sized companies, hiring a full time CISO is simply not feasible.
                      </p>
                    </motion.div>

                    <div className="text-center text-gray-400 text-xs sm:text-sm mt-10">
                      <p>© 2026 Total CISO · Security leadership built on objectivity, structure, and trust.</p>
                    </div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}