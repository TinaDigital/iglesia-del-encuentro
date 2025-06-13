"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Heart, Youtube, Dna, Zap, ChevronDown, Sparkles, Star, Shield, Smile } from "lucide-react"
import { VideoCarousel } from "@/components/video-carousel"
import adn from "../../../public/adn.jpg"

// Valores optimizados con iconos más específicos
const values = [
  {
    title: "Relevancia",
    description:
      "Creemos que el mensaje del evangelio es demasiado importante como para pasar desapercibido en esta cultura.",
    icon: <Star className="w-6 h-6" />,
    color: "#8A4FFF",
  },
  {
    title: "Excelencia",
    description: "Creemos que la excelencia son detalles y los detalles son personas.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "#9D65FF",
  },
  {
    title: "Compromiso",
    description:
      "Creemos en la integridad como estilo de vida. Lo que creemos, decimos y hacemos es fruto de una vida plantada en Jesús y en su casa.",
    icon: <Shield className="w-6 h-6" />,
    color: "#8A4FFF",
  },
  {
    title: "Generosidad",
    description: "Creemos que la respuesta de Dios a la avaricia del hombre es la generosidad.",
    icon: <Zap className="w-6 h-6" />,
    color: "#9D65FF",
  },
  {
    title: "Amor",
    description: "Creemos que lo que hace a una comunidad de fe atractiva es la profundidad en sus vínculos.",
    icon: <Heart className="w-6 h-6" />,
    color: "#8A4FFF",
  },
  {
    title: "Gozo",
    description: "Creemos que Dios vuelve a buscar una iglesia alegre, divertida y enfocada en la esperanza.",
    icon: <Smile className="w-6 h-6" />,
    color: "#9D65FF",
  },
  {
    title: "Gratitud",
    description: "Creemos que el idioma del Reino de los Cielos es la gratitud.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "#8A4FFF",
  },
  {
    title: "Humildad",
    description:
      "Creemos que la iglesia que Dios está edificando es con personas que se dan a sí mismas sin esperar nada a cambio.",
    icon: <Heart className="w-6 h-6" />,
    color: "#9D65FF",
  },
]

export default function NuestroADNPage() {
  const valuesRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const [activeValue, setActiveValue] = useState<number | null>(null)

  // Colores personalizados
  const violetColor = "#8A4FFF" // Violeta principal
  const creamColor = "#F5EFE6" // Crema principal
  const lightViolet = "#E9DFFF" // Violeta claro
  const darkCream = "#EAE0D5" // Crema oscuro

  const scrollToSection = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Variantes de animación optimizadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="min-h-[90vh] flex items-center relative overflow-hidden py-12 md:py-0"
        style={{ backgroundColor: creamColor }}
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                  x: Math.sin(i) * 10,
                  y: Math.cos(i) * 10,
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
                className="absolute rounded-full hidden md:block"
                style={{
                  backgroundColor: i % 2 === 0 ? violetColor : darkCream,
                  width: 20 + (i % 10) * 15 + "px",
                  height: 20 + (i % 10) * 15 + "px",
                  left: ((i * 5) % 100) + "%",
                  top: ((i * 7) % 100) + "%",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div
              className="lg:col-span-5 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 md:mb-6"
                style={{ backgroundColor: lightViolet, color: violetColor }}
              >
                NUESTRA ESENCIA
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Nuestro <span style={{ color: violetColor }}>ADN</span> define quiénes somos
              </h1>

              <div className="h-1 w-24 mb-6 hidden lg:block" style={{ backgroundColor: violetColor }}></div>

              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                En la IDE todo lo que hacemos tiene un "para qué" y un "cómo" hacerlo. Es nuestro ADN, es decir, la manera en que somos identificados por los que nos miran y conocen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={() => scrollToSection(valuesRef)}
                  className="inline-flex items-center justify-center px-6 py-3 text-white rounded-md transition-colors w-full sm:w-auto"
                  style={{ backgroundColor: violetColor }}
                  whileHover={{ backgroundColor: "#7B3FEF", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Descubrir nuestro ADN
                  <Dna className="ml-2 w-5 h-5" />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection(videosRef)}
                  className="inline-flex items-center justify-center px-6 py-3 border rounded-md transition-colors w-full sm:w-auto"
                  style={{ borderColor: violetColor, color: violetColor }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.5)", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver mensajes
                  <Youtube className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 relative mt-8 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative aspect-[4/3] w-full max-w-[800px] mx-auto">
                {/* Tarjetas de valores flotantes - ahora posicionadas en relación con la imagen */}
                {values.slice(0, 6).map((value, index) => (
                  <motion.div
                    key={index}
                    className="absolute bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-20 hidden md:flex"
                    style={{
                      border: `2px solid ${index % 2 === 0 ? violetColor : darkCream}`,
                      maxWidth: "180px",
                      // Posicionamiento ajustado para que aparezcan alrededor de la imagen
                      left: index % 3 === 0 ? "-15%" : index % 3 === 1 ? "50%" : "85%",
                      top: index < 3 ? `${20 + (index * 15)}%` : `${60 + ((index - 3) * 15)}%`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: [-1, 1, -1],
                      y: [0, 10, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.8, delay: 0.7 + index * 0.1 },
                      scale: { duration: 0.8, delay: 0.7 + index * 0.1 },
                      rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                      y: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: index * 0.2 },
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: index % 2 === 0 ? lightViolet : darkCream }}
                    >
                      <div style={{ color: index % 2 === 0 ? violetColor : "#8B7E74" }}>{value.icon}</div>
                    </div>
                    <p className="text-sm font-medium">{value.title}</p>
                  </motion.div>
                ))}
                
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Image
                    src={adn}
                    fill
                    alt="Nuestro ADN"
                    className="object-cover w-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: violetColor }}></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <p className="text-sm mb-2" style={{ color: violetColor }}>
              Explora nuestro ADN
            </p>
            <ChevronDown className="w-5 h-5" style={{ color: violetColor }} />
          </motion.div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section ref={valuesRef} className="py-12 md:py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div
          className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.5 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 rounded-full"
          style={{ backgroundColor: darkCream, opacity: 0.3 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Dna className="w-8 md:w-10 h-8 md:h-10 mr-3" style={{ color: violetColor }} />
              <h2 className="text-2xl md:text-3xl font-bold">Nuestros Valores</h2>
            </div>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: violetColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Estos valores son los componentes esenciales de nuestro ADN, definen quiénes somos y guían todo lo que
              hacemos
            </p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                  style={{
                    borderTop: `4px solid ${value.color}`,
                  }}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                  whileHover={{ y: -5 }}
                >
                  {/* Efecto de brillo en hover */}
                  <AnimatePresence>
                    {activeValue === index && (
                      <motion.div
                        className="absolute inset-0 opacity-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: `radial-gradient(circle at center, ${value.color} 0%, transparent 70%)`,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: index % 2 === 0 ? lightViolet : creamColor }}
                  >
                    <div style={{ color: value.color }}>{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Videos */}
      <section ref={videosRef} className="relative">
        <VideoCarousel title="El aroma que nos identifica como familia" playlistId="PLYSj8gAXLPQnDdeVkgThHecPcWfCgFmcW" />
      </section>
    </main>
  )
}
