"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import logo from "../../public/LOGO IDE_LOGO IDE COLOR.png"

const navItems = [
  {
    name: "Sobre la IDE",
    href: "#",
    submenu: [
      { name: "En qué creemos", href: "/en-que-creemos" },
      { name: "Grupos", href: "/grupos" },
      { name: "Ide en pasos", href: "/ide-en-pasos" },
      { name: "La radiografía de la IDE", href: "/radiografia" },
      { name: "Nuestro ADN", href: "/nuestro-adn" },
      { name: "Nuestra historia", href: "/nuestra-historia" },
    ],
  },
  {
    name: "Luz en la ciudad", 
    href: "#",
    submenu: [
      { name: "Escuela del Encuentro", href: "http://escueladelencuentro.com.ar/" },
      { name: "Dignos", href: "https://www.instagram.com/dignosok/?igsh=MXdlcm9sNnR5b3htZg%3D%3D#" },
      { name: "Quilmes Mi Casa", href: "https://fundacionhechos.org.ar/" },
      { name: "Somos Hijos", href: "http://somoshijos.org/" },
    ],
  },
  {
    name: "Recursos",
    href: "#",
    submenu: [
      { name: "Cursos", href: "https://sites.google.com/view/sitio-inscripcion-cursos-ide/inicio?fbclid=PAQ0xDSwKS-PdleHRuA2FlbQIxMAABp7FGZtI1LMHcUloVD7Irmcft4nYMEHzZ8-fXhBzy6RcC_A59i1khFb4vSvvV_aem_SGZQpzC6l8EYdvy1ZStDXg" },
      { name: "Discípulos Maduros Podcast", href: "https://www.youtube.com/playlist?list=PLYSj8gAXLPQlKqFnJ2Rn0MqV3bwZWw-mL" },
      { name: "Alpha", href: "http://somoshijos.org/alpha-2/" },
      {
        name: "Tus datos ok",
        href: "https://docs.google.com/forms/d/1uwYJlqIex__JaZ0vmGEhmNKzS--g4kHq4a7LOetN1FU/viewform",
      },
    ],
  },
  {
    name: "Oración",
    href: "/oracion",
  },
  {
    name: "Dar",
    href: "https://drive.google.com/file/d/12QEuwZgK9ZzA6dmkjlmzfHgncEno16OC/view?fbclid=PAQ0xDSwKS-bFleHRuA2FlbQIxMAABp-NnXq_MFpc0ZB-FgrbV5WK8AcyNEcy-3JkGfA662jNRyqUS6wmzQ0BO85YI_aem_uGfcMINErGZSKoTxI_lIAg",
  },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([])
  const navRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Bloquear scroll cuando menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Controlar comportamiento de navegación al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Ocultar al scrollear hacia abajo, mostrar al scrollear hacia arriba
      if (currentScrollY > lastScrollY && currentScrollY > 50 && !isOpen) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isOpen])

  // Gestionar hover para submenús desktop
  const handleMenuMouseEnter = (name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveSubmenu(name)
  }

  const handleMenuMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 50) // Pequeño delay para permitir mover el mouse al submenú
  }

  const toggleMobileSubmenu = (name: string) => {
    setExpandedMobileMenus(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    )
  }

  return (
    <>
      <div className="h-16" /> {/* Espaciador para evitar saltos de contenido */}
      <nav 
        ref={navRef} 
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled ? 'bg-white/95 backdrop-blur-sm' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo Iglesia del Encuentro"
                width={100} 
                height={100}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMenuMouseEnter(item.name)}
                  onMouseLeave={handleMenuMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="px-2 py-1.5 text-sm text-gray-700 hover:text-purple-500 flex items-center relative z-10"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="ml-0.5 h-3 w-3" />
                    )}
                  </Link>

                  {item.submenu && activeSubmenu === item.name && (
                    <div 
                      className="absolute left-0 mt-1 w-44 bg-white rounded-md shadow-md py-1 z-50"
                      onMouseEnter={() => handleMenuMouseEnter(item.name)}
                      onMouseLeave={handleMenuMouseLeave}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-purple-50 hover:text-purple-500 transition-colors"
                          target={subItem.href.startsWith('http') ? '_blank' : undefined}
                          rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-purple-500 hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
              aria-label="Menú principal"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        <div
          className={`md:hidden fixed left-0 right-0 bottom-0 top-16 z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="menu"
          aria-hidden={!isOpen}
          aria-label="Menú de navegación móvil"
        >
          <div
            ref={menuRef}
            className="w-full h-screen overflow-y-auto bg-white relative pt-16"
          >
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-100 rounded-bl-full opacity-20" />
            <div className="absolute top-24 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-30" />
            
            {/* Patrones inferiores */}
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-tr-full opacity-25" />
            <div className="absolute bottom-24 left-12 w-24 h-24 bg-amber-100 rounded-full opacity-20" />
            
            {/* Líneas diagonales decorativas */}
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200/0 via-purple-300/30 to-purple-200/0 transform rotate-12 top-1/3" />
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200/0 via-amber-200/30 to-amber-200/0 transform -rotate-12 top-2/3" />
            
            <div className="px-6 py-6 min-h-full">
              <div className="space-y-4 relative z-10">
                <div className="mb-8 text-center">
                  <div className="inline-block relative px-12 py-3">
                    <div className="absolute left-0 top-1/2 h-0.5 w-8 bg-gradient-to-r from-purple-300 to-transparent"></div>
                    <div className="absolute right-0 top-1/2 h-0.5 w-8 bg-gradient-to-l from-purple-300 to-transparent"></div>
                    <h2 className="font-medium text-gray-700">Menú Principal</h2>
                  </div>
                </div>
                
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-0 py-2">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="w-full flex items-center justify-between py-3.5 text-gray-700 hover:text-purple-500 relative group"
                          aria-expanded={expandedMobileMenus.includes(item.name)}
                          aria-controls={`submenu-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="flex items-center">
                            <span className="absolute left-0 opacity-0 transition-opacity group-hover:opacity-70 text-purple-300 -translate-x-5">•</span>
                            <span className="font-medium text-xl relative">
                              {item.name}
                              {expandedMobileMenus.includes(item.name) && (
                                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-100 rounded-full" />
                              )}
                            </span>
                          </div>
                          <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${
                            expandedMobileMenus.includes(item.name) ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        {expandedMobileMenus.includes(item.name) && (
                          <div 
                            id={`submenu-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="mt-2 ml-4 pl-4 mb-2 space-y-3 border-l-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white rounded-bl-lg"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2.5 text-base text-gray-500 hover:text-purple-500 transition-colors relative hover:translate-x-1 duration-150"
                                target={subItem.href.startsWith('http') ? '_blank' : undefined}
                                rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3.5 text-xl text-gray-700 hover:text-purple-500 font-medium transition-colors relative group"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex items-center">
                          <span className="absolute left-0 opacity-0 transition-opacity group-hover:opacity-70 text-purple-300 -translate-x-5">•</span>
                          {item.name}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Elemento decorativo inferior */}
                <div className="mt-16 pt-8 border-t border-purple-100">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -top-6 left-0 right-0 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-purple-50">
                          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-purple-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
