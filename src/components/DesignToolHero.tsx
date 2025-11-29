'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedGlowBox } from './AnimatedGlowBox'

export const DesignToolHero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Top Navigation */}
      <motion.nav
        className="relative z-20 flex items-center justify-between w-full px-4 sm:px-8 py-4 sm:py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Back to Home Button */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
              Back to Home
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <span className="text-white/70 hover:text-blue-300 cursor-pointer transition-colors text-xs sm:text-sm hidden sm:block">
            Resources
          </span>
          <span className="text-white/70 hover:text-blue-300 cursor-pointer transition-colors text-xs sm:text-sm hidden sm:block">
            Login
          </span>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-3 sm:px-6 py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
            Sign up
          </button>
        </div>
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
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                TotalCiso
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
              Our Solution
            </span>
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 2.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            An integrated model that combines{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent font-semibold">
              artificial intelligence
            </span>
            , quantitative analytics, and risk management expertise to help organizations{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent font-semibold">
              define, visualize, and manage
            </span>
            {' '}their cyber risk and risk appetite.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}