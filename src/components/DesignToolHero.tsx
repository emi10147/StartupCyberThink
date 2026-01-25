'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedGlowBox } from './AnimatedGlowBox'

export const DesignToolHero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Professional Top Navigation */}
      <motion.nav
        className="relative z-20 flex items-center justify-between w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 backdrop-blur-sm border-b border-blue-500/20"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(15,23,42,0.95) 50%, rgba(0,0,0,0.95) 100%)'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Enhanced Back to Home Button */}
        <Link href="/">
          <div className="flex items-center gap-2 xs:gap-3 cursor-pointer group">
            <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:shadow-blue-400/60 transition-all duration-300 group-hover:scale-110">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-black font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm xs:text-base group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-wide">
              Back to Home
            </span>
          </div>
        </Link>

        {/* Professional Navigation Links */}
        <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8" />
      </motion.nav>

      {/* Main content centered with animated glow box */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-20">
        {/* Introducing text above rectangle */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
            Introducing
          </span>
        </motion.h2>

        <AnimatedGlowBox>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[0.9] px-2"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]">
                TotalCISO
              </span>
            </motion.h1>
          </motion.div>
        </AnimatedGlowBox>

        {/* Solution section below rectangle */}
        <motion.div
          className="mt-8 sm:mt-16 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              Total CISO combines on demand CISO expertise with structured analysis.
            </span>
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 2.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Total CISO combines on demand CISO expertise with a structured and objective risk analysis framework. The platform continuously evaluates security posture, compliance readiness, and threat exposure using consistent internal logic rather than purely subjective judgment.
            <br /><br />
            The system is built on secure databases and cloud based infrastructure designed to scale across organizations of different sizes and sectors. While the underlying analytical architecture is highly complex, the outcome for clients is simple and actionable. Lower risk. Fewer incidents. Faster response. More efficient audits.
          </motion.p>

          {/* Continue to Security Page Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="pt-8 sm:pt-10 md:pt-12 flex justify-center"
          >
            <Link href="/security">
              <button className="px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-3.5 sm:py-4 rounded-lg text-sm xs:text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 hover:scale-105 tracking-wide border border-blue-400/30">
                Explore Security Solutions →
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}