'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      
      {/* Modern Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Resources
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Login
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-500 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Sign up
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>
      
      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="space-y-6 mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-400 to-sky-400 bg-clip-text text-transparent leading-tight">
              CyberThink
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Create jaw-dropping motion and interaction in minutes — no code.
            <br className="hidden md:block" />
            <span className="text-gray-400">Embed with a few clicks.</span>
          </motion.p>
        </motion.div>
        
        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
            style={{
              background: 'linear-gradient(135deg, #0047AB 0%, #007FFF 50%, #00BFFF 100%)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <span className="relative z-10 flex items-center gap-2">
              Start creating
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 text-lg font-medium"
          >
            Watch demo
          </motion.button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-500 text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mobile Optimization Overlay */}
      <div className="md:hidden absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  )
}