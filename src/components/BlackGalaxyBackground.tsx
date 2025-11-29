'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const BlackGalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Stars array
    const stars: Array<{
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      color: string
    }> = []

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.7 ? '#ffd700' : '#ffffff' // 30% chance for golden stars
      })
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with deep black background
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star, index) => {
        ctx.save()
        
        // Create glow effect for golden stars
        if (star.color === '#ffd700') {
          ctx.shadowColor = '#ffd700'
          ctx.shadowBlur = star.size * 3
        }

        ctx.globalAlpha = star.opacity
        ctx.fillStyle = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // Animate star movement and twinkling
        star.y += star.speed
        star.opacity += (Math.random() - 0.5) * 0.02

        // Keep opacity in bounds
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        // Reset star position when it goes off screen
        if (star.y > canvas.height) {
          star.y = -5
          star.x = Math.random() * canvas.width
        }
      })

      // Draw some nebula clouds
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(Date.now() * 0.0001 + i) * 100 + canvas.width / 2
        const y = Math.cos(Date.now() * 0.0002 + i) * 50 + canvas.height / 2

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 150)
        gradient.addColorStop(0, 'rgba(255, 215, 0, 0.05)')
        gradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.03)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(x - 150, y - 150, 300, 300)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Canvas for animated stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(to bottom, #000000, #0a0a0a, #000000)' }}
      />
      
      {/* Additional CSS-based galaxy elements */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-yellow-900/5 to-black opacity-60" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  )
}