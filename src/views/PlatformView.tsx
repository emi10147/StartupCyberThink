'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CyberSecurityDevice } from '@/components/CyberSecurityDevice'
import { FluidWebGLBackground } from '@/components/webgl/FluidWebGLBackground'
import { WebGLBackground } from '@/components/webgl/WebGLBackground'

export function PlatformView() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* WebGL Backgrounds - Same as main page */}
      <FluidWebGLBackground />
      <WebGLBackground />
      
      {/* Top Navigation Bar - Responsive */}
      <motion.nav
        className="fixed top-0 right-0 left-0 z-50 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-black/10 backdrop-blur-lg border-b border-white/5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back to Home Button */}
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-slate-700/30 rounded-lg sm:rounded-xl backdrop-blur-xl text-white hover:border-purple-500/50 transition-all duration-300 text-sm sm:text-base mb-3 sm:mb-0"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </motion.button>
        </Link>

        {/* Right Navigation Menu - Mobile Responsive */}
        <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end">
          <motion.button
            className="text-white/80 hover:text-white font-normal tracking-wide transition-colors duration-300 text-sm sm:text-base px-2 sm:px-0"
            whileHover={{ scale: 1.05 }}
          >
            Resources
          </motion.button>
          <motion.button
            className="text-white/80 hover:text-white font-normal tracking-wide transition-colors duration-300 text-sm sm:text-base px-2 sm:px-0"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
          <motion.button
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign up
          </motion.button>
        </div>
      </motion.nav>
      
      {/* Main Content */}
      <main className="relative z-10 w-full text-white pt-20 sm:pt-24 min-h-screen overflow-visible">
        <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-20 min-h-screen flex flex-col overflow-visible">
          
          {/* Featured 3D Device Section */}
          <motion.div
            className="text-center mb-8 sm:mb-20 flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wider mb-3 text-white/95 leading-tight px-2">
              Enterprise Security Platform
            </h1>
            <p className="text-base sm:text-lg font-normal text-slate-300/90 mb-8 sm:mb-16 max-w-2xl mx-auto leading-relaxed tracking-wider px-2">
              Professional-grade cybersecurity command center with real-time threat detection and advanced monitoring capabilities
            </p>
            
            {/* Featured 3D Cybersecurity Device */}
            <CyberSecurityDevice />
          </motion.div>
        </div>
      </main>
    </div>
  )
}