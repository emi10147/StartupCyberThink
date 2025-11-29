'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const SubtleParticleOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating particles similar to main page but yellow */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay similar to main page */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Subtle radial glow in corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-yellow-500/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent blur-3xl"></div>
      
      {/* Very subtle moving lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px h-40 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent"
          style={{
            left: `${20 + i * 30}%`,
            top: '10%',
          }}
          animate={{
            y: ['0vh', '80vh', '0vh'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}