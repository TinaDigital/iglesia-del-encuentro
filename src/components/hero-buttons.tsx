"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaUser, FaClock, FaBook, FaHandHoldingHeart } from "react-icons/fa"

export function HeroButtons() {
  // Estado para rastrear qué botón tiene el hover
  const [activeButton, setActiveButton] = useState<number | null>(null)

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  const buttons = [
    { href: "/form", text: "¡Contanos sobre vos!", icon: <FaUser />, color: violetColor },
    { href: "/horarios", text: "Horarios y Encuentros", icon: <FaClock />, color: violetColor },
    { href: "/creencias", text: "En esto creemos", icon: <FaBook />, color: violetColor },
    { href: "/dar", text: "Dar", icon: <FaHandHoldingHeart />, color: violetColor },
  ]

  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Figuras decorativas */}
      <div
        className="absolute top-0 right-10 w-32 h-32 rounded-full -z-10"
        style={{ backgroundColor: lightViolet, opacity: 0.3 }}
      ></div>
      <div
        className="absolute bottom-0 left-10 w-24 h-24 rounded-full -z-10"
        style={{ backgroundColor: creamColor, opacity: 0.4 }}
      ></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {buttons.map((button, index) => (
          <div key={index} className="flex justify-center">
            <motion.div
              className="relative w-full"
              onHoverStart={() => setActiveButton(index)}
              onHoverEnd={() => setActiveButton(null)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Efecto de brillo en el borde */}
              <div
                className={`absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-300 blur-sm ${
                  activeButton === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `linear-gradient(90deg, ${violetColor}, ${creamColor}, ${violetColor})`,
                  backgroundSize: "200% 200%",
                  animation: activeButton === index ? "shimmer 2s linear infinite" : "none",
                }}
              />

              {/* Botón principal */}
              <Link href={button.href} className="block w-full">
                <div
                  className={`relative w-full h-16 flex justify-center items-center rounded-full shadow-lg transition-all duration-300 overflow-hidden ${
                    activeButton === index
                      ? "text-violet-700 border border-violet-300"
                      : "text-white"
                  }`}
                  style={{
                    backgroundColor: activeButton === index ? "white" : violetColor,
                  }}
                >
                  {/* Fondo con gradiente sutil */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                      activeButton === index ? "opacity-10" : "opacity-0"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)`,
                    }}
                  />

                  {/* Contenido del botón */}
                  <div className="flex items-center space-x-3 px-6">
                    <div
                      className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                        activeButton === index ? "text-violet-600" : "text-white"
                      }`}
                    >
                      {button.icon}
                    </div>
                    <span className="font-medium text-lg">{button.text}</span>
                  </div>

                  {/* Indicador de hover */}
                  <motion.div
                    className="absolute right-4 opacity-0 transition-opacity duration-300"
                    animate={{ opacity: activeButton === index ? 1 : 0, x: activeButton === index ? 0 : 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Estilos para la animación de brillo */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
