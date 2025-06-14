"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

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
    <section className="py-24 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/8b5cf6/f5f0e6?text=Llegaste+a+Casa"
          alt="Fondo Llegaste a Casa"
          fill
          className="object-cover opacity-75"
          quality={100}
          priority
          style={{
            objectPosition: "center 35%"
          }}
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-3">
              ¡Llegaste a{" "}
              <span className="font-semibold" style={{ color: creamColor }}>
                Casa
              </span>!
            </h2>

            <div className="relative h-0.5 w-full max-w-xs mx-auto my-6 bg-white/20 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to right, ${violetColor}, ${creamColor})` }}
                animate={controls}
                initial={{ width: "0%" }}
              />
            </div>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
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
              href="/horarios"
              className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full shadow-lg"
              style={{ backgroundColor: violetColor }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center font-medium text-lg" style={{ color: isHovered ? violetColor : "white" }}>
                Horarios y Encuentros
                <motion.div animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: creamColor }}
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute left-8 top-8 w-12 h-12 border-l-2 border-t-2 rounded-tl-lg opacity-30 border-white"></div>
      <div className="absolute right-8 top-8 w-12 h-12 border-r-2 border-t-2 rounded-tr-lg opacity-30 border-white"></div>
      <div className="absolute left-8 bottom-8 w-12 h-12 border-l-2 border-b-2 rounded-bl-lg opacity-30 border-white"></div>
      <div className="absolute right-8 bottom-8 w-12 h-12 border-r-2 border-b-2 rounded-br-lg opacity-30 border-white"></div>

      {/* Puntos decorativos sutiles */}
      <div className="absolute left-1/4 top-16 w-2 h-2 rounded-full opacity-40 bg-white"></div>
      <div className="absolute left-1/3 bottom-20 w-3 h-3 rounded-full opacity-30 bg-white"></div>
      <div className="absolute right-1/4 top-24 w-2 h-2 rounded-full opacity-35 bg-white"></div>
      <div className="absolute right-1/3 bottom-16 w-2 h-2 rounded-full opacity-25 bg-white"></div>
    </section>
  )
}
