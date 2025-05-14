"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links on the homepage
    if (pathname !== "/" && !href.startsWith("/#")) return

    const targetId = href.replace("/#", "")
    if (!targetId) return

    e.preventDefault()

    // If we're not on the homepage, navigate to homepage first
    if (pathname !== "/") {
      window.location.href = href
      return
    }

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }

  // Scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()

    // If not on homepage, go to homepage
    if (pathname !== "/") {
      window.location.href = "/"
      return
    }

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Solutions", href: "/#work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={scrollToTop} className="flex items-center">
            <span className="sr-only">SciGen</span>
            <Image
              src="/images/scigen-logo.png"
              alt="SciGen Technologies Logo"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => item.href.includes("#") && handleAnchorClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  (pathname === "/" && item.href.includes("#")) ||
                  pathname === item.href ||
                  (pathname.startsWith("/blog") && item.href === "/blog")
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-1 border-t border-border/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => item.href.includes("#") && handleAnchorClick(e, item.href)}
                  className={`block py-3 text-base font-medium transition-colors hover:text-primary ${
                    (pathname === "/" && item.href.includes("#")) ||
                    pathname === item.href ||
                    (pathname.startsWith("/blog") && item.href === "/blog")
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
