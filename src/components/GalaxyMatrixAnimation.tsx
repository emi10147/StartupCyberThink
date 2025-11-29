'use client'

import { motion } from 'framer-motion'

export const GalaxyMatrixAnimation = () => {
  // Generate random characters for matrix effect
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?".split('')
  
  // Generate multiple streams
  const streams = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    characters: Array.from({ length: 15 }, () => 
      matrixChars[Math.floor(Math.random() * matrixChars.length)]
    )
  }))

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      
      {/* Galaxy Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
          `
        }}
      />

      {/* Floating Matrix Streams - Left Side */}
      <div className="absolute left-0 top-0 w-1/3 h-full">
        {streams.slice(0, 8).map((stream) => (
          <motion.div
            key={`left-${stream.id}`}
            className="absolute font-mono text-xs"
            style={{
              left: `${(stream.id * 12) % 100}%`,
              color: `rgba(147, 51, 234, ${0.3 + Math.random() * 0.4})`
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: window.innerHeight + 100, 
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: stream.duration,
              delay: stream.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {stream.characters.map((char, i) => (
              <motion.div
                key={i}
                className="block leading-4"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating Matrix Streams - Right Side */}
      <div className="absolute right-0 top-0 w-1/3 h-full">
        {streams.slice(8, 16).map((stream) => (
          <motion.div
            key={`right-${stream.id}`}
            className="absolute font-mono text-xs"
            style={{
              right: `${(stream.id * 12) % 100}%`,
              color: `rgba(59, 130, 246, ${0.3 + Math.random() * 0.4})`
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: window.innerHeight + 100, 
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: stream.duration + 1,
              delay: stream.delay + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {stream.characters.map((char, i) => (
              <motion.div
                key={i}
                className="block leading-4"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  color: [
                    `rgba(59, 130, 246, 0.6)`,
                    `rgba(168, 85, 247, 0.8)`,
                    `rgba(59, 130, 246, 0.6)`
                  ]
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Horizontal Flowing Code Streams */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute font-mono text-xs whitespace-nowrap"
            style={{
              top: `${15 + i * 12}%`,
              color: `rgba(168, 85, 247, ${0.2 + Math.random() * 0.3})`
            }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ 
              x: window.innerWidth + 200,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {"CYBERSECURITY_PROTOCOL_ACTIVE_".repeat(3)}
          </motion.div>
        ))}
      </div>

      {/* Floating Galaxy Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Central Galaxy Swirl */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full rounded-full opacity-10"
            style={{
              background: `
                conic-gradient(
                  from 0deg,
                  transparent,
                  rgba(147, 51, 234, 0.3),
                  transparent,
                  rgba(59, 130, 246, 0.3),
                  transparent,
                  rgba(168, 85, 247, 0.3),
                  transparent
                )
              `,
              filter: 'blur(2px)'
            }}
          />
        </motion.div>
      </div>

      {/* Floating Binary Code */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const binaryString = Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')
          return (
            <motion.div
              key={`binary-${i}`}
              className="absolute font-mono text-xs opacity-20"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                color: `rgba(${Math.random() > 0.5 ? '147, 51, 234' : '59, 130, 246'}, 0.4)`
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.4, 0],
                rotateZ: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {binaryString}
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}