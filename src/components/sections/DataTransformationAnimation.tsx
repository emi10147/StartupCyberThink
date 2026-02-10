'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function DataTransformationAnimation() {
  const [stage, setStage] = useState<'spark' | 'moving' | 'expanded'>('spark')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Shorter timings on mobile
    const delay1 = isMobile ? 2000 : 2500
    const delay2 = isMobile ? 5400 : 6500

    // Stage 1: Spark appears
    const stage1Timer = setTimeout(() => {
      setStage('moving')
    }, delay1)

    // Stage 2: Move to center and expand
    const stage2Timer = setTimeout(() => {
      setStage('expanded')
    }, delay2)

    return () => {
      clearTimeout(stage1Timer)
      clearTimeout(stage2Timer)
    }
  }, [isMobile])

  return (
    <div className="relative w-full min-h-[200vh] bg-black overflow-x-hidden flex flex-col">
      {/* Animation container - first 100vh */}
      <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Black background */}
        <div className="absolute inset-0 bg-black" />

      {/* Subtle glow orbs - disabled on mobile */}
      {!isMobile && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[460px] w-[460px] sm:h-[560px] sm:w-[560px] rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-transparent blur-3xl" />
        </div>
      )}
      {!isMobile && (
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl" />
      )}
      {!isMobile && (
        <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-indigo-500/12 blur-3xl" />
      )}

      {/* Faint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)',
          backgroundSize: '52px 52px',
          mixBlendMode: 'screen'
        }}
      />

      {/* Spark particle with trail effect */}
      <motion.div
        initial={{ opacity: 0, x: -300, y: 80, scale: 0, rotate: 0 }}
        animate={
          stage === 'moving'
            ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 360 }
            : stage === 'expanded'
            ? { opacity: 0, scale: 0, rotate: 360 }
            : { opacity: 1, scale: 1, rotate: 0 }
        }
        transition={{
          duration: stage === 'spark' ? 2.2 : stage === 'moving' ? (isMobile ? 2.6 : 3.2) : 0.9,
          ease: stage === 'moving' ? [0.42, 0, 0.58, 1] : [0.34, 1.56, 0.64, 1],
          rotate: {
            duration: stage === 'moving' ? (isMobile ? 2.6 : 3.2) : 0,
            repeat: stage === 'moving' ? Infinity : 0,
            ease: 'linear'
          }
        }}
        className="absolute z-20"
      >
        {/* Spark shape - pointed lightning-like form */}
        <div className="relative w-8 h-12">
          {/* Main spark body - sharp pointed shape */}
          <motion.svg
            viewBox="0 0 20 30"
            width="20"
            height="30"
            animate={
              stage === 'moving'
                ? {
                    opacity: [0.7, 1, 0.8, 1, 0.7],
                    filter: [
                      'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))',
                      'drop-shadow(0 0 25px rgba(6, 182, 212, 1))',
                      'drop-shadow(0 0 12px rgba(6, 182, 212, 0.7))',
                      'drop-shadow(0 0 25px rgba(6, 182, 212, 1))',
                      'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))'
                    ]
                  }
                : {
                    opacity: [0.7, 1, 0.7],
                    filter: [
                      'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))',
                      'drop-shadow(0 0 20px rgba(6, 182, 212, 1))',
                      'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))'
                    ]
                  }
            }
            transition={{
              duration: stage === 'moving' ? 0.7 : 1.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {/* Left point */}
            <polygon points="10,0 5,15 8,15" fill="rgba(6, 182, 212, 0.9)" />
            {/* Center point */}
            <polygon points="10,0 10,20 7,15" fill="rgba(6, 182, 212, 1)" />
            <polygon points="10,0 13,15 10,20" fill="rgba(6, 182, 212, 1)" />
            {/* Right point */}
            <polygon points="10,0 15,15 12,15" fill="rgba(6, 182, 212, 0.9)" />
            {/* Bottom tip */}
            <polygon points="8,18 12,18 10,30" fill="rgba(6, 182, 212, 1)" />
          </motion.svg>

          {/* Dynamic glow halo - more intense during movement */}
          <motion.div
            animate={
              stage === 'moving'
                ? {
                    boxShadow: [
                      '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)',
                      '0 0 40px rgba(6, 182, 212, 1), 0 0 80px rgba(6, 182, 212, 0.6)',
                      '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)'
                    ]
                  }
                : {
                    boxShadow: [
                      '0 0 15px rgba(6, 182, 212, 0.5), 0 0 25px rgba(6, 182, 212, 0.2)',
                      '0 0 30px rgba(6, 182, 212, 0.8), 0 0 50px rgba(6, 182, 212, 0.4)',
                      '0 0 15px rgba(6, 182, 212, 0.5), 0 0 25px rgba(6, 182, 212, 0.2)'
                    ]
                  }
            }
            transition={{
              duration: stage === 'moving' ? 0.8 : 1.4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -inset-3 rounded-full pointer-events-none"
          />

          {/* More aggressive spark particles during movement */}
          {stage === 'moving' &&
            [...Array(6)].map((_, i) => (
              <motion.div
                key={`spark-moving-${i}`}
                initial={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                animate={{
                  opacity: [1, 0.5, 0],
                  x: (Math.random() - 0.5) * 30,
                  y: (Math.random() - 0.5) * 30
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  ease: 'easeOut'
                }}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'rgba(6, 182, 212, 1)',
                  filter: 'blur(0.5px)',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-3px',
                  marginTop: '-3px',
                  boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)'
                }}
              />
            ))}

          {/* Trailing particles from movement */}
          {stage === 'moving' &&
            [...Array(4)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                initial={{
                  opacity: 0.6,
                  x: -i * 8,
                  y: 0
                }}
                animate={{
                  opacity: [0.6, 0],
                  x: [-i * 8, -i * 12],
                  scale: [1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 0.15,
                  delay: i * 0.08,
                  ease: 'easeOut'
                }}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: 'rgba(6, 182, 212, 0.6)',
                  filter: 'blur(0.5px)',
                  left: '-8px',
                  top: '50%',
                  marginTop: '-2px'
                }}
              />
            ))}
        </div>
      </motion.div>

      {/* Particle trail effect during movement - skip on mobile */}
      {stage === 'moving' && !isMobile &&
        Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: -300 + i * 40, y: 80 }}
            animate={{ opacity: 0, x: (i * 40) - 100, y: 0 }}
            transition={{
              duration: 3.2,
              delay: i * 0.12,
              ease: [0.42, 0, 0.58, 1]
            }}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 z-15"
            style={{
              filter: 'blur(0.5px)'
            }}
          />
        ))}

      {/* TotalCISO Logo (center) - acts as touch point */}
      <motion.div
        animate={
          stage === 'expanded'
            ? { scale: 1.15, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute z-30 flex items-center justify-center"
      >
        {/* Logo glow effect when spark touches */}
        {stage !== 'spark' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: stage === 'expanded' ? [1, 0.5, 1] : 0,
              scale: stage === 'expanded' ? [1, 1.3, 1] : 0.8
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 rounded-full w-40 h-40"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)',
              filter: 'blur(20px)',
              zIndex: 0
            }}
          />
        )}

        <div
          className="text-4xl md:text-6xl font-bold relative z-10"
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
            filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))'
          }}
        >
          TotalCISO
        </div>
      </motion.div>

      {/* Network Tree - expands from center */}
      {stage === 'expanded' && (
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          viewBox="0 0 500 500"
          className="absolute z-10 w-96 h-96 md:w-[600px] md:h-[600px]"
          style={{
            filter: !isMobile ? 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.5))' : 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.3))',
            willChange: 'opacity, transform'
          }}
        >
          {/* Tree connections with enhanced glow */}
          <defs>
            {!isMobile && (
              <filter id="glowLine">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            )}
          </defs>

          <g stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" filter={!isMobile ? "url(#glowLine)" : "none"}>
            {/* Main branches - expanded further out */}
            <motion.line
              x1="250"
              y1="250"
              x2="180"
              y2="80"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.9 : 1.3, delay: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="250"
              y1="250"
              x2="320"
              y2="80"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.9 : 1.3, delay: 0.12, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="250"
              y1="250"
              x2="50"
              y2="180"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.9 : 1.3, delay: 0.14, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="250"
              y1="250"
              x2="450"
              y2="180"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.9 : 1.3, delay: 0.16, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="250"
              y1="250"
              x2="180"
              y2="420"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.9 : 1.3, delay: 0.18, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="250"
              y1="250"
              x2="320"
              y2="420"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.9 : 1.3, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />

            {/* Secondary branches */}
            <motion.line
              x1="180"
              y1="80"
              x2="120"
              y2="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.85, delay: isMobile ? 1.0 : 1.1, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="180"
              y1="80"
              x2="140"
              y2="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.85, delay: isMobile ? 1.02 : 1.12, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="320"
              y1="80"
              x2="360"
              y2="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.85, delay: isMobile ? 1.04 : 1.14, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="320"
              y1="80"
              x2="380"
              y2="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.85, delay: isMobile ? 1.06 : 1.16, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="50"
              y1="180"
              x2="20"
              y2="120"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.85, delay: isMobile ? 1.08 : 1.18, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
            <motion.line
              x1="450"
              y1="180"
              x2="480"
              y2="120"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.85, delay: isMobile ? 1.1 : 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              strokeDasharray="1"
            />
          </g>

          {/* Tree nodes with better glow */}
          <g>
            {/* Center node - small */}
            <motion.circle
              cx="250"
              cy="250"
              r="6"
              fill="rgba(6, 182, 212, 1)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.9))'
              }}
            />

            {/* Branch endpoints */}
            {[
              { x: 180, y: 80, delay: 0.1 },
              { x: 320, y: 80, delay: 0.15 },
              { x: 50, y: 180, delay: 0.2 },
              { x: 450, y: 180, delay: 0.25 },
              { x: 180, y: 420, delay: 0.3 },
              { x: 320, y: 420, delay: 0.35 },
              { x: 120, y: 20, delay: 1.1 },
              { x: 140, y: 20, delay: 1.15 },
              { x: 360, y: 20, delay: 1.2 },
              { x: 380, y: 20, delay: 1.25 },
              { x: 20, y: 120, delay: 1.3 },
              { x: 480, y: 120, delay: 1.35 }
            ].map((point, idx) => (
              <motion.circle
                key={idx}
                cx={point.x}
                cy={point.y}
                r="6"
                fill="rgba(6, 182, 212, 0.8)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: point.delay, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.7))'
                }}
              />
            ))}
          </g>

          {/* Tech Stack Icons on Nodes */}
          {stage === 'expanded' && (
            <>
              <defs>
                <clipPath id="iconCircle1">
                  <circle cx="180" cy="80" r="45" />
                </clipPath>
                <clipPath id="iconCircle2">
                  <circle cx="320" cy="80" r="45" />
                </clipPath>
                <clipPath id="iconCircle3">
                  <circle cx="180" cy="420" r="45" />
                </clipPath>
                <clipPath id="iconCircle4">
                  <circle cx="320" cy="420" r="45" />
                </clipPath>
                <clipPath id="iconCircle5">
                  <circle cx="450" cy="180" r="45" />
                </clipPath>
                <clipPath id="iconCircle6">
                  <circle cx="50" cy="180" r="45" />
                </clipPath>
              </defs>
              <g className="tech-icons">
                {/* MySQL icon - top left branch */}
                <motion.image
                  href="/data/M1bswVs7zkuTaBacgsKxDCB4.png"
                  x="135"
                  y="35"
                  width="90"
                  height="90"
                  clipPath="url(#iconCircle1)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.6 : 0.8 }}
                />

                {/* Wazuh icon - top right branch */}
                <motion.image
                  href="/data/wazuh-standard-featured-picture.png"
                  x="275"
                  y="35"
                  width="90"
                  height="90"
                  clipPath="url(#iconCircle2)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.65 : 0.9 }}
                />

                {/* AWS icon - right middle branch */}
                <motion.image
                  href="/data/Amazon_web_services_main_image_2_84c24de2df.png"
                  x="405"
                  y="135"
                  width="90"
                  height="90"
                  clipPath="url(#iconCircle5)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.62 : 0.85 }}
                />

                {/* Kafka icon - left middle branch */}
                <motion.image
                  href="/data/kafka-preview-banner.jpg"
                  x="5"
                  y="135"
                  width="90"
                  height="90"
                  clipPath="url(#iconCircle6)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.7 : 0.95 }}
                />

                {/* Ollama icon - bottom left branch */}
                <motion.image
                  href="/data/ollama-logo-on-black-sand.C8U_3a1n_2wDgIH.webp"
                  x="135"
                  y="375"
                  width="90"
                  height="90"
                  clipPath="url(#iconCircle3)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.68 : 1.0 }}
                />

                {/* Python icon - bottom right branch */}
                <motion.image
                  href="/data/644cce6fb228eefd921d60c9_Decoding-Python-A-Comprehensive-Guide-to-What-Is-Python-Programming.jpg"
                  x="275"
                  y="375"
                  width="90"
                  height="90"
                  clipPath="url(#iconCircle4)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.75 : 1.1 }}
                />
              </g>
            </>
          )}
        </motion.svg>
      )}

      {/* Completion text with better entrance */}
      {stage === 'expanded' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute bottom-20 text-center z-40"
        >
          <p className="text-gray-200 text-lg font-light tracking-wide" style={{ textShadow: '0 0 15px rgba(6, 182, 212, 0.4)' }}>
            Data transforms into intelligence
          </p>
        </motion.div>
      )}

      {/* Close animation container */}
      </div>

      {/* Platform description text - second 100vh+ */}
      {stage === 'expanded' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-30 w-full px-4 md:px-8 py-12"
        >
          <div className="max-w-6xl mx-auto">
            {/* Glowing background orbs behind text */}
            <div className="absolute -top-20 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Text box with enhanced styling */}
            <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl px-8 md:px-12 py-10 overflow-hidden">
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" style={{
                background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), transparent)',
                pointerEvents: 'none'
              }} />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              
              {/* Left accent bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 1.5, delay: 2.8 }}
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent"
              />
              
              {/* Main text content */}
              <div className="relative z-10">
                <p 
                  className="text-base md:text-lg lg:text-xl text-gray-50 leading-relaxed font-light tracking-wide"
                  style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(59, 130, 246, 0.15)' }}
                >
                  TotalCISO brings together <span className="text-cyan-300 font-normal">Wazuh, Kafka, Python, Ollama, MySQL, and AWS</span> into one unified security platform. Wazuh continuously monitors company systems and generates security events, which are streamed in real time through Kafka to ensure no data is lost. Python services process and analyze this information, while Ollama applies AI-driven intelligence to detect anomalies, assess risk, and convert complex security signals into clear and actionable insights. All processed data and results are securely stored in MySQL, and the entire platform runs on AWS to provide scalability, reliability, and performance. These insights are then presented through a centralized dashboard that gives executives and security teams a real-time, intuitive view of their organization's cybersecurity posture.
                </p>
              </div>
              
              {/* Glow effect box shadow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                boxShadow: '0 0 60px rgba(6, 182, 212, 0.2), inset 0 0 60px rgba(6, 182, 212, 0.05)'
              }} />
            </div>
            
            {/* Bottom glow accent */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 1.2, delay: 3 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-8"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
