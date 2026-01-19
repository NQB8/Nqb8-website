"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

// Default colors - tweak these or use the debug panel
const DEFAULT_COLORS_1 = ["#FF5733", "#FFC300", "#28B463", "#1F8DD6", "#9B59B6"]
const DEFAULT_COLORS_2 = ["#FF6B4A", "#F4D03F", "#17A589", "#2874A6", "#A93F8F"]

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [colors1, setColors1] = useState(DEFAULT_COLORS_1)
  const [colors2, setColors2] = useState(DEFAULT_COLORS_2)
  const [layer2Opacity, setLayer2Opacity] = useState(0.5)
  const [brightness, setBrightness] = useState(1)
  const [saturation, setSaturation] = useState(1)
  const frameTimesRef = useRef<number[]>([])
  const lastFrameTimeRef = useRef(performance.now())
  const rafIdRef = useRef<number>(0)
  const paneRef = useRef<unknown>(null)

  // Tweakpane debug panel (dev only)
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return

    let pane: { dispose: () => void } | null = null

    import("tweakpane").then(({ Pane }) => {
      const params = {
        color1_1: colors1[0],
        color1_2: colors1[1],
        color1_3: colors1[2],
        color1_4: colors1[3],
        color1_5: colors1[4],
        color2_1: colors2[0],
        color2_2: colors2[1],
        color2_3: colors2[2],
        color2_4: colors2[3],
        color2_5: colors2[4],
        layer2Opacity,
        brightness,
        saturation,
      }

      pane = new Pane({ title: "Shader Tweaks" })
      paneRef.current = pane

      const folder1 = pane.addFolder({ title: "Layer 1 Colors" })
      folder1.addBinding(params, "color1_1", { label: "Color 1" }).on("change", (e) => setColors1((c) => [e.value, c[1], c[2], c[3], c[4]]))
      folder1.addBinding(params, "color1_2", { label: "Color 2" }).on("change", (e) => setColors1((c) => [c[0], e.value, c[2], c[3], c[4]]))
      folder1.addBinding(params, "color1_3", { label: "Color 3" }).on("change", (e) => setColors1((c) => [c[0], c[1], e.value, c[3], c[4]]))
      folder1.addBinding(params, "color1_4", { label: "Color 4" }).on("change", (e) => setColors1((c) => [c[0], c[1], c[2], e.value, c[4]]))
      folder1.addBinding(params, "color1_5", { label: "Color 5" }).on("change", (e) => setColors1((c) => [c[0], c[1], c[2], c[3], e.value]))

      const folder2 = pane.addFolder({ title: "Layer 2 Colors" })
      folder2.addBinding(params, "color2_1", { label: "Color 1" }).on("change", (e) => setColors2((c) => [e.value, c[1], c[2], c[3], c[4]]))
      folder2.addBinding(params, "color2_2", { label: "Color 2" }).on("change", (e) => setColors2((c) => [c[0], e.value, c[2], c[3], c[4]]))
      folder2.addBinding(params, "color2_3", { label: "Color 3" }).on("change", (e) => setColors2((c) => [c[0], c[1], e.value, c[3], c[4]]))
      folder2.addBinding(params, "color2_4", { label: "Color 4" }).on("change", (e) => setColors2((c) => [c[0], c[1], c[2], e.value, c[4]]))
      folder2.addBinding(params, "color2_5", { label: "Color 5" }).on("change", (e) => setColors2((c) => [c[0], c[1], c[2], c[3], e.value]))

      const effects = pane.addFolder({ title: "Effects" })
      effects.addBinding(params, "layer2Opacity", { label: "Layer 2 Opacity", min: 0, max: 1 }).on("change", (e) => setLayer2Opacity(e.value))
      effects.addBinding(params, "brightness", { label: "Brightness", min: 0, max: 2 }).on("change", (e) => setBrightness(e.value))
      effects.addBinding(params, "saturation", { label: "Saturation", min: 0, max: 2 }).on("change", (e) => setSaturation(e.value))

      // Log current values button
      pane.addButton({ title: "Log Current Values" }).on("click", () => {
        console.log("colors1:", colors1)
        console.log("colors2:", colors2)
        console.log("layer2Opacity:", layer2Opacity)
        console.log("brightness:", brightness)
        console.log("saturation:", saturation)
      })
    })

    return () => {
      if (pane) pane.dispose()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
      <div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{ filter: `brightness(${brightness}) saturate(${saturation})` }}
      >
        <MeshGradient
          className="w-full h-full"
          colors={colors1}
          speed={speed1}
        />
      </div>
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{ opacity: layer2Opacity, filter: `brightness(${brightness}) saturate(${saturation})` }}
      >
        <MeshGradient
          className="w-full h-full"
          colors={colors2}
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
