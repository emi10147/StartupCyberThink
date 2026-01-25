'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function FeaturesSection() {
  const features = [
    {
      title: "60+ powerful effects",
      description: "Mix, match, and stack amazing combos for a unique result.",
      icon: "🎨"
    },
    {
      title: "Time based and interaction events",
      description: "Animate, scroll, hover, and more.",
      icon: "⚡"
    },
    {
      title: "Built for speed",
      description: "Small JS files and best-in-class optimization.",
      icon: "🚀"
    },
    {
      title: "Embed on your favorite platform",
      description: "Webflow, WordPress, or your own code base.",
      icon: "🔗"
    }
  ]

  return (
    <section className="pt-0 pb-32 px-4 relative bg-transparent overflow-hidden min-h-screen" style={{ marginTop: '-1px', marginBottom: 0 }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Unlock a Whole</span>
            <br />
            <span className="text-white">New Dimension of</span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-400 to-sky-400 bg-clip-text text-transparent">Web Design</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-400 max-w-md mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-morphism rounded-2xl p-8" style={{
              background: 'rgba(0, 31, 63, 0.85)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(0, 191, 255, 0.15)',
              boxShadow: '0 8px 32px 0 rgba(0, 127, 255, 0.2), inset 0 0 20px rgba(0, 191, 255, 0.1)'
            }}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-white font-bold text-2xl">
                <div className="animate-pulse">See it in action</div>
                <div className="text-sm font-normal mt-2 opacity-70">
                  Interactive WebGL Element Demo
                </div>
              </div>
            </div>
            
            {/* Floating elements around the demo */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-500 rounded-full animate-pulse delay-500" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-sky-400 rounded-full animate-pulse delay-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}