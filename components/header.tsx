"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Menu , X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set blur effect
      setIsScrolled(currentScrollY > 50)

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: shouldReduceMotion ? 0 : isVisible ? 0 : -100 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 transition-colors duration-300 ${
          isScrolled ? "backdrop-blur-xl bg-black/30" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <Image
            src="/images/nqb8-icon-logo.png"
            alt="NQB8 logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            sizes="40px"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop CTA Button */}
        <a
          href="mailto:hello@nqb8.tech?subject=Project%20Inquiry"
          className="hidden md:flex px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-colors duration-300 hover:bg-white/90 cursor-pointer min-h-[44px] items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Get in Touch
        </a>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden cursor-default"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src="/images/nqb8-icon-logo.png"
                    alt="NQB8 logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                    sizes="40px"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label="Close menu"
                    type="button"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2 flex-1" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : index * 0.1, duration: shouldReduceMotion ? 0 : 0.2 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 hover:text-white text-base font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto">
                  <a
                    href="mailto:hello@nqb8.tech?subject=Project%20Inquiry"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 rounded-full bg-white text-black font-normal text-sm text-center transition-colors duration-200 hover:bg-white/90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
