'use client'

import { useEffect } from 'react'

export function TotalCISOExplainerSection() {
  useEffect(() => {
    // Load GSAP and ScrollTrigger from CDN
    const script1 = document.createElement('script')
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    script1.async = true

    const script2 = document.createElement('script')
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
    script2.async = true

    script1.onload = () => {
      document.body.appendChild(script2)
    }

    script2.onload = () => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap
        const ScrollTrigger = (window as any).ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)

        // Animation timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.totalciso-explainer',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: true,
            markers: false
          }
        })

        // STEP 1: Data Ingestion
        tl.from('.company-icons-left', { opacity: 0, x: -50 }, 0)
          .from('.company-icons-right', { opacity: 0, x: 50 }, 0)
          .from('.data-lines', { strokeDashoffset: 100, duration: 1 }, 0)
          .from('.step-1-caption', { opacity: 0, y: 20 }, 0.5)

        // STEP 2: Data Standardization
        tl.to('.data-lines', { opacity: 0.3, duration: 0.5 }, 0.7)
          .from('.database-icons', { opacity: 0, scale: 0.5 }, 0.7)
          .from('.shield-icon', { opacity: 0, scale: 0.5, rotation: -180 }, 0.9)
          .to('.step-1-caption', { opacity: 0 }, 0.8)
          .from('.step-2-caption', { opacity: 0, y: 20 }, 0.9)

        // STEP 3: Security & Computation
        tl.from('.wazuh-label', { opacity: 0, y: -20 }, 1.5)
          .from('.code-lines', { opacity: 0, x: -30 }, 1.6)
          .from('.tech-stack', { opacity: 0, y: 30 }, 1.65)
          .from('.graph-elements', { opacity: 0, y: 30 }, 1.7)
          .to('.step-2-caption', { opacity: 0 }, 1.7)
          .from('.step-3-caption', { opacity: 0, y: 20 }, 1.8)

        // STEP 4: AI Audit Layer
        tl.from('.ai-brain', { opacity: 0, scale: 0.3 }, 2.3)
          .from('.risk-label', { opacity: 0, y: -15 }, 2.5)
          .from('.compliance-label', { opacity: 0, y: -15 }, 2.6)
          .from('.exposure-label', { opacity: 0, y: -15 }, 2.7)
          .to('.step-3-caption', { opacity: 0 }, 2.7)
          .from('.step-4-caption', { opacity: 0, y: 20 }, 2.8)

        // STEP 5: Outcome
        tl.from('.checklist-compress', { scaleY: 1 }, 3.3)
          .to('.checklist-compress', { scaleY: 0.8 }, 3.3)
          .from('.clock-speedup', { rotation: 0 }, 3.4)
          .to('.clock-speedup', { rotation: 360, repeat: 2, duration: 0.8 }, 3.4)
          .from('.cost-decrease', { opacity: 0 }, 3.5)
          .to('.cost-text', { innerHTML: '$50k→$15k' }, 3.6)
          .from('.checkmark', { opacity: 0, scale: 0 }, 3.7)
          .to('.step-4-caption', { opacity: 0 }, 3.7)
          .from('.step-5-caption', { opacity: 0, y: 20 }, 3.8)
      }
    }

    document.body.appendChild(script1)

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1)
      if (script2.parentNode) script2.parentNode.removeChild(script2)
    }
  }, [])

  return (
    <section className="totalciso-explainer relative w-full h-[200vh] bg-black overflow-hidden">
      <style>{`
        .totalciso-explainer {
          background: black;
        }

        .totalciso-explainer * {
          box-sizing: border-box;
        }

        .explainer-content {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .explainer-canvas {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .company-icons-left,
        .company-icons-right {
          opacity: 0;
        }

        .data-lines {
          stroke: rgba(6, 182, 212, 0.6);
          stroke-width: 2;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          fill: none;
        }

        .database-icons,
        .shield-icon,
        .ai-brain,
        .graph-elements,
        .wazuh-label,
        .code-lines,
        .tech-stack,
        .mysql-icon,
        .aws-icon,
        .python-icon,
        .k8s-icon,
        .postgres-icon,
        .docker-icon,
        .wazuh-icon,
        .risk-label,
        .compliance-label,
        .exposure-label,
        .checklist-compress,
        .clock-speedup,
        .cost-decrease,
        .checkmark {
          opacity: 0;
        }

        .step-caption {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          font-size: 18px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          opacity: 0;
          letter-spacing: 0.5px;
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
          max-width: 600px;
        }

        .step-1-caption,
        .step-2-caption,
        .step-3-caption,
        .step-4-caption,
        .step-5-caption {
          opacity: 0;
        }

        /* Icon styles */
        .company-icon {
          fill: rgba(6, 182, 212, 0.8);
          filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.6));
        }

        .database-icon {
          fill: rgba(6, 182, 212, 0.8);
          filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.6));
        }

        .shield {
          fill: none;
          stroke: rgba(6, 182, 212, 0.8);
          stroke-width: 2;
          filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.6));
        }

        .code-line {
          stroke: rgba(0, 255, 100, 0.6);
          stroke-width: 1.5;
          fill: none;
        }

        .ai-nodes {
          fill: rgba(6, 182, 212, 0.8);
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6));
        }

        .label-text {
          fill: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-family: system-ui, -apple-system, sans-serif;
          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
        }

        .graph-bar {
          fill: rgba(6, 182, 212, 0.6);
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.4));
        }

        .cost-text {
          fill: rgba(34, 197, 94, 0.9);
          font-size: 20px;
          font-weight: bold;
          text-anchor: middle;
        }

        .green-check {
          stroke: rgba(34, 197, 94, 0.9);
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
        }

        /* Tech icons consistent with site theme */
        .mysql-icon rect,
        .aws-icon rect,
        .python-icon rect,
        .k8s-icon rect,
        .postgres-icon rect,
        .docker-icon rect,
        .wazuh-icon rect {
          fill: rgba(6, 182, 212, 0.1);
          stroke: rgba(6, 182, 212, 0.8);
          stroke-width: 1.5;
          filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.4));
        }

        .mysql-icon text,
        .aws-icon text,
        .python-icon text,
        .k8s-icon text,
        .postgres-icon text,
        .docker-icon text,
        .wazuh-icon text {
          fill: rgba(6, 182, 212, 0.95);
          font-weight: bold;
        }
      `}</style>

      <div className="explainer-content">
        <div className="explainer-canvas">
          <svg viewBox="0 0 1200 600" width="1200" height="600" className="relative">
            {/* STEP 1: Data Ingestion */}
            <g className="company-icons-left">
              <rect x="50" y="200" width="60" height="60" rx="8" className="company-icon" />
              <text x="80" y="235" textAnchor="middle" className="label-text" fontSize="12">
                Company A
              </text>
              <rect x="50" y="320" width="60" height="60" rx="8" className="company-icon" />
              <text x="80" y="355" textAnchor="middle" className="label-text" fontSize="12">
                Company B
              </text>
            </g>

            <g className="company-icons-right">
              <rect x="1090" y="200" width="60" height="60" rx="8" className="company-icon" />
              <text x="1120" y="235" textAnchor="middle" className="label-text" fontSize="12">
                Company C
              </text>
              <rect x="1090" y="320" width="60" height="60" rx="8" className="company-icon" />
              <text x="1120" y="355" textAnchor="middle" className="label-text" fontSize="12">
                Company D
              </text>
            </g>

            {/* Data flow lines */}
            <g className="data-lines">
              <line x1="110" y1="230" x2="540" y2="230" />
              <line x1="110" y1="350" x2="540" y2="350" />
              <line x1="660" y1="230" x2="1090" y2="230" />
              <line x1="660" y1="350" x2="1090" y2="350" />
            </g>

            {/* Central TotalCISO node */}
            <circle cx="600" cy="290" r="40" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="2" />
            <text x="600" y="300" textAnchor="middle" className="label-text" fontSize="14" fontWeight="bold">
              CISO
            </text>

            {/* STEP 2: Database Icons */}
            <g className="database-icons">
              <rect x="520" y="150" width="40" height="50" rx="4" className="database-icon" />
              <circle cx="540" cy="155" r="8" fill="none" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="1" />
              <rect x="660" y="150" width="40" height="50" rx="4" className="database-icon" />
              <circle cx="680" cy="155" r="8" fill="none" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="1" />
            </g>

            {/* Shield Icon */}
            <g className="shield-icon">
              <path
                d="M 600 220 L 640 240 L 640 300 Q 600 340 600 340 Q 560 340 560 300 L 560 240 Z"
                className="shield"
              />
              <text x="600" y="295" textAnchor="middle" className="label-text" fontSize="16" fontWeight="bold">
                ✓
              </text>
            </g>

            {/* STEP 3: Wazuh Label */}
            <g className="wazuh-label">
              <text x="450" y="100" className="label-text" fontSize="14" fontWeight="bold">
                Wazuh Security
              </text>
            </g>

            {/* Tech Stack Icons - STEP 3 */}
            <g className="tech-stack" style={{ opacity: 0 }}>
              {/* MySQL Icon */}
              <g className="mysql-icon" style={{ opacity: 1 }}>
                <rect x="150" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="175" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  MySQL
                </text>
              </g>

              {/* AWS Icon */}
              <g className="aws-icon" style={{ opacity: 1 }}>
                <rect x="250" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="275" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  AWS
                </text>
              </g>

              {/* Python Icon */}
              <g className="python-icon" style={{ opacity: 1 }}>
                <rect x="350" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="375" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  Python
                </text>
              </g>

              {/* Wazuh Icon */}
              <g className="wazuh-icon" style={{ opacity: 1 }}>
                <rect x="450" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="475" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  Wazuh
                </text>
              </g>

              {/* Kubernetes Icon */}
              <g className="k8s-icon" style={{ opacity: 1 }}>
                <rect x="800" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="825" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  K8s
                </text>
              </g>

              {/* PostgreSQL Icon */}
              <g className="postgres-icon" style={{ opacity: 1 }}>
                <rect x="900" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="925" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  PostgreSQL
                </text>
              </g>

              {/* Docker Icon */}
              <g className="docker-icon" style={{ opacity: 1 }}>
                <rect x="1000" y="380" width="50" height="50" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.7)" strokeWidth="1.5" />
                <text x="1025" y="412" textAnchor="middle" className="label-text" fontSize="11" fontWeight="bold">
                  Docker
                </text>
              </g>
            </g>

            {/* Code Lines */}
            <g className="code-lines">
              <line x1="200" y1="450" x2="380" y2="450" className="code-line" />
              <line x1="200" y1="480" x2="380" y2="480" className="code-line" />
              <line x1="200" y1="510" x2="380" y2="510" className="code-line" />
            </g>

            {/* Graph Elements */}
            <g className="graph-elements">
              <rect x="820" y="420" width="30" height="60" className="graph-bar" />
              <rect x="870" y="390" width="30" height="90" className="graph-bar" />
              <rect x="920" y="350" width="30" height="130" className="graph-bar" />
            </g>

            {/* STEP 4: AI Brain */}
            <g className="ai-brain">
              <circle cx="600" cy="200" r="35" fill="none" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="2" />
              <circle cx="580" cy="185" r="8" className="ai-nodes" />
              <circle cx="600" cy="180" r="8" className="ai-nodes" />
              <circle cx="620" cy="185" r="8" className="ai-nodes" />
              <circle cx="590" cy="210" r="6" className="ai-nodes" />
              <circle cx="610" cy="210" r="6" className="ai-nodes" />
            </g>

            {/* Risk, Compliance, Exposure Labels */}
            <g className="risk-label">
              <text x="350" y="150" className="label-text" fontSize="13">
                Risk Posture
              </text>
            </g>
            <g className="compliance-label">
              <text x="600" y="80" className="label-text" fontSize="13">
                Compliance Gaps
              </text>
            </g>
            <g className="exposure-label">
              <text x="850" y="150" className="label-text" fontSize="13">
                Financial Exposure
              </text>
            </g>

            {/* STEP 5: Checklist */}
            <g className="checklist-compress">
              <rect x="480" y="280" width="240" height="80" rx="4" fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1" />
              <line x1="500" y1="300" x2="700" y2="300" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
              <line x1="500" y1="320" x2="700" y2="320" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
              <line x1="500" y1="340" x2="700" y2="340" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
            </g>

            {/* Clock */}
            <g className="clock-speedup">
              <circle cx="300" cy="480" r="25" fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />
              <line x1="300" y1="460" x2="300" y2="470" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="2" />
              <line x1="310" y1="480" x2="320" y2="480" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="2" />
            </g>

            {/* Cost Indicator */}
            <g className="cost-decrease">
              <text x="900" y="500" className="cost-text">
                Cost
              </text>
              <text x="900" y="530" className="cost-text">
                $250k→$75k
              </text>
            </g>

            {/* Checkmark */}
            <g className="checkmark">
              <path d="M 450 500 L 470 520 L 510 470" />
            </g>

            {/* Captions */}
            <text className="step-caption step-1-caption" x="600" y="570">
              Companies securely connect their data
            </text>
            <text className="step-caption step-2-caption" x="600" y="570">
              Data is standardized and secured
            </text>
            <text className="step-caption step-3-caption" x="600" y="570">
              Security telemetry and financial signals are computed
            </text>
            <text className="step-caption step-4-caption" x="600" y="570">
              An AI auditor continuously evaluates risk
            </text>
            <text className="step-caption step-5-caption" x="600" y="570">
              Audits become faster, cheaper, and continuous
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
