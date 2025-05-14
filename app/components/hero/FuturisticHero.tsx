"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

// Dynamically import components with heavy dependencies
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false })
const FuturisticGlow = dynamic(() => import("./FuturisticGlow"), { ssr: false })
const DataStreams = dynamic(() => import("./DataStreams"), { ssr: false })

export default function FuturisticHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded after a short delay to ensure smooth initial transition
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#02071a] to-[#02071a]/90 min-h-screen flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <FuturisticGlow />
        <ParticleField />
        <DataStreams />
      </div>

      {/* Content container */}
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-2 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <span className="text-primary text-sm font-medium">Scientific Software Solutions</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Where Science Meets Genius
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From global conferences to life-saving research, we turn bold ideas into elegant solutions that touch the
              real world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center"
              >
                Explore Our Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white font-medium transition-colors flex items-center"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Added spacer div to create more distance */}
      <div className="h-32 md:h-48 lg:h-64"></div>
    </div>
  )
}
