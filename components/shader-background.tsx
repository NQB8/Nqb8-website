"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const [isPaused, setIsPaused] = useState(false)
  const frameTimesRef = useRef<number[]>([])
  const lastFrameTimeRef = useRef(performance.now())
  const rafIdRef = useRef<number>(0)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const PAUSE_THRESHOLD = 55 // Pause below this
    const RESUME_THRESHOLD = 58 // Resume above this (desktop only)
    const PERMANENT_PAUSE_THRESHOLD = 22 // Never resume below this
    const SAMPLE_SIZE = 30

    let permanentlyPaused = false

    const measureFPS = () => {
      if (permanentlyPaused) return

      const now = performance.now()
      const delta = now - lastFrameTimeRef.current
      lastFrameTimeRef.current = now

      frameTimesRef.current.push(delta)
      if (frameTimesRef.current.length > SAMPLE_SIZE) {
        frameTimesRef.current.shift()
      }

      if (frameTimesRef.current.length === SAMPLE_SIZE) {
        const avgFrameTime = frameTimesRef.current.reduce((a, b) => a + b, 0) / SAMPLE_SIZE
        const fps = 1000 / avgFrameTime

        // Permanently pause on very low FPS or any pause on mobile
        if (fps < PERMANENT_PAUSE_THRESHOLD || (isMobile && fps < PAUSE_THRESHOLD)) {
          permanentlyPaused = true
          setIsPaused(true)
          return
        }

        // Desktop: allow resume with hysteresis
        if (!isMobile) {
          setIsPaused((paused) => {
            if (!paused && fps < PAUSE_THRESHOLD) return true
            if (paused && fps > RESUME_THRESHOLD) return false
            return paused
          })
        }
      }

      rafIdRef.current = requestAnimationFrame(measureFPS)
    }

    rafIdRef.current = requestAnimationFrame(measureFPS)

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  const speed1 = isPaused ? 0 : 0.3
  const speed2 = isPaused ? 0 : 0.2

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders - Logo-inspired colors */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <MeshGradient
          className="w-full h-full"
          colors={["#FF5733", "#FFC300", "#28B463", "#1F8DD6", "#9B59B6"]}
          speed={speed1}
        />
      </div>
      <div className="absolute inset-0 opacity-50 mix-blend-overlay">
        <MeshGradient
          className="w-full h-full"
          colors={["#FF6B4A", "#F4D03F", "#17A589", "#2874A6", "#A93F8F"]}
          speed={speed2}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/images/nqb8-icon-logo.png" alt="" width={384} height={384} className="h-96 w-auto opacity-10 mix-blend-screen" />
      </div>

      {children}
    </div>
  )
}
