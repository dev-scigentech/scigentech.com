"use client"

import { useEffect, useRef } from "react"

export default function FuturisticGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    // Create multiple glowing orbs
    const orbs = [
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.4,
        radius: Math.min(canvas.width, canvas.height) * 0.15,
        color: "0, 120, 255", // RGB values only, no rgba
        baseOpacity: 0.2,
        xDirection: 1,
        yDirection: 1,
        speed: 0.3,
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.6,
        radius: Math.min(canvas.width, canvas.height) * 0.1,
        color: "120, 0, 255", // RGB values only, no rgba
        baseOpacity: 0.15,
        xDirection: -1,
        yDirection: 1,
        speed: 0.2,
      },
      {
        x: canvas.width * 0.75,
        y: canvas.height * 0.65,
        radius: Math.min(canvas.width, canvas.height) * 0.07,
        color: "0, 200, 255", // RGB values only, no rgba
        baseOpacity: 0.1,
        xDirection: 1,
        yDirection: -1,
        speed: 0.15,
      },
    ]

    const drawGlow = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create radial gradients for each orb
      orbs.forEach((orb) => {
        // Move the orb
        orb.x += orb.xDirection * orb.speed
        orb.y += orb.yDirection * orb.speed

        // Bounce off edges
        if (orb.x > canvas.width - orb.radius || orb.x < orb.radius) {
          orb.xDirection *= -1
        }
        if (orb.y > canvas.height - orb.radius || orb.y < orb.radius) {
          orb.yDirection *= -1
        }

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius * (1 + Math.sin(Date.now() * 0.001) * 0.2),
        )

        // Add color stops with proper rgba format
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.baseOpacity * 3.5})`) // Center is more opaque
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.baseOpacity})`) // Middle
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)") // Transparent edge

        // Draw the gradient
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius * 2, 0, Math.PI * 2)
        ctx.fill()
      })

      // Continue animation
      animationRef.current = requestAnimationFrame(drawGlow)
    }

    // Start animation
    drawGlow()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
    />
  )
}
