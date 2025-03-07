"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { ChevronRight, Users, Heart, ArrowRight, DoorOpen, Map, Target, GraduationCap, BookOpen, ChevronDown, ChevronLeft, MousePointer } from 'lucide-react'

export default function IDEEnPasosPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHorizontalView, setIsHorizontalView] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const isStepsInView = useInView(stepsRef, { once: false, amount: 0.2 })
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.2 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Detectar si estamos en móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsHorizontalView(window.innerWidth >= 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Actualizar progreso de scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(v => {
      setScrollProgress(v)
    })
    
    return () => unsubscribe()
  }, [smoothProgress])

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro
  const darkViolet = "#7c3aed" // Violeta oscuro
  const glassBackground = "rgba(255, 255, 255, 0.1)"
  const glassBorder = "rgba(255, 255, 255, 0.2)"

  // Colores para cada paso con degradados
  const stepColors = {
    paso0: { 
      from: "#4361ee", 
      to: "#3f37c9",
      light: "#e6f0ff"
    },
    paso1: { 
      from: "#2d6a4f", 
      to: "#1b4332",
      light: "#e8f5ee"
    },
    paso2: { 
      from: "#40916c", 
      to: "#2d6a4f",
      light: "#ebf5f0"
    },
    paso3: { 
      from: "#ffd60a", 
      to: "#e9c46a",
      light: "#fffaeb"
    },
    paso4: { 
      from: "#fb8500", 
      to: "#e76f51",
      light: "#fff1e6"
    },
    paso5: { 
      from: "#e63946", 
      to: "#d62828",
      light: "#ffeaed"
    },
    paso6: { 
      from: "#7209b7", 
      to: "#560bad",
      light: "#f3e8ff"
    },
  }

  const steps = [
    {
      title: "Puertas de Acceso",
      subtitle: "PASO 0",
      description: "Ser familia para los que quieren ser familia.",
      longDescription: "El primer contacto con nuestra comunidad, donde te recibimos con los brazos abiertos y te hacemos sentir parte de nuestra familia desde el primer momento.",
      icon: <DoorOpen className="w-8 h-8" />,
      color: stepColors.paso0,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Conocer más",
        link: "/puertas-de-acceso",
      },
    },
    {
      title: "Sumate",
      subtitle: "PASO 1",
      description: "Tener un primer contacto personal.",
      longDescription: "Damos el primer paso para conocerte mejor y entender cómo podemos acompañarte en tu camino espiritual, creando una conexión personal y significativa.",
      icon: <Users className="w-8 h-8" />,
      color: stepColors.paso1,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Dar el primer paso",
        link: "/sumate",
      },
    },
    {
      title: "Grupos Primeros Pasos",
      subtitle: "PASO 2",
      description: "Conocer a Jesús e integrarse a la comunidad.",
      longDescription: "Espacios diseñados para profundizar en las enseñanzas de Jesús y comenzar a formar parte activa de nuestra comunidad, construyendo relaciones significativas.",
      icon: <Map className="w-8 h-8" />,
      color: stepColors.paso2,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Encontrar un grupo",
        link: "/primeros-pasos",
      },
    },
    {
      title: "Grupos de Bautismo",
      subtitle: "PASO 3",
      description: "Clarificar el significado bíblico del bautismo.",
      longDescription: "Exploramos juntos el profundo significado del bautismo como un paso fundamental en tu camino de fe, preparándote para este importante compromiso público.",
      icon: <BookOpen className="w-8 h-8" />,
      color: stepColors.paso3,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Sobre el bautismo",
        link: "/bautismo",
      },
    },
    {
      title: "Grupos 100% Dispuestos",
      subtitle: "PASO 4",
      description: "Descubrir la belleza de servir y conocer los principios del Reino de Dios.",
      longDescription: "Descubrimos juntos el gozo de servir a otros y profundizamos en los principios fundamentales del Reino de Dios que transformarán tu vida y perspectiva.",
      icon: <Target className="w-8 h-8" />,
      color: stepColors.paso4,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Servir",
        link: "/servir",
      },
    },
    {
      title: "Grupos de Crecimiento",
      subtitle: "PASO 5",
      description: "Madurar como discípulo de Cristo y arraigarse en la comunidad.",
      longDescription: "Espacios diseñados para profundizar en tu fe, desarrollar disciplinas espirituales sólidas y fortalecer tu identidad como discípulo de Cristo en comunidad.",
      icon: <Heart className="w-8 h-8" />,
      color: stepColors.paso5,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Crecer más",
        link: "/crecimiento",
      },
    },
    {
      title: "Grupos de Entrenamiento",
      subtitle: "PASO 6",
      description: "Capacitaciones específicas.",
      longDescription: "Formación especializada para desarrollar tus dones y talentos, preparándote para liderar y multiplicar tu impacto en la iglesia y en la sociedad.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: stepColors.paso6,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Capacitarse",
        link: "/entrenamiento",
      },
    },
  ]

  const etapas = [
    {
      title: "ETAPA 1",
      description: "Pasos 0 al 4",
      color: violetColor,
      steps: [0, 1, 2, 3, 4]
    },
    {
      title: "ETAPA 2",
      description: "Pasos 5 y 6",
      color: "#9333ea",
      steps: [5, 6]
    }
  ]

  const scrollToSection = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Variantes para animaciones
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  // Calcular el progreso para la barra circular
  const calculateProgress = (index: number) => {
    return ((index + 1) / steps.length) * 100
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden" ref={containerRef}>
      {/* Patrones geométricos sutiles */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={violetColor} strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke={violetColor} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Hero Section con Glassmorphism */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Fondo con degradado */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="IDE en Pasos"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(76, 29, 149, 0.8))`,
            }}
          />
        </div>

        {/* Formas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${i % 2 === 0 ? violetColor : creamColor}33, transparent)`,
                width: `${150 + i * 50}px`,
                height: `${150 + i * 50}px`,
                left: `${(i * 15) % 80 + 10}%`,
                top: `${(i * 20) % 70 + 10}%`,
              }}
              animate={{
                x: [0, 10, 0, -10, 0],
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 py-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full mb-6 backdrop-blur-md"
                style={{ 
                  backgroundColor: glassBackground,
                  border: `1px solid ${glassBorder}`,
                }}
              >
                <span className="text-white font-medium">TU CAMINO DE CRECIMIENTO</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                La IDE en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-100">Pasos</span>
              </motion.h1>

              <motion.div 
                className="h-1 w-32 mb-8 bg-gradient-to-r from-amber-200 to-yellow-100"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>

              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Un camino diseñado para guiarte en tu crecimiento espiritual y ayudarte a encontrar tu propósito en nuestra
                comunidad.
              </motion.p>

              {/* Tarjetas de etapas con efecto glassmorphism */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {etapas.map((etapa, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    custom={index}
                    whileHover="hover"
                    className="backdrop-blur-md rounded-xl p-6 transform transition-all duration-300"
                    style={{ 
                      backgroundColor: glassBackground,
                      border: `1px solid ${glassBorder}`,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <h3 className="text-white font-bold text-2xl mb-3">{etapa.title}</h3>
                    <p className="text-white/80 mb-4">{etapa.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {etapa.steps.map(stepIndex => (
                        <div 
                          key={stepIndex}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ 
                            background: `linear-gradient(135deg, ${steps[stepIndex].color.from}, ${steps[stepIndex].color.to})`,
                            color: 'white'
                          }}
                        >
                          {stepIndex}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button con efecto hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center md:justify-start"
              >
                <motion.button
                  onClick={() => scrollToSection(stepsRef)}
                  className="group relative inline-flex items-center px-8 py-4 rounded-full font-medium overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-100"></span>
                  <span className="relative flex items-center text-violet-900 font-bold">
                    Explorar el camino
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
        >
          <p className="text-sm mb-2">Desplázate para explorar</p>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Barra de progreso circular */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="relative w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="8"
            />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke={violetColor} 
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={2 * Math.PI * 40 * (1 - scrollProgress)}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color: violetColor }}>
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </motion.div>

      {/* Introducción con efecto de profundidad */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{ 
            background: `linear-gradient(to bottom, ${lightViolet}50, white)` 
          }}
        ></div>

        {/* Formas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-30"
              style={{
                background: i % 2 === 0 ? violetColor : creamColor,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                right: `${(i * 20) % 80}%`,
                top: `${(i * 25) % 70}%`,
              }}
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl"
              style={{ border: `1px solid ${glassBorder}` }}
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mx-auto mb-4"
                >
                  <Map className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500">
                  ¿Qué es IDE en Pasos?
                </h2>
                
                <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-700"></div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                IDE en Pasos es nuestro camino diseñado para guiarte en tu crecimiento espiritual, desde tu primera
                visita hasta convertirte en un miembro activo que sirve con sus dones. Cada paso te acerca más a
                descubrir el propósito que Dios tiene para tu vida.
              </p>

              <div className="flex justify-center space-x-3">
                {[0, 1, 2, 3].map((step) => (
                  <motion.div
                    key={step}
                    className="w-3 h-3 rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${violetColor}, ${darkViolet})`,
                      opacity: 0.3 + step * 0.2 
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step * 0.1, duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline interactiva */}
      <section 
        ref={timelineRef} 
        className="py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500">
              Tu Camino de Crecimiento
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-700"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora los pasos que te ayudarán a crecer en tu fe y encontrar tu lugar en nuestra comunidad.
            </p>
          </motion.div>

          {/* Navegación horizontal para desktop */}
          {isHorizontalView && (
            <div className="hidden lg:block mb-12">
              <div className="relative max-w-6xl mx-auto">
                {/* Línea de tiempo */}
                <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-200 rounded-full"></div>
                
                <div className="flex justify-between items-center relative">
                  {steps.map((step, index) => (
                    <motion.button
                      key={index}
                      className="relative z-10 flex flex-col items-center"
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 transition-all duration-300 ${
                          activeStep === index ? "scale-110 shadow-lg" : "opacity-70 hover:opacity-100"
                        }`}
                        style={{ 
                          background: `linear-gradient(135deg, ${step.color.from}, ${step.color.to})`,
                          boxShadow: activeStep === index ? `0 0 20px ${step.color.from}80` : "none"
                        }}
                      >
                        {step.icon}
                      </div>
                      <span
                        className={`text-sm font-medium ${activeStep === index ? "opacity-100" : "opacity-70"}`}
                        style={{ color: activeStep === index ? step.color.from : "inherit" }}
                      >
                        {step.subtitle}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navegación para móvil */}
          {!isHorizontalView && (
            <div className="flex justify-center mb-8 lg:hidden">
              <div className="flex space-x-2 overflow-x-auto pb-4 max-w-full">
                {steps.map((step, index) => (
                  <motion.button
                    key={index}
                    className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
                      activeStep === index ? "text-white" : "text-gray-600"
                    }`}
                    style={{ 
                      background: activeStep === index 
                        ? `linear-gradient(135deg, ${step.color.from}, ${step.color.to})`
                        : "#f3f4f6"
                    }}
                    onClick={() => setActiveStep(index)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{step.icon}</span>
                    <span className="font-medium">{step.subtitle}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Contenido del paso activo con tarjeta flotante */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
                    style={{ 
                      borderLeft: `4px solid ${steps[activeStep].color.from}`,
                      boxShadow: `0 10px 25px -5px ${steps[activeStep].color.from}20`
                    }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Fondo decorativo */}
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -z-10"
                      style={{ 
                        background: `radial-gradient(circle at center, ${steps[activeStep].color.from}, transparent)`,
                        transform: "translate(30%, -30%)"
                      }}
                    ></div>
                    
                    <span 
                      className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                      style={{ 
                        backgroundColor: steps[activeStep].color.light, 
                        color: steps[activeStep].color.from 
                      }}
                    >
                      {steps[activeStep].subtitle}
                    </span>
                    
                    <h3 
                      className="text-3xl font-bold mb-4"
                      style={{ color: steps[activeStep].color.from }}
                    >
                      {steps[activeStep].title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {steps[activeStep].longDescription}
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={steps[activeStep].cta.link}
                        className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-all group"
                        style={{ 
                          background: `linear-gradient(135deg, ${steps[activeStep].color.from}, ${steps[activeStep].color.to})`,
                          boxShadow: `0 4px 14px ${steps[activeStep].color.from}40`
                        }}
                      >
                        {steps[activeStep].cta.text}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="ml-2"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="order-1 lg:order-2">
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={steps[activeStep].image || "/placeholder.svg"}
                      alt={steps[activeStep].title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay con gradiente */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{ 
                        background: `linear-gradient(135deg, ${steps[activeStep].color.from}50, transparent)` 
                      }}
                    ></div>
                    
                    {/* Barra superior de color */}
                    <div
                      className="absolute top-0 left-0 w-full h-2"
                      style={{ 
                        background: `linear-gradient(to right, ${steps[activeStep].color.from}, ${steps[activeStep].color.to})` 
                      }}
                    ></div>
                    
                    {/* Indicador de progreso */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <div className="relative w-12 h-12">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke="#e5e7eb" 
                            strokeWidth="8"
                          />
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke={steps[activeStep].color.from} 
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={2 * Math.PI * 40 * (1 - calculateProgress(activeStep) / 100)}
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color: steps[activeStep].color.from }}>
                          {Math.round(calculateProgress(activeStep))}%
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navegación entre pasos */}
          <div className="flex justify-center mt-12 space-x-4">
            <motion.button
              onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={activeStep === 0}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: violetColor }} />
            </motion.button>
            
            <motion.button
              onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={activeStep === steps.length - 1}
            >
              <ChevronRight className="w-6 h-6" style={{ color: violetColor }} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Pasos detallados con efecto 3D */}
      <section 
        ref={stepsRef} 
        className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500">
              Explora Cada Paso
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-700"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada paso está diseñado para ayudarte a crecer en tu fe y encontrar tu lugar en nuestra comunidad.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-20 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <motion.div 
                      className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden transform transition-all duration-500"
                      style={{ 
                        borderTop: `4px solid ${step.color.from}`,
                        transform: hoveredCard === index ? "perspective(1000px) rotateY(5deg)" : "perspective(1000px) rotateY(0deg)",
                        boxShadow: hoveredCard === index 
                          ? `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px ${step.color.from}40` 
                          : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      {/* Fondo decorativo */}
                      <div 
                        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 -z-10"
                        style={{ 
                          background: `radial-gradient(circle at center, ${step.color.from}, transparent)`,
                          transform: "translate(30%, -30%)"
                        }}
                      ></div>
                      
                      <div className="flex items-center mb-6">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                          style={{ 
                            background: `linear-gradient(135deg, ${step.color.from}, ${step.color.to})`,
                            boxShadow: `0 0 15px ${step.color.from}40`
                          }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <span 
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-1"
                            style={{ 
                              backgroundColor: step.color.light, 
                              color: step.color.from 
                            }}
                          >
                            {step.subtitle}
                          </span>
                          <h3 
                            className="text-2xl font-bold"
                            style={{ color: step.color.from }}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {step.longDescription}
                      </p>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={step.cta.link}
                          className="inline-flex items-center px-5 py-2 rounded-lg text-white transition-all group"
                          style={{ 
                            background: `linear-gradient(135deg, ${step.color.from}, ${step.color.to})`,
                            boxShadow: `0 4px 14px ${step.color.from}40`
                          }}
                        >
                          {step.cta.text}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold hidden lg:flex"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color.from}, ${step.color.to})`,
                      boxShadow: `0 0 20px ${step.color.from}40`
                    }}
                  >
                    {index}
                  </div>

                  <div className="flex-1">
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden shadow-xl"
                      style={{ 
                        transform: hoveredCard === index ? "perspective(1000px) rotateY(-5deg)" : "perspective(1000px) rotateY(0deg)",
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay con gradiente */}
                      <div 
                        className="absolute inset-0 opacity-30"
                        style={{ 
                          background: `linear-gradient(135deg, ${step.color.from}50, transparent)` 
                        }}
                      ></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section con Glassmorphism */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{ 
            background: `linear-gradient(135deg, ${lightViolet}, ${violetColor}30)` 
          }}
        ></div>

        {/* Formas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                background: i % 2 === 0 ? violetColor : creamColor,
                width: `${150 + i * 50}px`,
                height: `${150 + i * 50}px`,
                right: `${(i * 20) % 80}%`,
                top: `${(i * 25) % 70}%`,
              }}
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/30 backdrop-blur-md rounded-2xl p-10 shadow-xl text-center"
              style={{ border: `1px solid ${glassBorder}` }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mx-auto mb-6"
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-violet-900">
                ¿Listo para comenzar tu camino?
              </h2>
              
              <p className="text-lg text-violet-800 mb-8 max-w-2xl mx-auto">
                No importa en qué punto te encuentres, estamos aquí para acompañarte en cada paso de tu crecimiento espiritual.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-full font-medium shadow-lg transition-all group"
                >
                  Comenzar ahora
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </motion.div>
              
              <div className="mt-8 text-violet-700 flex items-center justify-center">
                <MousePointer className="w-4 h-4 mr-2" />
                <span className="text-sm">Haz clic para comenzar tu viaje</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
