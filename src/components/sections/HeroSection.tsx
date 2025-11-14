'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TypewriterText } from '@/components/ui/TypewriterText'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showProblem, setShowProblem] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Handler for when typewriter completes
  const handleTypewriterComplete = () => {
    setTimeout(() => {
      setShowProblem(true) // Fade in problem statement first
      setTimeout(() => {
        setShowProblem(false) // Fade out problem
        setTimeout(() => {
          setShowSolution(true) // Fade in solution
        }, 2500) // Wait longer for problem to fade out completely (much slower)
      }, 8000) // Show problem for 8 seconds (more reading time)
    }, 2000) // Wait even longer after typing completes for better pacing
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent m-0 p-0" style={{ marginBottom: 0 }}>
      {/* Enhanced Background Effects with Mouse Interaction */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glowing orbs that follow mouse */}
        <motion.div 
          className="absolute w-[800px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, #001F3F 0%, #0047AB 30%, #007FFF 60%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[400px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, #007FFF 0%, #00BFFF 40%, #00FFFF 70%, transparent 80%)',
          }}
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />

        <motion.div 
          className="absolute bottom-1/3 left-1/5 w-[500px] h-[500px] rounded-full blur-2xl opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, #0047AB 0%, #007FFF 50%, #00BFFF 80%, transparent 90%)',
          }}
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 35 }}
        />
        
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
        }} />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
      </div>
      
      {/* Enhanced Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="hidden md:flex items-center space-x-8"
            >
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-white transition-all duration-500 font-space-grotesk font-medium tracking-wide relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Resources
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-white transition-all duration-500 font-space-grotesk font-medium tracking-wide relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Login
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-500 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-space-grotesk font-semibold tracking-wide transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 border border-cyan-500/20 hover:border-cyan-400/40">
                  Sign up
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </nav>
      
      {/* Main Hero Content - FIXED LAYOUT */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        
        {/* LOGO CONTAINER - ABSOLUTELY FIXED POSITION */}
        <div className="fixed-logo-container" style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', paddingTop: '20px' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-400 to-sky-400 bg-clip-text text-transparent leading-tight">
              <TypewriterText 
                text="CyberThink" 
                delay={300}
                speed={80}
                showCursor={true}
                cursorClassName="bg-cyan-400"
                onComplete={handleTypewriterComplete}
              />
            </span>
          </h1>
        </div>

        {/* CONTENT CONTAINER - SEPARATE FROM LOGO */}
        <div className="content-sections" style={{ minHeight: '400px' }}>
          {/* Problem Section - Optimized Transitions */}
          <AnimatePresence mode="wait">
              {showProblem && (
              <motion.div
                key="problem-section"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ 
                  duration: 1.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 1.6 },
                  y: { duration: 1.8 },
                  scale: { duration: 1.4 }
                }}
                className="space-y-8 mb-12"
              >
                {/* Problem Title - Enhanced Animation */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.2, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-2xl md:text-3xl font-space-grotesk font-semibold text-center mb-8"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    The Problem
                  </span>
                </motion.h2>                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.4, 
                    delay: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-space-grotesk font-light tracking-wide text-center space-y-6"
                >
                <p>
                  Organizations are increasingly investing in{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent font-semibold">
                    cybersecurity without a clear understanding
                  </span>
                  {' '}of how much risk they are actually mitigating.
                </p>
                
                <p>
                  Decisions are often{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                    reactive and misaligned
                  </span>
                  {' '}with corporate strategy.
                </p>
                
                <p>
                  There is a lack of a{' '}
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    quantitative, visual, and dynamic way
                  </span>
                  {' '}to connect technical controls with risk exposure and business capability.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            {showSolution && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 1.4 },
                  y: { duration: 1.6 }
                }}
                className="space-y-8 mb-12"
              >
                {/* Solution Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.3, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-2xl md:text-3xl font-space-grotesk font-semibold text-center mb-8"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                    Our Solution
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.4, 
                    delay: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-space-grotesk font-light tracking-wide text-center"
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
          )}
        </AnimatePresence>
        
          {/* Enhanced CTA Buttons - Only show when solution is visible */}
          <AnimatePresence mode="wait" initial={false}>
            {showSolution && (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.4, 
                  delay: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              >
                {/* Primary CTA Button - Get Started */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Button 
                    className="group relative px-8 py-4 text-lg font-space-grotesk font-semibold tracking-wide text-white rounded-xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-blue-500/40 border border-blue-500/30 hover:border-blue-400/60"
                    style={{
                      background: 'linear-gradient(135deg, #0047AB 0%, #007FFF 50%, #00BFFF 100%)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    <span className="relative z-10 flex items-center gap-3">
                      Get Started
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </motion.div>
                
                {/* Secondary CTA Button - Learn More */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <button
                    className="group px-8 py-4 text-lg font-space-grotesk font-medium tracking-wide text-cyan-300 border-2 border-cyan-500/40 hover:border-cyan-400/80 rounded-xl transition-all duration-500 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-3">
                      Learn More
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* End Content Container */}
      </div>
      
      {/* Mobile Optimization Overlay */}
      <div className="md:hidden absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  )
}