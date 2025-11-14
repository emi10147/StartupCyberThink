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
      
      {/* Premium Navigation Bar - Enhanced Smooth Transitions */}
      <nav 
        className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-3 md:py-4"
        style={{
          // Enhanced backdrop for better separation
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          // Ensure smooth performance
          willChange: 'backdrop-filter',
          transform: 'translateZ(0)'
        }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Navigation Items */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="hidden md:flex items-center space-x-6 md:space-x-8"
            >
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-white transition-all duration-200 font-space-grotesk font-medium tracking-wide relative group py-2 px-3 rounded-md"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                Resources
                <motion.span 
                  className="absolute inset-x-3 bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ 
                    scaleX: 1, 
                    opacity: 1,
                    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
                  }}
                  style={{ originX: 0 }}
                />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-white transition-all duration-200 font-space-grotesk font-medium tracking-wide relative group py-2 px-3 rounded-md"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                Login
                <motion.span 
                  className="absolute inset-x-3 bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ 
                    scaleX: 1, 
                    opacity: 1,
                    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
                  }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  y: -1,
                  transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-500 hover:to-cyan-600 text-white px-4 md:px-6 py-2 text-sm md:text-base rounded-lg font-space-grotesk font-semibold tracking-wide transition-all duration-200 min-h-[44px] relative overflow-hidden"
                  style={{
                    // Enhanced button styling
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                  <span className="relative z-10">Sign up</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </nav>
      
      {/* Main Hero Content - ENHANCED INFRASTRUCTURE */}
      <div 
        className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-6"
        style={{
          // Ensure content doesn't overlap with navigation
          paddingTop: '80px',
          minHeight: '100vh',
          // Mobile performance optimizations
          WebkitOverflowScrolling: 'touch',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
          // Better rendering
          willChange: 'auto',
          transform: 'translateZ(0)'
        }}
      >
        
        {/* LOGO CONTAINER - ENHANCED POSITIONING */}
        <div 
          className="fixed-logo-container" 
          style={{ 
            minHeight: '220px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '4rem',
            paddingTop: '40px',
            paddingBottom: '20px',
            // Enhanced performance optimizations
            willChange: 'auto',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            // Ensure proper separation
            position: 'relative',
            zIndex: '20'
          }}
        >
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-space-grotesk font-bold tracking-tight"
            style={{
              // Ensure smooth rendering on all devices
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
          >
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-400 to-sky-400 bg-clip-text text-transparent leading-tight">
              <TypewriterText 
                text="CyberThink" 
                delay={200}
                speed={60}
                showCursor={true}
                cursorClassName="bg-cyan-400"
                onComplete={handleTypewriterComplete}
              />
            </span>
          </h1>
        </div>

        {/* CONTENT CONTAINER - ENHANCED SEPARATION */}
        <div 
          className="content-sections" 
          style={{ 
            minHeight: '500px',
            position: 'relative',
            zIndex: '10',
            // Better spacing and separation
            paddingTop: '2rem'
          }}
        >
          {/* Problem Section - Ultra Smooth Transitions */}
          <AnimatePresence mode="wait">
              {showProblem && (
              <motion.div
                key="problem-section"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="space-y-6 md:space-y-8 mb-8 md:mb-12"
                style={{
                  // Performance optimizations
                  willChange: 'opacity, transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Problem Title - Consistent Timing */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1, 
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="text-xl md:text-2xl lg:text-3xl font-space-grotesk font-semibold text-center mb-6 md:mb-8"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    The Problem
                  </span>
                </motion.h2>                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2, 
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-space-grotesk font-light tracking-wide text-center space-y-4 md:space-y-6"
                  style={{
                    // Enhanced text rendering
                    WebkitFontSmoothing: 'antialiased',
                    textRendering: 'optimizeLegibility'
                  }}
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="space-y-6 md:space-y-8 mb-8 md:mb-12"
                style={{
                  // Performance optimizations
                  willChange: 'opacity, transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Solution Title - Consistent Timing */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1, 
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="text-xl md:text-2xl lg:text-3xl font-space-grotesk font-semibold text-center mb-6 md:mb-8"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                    Our Solution
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2, 
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-space-grotesk font-light tracking-wide text-center"
                  style={{
                    // Enhanced text rendering
                    WebkitFontSmoothing: 'antialiased',
                    textRendering: 'optimizeLegibility'
                  }}
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3, 
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4"
              >
                {/* Primary CTA Button - Enhanced Responsiveness */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -1,
                    transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] }
                  }}
                  whileTap={{ 
                    scale: 0.99,
                    transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] }
                  }}
                >
                  <Button 
                    className="group relative px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-space-grotesk font-semibold tracking-wide text-white rounded-xl overflow-hidden transition-all duration-200 shadow-xl hover:shadow-blue-500/30 border border-blue-500/30 hover:border-blue-400/50 w-full sm:w-auto min-h-[50px] md:min-h-[56px]"
                    style={{
                      background: 'linear-gradient(135deg, #0047AB 0%, #007FFF 50%, #00BFFF 100%)',
                      // Enhanced mobile optimization
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Get Started
                      <motion.svg 
                        className="w-4 h-4 md:w-5 md:h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{
                          x: 2,
                          transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                  </Button>
                </motion.div>
                
                {/* Secondary CTA Button - Enhanced Responsiveness */}
                <motion.div
                  whileHover={{ 
                    scale: 1.01, 
                    y: -1,
                    transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] }
                  }}
                  whileTap={{ 
                    scale: 0.99,
                    transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] }
                  }}
                >
                  <button
                    className="group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-space-grotesk font-medium tracking-wide text-cyan-300 border-2 border-cyan-500/40 hover:border-cyan-400/70 rounded-xl transition-all duration-200 hover:bg-cyan-500/8 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm w-full sm:w-auto min-h-[50px] md:min-h-[56px]"
                    style={{
                      // Enhanced mobile optimization
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Learn More
                      <motion.svg 
                        className="w-4 h-4 md:w-5 md:h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{
                          rotate: 45,
                          transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </motion.svg>
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* End Content Container */}
      </div>
      
      {/* Mobile Optimization Overlay - Enhanced */}
      <div 
        className="md:hidden absolute inset-0 bg-black/10 pointer-events-none"
        style={{
          // Improve mobile performance
          willChange: 'auto',
          backfaceVisibility: 'hidden'
        }}
      />
    </section>
  )
}