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
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/tardes.jpg"
          alt="Cybersecurity Overview"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-90"
          priority
        />
        
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.5) 50%,
                rgba(0, 0, 0, 0.7) 100%
              )
            `
          }}
        />
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
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 md:py-3 rounded-lg transition-all duration-300 text-xs xs:text-sm md:text-base font-semibold tracking-wide shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 hover:scale-105 border border-blue-400/30">
            Get Demo
          </button>
        </div>
      </motion.nav>

      {/* Main Content Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 text-center">
          
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
                      Cybersecurity
                    </span>
                    <br />
                    <span 
                      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent"
                      style={{
                        filter: `drop-shadow(0 0 12px rgba(34, 211, 238, 0.8))`
                      }}
                    >
                      Overview
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
                    className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light tracking-wide max-w-4xl mx-auto"
                    style={{
                      textShadow: `
                        0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 20px rgba(59, 130, 246, 0.2)
                      `
                    }}
                  >
                    Experience the complete{' '}
                    <span 
                      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent font-semibold"
                      style={{
                        filter: `drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))`
                      }}
                    >
                      TotalCiso ecosystem
                    </span>
                    {' '}designed to protect, monitor, and secure your digital infrastructure with{' '}
                    <span 
                      className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent font-semibold"
                      style={{
                        filter: `drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))`
                      }}
                    >
                      advanced AI capabilities
                    </span>
                    .
                  </p>
                </motion.div>

                {/* Feature Highlights Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.9 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto"
                >
                  {[
                    { title: "AI-Powered Detection", desc: "Real-time threat analysis", icon: "🤖" },
                    { title: "24/7 Monitoring", desc: "Continuous surveillance", icon: "👁️" },
                    { title: "Risk Assessment", desc: "Comprehensive evaluation", icon: "📊" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 sm:p-8 hover:border-blue-400/70 transition-all duration-300"
                      style={{
                        boxShadow: `
                          0 0 25px rgba(59, 130, 246, 0.2),
                          inset 0 0 25px rgba(59, 130, 246, 0.1)
                        `
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: `
                          0 0 35px rgba(59, 130, 246, 0.3),
                          inset 0 0 35px rgba(59, 130, 246, 0.15)
                        `
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{feature.icon}</div>
                      <h3 
                        className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 sm:mb-3"
                        style={{
                          filter: `drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))`
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200">{feature.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center"
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