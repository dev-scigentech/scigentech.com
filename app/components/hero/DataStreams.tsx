"use client"

import { useEffect, useRef } from "react"

interface DataStream {
  x: number
  y: number
  speed: number
  length: number
  segments: { y: number; opacity: number }[]
}

export default function DataStreams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamsRef = useRef<DataStream[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Setup canvas
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reinitialize streams when resizing
      initializeStreams()
    }

    resize()
    window.addEventListener("resize", resize)

    // Initialize data streams
    function initializeStreams() {
      const streams: DataStream[] = []
      const streamCount = Math.max(Math.floor(canvas.width / 40), 10)

      for (let i = 0; i < streamCount; i++) {
        streams.push(createStream())
      }

      streamsRef.current = streams
    }

    // Create a single data stream
    function createStream(): DataStream {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 2 - canvas.height
      const speed = Math.random() * 2 + 1
      const length = Math.floor(Math.random() * 20) + 5

      const segments = []
      for (let i = 0; i < length; i++) {
        segments.push({
          y: y - i * 20,
          opacity: 1 - i / length,
        })
      }

      return { x, y, speed, length, segments }
    }

    // Animation loop
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw streams
      streamsRef.current.forEach((stream, index) => {
        // Move stream down
        stream.y += stream.speed

        // Update segment positions
        stream.segments.forEach((segment) => {
          segment.y += stream.speed
        })

        // If stream has moved off screen, reset it
        if (stream.y - stream.length * 20 > canvas.height) {
          streamsRef.current[index] = createStream()
        }

        // Draw stream segments
        stream.segments.forEach((segment) => {
          if (segment.y > 0 && segment.y < canvas.height) {
            // Binary characters
            const char = Math.random() > 0.5 ? "1" : "0"

            // Determine color (blue/purple gradient based on position)
            const ratio = segment.y / canvas.height
            const r = Math.floor(30 + ratio * 50)
            const g = Math.floor(150 - ratio * 100)
            const b = Math.floor(220 + ratio * 35)

            ctx.font = "14px monospace"
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${segment.opacity * 0.9})`
            ctx.fillText(char, stream.x, segment.y)
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start everything
    initializeStreams()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-1 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.2,
      }}
    />
  )
}
