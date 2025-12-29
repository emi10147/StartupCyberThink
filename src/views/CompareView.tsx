'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { CyberKeyboardBackground } from '@/components/CyberKeyboardBackground'

export function CompareView() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Professional Navigation */}
      <motion.nav
        className="relative z-20 flex items-center justify-between w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 backdrop-blur-sm border-b border-blue-500/20"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(15,23,42,0.95) 50%, rgba(0,0,0,0.95) 100%)'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Back to Security Button */}
        <Link href="/security">
          <div className="flex items-center gap-2 xs:gap-3 cursor-pointer group">
            <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:shadow-blue-400/60 transition-all duration-300 group-hover:scale-110">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-black font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm xs:text-base group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-wide">
              Back to Security
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
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 md:py-3 rounded-lg transition-all duration-300 text-xs xs:text-sm md:text-base font-semibold tracking-wide shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 hover:scale-105 border border-blue-400/30">
            Contact Us
          </button>
        </div>
      </motion.nav>

      {/* Main Content - Fiber Optic Background with Text Overlay */}
      <div className="relative min-h-screen flex items-center justify-center">
        
        {/* Large Background Image - Right Side */}
        <div className="absolute inset-0 left-1/3 sm:left-1/2">
          <div className="relative w-full h-full">
            <Image
              src="/buenas.jpg"
              alt="Fiber Optic Network Technology"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-60 md:opacity-80"
              priority
            />
            
            {/* Gradient overlay for text readability */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(90deg, 
                    rgba(0, 0, 0, 0.95) 0%,
                    rgba(0, 0, 0, 0.8) 20%,
                    rgba(0, 0, 0, 0.6) 60%,
                    rgba(0, 0, 0, 0.3) 100%
                  )
                `
              }}
            />

            {/* Blue glow overlay */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  'radial-gradient(ellipse at 60% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 80%)',
                  'radial-gradient(ellipse at 60% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 80%)',
                  'radial-gradient(ellipse at 60% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 80%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Left Side - Pure Black Background */}
        <div className="absolute inset-0 right-2/3 sm:right-1/2 bg-black" />
        
        {/* Cyber background effects for left side */}
        <div className="absolute inset-0 right-2/3 sm:right-1/2">
          <CyberKeyboardBackground />
        </div>

        {/* Content Container */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-screen">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left lg:pr-8 py-8 sm:py-12 px-4 sm:px-6 lg:px-0">
              <AnimatePresence mode="wait">
                {showContent && (
                  <>
                    {/* Main Headline */}
                    <motion.div
                      initial={{ opacity: 0, x: 0, y: -30 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                    >
                      <h1 
                        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4 lg:mb-6"
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
                          Network Security
                        </span>
                        <br />
                        <span 
                          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent"
                          style={{
                            filter: `drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))`
                          }}
                        >
                          Comparison
                        </span>
                      </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, x: 0, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 1.0, delay: 0.6 }}
                      className="mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                    >
                      <p 
                        className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide"
                        style={{
                          textShadow: `0 0 8px rgba(156, 163, 175, 0.3)`
                        }}
                      >
                        Compare traditional security solutions with{' '}
                        <span 
                          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent font-semibold"
                          style={{
                            filter: `drop-shadow(0 0 6px rgba(34, 211, 238, 0.5))`
                          }}
                        >
                          TotalCiso's advanced fiber-optic speed
                        </span>
                        {' '}network protection and monitoring capabilities.
                      </p>
                    </motion.div>

                    {/* Comparison Cards */}
                    <motion.div
                      initial={{ opacity: 0, x: 0, y: 30 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 1.0, delay: 0.9 }}
                      className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 mb-6 sm:mb-8 lg:mb-10"
                    >
                      {[
                        { title: "Traditional", desc: "Slow response times", color: "red" },
                        { title: "TotalCiso", desc: "Fiber-speed detection", color: "blue" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className={`bg-gradient-to-br ${item.color === 'red' 
                            ? 'from-red-900/30 to-red-800/30 border-red-500/40' 
                            : 'from-blue-900/30 to-cyan-900/30 border-blue-500/40'
                          } backdrop-blur-sm border rounded-lg p-4 hover:border-opacity-60 transition-all duration-300`}
                          style={{
                            boxShadow: `
                              0 0 15px ${item.color === 'red' 
                                ? 'rgba(239, 68, 68, 0.15)' 
                                : 'rgba(59, 130, 246, 0.15)'
                              },
                              inset 0 0 15px ${item.color === 'red' 
                                ? 'rgba(239, 68, 68, 0.08)' 
                                : 'rgba(59, 130, 246, 0.08)'
                              }
                            `
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: `
                              0 0 25px ${item.color === 'red' 
                                ? 'rgba(239, 68, 68, 0.25)' 
                                : 'rgba(59, 130, 246, 0.25)'
                              },
                              inset 0 0 25px ${item.color === 'red' 
                                ? 'rgba(239, 68, 68, 0.15)' 
                                : 'rgba(59, 130, 246, 0.15)'
                              }
                            `
                          }}
                        >
                          <h3 
                            className={`text-sm xs:text-base font-semibold ${item.color === 'red' 
                              ? 'bg-gradient-to-r from-red-400 to-red-300' 
                              : 'bg-gradient-to-r from-blue-400 to-cyan-400'
                            } bg-clip-text text-transparent mb-2`}
                            style={{
                              filter: `drop-shadow(0 0 4px ${item.color === 'red' 
                                ? 'rgba(239, 68, 68, 0.4)' 
                                : 'rgba(59, 130, 246, 0.4)'
                              })`
                            }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs xs:text-sm text-gray-300">{item.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    >
                      <Link href="/platform">
                        <button 
                          className="px-6 xs:px-8 py-3 xs:py-4 rounded-lg text-sm xs:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 tracking-wide border border-blue-400/30"
                          style={{
                            boxShadow: `
                              0 0 20px rgba(59, 130, 246, 0.4),
                              0 0 40px rgba(59, 130, 246, 0.2),
                              inset 0 0 20px rgba(59, 130, 246, 0.1)
                            `,
                            textShadow: `0 0 10px rgba(255, 255, 255, 0.3)`
                          }}
                        >
                          Learn More About TotalCiso →
                        </button>
                      </Link>
                    </motion.div>

                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Right Side - Image area with floating effects */}
            <div className="relative py-12">
              {/* Network particles over the fiber image */}
              <div className="absolute inset-0">
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      filter: 'blur(0.5px)'
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1.5, 0.5],
                      x: [0, Math.random() * 20 - 10, 0],
                      y: [0, Math.random() * 20 - 10, 0]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 4
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}