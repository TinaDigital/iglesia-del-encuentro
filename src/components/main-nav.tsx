"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from "../../public/LOGO IDE_LOGO IDE COLOR.png"

const navItems = [
  { 
    name: 'Soy Nuevo',
    href: '/soy-nuevo',
  },
  {
    name: 'Ide en Pasos', 
    href: '/ide-en-pasos',
  },
  {
    name: 'Nuestro ADN',
    href: '/nuestro-adn',
  },
  {
    name: 'Grupos',
    href: '/grupos',
  },
]

const mobileNavVariants = {
  hidden: {
    clipPath: "circle(0% at top right)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "afterChildren"
    }
  },
  show: {
    clipPath: "circle(130% at top right)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const menuItemVariants = {
  hidden: { 
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.3
    }
  },
  show: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
}

const underlineVariants = {
  hidden: { width: 0, left: "50%" },
  show: { 
    width: "100%",
    left: "0%",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <>
      <div className="h-16" />
      <motion.nav
        aria-label="Navegación principal"
        initial={false}
        animate={{
          y: hidden ? -100 : 0,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src={logo} 
                alt="Logo Iglesia del Encuentro"
                width={80}
                height={80}
                className=""
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover="show"
                  initial="hidden"
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-violet-500 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-700"
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 text-white z-50"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={mobileNavVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="lg:hidden fixed inset-0 bg-gradient-to-br from-violet-500/95 to-violet-700/95 backdrop-blur-lg z-50 flex flex-col justify-center items-center"
              style={{ height: '100vh', width: '100vw' }}
            >
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/20 text-white"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={menuItemVariants}
                    custom={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-white hover:text-white/80 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
