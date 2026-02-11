'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true)
    }, 9000) // 9 seconds total animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${
        fade ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Blocky Fade Overlay */}
      {fade && <div className="absolute inset-0 bg-black pixel-fade" />}

      <div className="relative flex items-center justify-center">
        {/* Network SVG Animation */}
        <svg
          className="absolute w-72 h-72"
          viewBox="0 0 300 300"
          fill="none"
        >
          {/* Network Lines */}
          <circle
            cx="150"
            cy="150"
            r="120"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="750"
            strokeDashoffset="750"
            className="animate-draw"
          />
          <circle
            cx="150"
            cy="150"
            r="80"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="500"
            strokeDashoffset="500"
            className="animate-draw delay-200"
          />
          <circle
            cx="150"
            cy="150"
            r="40"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="250"
            strokeDashoffset="250"
            className="animate-draw delay-500"
          />
        </svg>

        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-32 h-32 relative z-10"
        />
      </div>

      <style>{`
        .animate-draw {
          animation: draw 9s ease forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .pixel-fade {
          animation: pixelFade 1s steps(10) forwards;
        }

        @keyframes pixelFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
