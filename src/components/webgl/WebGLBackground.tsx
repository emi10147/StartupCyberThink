'use client'

import React from 'react'

export function WebGLBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-60" style={{ minHeight: '100vh' }}>
      {/* Additional atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
    </div>
  )
}