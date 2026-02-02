'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Mystical black background with subtle glows */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient orbs - mysterious glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Central content container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Mystical title with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4"
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #0ea5e9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))',
              textShadow: '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(6, 182, 212, 0.2)'
            }}
          >
            The Silent Crisis
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-8" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }} />
        </motion.div>

        {/* Main statistics container */}
        <div className="space-y-12">
          {/* First statistic - IBM Data Breach Cost */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="group"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s infinite'
                }} />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}>
                      <span className="text-2xl font-bold text-white">$</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        $6.088 Million USD
                      </h3>
                      <p className="text-cyan-200 text-lg font-medium">Average Cost Per Data Breach</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    According to IBM's latest research, organizations face an astronomical financial burden when data breaches occur. This isn't just a theoretical number—these are real costs that destroy shareholder value, damage customer trust, and can threaten business survival.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second statistic - Budget Waste */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="group"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.2), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s infinite'
                }} />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' }}>
                      <span className="text-2xl font-bold text-white">⚠</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        70% Waste Rate
                      </h3>
                      <p className="text-purple-200 text-lg font-medium">Cybersecurity Budget Inefficiency</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    More than 70% of companies believe they wasted between 25% to 100% of their cybersecurity budget. This staggering statistic reveals a critical truth: organizations are spending billions on security without clear strategy, proper prioritization, or measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Critical Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="group"
          >
            <div className="relative">
              {/* Glow background - stronger */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-cyan-500/40 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-cyan-950/20 to-purple-950/20 backdrop-blur-xl border border-cyan-400/40 rounded-2xl p-8 md:p-12 overflow-hidden">
                {/* Animated inner glow */}
                <div className="absolute inset-0 rounded-2xl" style={{
                  backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 60%)',
                }} />
                
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">The Path Forward</span>
                  </h3>
                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                    Not only should business spending on cybersecurity be higher, but it's critical that business leaders be purposeful and develop a well-thought-out cybersecurity strategy before making investments.
                  </p>
                  <p className="text-cyan-300 text-lg font-semibold">
                    Without clarity, strategy, and precision—your defenses remain vulnerable, and your investments evaporate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }} />
        </motion.div>
      </motion.div>

      {/* CSS Animation for shimmer effect */}
      <style>{`
        @keyframes shimmer {
          0% {
            backgroundPosition: 200% 0;
          }
          100% {
            backgroundPosition: -200% 0;
          }
        }
      `}</style>
    </div>
  )
}
