'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function FullBackgroundView() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Split layout background: image left half, clean text space right */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto lg:min-h-screen">
          <Image
            src="/tardes.jpg"
            alt="Cybersecurity Overview"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-90"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.1) 100%)
              `
            }}
          />
        </div>
        <div className="hidden lg:block bg-black/85" />
      </div>

      {/* Professional Navigation */}
      <motion.nav
        className="relative z-20 flex items-center justify-between w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 backdrop-blur-sm border-b border-blue-500/20"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(15,23,42,0.85) 50%, rgba(0,0,0,0.85) 100%)'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Back to Compare Button */}
        <Link href="/compare">
          <div className="flex items-center gap-2 xs:gap-3 cursor-pointer group">
            <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:shadow-blue-400/60 transition-all duration-300 group-hover:scale-110">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-black font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm xs:text-base group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-wide">
              Back to Compare
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          <Link href="/">
            <button className="text-gray-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 text-xs xs:text-sm md:text-base font-medium tracking-wide hidden sm:block hover:scale-105">
              Home
            </button>
          </Link>
          <Link href="/platform">
            <button className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300 text-xs xs:text-sm md:text-base font-medium tracking-wide hidden sm:block hover:scale-105">
              Platform
            </button>
          </Link>
        </div>
      </motion.nav>

      {/* Main Content shifted to text side */}
      <div className="relative z-10 flex items-center justify-center lg:justify-end min-h-screen">
        <div className="w-full max-w-6xl lg:max-w-3xl mx-auto lg:mr-16 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 text-center lg:text-left">
          
          <AnimatePresence mode="wait">
            {showContent && (
              <>
                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="mb-6 sm:mb-8 md:mb-12"
                >
                  <h1 
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white tracking-tight leading-tight"
                    style={{
                      textShadow: `
                        0 0 15px rgba(59, 130, 246, 0.6),
                        0 0 30px rgba(59, 130, 246, 0.4),
                        0 0 60px rgba(59, 130, 246, 0.3)
                      `
                    }}
                  >
                    <span 
                      className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                      style={{
                        filter: `drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))`
                      }}
                    >
                      The Cost of Subjective
                    </span>
                    <br />
                    <span 
                      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent"
                      style={{
                        filter: `drop-shadow(0 0 12px rgba(34, 211, 238, 0.8))`
                      }}
                    >
                      Security Decisions
                    </span>
                  </h1>
                </motion.div>

                {/* Description with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.6 }}
                  className="mb-8 sm:mb-12 md:mb-16"
                >
                  <p 
                    className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light tracking-wide max-w-5xl mx-auto lg:mx-0"
                    style={{
                      textShadow: `
                        0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 20px rgba(59, 130, 246, 0.2)
                      `
                    }}
                  >
                    Organizations today rely on fragmented tools, incomplete data, and subjective criteria to assess cybersecurity risk. This often leads to misclassified incidents, delayed responses, and ineffective controls. The consequences can be severe, including operational disruption, regulatory exposure, reputational damage, and financial losses that reach millions of dollars.
                    <br /><br />
                    At the same time, regulatory compliance has become increasingly complex and expensive. Repeated audits and evolving standards place a heavy burden on organizations that lack dedicated security leadership. For many small and mid sized companies, hiring a full time CISO is simply not feasible.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center lg:justify-start"
                >
                  <Link href="/platform">
                    <button 
                      className="px-8 xs:px-10 py-4 xs:py-5 rounded-xl text-base xs:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 tracking-wide border border-blue-400/30"
                      style={{
                        boxShadow: `
                          0 0 30px rgba(59, 130, 246, 0.4),
                          0 0 60px rgba(59, 130, 246, 0.2),
                          inset 0 0 30px rgba(59, 130, 246, 0.1)
                        `,
                        textShadow: `0 0 10px rgba(255, 255, 255, 0.3)`
                      }}
                    >
                      Explore Platform
                    </button>
                  </Link>
                  
                  <Link href="/security">
                    <button 
                      className="px-8 xs:px-10 py-4 xs:py-5 rounded-xl text-base xs:text-lg font-bold text-white bg-transparent hover:bg-blue-600/30 transition-all duration-300 hover:scale-105 tracking-wide border-2 border-blue-400/60 hover:border-cyan-400"
                      style={{
                        boxShadow: `
                          0 0 25px rgba(59, 130, 246, 0.3),
                          inset 0 0 25px rgba(59, 130, 246, 0.1)
                        `,
                        textShadow: `0 0 10px rgba(255, 255, 255, 0.3)`
                      }}
                    >
                      Security Details
                    </button>
                  </Link>
                </motion.div>

              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          />
        ))}
      </div>
    </div>
  )
}