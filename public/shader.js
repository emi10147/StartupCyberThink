// WebGL Shader Implementation for Galactic Nebula Animation
class NebulaShader {
    constructor() {
        this.vertexShaderSource = `
            attribute vec2 a_position;
            varying vec2 vUv;
            
            void main() {
                vUv = a_position * 0.5 + 0.5;
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        this.fragmentShaderSource = `
            precision highp float;
            
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            varying vec2 vUv;
            
            // Improved noise function for organic movement
            vec3 mod289(vec3 x) {
                return x - floor(x * (1.0 / 289.0)) * 289.0;
            }
            
            vec2 mod289(vec2 x) {
                return x - floor(x * (1.0 / 289.0)) * 289.0;
            }
            
            vec3 permute(vec3 x) {
                return mod289(((x*34.0)+1.0)*x);
            }
            
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i = floor(v + dot(v, C.yy));
                vec2 x0 = v - i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m;
                m = m*m;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                vec3 g;
                g.x = a0.x * x0.x + h.x * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }
            
            // Fractal noise for complex organic patterns
            float fbm(vec2 p) {
                float value = 0.0;
                float amplitude = 0.5;
                float frequency = 1.0;
                
                for(int i = 0; i < 6; i++) {
                    value += amplitude * snoise(p * frequency);
                    amplitude *= 0.5;
                    frequency *= 2.0;
                }
                return value;
            }
            
            // Domain warping for organic distortion
            vec2 domainWarp(vec2 p, float time) {
                float warpAmount = 0.3;
                vec2 q = vec2(fbm(p + vec2(0.0, 0.0)), fbm(p + vec2(5.2, 1.3)));
                vec2 r = vec2(fbm(p + 4.0*q + vec2(1.7, 9.2) + 0.15*time), 
                             fbm(p + 4.0*q + vec2(8.3, 2.8) + 0.126*time));
                return p + warpAmount * r;
            }
            
            // Galactic nebula color mapping
            vec3 nebulaColor(float density, vec2 uv, float time) {
                // Base galactic colors
                vec3 deepBlue = vec3(0.05, 0.1, 0.2);
                vec3 galacticBlue = vec3(0.1, 0.3, 0.6);
                vec3 neonCyan = vec3(0.0, 0.8, 1.0);
                vec3 purpleHighlight = vec3(0.6, 0.2, 0.8);
                vec3 cosmic = vec3(0.8, 0.4, 1.0);
                
                // Create color zones based on density and position
                float colorZone = smoothstep(0.2, 0.8, density);
                float purpleZone = smoothstep(0.6, 0.9, density);
                float cyanZone = smoothstep(0.4, 0.7, density);
                
                // Mix colors based on density and noise patterns
                vec3 color = mix(deepBlue, galacticBlue, colorZone);
                color = mix(color, neonCyan, cyanZone * 0.7);
                color = mix(color, purpleHighlight, purpleZone * 0.8);
                
                // Add cosmic highlights
                float cosmicNoise = fbm(uv * 3.0 + time * 0.1);
                color = mix(color, cosmic, cosmicNoise * purpleZone * 0.3);
                
                return color;
            }
            
            void main() {
                vec2 uv = vUv;
                vec2 p = (uv - 0.5) * 2.0;
                p.x *= u_resolution.x / u_resolution.y;
                
                float time = u_time * 0.5;
                
                // Apply domain warping for organic movement
                vec2 warpedP = domainWarp(p, time);
                
                // Create multiple noise layers for nebula effect
                float noise1 = fbm(warpedP * 1.5 + time * 0.2);
                float noise2 = fbm(warpedP * 2.8 + time * 0.15);
                float noise3 = fbm(warpedP * 4.2 + time * 0.1);
                
                // Combine noises for complex organic patterns
                float density = noise1 * 0.6 + noise2 * 0.3 + noise3 * 0.1;
                density = smoothstep(-0.3, 0.8, density);
                
                // Create expanding/throbbing effect
                float pulse = sin(time * 0.8) * 0.1 + 0.9;
                float throb = sin(time * 1.2 + length(p) * 2.0) * 0.05 + 0.95;
                density *= pulse * throb;
                
                // Add mouse interaction
                vec2 mouse = u_mouse / u_resolution - 0.5;
                float mouseDist = length(p - mouse * 2.0);
                float mouseEffect = smoothstep(0.8, 0.2, mouseDist) * 0.3;
                density += mouseEffect;
                
                // Generate nebula colors
                vec3 color = nebulaColor(density, warpedP, time);
                
                // Add glow effect
                float glow = smoothstep(0.0, 1.0, density);
                glow = pow(glow, 0.8);
                color *= glow;
                
                // Enhance brightness in center
                float centerGlow = 1.0 - length(p) * 0.3;
                centerGlow = max(0.0, centerGlow);
                color += centerGlow * vec3(0.1, 0.2, 0.4) * 0.5;
                
                // Add subtle bloom around bright areas
                float bloom = smoothstep(0.7, 1.0, density);
                color += bloom * vec3(0.2, 0.6, 1.0) * 0.3;
                
                // Final color adjustments
                color = pow(color, vec3(0.9)); // Gamma correction
                color *= 1.2; // Brightness boost
                
                gl_FragColor = vec4(color, 1.0);
            }
        `;
    }

    createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        
        return shader;
    }

    createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program linking error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        
        return program;
    }

    init(gl) {
        const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, this.vertexShaderSource);
        const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, this.fragmentShaderSource);
        
        if (!vertexShader || !fragmentShader) {
            console.error('Failed to create shaders');
            return null;
        }
        
        const program = this.createProgram(gl, vertexShader, fragmentShader);
        
        if (!program) {
            console.error('Failed to create shader program');
            return null;
        }

        // Get attribute and uniform locations
        const programInfo = {
            program: program,
            attribLocations: {
                position: gl.getAttribLocation(program, 'a_position'),
            },
            uniformLocations: {
                time: gl.getUniformLocation(program, 'u_time'),
                resolution: gl.getUniformLocation(program, 'u_resolution'),
                mouse: gl.getUniformLocation(program, 'u_mouse'),
            },
        };

        // Create geometry (fullscreen quad)
        const positions = new Float32Array([
            -1.0, -1.0,
             1.0, -1.0,
            -1.0,  1.0,
             1.0,  1.0,
        ]);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        return {
            programInfo,
            positionBuffer
        };
    }
}

// Export for use in main.js
window.NebulaShader = NebulaShader;