'use client'

import { motion } from 'framer-motion'

export const Additional3DElements = () => {
  return (
    <div className="relative w-full h-full will-change-transform transform-gpu">
      
      {/* 3D Floating Cube - Production Optimized */}
      <motion.div
        className="absolute top-16 right-16 transform-gpu"
        initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateY: [0, 360],
          y: [0, -10, 0]
        }}
        transition={{
          opacity: { duration: 2, delay: 1, ease: "easeOut" },
          scale: { duration: 2, delay: 1, ease: "easeOut" },
          rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ perspective: '1000px' }}
      >
        <div 
          className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 backdrop-blur-sm"
          style={{
            transform: 'rotateX(15deg) rotateY(15deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.2)'
          }}
        >
          {/* Cube faces */}
          <div className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/20"></div>
          <div 
            className="absolute inset-0 bg-blue-500/10 border border-blue-400/20"
            style={{ transform: 'translateZ(4px)' }}
          ></div>
        </div>
      </motion.div>

      {/* 3D Floating Pyramid - Production Optimized */}
      <motion.div
        className="absolute bottom-20 right-20 transform-gpu"
        initial={{ opacity: 0, scale: 0.5, rotateX: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateX: [0, 10, 0],
          rotateY: [0, 180, 360]
        }}
        transition={{
          opacity: { duration: 2, delay: 1.5, ease: "easeOut" },
          scale: { duration: 2, delay: 1.5, ease: "easeOut" },
          rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 35, repeat: Infinity, ease: "linear" }
        }}
        style={{ perspective: '1000px' }}
      >
        <div 
          className="relative w-0 h-0"
          style={{
            borderLeft: '24px solid transparent',
            borderRight: '24px solid transparent',
            borderBottom: '40px solid rgba(168, 85, 247, 0.3)',
            filter: 'drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))',
            transformStyle: 'preserve-3d'
          }}
        >
        </div>
      </motion.div>

      {/* 3D Floating Sphere - Production Optimized */}
      <motion.div
        className="absolute top-32 right-32 transform-gpu"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.1, 1],
          x: [0, 6, 0],
          y: [0, -6, 0]
        }}
        transition={{
          opacity: { duration: 2, delay: 2, ease: "easeOut" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      >
        <div 
          className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400/30 to-green-600/40 border border-emerald-400/40 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.4), inset 0 2px 10px rgba(16, 185, 129, 0.2)'
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-emerald-400/20 blur-sm"></div>
        </div>
      </motion.div>

      {/* 3D Data Stream - Optimized */}
      <motion.div
        className="absolute top-48 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <div className="flex flex-col gap-2">
          {[0, 1, 2].map((index) => ( // Reduced from 5 to 3 elements
            <motion.div
              key={index}
              className="w-2 h-1 bg-gradient-to-r from-orange-400/60 to-red-500/60 rounded-full"
              animate={{
                scaleX: [0.5, 1.3, 0.5], // Reduced scale animation
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3, // Slower animation
                repeat: Infinity,
                delay: index * 0.3, // Increased delay between elements
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* 3D Hexagon Grid - Optimized */}
      <motion.div
        className="absolute bottom-32 right-12"
        initial={{ opacity: 0, scale: 0.5, rotateZ: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateZ: [0, 120, 240, 360]
        }}
        transition={{
          opacity: { duration: 2, delay: 3 },
          scale: { duration: 2, delay: 3 },
          rotateZ: { duration: 40, repeat: Infinity, ease: "linear" } // Much slower rotation
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <motion.polygon
            points="20,5 32,12 32,28 20,35 8,28 8,12"
            fill="none"
            stroke="rgba(245, 101, 101, 0.6)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 3.5 }} // Slower drawing
          />
          <motion.polygon
            points="20,10 28,15 28,25 20,30 12,25 12,15"
            fill="rgba(245, 101, 101, 0.1)"
            stroke="rgba(245, 101, 101, 0.4)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 4 }} // Slower pulse
          />
        </svg>
      </motion.div>

    </div>
  )
}