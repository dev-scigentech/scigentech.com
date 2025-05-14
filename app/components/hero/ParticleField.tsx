"use client"

import { useRef, useEffect, useState } from "react"
import { useMousePosition } from "@/hooks/use-mouse"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  originalX: number
  originalY: number
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const isInitializedRef = useRef(false)

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        setDimensions({ width: canvas.width, height: canvas.height })

        // Reinitialize particles on resize if already initialized
        if (isInitializedRef.current) {
          initializeParticles()
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize particles
  const initializeParticles = () => {
    if (!canvasRef.current) return

    const { width, height } = canvasRef.current
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 7000), 300) // Adjust count based on screen size

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: getRandomColor(),
        opacity: Math.random() * 0.5 + 0.3,
        originalX: x,
        originalY: y,
      })
    }

    particlesRef.current = particles
    isInitializedRef.current = true
  }

  function getRandomColor() {
    const colors = [
      "rgba(33, 150, 243, 1)", // Primary blue
      "rgba(66, 165, 245, 1)", // Lighter blue
      "rgba(3, 169, 244, 1)", // Light blue
      "rgba(0, 188, 212, 1)", // Cyan
      "rgba(0, 172, 193, 1)", // Teal
      "rgba(128, 0, 255, 1)", // Purple
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Animation loop
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    // Initialize particles once dimensions are set
    if (!isInitializedRef.current) {
      initializeParticles()
    }

    const animate = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and render particles
      particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse pointer if available
        let dx = 0
        let dy = 0
        let distance = 1000

        if (mousePosition.x !== null && mousePosition.y !== null) {
          dx = mousePosition.x - particle.x
          dy = mousePosition.y - particle.y
          distance = Math.sqrt(dx * dx + dy * dy)
        }

        // Move particles
        if (distance < 200) {
          // When mouse is close, particles are pushed away
          const angle = Math.atan2(dy, dx)
          const force = (200 - distance) / 20 // Stronger force when closer
          particle.x -= Math.cos(angle) * force
          particle.y -= Math.sin(angle) * force
        } else {
          // Otherwise, particles drift and gradually return to original position
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Return to original position gradually
          particle.x += (particle.originalX - particle.x) * 0.01
          particle.y += (particle.originalY - particle.y) * 0.01
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Connect particles that are close to each other
      connectParticles(ctx)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, mousePosition.x, mousePosition.y])

  // Function to connect nearby particles with lines
  const connectParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x
        const dy = particlesRef.current[i].y - particlesRef.current[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const opacity = 1 - distance / 100
          ctx.beginPath()
          ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.4})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
          ctx.stroke()
        }
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  )
}
