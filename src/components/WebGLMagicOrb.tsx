'use client'

import React, { useEffect, useRef } from 'react'

export const WebGLMagicOrb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    if (!gl) {
      console.warn('WebGL not supported, falling back to canvas 2d')
      return
    }

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `

    // Fragment shader for subtle yellow particles effect
    const fragmentShaderSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;
      
      // Subtle noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 8.0;
        
        // Create subtle moving patterns
        float n1 = smoothNoise(p + u_time * 0.1);
        float n2 = smoothNoise(p * 2.0 - u_time * 0.15);
        float n3 = smoothNoise(p * 4.0 + u_time * 0.05);
        
        // Combine noise for depth
        float pattern = (n1 + n2 * 0.5 + n3 * 0.25) / 1.75;
        
        // Create gradient from dark blue to black
        vec3 baseColor = mix(
          vec3(0.02, 0.05, 0.15), // Very dark blue
          vec3(0.0, 0.0, 0.0),    // Black
          uv.y
        );
        
        // Add subtle yellow highlights
        vec3 yellowTint = vec3(1.0, 0.8, 0.2) * pattern * 0.03;
        
        // Add some particle-like effects
        float particles = 0.0;
        for (int i = 0; i < 3; i++) {
          vec2 offset = vec2(float(i) * 123.45, float(i) * 67.89);
          float particle = smoothNoise(p + offset + u_time * 0.2);
          particles += particle * 0.01;
        }
        
        // Final color combination
        vec3 finalColor = baseColor + yellowTint + vec3(1.0, 0.9, 0.3) * particles;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    // Create shader function
    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    // Create program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    // Set up attributes and uniforms
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
    const texCoordAttributeLocation = gl.getAttribLocation(program, 'a_texCoord')
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')
    const mouseUniformLocation = gl.getUniformLocation(program, 'u_mouse')

    // Create buffer
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 0, 0,
       1, -1, 1, 0,
      -1,  1, 0, 1,
      -1,  1, 0, 1,
       1, -1, 1, 0,
       1,  1, 1, 1,
    ]), gl.STATIC_DRAW)

    let mouseX = 0
    let mouseY = 0

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = 1.0 - (e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Render loop
    const startTime = Date.now()
    const render = () => {
      if (!gl || !program) return

      const currentTime = (Date.now() - startTime) * 0.001

      gl.clearColor(0, 0, 0, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program)

      // Set uniforms
      gl.uniform1f(timeUniformLocation, currentTime)
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height)
      gl.uniform2f(mouseUniformLocation, mouseX, mouseY)

      // Set up attributes
      gl.enableVertexAttribArray(positionAttributeLocation)
      gl.enableVertexAttribArray(texCoordAttributeLocation)
      
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 16, 0)
      gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 16, 8)

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(180deg, #001122 0%, #000815 20%, #000510 50%, #000000 100%)',
        mixBlendMode: 'normal'
      }}
    />
  )
}