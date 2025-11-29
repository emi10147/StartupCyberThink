'use client'

import { motion } from 'framer-motion'

export const NetworkMonitoringDashboard = () => {
  return (
    <motion.div
      className="absolute top-32 right-8 transform-gpu"
      initial={{ opacity: 0, rotateX: 45, rotateY: -15, scale: 0.8, z: -100 }}
      animate={{ 
        opacity: 1,
        rotateX: [40, 50, 40],
        rotateY: [-12, -18, -12],
        scale: 1,
        y: [0, -8, 0]
      }}
      transition={{
        opacity: { duration: 2, delay: 0.8, ease: "easeOut" },
        scale: { duration: 2, delay: 0.8, ease: "easeOut" },
        rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        className="relative w-72 h-48 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border border-cyan-400/30 backdrop-blur-xl rounded-lg shadow-2xl"
        style={{
          boxShadow: `
            0 25px 50px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 30px rgba(6, 182, 212, 0.2)
          `,
          transform: 'translateZ(20px)',
        }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3 border-b border-cyan-400/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className="font-mono text-xs text-cyan-300 tracking-wider">Network Monitor</h3>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 space-y-3">
          {/* Traffic Graph */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-slate-400">Network Traffic</span>
              <span className="font-mono text-xs text-green-400">847.2 MB/s</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-cyan-500/60 to-blue-400/40 rounded-sm flex-1"
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                  animate={{
                    height: [`${Math.random() * 80 + 20}%`, `${Math.random() * 80 + 20}%`]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </div>

          {/* Status Indicators */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400 font-mono">Nodes</span>
                <motion.span 
                  className="text-green-400 font-mono"
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  247/250
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-mono">Latency</span>
                <span className="text-cyan-400 font-mono">12ms</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400 font-mono">Threats</span>
                <motion.span 
                  className="text-red-400 font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  3 Active
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-mono">Uptime</span>
                <span className="text-green-400 font-mono">99.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const ThreatAnalysisDashboard = () => {
  return (
    <motion.div
      className="absolute bottom-16 right-24 transform-gpu"
      initial={{ opacity: 0, rotateX: -35, rotateY: 20, scale: 0.8, z: -80 }}
      animate={{ 
        opacity: 1,
        rotateX: [-30, -40, -30],
        rotateY: [18, 22, 18],
        scale: 1,
        y: [0, -6, 0]
      }}
      transition={{
        opacity: { duration: 2.5, delay: 1.2, ease: "easeOut" },
        scale: { duration: 2.5, delay: 1.2, ease: "easeOut" },
        rotateX: { duration: 18, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ 
        perspective: '1800px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        className="relative w-80 h-56 bg-gradient-to-br from-red-950/90 via-slate-900/95 to-purple-950/85 border border-red-400/40 backdrop-blur-xl rounded-lg shadow-2xl"
        style={{
          boxShadow: `
            0 30px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 40px rgba(239, 68, 68, 0.25)
          `,
          transform: 'translateZ(30px)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-red-400/30">
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            ></motion.div>
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          </div>
          <h3 className="font-mono text-xs text-red-300 tracking-wider">Threat Analysis</h3>
          <div className="text-xs font-mono text-red-400">⚠ ALERT</div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Threat Level Gauge */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-slate-400">Threat Level</span>
              <span className="font-mono text-xs text-red-400 font-bold">HIGH</span>
            </div>
            <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "78%" }}
                transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Recent Threats */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-slate-400">Recent Detections</span>
            <div className="space-y-1">
              {[
                { type: "Malware", ip: "192.168.1.45", time: "2m ago" },
                { type: "Phishing", ip: "10.0.0.12", time: "7m ago" },
                { type: "DDoS", ip: "External", time: "12m ago" }
              ].map((threat, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-center text-xs bg-slate-800/50 rounded p-2 border border-red-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + i * 0.3 }}
                >
                  <span className="text-red-400 font-mono">{threat.type}</span>
                  <span className="text-slate-400 font-mono">{threat.ip}</span>
                  <span className="text-orange-400 font-mono">{threat.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <motion.button
              className="flex-1 bg-red-600/80 hover:bg-red-600 text-white text-xs font-mono py-1 px-2 rounded border border-red-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              QUARANTINE
            </motion.button>
            <motion.button
              className="flex-1 bg-orange-600/80 hover:bg-orange-600 text-white text-xs font-mono py-1 px-2 rounded border border-orange-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              INVESTIGATE
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const SystemHealthDashboard = () => {
  return (
    <motion.div
      className="absolute top-56 left-12 transform-gpu"
      initial={{ opacity: 0, rotateX: 25, rotateY: 35, scale: 0.8, z: -60 }}
      animate={{ 
        opacity: 1,
        rotateX: [20, 30, 20],
        rotateY: [32, 38, 32],
        scale: 1,
        x: [0, 4, 0],
        y: [0, -5, 0]
      }}
      transition={{
        opacity: { duration: 2.2, delay: 1.8, ease: "easeOut" },
        scale: { duration: 2.2, delay: 1.8, ease: "easeOut" },
        rotateX: { duration: 16, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ 
        perspective: '1600px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        className="relative w-64 h-44 bg-gradient-to-br from-green-950/90 via-slate-900/95 to-emerald-950/85 border border-emerald-400/40 backdrop-blur-xl rounded-lg shadow-2xl"
        style={{
          boxShadow: `
            0 20px 45px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 35px rgba(16, 185, 129, 0.2)
          `,
          transform: 'translateZ(25px)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-emerald-400/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <h3 className="font-mono text-xs text-emerald-300 tracking-wider">System Health</h3>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Health Metrics */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "CPU", value: "23%", color: "emerald" },
              { label: "RAM", value: "67%", color: "yellow" },
              { label: "Disk", value: "45%", color: "emerald" },
              { label: "Net", value: "12%", color: "emerald" }
            ].map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-slate-400">{metric.label}</span>
                  <span className={`font-mono text-xs text-${metric.color}-400`}>{metric.value}</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-${metric.color}-500 rounded-full`}
                    initial={{ width: "0%" }}
                    animate={{ width: metric.value }}
                    transition={{ duration: 2, delay: 2.5 + i * 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-slate-400">Overall Status</span>
              <motion.span 
                className="font-mono text-xs text-emerald-400 font-bold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                OPTIMAL
              </motion.span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 text-center">
                <div className="font-mono text-lg text-emerald-400 font-bold">147</div>
                <div className="font-mono text-xs text-slate-400">Services</div>
              </div>
              <div className="flex-1 text-center">
                <motion.div 
                  className="font-mono text-lg text-emerald-400 font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  99.9
                </motion.div>
                <div className="font-mono text-xs text-slate-400">Uptime%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}