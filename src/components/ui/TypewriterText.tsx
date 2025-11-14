'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  showCursor?: boolean
  cursorClassName?: string
  onComplete?: () => void // Add callback for when typing is complete
}

export function TypewriterText({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 100,
  showCursor = true,
  cursorClassName = '',
  onComplete
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let startTimeout: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let endTimeout: NodeJS.Timeout

    startTimeout = setTimeout(() => {
      setShowBlinkingCursor(true)
      setIsTyping(true)
      let index = 0
      
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1))
          setCurrentIndex(index + 1)
          index++
        } else {
          clearInterval(interval)
          setIsTyping(false)
          // Keep cursor blinking for a bit after completion
          endTimeout = setTimeout(() => {
            setShowBlinkingCursor(false)
            // Call the completion callback if provided
            if (onComplete) {
              onComplete()
            }
          }, 1000) // Reduced to 1 second before calling onComplete
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(interval)
      clearTimeout(endTimeout)
    }
  }, [text, speed, delay]) // Remove currentIndex from dependencies

  return (
    <span className={className}>
      {displayedText}
      {showCursor && showBlinkingCursor && (
        <motion.span
          className={`inline-block w-1 bg-cyan-400 ml-1 ${cursorClassName}`}
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ height: '1em' }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}