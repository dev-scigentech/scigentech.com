// This should be a fix for the error in the previous file
"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "ePosterLive",
    description: "Digital poster platform for scientific conferences with real-time interaction capabilities.",
    imageUrl: "/eposterslive.png",
    category: "Conference Solutions",
    url: "https://eposterslive.com/",
  },
  {
    id: 2,
    title: "InstaJudge",
    description: "Streamlined judging system for scientific competitions and research awards.",
    imageUrl: "/instajudge.png",
    category: "Evaluation Tools",
    url: "https://instajudge.com/",
  },
  {
    id: 3,
    title: "Thrombus",
    description: "Advanced medical imaging analysis software for cardiovascular research and diagnostics.",
    imageUrl: "thrombus.png",
    category: "Medical Research",
    url: "https://thrombus.eu/",
  },
  {
    id: 4,
    title: "ePosterScholar",
    description: "Comprehensive platform for academic poster creation, sharing, and archiving.",
    imageUrl: "/eposterscholar.png",
    category: "Academic Tools",
    url: "https://eposterscholar.com/",
  },
  {
    id: 5,
    title: "Scheduling Tool",
    description: "Intelligent scheduling system for complex research projects and clinical trials.",
    imageUrl: "scheduler.png",
    category: "Project Management",
    url: null, // No link available yet
  },
  {
    id: 6,
    title: "Custom Software Solutions",
    description: "Bespoke scientific software development tailored to your specific research needs.",
    imageUrl: "custom.png",
    category: "Custom Development",
    url: "/#contact", // Internal anchor link to contact form
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  // Handle internal anchor links with smooth scrolling
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header height
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section className="py-20 bg-background" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Innovative software powering scientific discovery and collaboration.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 mb-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                {project.url !== null ? (
                  <a
                    href={project.url}
                    target={project.url.startsWith("/#") ? "_self" : "_blank"}
                    rel={project.url.startsWith("/#") ? "" : "noopener noreferrer"}
                    onClick={(e) => project.url?.startsWith("/#") && handleInternalLink(e, project.url)}
                    className="block h-full"
                  >
                    <ProjectCardContent project={project} />
                  </a>
                ) : (
                  <div className="h-full">
                    <ProjectCardContent project={project} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// Extracted component for card content to avoid duplication
function ProjectCardContent({ project }: { project: (typeof projects)[0] }) {
  return (
    <>
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        >
          <p className="text-white text-center px-4">{project.description}</p>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <div className="text-primary hover:underline inline-flex items-center">
          {project.url === null ? (
            <span>Coming Soon</span>
          ) : (
            <>
              {project.url.startsWith("/#") ? "Contact Us" : "Visit Website"}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </div>
      </div>
    </>
  )
}
