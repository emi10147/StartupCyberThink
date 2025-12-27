'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const CyberKeyboardBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Pure black background */}
      <div className="w-full h-full bg-black" />
      
      {/* Minimal floating particles only - Reduced for mobile performance */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-20 hidden sm:block"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          />
        ))}
        
        {/* Mobile particles - fewer and simpler */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`mobile-${i}`}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-30 sm:hidden"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>
    </div>
  )
}