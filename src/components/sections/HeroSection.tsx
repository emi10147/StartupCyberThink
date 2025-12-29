'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function HeroSection() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Main Content - Pure Black Background */}
      <div className="relative min-h-screen flex items-center justify-center">
        
        {/* Subtle background effects */}
        <div className="absolute inset-0">
          {/* Floating particles */}
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
          <div className="flex flex-col items-center justify-center min-h-screen">
            
            {/* Centered Content */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6 lg:px-0">
              <AnimatePresence mode="wait">
                {showContent && (
                  <>
                    {/* Main Title - Responsive for all devices */}
                    <motion.div 
                      className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                    >
                      <h1 
                        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white tracking-tight leading-tight"
                        style={{
                          textShadow: `
                            0 0 10px rgba(59, 130, 246, 0.5),
                            0 0 20px rgba(59, 130, 246, 0.3),
                            0 0 40px rgba(59, 130, 246, 0.2)
                          `
                        }}
                      >
                        <span 
                          className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                          style={{
                            filter: `drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))`
                          }}
                        >
                          The Problem
                        </span>
                      </h1>
                    </motion.div>

                    {/* Content Inside Glowing Rectangle Area - Mobile Optimized */}
                    <motion.div
                      className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg relative mx-2 sm:mx-0"
                      style={{
                        background: 'transparent',
                        border: '2px solid rgba(59, 130, 246, 0.9)',
                        boxShadow: `
                          0 0 15px rgba(59, 130, 246, 1),
                          0 0 30px rgba(59, 130, 246, 0.8),
                          0 0 60px rgba(59, 130, 246, 0.6),
                          inset 0 0 30px rgba(59, 130, 246, 0.3)
                        `,
                        filter: 'blur(0.1px)'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        boxShadow: [
                          '0 0 15px rgba(59, 130, 246, 1), 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(59, 130, 246, 0.3)',
                          '0 0 20px rgba(59, 130, 246, 1), 0 0 40px rgba(59, 130, 246, 0.9), 0 0 80px rgba(59, 130, 246, 0.7), inset 0 0 40px rgba(59, 130, 246, 0.4)',
                          '0 0 15px rgba(59, 130, 246, 1), 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(59, 130, 246, 0.3)'
                        ]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.3,
                        boxShadow: { 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      {/* Problem Description - Mobile Optimized */}
                      <motion.p
                        className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                          textShadow: `0 0 8px rgba(156, 163, 175, 0.3)`
                        }}
                      >
                        Traditional cybersecurity solutions are failing businesses.{' '}
                        <span 
                          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent font-semibold"
                          style={{
                            filter: `drop-shadow(0 0 6px rgba(34, 211, 238, 0.5))`
                          }}
                        >
                          68% of companies
                        </span>
                        {' '}experience data breaches annually, costing an average of{' '}
                        <span 
                          className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent font-semibold"
                          style={{
                            filter: `drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))`
                          }}
                        >
                          $4.88 million per incident
                        </span>
                        . Current tools are reactive, fragmented, and require extensive expertise to manage effectively.
                      </motion.p>
                    </motion.div>

                    {/* Get Started Button - OUTSIDE and BELOW the rectangle */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                      className="flex justify-center"
                    >
                      <button
                        onClick={() => router.push('/platform')}
                        className="px-6 xs:px-8 py-3 xs:py-4 rounded-lg text-sm xs:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 tracking-wide border border-blue-400/30"
                        style={{
                          boxShadow: `
                            0 0 20px rgba(59, 130, 246, 0.4),
                            0 0 40px rgba(59, 130, 246, 0.2),
                            inset 0 0 20px rgba(59, 130, 246, 0.1)
                          `,
                          textShadow: `0 0 10px rgba(255, 255, 255, 0.3)`
                        }}
                      >
                        Get Started →
                      </button>
                    </motion.div>

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