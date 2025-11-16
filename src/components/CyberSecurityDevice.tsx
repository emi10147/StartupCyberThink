'use client'

import { motion } from 'framer-motion'

export const CyberSecurityDevice = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center overflow-hidden" style={{ perspective: '2000px' }}>
      
      {/* Ambient Particle Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating data particles */}
        <motion.div
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{ left: '20%', top: '30%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, 5, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-0.5 h-0.5 bg-purple-400/30 rounded-full"
          style={{ right: '25%', top: '40%' }}
          animate={{
            y: [0, -15, 0],
            x: [0, -3, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 bg-cyan-400/20 rounded-full"
          style={{ left: '70%', top: '60%' }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* 3D Security Console - Horizontal Floating Position */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, rotateX: 5, rotateY: 25, y: 60, scale: 0.8 }}
        animate={{ 
          opacity: 1,
          rotateX: [2, 8, 2],
          rotateY: [20, 30, 20],
          y: [-10, 10, -10],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 2, delay: 0.5 },
          scale: { duration: 2, delay: 0.5 },
          rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(5deg) rotateY(25deg) translateZ(50px)',
        }}
      >
        {/* Console Base - Floating 3D Dashboard */}
        <div 
          className="relative bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-black/80 rounded-xl sm:rounded-2xl border border-slate-600/30 backdrop-blur-3xl mx-2 sm:mx-0"
          style={{
            width: 'clamp(280px, 85vw, 650px)',
            height: 'clamp(220px, 45vh, 350px)',
            transformStyle: 'preserve-3d',
            boxShadow: `
              0 50px 120px -20px rgba(0, 0, 0, 0.8),
              0 20px 60px -10px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(71, 85, 105, 0.12),
              inset 0 1px 0 rgba(148, 163, 184, 0.08)
            `
          }}
        >
          {/* Window Control Buttons - Top Left Corner */}
          <div className="absolute top-1.5 sm:top-2 left-2 sm:left-4 flex gap-1.5 sm:gap-2 z-10">
            {/* Close Button - Red */}
            <motion.div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full cursor-pointer"
              style={{ 
                boxShadow: '0 0 4px rgba(239, 68, 68, 0.6)'
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 8px rgba(239, 68, 68, 0.8)'
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Minimize Button - Yellow */}
            <motion.div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full cursor-pointer"
              style={{ 
                boxShadow: '0 0 4px rgba(234, 179, 8, 0.6)'
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 8px rgba(234, 179, 8, 0.8)'
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* Maximize Button - Green */}
            <motion.div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full cursor-pointer"
              style={{ 
                boxShadow: '0 0 4px rgba(34, 197, 94, 0.6)'
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)'
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Subtle grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] rounded-2xl"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Console Content */}
          <div className="absolute inset-2 sm:inset-4 lg:inset-6 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 lg:gap-4">
            
            {/* Status Panel - Top Left */}
            <motion.div
              className="col-span-1 bg-slate-900/20 rounded border sm:rounded-lg border-slate-500/10 p-1.5 sm:p-2 lg:p-3 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-[7px] sm:text-[9px] lg:text-[10px] text-cyan-300/80 font-mono mb-1 tracking-wider">STATUS</div>
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mb-2"
                style={{ 
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 6px rgba(34, 197, 94, 0.8)'
                }}
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="text-white text-[9px] sm:text-[10px] lg:text-xs font-light">Secure</div>
              <div className="text-slate-400 text-[7px] sm:text-[8px] lg:text-[10px]">98.7%</div>
            </motion.div>

            {/* Main Display - Center */}
            <motion.div
              className="col-span-2 bg-slate-900/15 rounded border sm:rounded-lg border-slate-500/10 p-1.5 sm:p-2 lg:p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="text-[7px] sm:text-[9px] lg:text-[10px] text-cyan-300/80 font-mono mb-1 sm:mb-2 tracking-wider">NETWORK OVERVIEW</div>
              
              {/* 3D Network Visualization */}
              <div className="relative h-20 flex items-center justify-center">
                {/* Central hub */}
                <motion.div
                  className="w-3 h-3 bg-blue-400/80 rounded-full relative z-10"
                  style={{
                    filter: 'blur(0.3px)',
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.9)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.9)',
                      '0 0 15px rgba(59, 130, 246, 1)',
                      '0 0 10px rgba(59, 130, 246, 0.9)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.line
                    x1="50%" y1="50%"
                    x2="25%" y2="30%"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                  />
                  <motion.line
                    x1="50%" y1="50%"
                    x2="75%" y2="35%"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 3 }}
                  />
                  <motion.line
                    x1="50%" y1="50%"
                    x2="30%" y2="70%"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 3.5 }}
                  />
                </svg>

                {/* Satellite nodes */}
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-green-400/70 rounded-full"
                  style={{ left: '25%', top: '30%', filter: 'blur(0.3px)' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-purple-400/60 rounded-full"
                  style={{ right: '25%', top: '35%', filter: 'blur(0.3px)' }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-orange-400/60 rounded-full"
                  style={{ left: '30%', bottom: '30%', filter: 'blur(0.3px)' }}
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
              
              <div className="text-white text-sm font-light mt-2">1,247 Nodes</div>
            </motion.div>

            {/* Metrics - Top Right */}
            <motion.div
              className="col-span-1 bg-slate-900/20 rounded border sm:rounded-lg border-slate-500/10 p-2 sm:p-3 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <div className="text-[8px] sm:text-[10px] text-cyan-300/80 font-mono mb-1 tracking-wider">RESPONSE</div>
              <motion.div
                className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-400 rounded-full mb-2"
                style={{ 
                  filter: 'blur(0.3px)',
                  boxShadow: '0 0 4px rgba(251, 146, 60, 0.8)'
                }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <div className="text-white text-[10px] sm:text-xs font-light">0.12ms</div>
              <div className="text-slate-400 text-[8px] sm:text-[10px]">Avg</div>
            </motion.div>

            {/* Analytics - Bottom Row */}
            <motion.div
              className="col-span-4 bg-slate-900/15 rounded-lg border border-slate-500/10 p-3 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
            >
              <div className="text-[10px] text-cyan-300/80 font-mono mb-2 tracking-wider">SECURITY ANALYTICS</div>
              
              {/* Data flow visualization */}
              <div className="relative h-8 overflow-hidden">
                <motion.div
                  className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full"
                  style={{ width: '100px', left: '-100px' }}
                  animate={{
                    left: ['0%', '100%']
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute h-0.5 bg-gradient-to-r from-transparent via-green-400/40 to-transparent rounded-full"
                  style={{ width: '80px', left: '-80px', top: '8px' }}
                  animate={{
                    left: ['0%', '100%']
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>
              
              <div className="flex justify-between text-[8px] sm:text-[10px] text-slate-400 mt-2">
                <span>Threats: 0</span>
                <span className="hidden sm:inline">Analyzed: 2.7M</span>
                <span>Active: 847</span>
              </div>
            </motion.div>
          </div>

          {/* Subtle edge glow */}
          <motion.div
            className="absolute inset-0 rounded-xl sm:rounded-2xl"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, 
                rgba(59, 130, 246, 0.04) 0deg,
                rgba(168, 85, 247, 0.04) 90deg, 
                rgba(34, 197, 94, 0.04) 180deg,
                rgba(251, 146, 60, 0.04) 270deg,
                rgba(59, 130, 246, 0.04) 360deg)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              padding: '1px'
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Console base shadow */}
        <motion.div
          className="absolute top-4 left-2 right-2 h-full bg-gradient-to-br from-slate-900/10 via-black/20 to-black/30 rounded-2xl blur-2xl -z-10"
          style={{
            transform: 'rotateX(15deg) rotateY(-3deg) translateY(15px)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      {/* Ambient background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 rounded-full blur-[100px] -z-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </div>
  )
}