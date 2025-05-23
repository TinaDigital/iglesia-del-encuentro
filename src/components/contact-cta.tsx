"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { MessageSquare, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  // Efecto sutil de línea que se dibuja
  useEffect(() => {
    controls.start({
      width: ["0%", "100%"],
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
    })
  }, [controls])

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "white" }}>
      {/* Elementos decorativos con color */}
      <div className="absolute top-0 left-0 w-full h-1 opacity-70" style={{ 
        background: `linear-gradient(to right, transparent, ${violetColor}, transparent)` 
      }}></div>
      <div className="absolute bottom-0 left-0 w-full h-1 opacity-70" style={{ 
        background: `linear-gradient(to right, transparent, ${violetColor}, transparent)` 
      }}></div>

      {/* Elementos decorativos con gradiente sutil */}
      <div className="absolute left-0 top-0 w-64 h-64 md:w-96 md:h-96 -mt-48 -ml-48 rounded-full opacity-70" style={{ 
        background: `linear-gradient(to bottom right, ${lightViolet}, ${creamColor})` 
      }}></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 -mb-48 -mr-48 rounded-full opacity-70" style={{ 
        background: `linear-gradient(to top left, ${lightViolet}, ${creamColor})` 
      }}></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-3">
              ¡Llegaste a{" "}
              <span className="font-semibold" style={{ color: violetColor }}>
                Casa
              </span>!
            </h2>

            <div className="relative h-0.5 w-full max-w-xs mx-auto my-6 bg-gray-100 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to right, ${violetColor}, ${creamColor})` }}
                animate={controls}
                initial={{ width: "0%" }}
              />
            </div>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Durante más de 130 años, hemos estado acompañando a personas como vos a descubrir una fe práctica y auténtica en Jesús. ¡Tu próximo paso puede ser visitarnos personalmente!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.a
              href="/horarios-y-encuentros"
              className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-md shadow-md"
              style={{ backgroundColor: violetColor }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center font-medium" style={{ color: isHovered ? violetColor : "white" }}>
                Horarios y Encuentros
                <motion.div animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: creamColor }}
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos con borde de color */}
      <div
        className="absolute left-8 top-8 w-16 h-16 border-l-2 border-t-2 rounded-tl-md"
        style={{ borderColor: `${violetColor}20` }}
      ></div>
      <div
        className="absolute right-8 top-8 w-16 h-16 border-r-2 border-t-2 rounded-tr-md"
        style={{ borderColor: `${violetColor}20` }}
      ></div>
      <div
        className="absolute left-8 bottom-8 w-16 h-16 border-l-2 border-b-2 rounded-bl-md"
        style={{ borderColor: `${violetColor}20` }}
      ></div>
      <div
        className="absolute right-8 bottom-8 w-16 h-16 border-r-2 border-b-2 rounded-br-md"
        style={{ borderColor: `${violetColor}20` }}
      ></div>

      {/* Puntos decorativos con color */}
      <div
        className="absolute left-1/4 top-12 w-2 h-2 rounded-full"
        style={{ backgroundColor: violetColor, opacity: 0.3 }}
      ></div>
      <div
        className="absolute left-1/3 bottom-16 w-3 h-3 rounded-full"
        style={{ backgroundColor: creamColor, opacity: 0.5 }}
      ></div>
      <div
        className="absolute right-1/4 top-20 w-4 h-4 rounded-full"
        style={{ backgroundColor: creamColor, opacity: 0.4 }}
      ></div>
      <div
        className="absolute right-1/3 bottom-12 w-2 h-2 rounded-full"
        style={{ backgroundColor: violetColor, opacity: 0.25 }}
      ></div>
    </section>
  )
}
