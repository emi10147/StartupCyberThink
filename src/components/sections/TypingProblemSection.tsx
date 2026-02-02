'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingProblemSectionProps {
  onComplete: () => void
}

export function TypingProblemSection({ onComplete }: TypingProblemSectionProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const fullText = `THE SILENT CRISIS

According to IBM, the average cost per data breach is $6.088 million USD.

More than 70% of companies believe they wasted 25% to 100% of their cybersecurity budget.

Spending should be precise, not over estimated. Calculated to minimize costs while maximizing return on investment.

Without clarity, strategy, and precision, defenses remain vulnerable and investments evaporate.`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        setIsComplete(true)
        // Wait 2 seconds then call onComplete
        setTimeout(() => {
          onComplete()
        }, 2000)
      }
    }, 50) // Speed of typing

    return () => clearInterval(interval)
  }, [onComplete, fullText])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Glow orbs matching theme */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[460px] w-[460px] sm:h-[560px] sm:w-[560px] rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-transparent blur-3xl" />
      </div>
      <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-indigo-500/12 blur-3xl" />

      {/* Faint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)',
          backgroundSize: '52px 52px',
          mixBlendMode: 'screen'
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto h-full flex items-center justify-center"
      >
        <div className="text-center">
          <div 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide"
            style={{
              textShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'pre-wrap'
            }}
          >
            {displayedText}
            {!isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyan-300 ml-1"
              >
                |
              </motion.span>
            )}
          </div>
          
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <p className="text-gray-400 text-sm md:text-base tracking-wide font-light" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.2)' }}>
                Discovering your path forward...
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
