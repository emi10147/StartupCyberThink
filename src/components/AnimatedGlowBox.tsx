'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedGlowBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {/* Main rectangular border with responsive padding */}
      <motion.div
        className="relative border-2 border-blue-500/60 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm mx-2 xs:mx-3 sm:mx-4 lg:mx-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          boxShadow: [
            '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 15px rgba(59, 130, 246, 0.1)',
            '0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 25px rgba(59, 130, 246, 0.2)',
            '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 15px rgba(59, 130, 246, 0.1)'
          ]
        }}
        transition={{ 
          duration: 1.5, 
          delay: 0.3,
          boxShadow: { 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        style={{
          background: 'rgba(0, 0, 0, 0.85)', // Pure black base background
          borderImage: 'linear-gradient(45deg, #3B82F6, #2563EB, #60A5FA) 1',
          borderWidth: '2px',
          borderStyle: 'solid'
        }}
      >
        {/* Animated corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-blue-400"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.div
          className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-blue-400"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.7
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-blue-400"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.9
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-blue-400"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.1
          }}
        />        {/* Smooth blue glow appearing and vanishing */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            background: [
              'rgba(0, 0, 0, 0)',
              'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
              'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
              'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
              'rgba(0, 0, 0, 0)'
            ],
            opacity: [0, 0.6, 1, 0.6, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Secondary blue pulse with different timing */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            background: [
              'rgba(0, 0, 0, 0)',
              'radial-gradient(ellipse at 30% 70%, rgba(96, 165, 250, 0.12) 0%, rgba(96, 165, 250, 0.04) 60%, transparent 100%)',
              'radial-gradient(ellipse at 70% 30%, rgba(96, 165, 250, 0.18) 0%, rgba(96, 165, 250, 0.06) 60%, transparent 100%)',
              'radial-gradient(ellipse at 30% 70%, rgba(96, 165, 250, 0.12) 0%, rgba(96, 165, 250, 0.04) 60%, transparent 100%)',
              'rgba(0, 0, 0, 0)'
            ],
            opacity: [0, 0.5, 0.8, 0.5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none border-2"
          style={{
            borderImage: 'linear-gradient(45deg, #3B82F6, #2563EB, #60A5FA) 1',
          }}
          animate={{
            background: [
              'linear-gradient(0deg, rgba(59, 130, 246, 0.0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.0))',
              'linear-gradient(90deg, rgba(59, 130, 246, 0.0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.0))',
              'linear-gradient(180deg, rgba(59, 130, 246, 0.0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.0))',
              'linear-gradient(270deg, rgba(59, 130, 246, 0.0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.0))',
              'linear-gradient(0deg, rgba(59, 130, 246, 0.0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.0))'
            ],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 0px rgba(59, 130, 246, 0.0)',
              '0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 0px rgba(59, 130, 246, 0.0)',
              '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 0px rgba(59, 130, 246, 0.0)'
            ]
          }}
          transition={{
            background: { duration: 4, repeat: Infinity, ease: 'linear' },
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  )
}