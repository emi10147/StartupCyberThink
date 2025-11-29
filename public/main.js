// Main WebGL Application Controller
class WebGLApp {
    constructor() {
        this.canvas = null;
        this.gl = null;
        this.nebulaShader = null;
        this.shaderData = null;
        this.startTime = Date.now();
        this.mouse = { x: 0, y: 0 };
        this.isRunning = false;
        
        // Performance monitoring
        this.frameCount = 0;
        this.lastFPSUpdate = 0;
        this.fps = 60;
        
        // Responsive handling
        this.resizeTimeout = null;
        
        this.init();
    }

    init() {
        this.canvas = document.getElementById('webgl-canvas');
        
        if (!this.canvas) {
            console.error('Canvas element not found');
            return;
        }

        // Initialize WebGL context with performance settings
        const contextAttributes = {
            alpha: false,
            depth: false,
            stencil: false,
            antialias: false,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
            failIfMajorPerformanceCaveat: false
        };

        this.gl = this.canvas.getContext('webgl', contextAttributes) || 
                  this.canvas.getContext('experimental-webgl', contextAttributes);

        if (!this.gl) {
            console.error('WebGL not supported');
            this.fallbackToCanvas();
            return;
        }

        console.log('WebGL initialized successfully');
        
        // Initialize nebula shader
        this.nebulaShader = new NebulaShader();
        this.shaderData = this.nebulaShader.init(this.gl);
        
        if (!this.shaderData) {
            console.error('Failed to initialize shaders');
            this.fallbackToCanvas();
            return;
        }

        this.setupEventListeners();
        this.resize();
        this.start();
    }

    fallbackToCanvas() {
        console.log('Falling back to Canvas 2D animation');
        // Simple fallback animation using Canvas 2D
        const ctx = this.canvas.getContext('2d');
        
        const animateCanvas = (time) => {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Create simple animated background
            const gradient = ctx.createRadialGradient(
                this.canvas.width/2, this.canvas.height/2, 0,
                this.canvas.width/2, this.canvas.height/2, Math.max(this.canvas.width, this.canvas.height)
            );
            
            const hue = (time * 0.05) % 360;
            gradient.addColorStop(0, `hsla(${hue + 240}, 70%, 30%, 0.8)`);
            gradient.addColorStop(0.5, `hsla(${hue + 260}, 60%, 20%, 0.6)`);
            gradient.addColorStop(1, `hsla(${hue + 280}, 50%, 10%, 0.4)`);
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            requestAnimationFrame(animateCanvas);
        };
        
        requestAnimationFrame(animateCanvas);
    }

    setupEventListeners() {
        // Mouse tracking for interactive effects
        const updateMouse = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = this.canvas.height - (e.clientY - rect.top); // Flip Y coordinate
        };

        window.addEventListener('mousemove', updateMouse);
        window.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (e.touches.length > 0) {
                updateMouse(e.touches[0]);
            }
        }, { passive: false });

        // Handle resize with debouncing for performance
        window.addEventListener('resize', () => {
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }
            this.resizeTimeout = setTimeout(() => {
                this.resize();
            }, 100);
        });

        // Handle visibility change to pause/resume animation
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stop();
            } else {
                this.start();
            }
        });

        // Button interactions
        const startButton = document.getElementById('startCreating');
        if (startButton) {
            startButton.addEventListener('click', () => {
                console.log('Start creating clicked!');
                // Add your navigation logic here
                // window.location.href = '/create';
            });
        }
    }

    resize() {
        if (!this.canvas || !this.gl) return;

        // Use device pixel ratio for crisp rendering, but limit it for performance
        const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        
        const displayWidth = Math.floor(this.canvas.clientWidth * devicePixelRatio);
        const displayHeight = Math.floor(this.canvas.clientHeight * devicePixelRatio);

        if (this.canvas.width !== displayWidth || this.canvas.height !== displayHeight) {
            this.canvas.width = displayWidth;
            this.canvas.height = displayHeight;
        }

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    render(currentTime) {
        if (!this.gl || !this.shaderData) return;

        const time = (currentTime - this.startTime) * 0.001; // Convert to seconds

        // Clear canvas
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        // Use shader program
        this.gl.useProgram(this.shaderData.programInfo.program);

        // Set up vertex attributes
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.shaderData.positionBuffer);
        this.gl.enableVertexAttribArray(this.shaderData.programInfo.attribLocations.position);
        this.gl.vertexAttribPointer(
            this.shaderData.programInfo.attribLocations.position,
            2, this.gl.FLOAT, false, 0, 0
        );

        // Set uniforms
        this.gl.uniform1f(this.shaderData.programInfo.uniformLocations.time, time);
        this.gl.uniform2f(
            this.shaderData.programInfo.uniformLocations.resolution,
            this.canvas.width,
            this.canvas.height
        );
        this.gl.uniform2f(
            this.shaderData.programInfo.uniformLocations.mouse,
            this.mouse.x,
            this.mouse.y
        );

        // Draw
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);

        // Performance monitoring
        this.frameCount++;
        if (currentTime - this.lastFPSUpdate >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastFPSUpdate = currentTime;
            
            // Log FPS in development mode
            if (window.location.hostname === 'localhost') {
                console.log(`FPS: ${this.fps}`);
            }
        }
    }

    animate = (currentTime) => {
        if (this.isRunning) {
            this.render(currentTime);
            requestAnimationFrame(this.animate);
        }
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            requestAnimationFrame(this.animate);
            console.log('WebGL animation started');
        }
    }

    stop() {
        this.isRunning = false;
        console.log('WebGL animation stopped');
    }

    // Method to update title text dynamically
    updateTitle(newTitle) {
        const titleElement = document.getElementById('heroTitle');
        if (titleElement) {
            titleElement.innerHTML = newTitle;
        }
    }
}

// Text animation utilities
class TextAnimations {
    static typeWriter(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    static fadeInWords(element, delay = 200) {
        const words = element.textContent.split(' ');
        element.innerHTML = words.map(word => 
            `<span style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">${word}</span>`
        ).join(' ');

        const spans = element.querySelectorAll('span');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * delay);
        });
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing WebGL Galactic Nebula Application');
    
    // Initialize WebGL app
    const app = new WebGLApp();
    
    // Add some entrance animations
    setTimeout(() => {
        const title = document.getElementById('heroTitle');
        if (title) {
            TextAnimations.fadeInWords(title, 150);
        }
    }, 500);

    // Make app globally available for debugging
    window.webglApp = app;
    
    console.log('Application initialized successfully');
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.webglApp) {
        window.webglApp.stop();
    }
});

// Export classes for potential external use
window.WebGLApp = WebGLApp;
window.TextAnimations = TextAnimations;