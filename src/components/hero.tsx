// Boton de soy nuevo pasa a segundo y horarios y encuentre pasa a primero

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaUser, FaClock, FaPersonWalking, FaUsers } from "react-icons/fa6"

export function Hero() {
  const [activeButton, setActiveButton] = useState<number | null>(null)

  // Colores personalizados con tonos más sutiles
  const violetColor = "#8b5cf6" // Violeta principal
  const violetLight = "#ede9fe" // Violeta muy claro
  const violetMedium = "#c4b5fd" // Violeta medio
  const creamColor = "#f5f0e6" // Crema suave
  const creamLight = "#faf7f2" // Crema muy claro

  const buttons = [
    { href: "/horarios", text: "Horarios y Encuentros", icon: <FaClock />, color: "#7c3aed" },
    { href: "/soy-nuevo", text: "Soy nuevo", icon: <FaUser />, color: violetColor },
    { href: "/primeros-pasos", text: "Primeros Pasos", icon: <FaPersonWalking />, color: "#6d28d9" },
    { href: "/somos-familia", text: "Somos Familia", icon: <FaUsers />, color: "#5b21b6" },
  ]

  return (
    <>
      <div className="relative w-full overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {/* Elementos decorativos sutiles */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        
        {/* Overlay sutil con tonos violeta y crema */}
        <div className="absolute inset-0 bg-gradient-to-br from-violetLight/10 to-creamLight/10 mix-blend-overlay z-5"></div>
        
        {/* Video para móvil */}
        <div className="block sm:hidden absolute inset-0">
          <video
            src="/gif_mobil.mp4"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          />
        </div>
        
        {/* Video para tablet */}
        <div className="hidden sm:block lg:hidden absolute inset-0">
          <video
            src="/gif_tablet.mp4"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          />
        </div>
        
        {/* Video para desktop */}
        <div className="hidden lg:block absolute inset-0">
          <video
            src="/gif_compu.mp4"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          />
        </div>
      </div>

      {/* Resto del código sin cambios */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative" style={{ backgroundColor: creamLight + "10" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {buttons.map((button, index) => (
            <div key={index} className="flex justify-center">
              <motion.div
                className="relative w-full"
                onHoverStart={() => setActiveButton(index)}
                onHoverEnd={() => setActiveButton(null)}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Efecto de brillo en el borde con colores más sutiles */}
                <div
                  className={`absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 blur-sm ${
                    activeButton === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(90deg, ${button.color}, ${violetMedium}, ${creamColor})`,
                    backgroundSize: "200% 200%",
                    animation: activeButton === index ? "shimmer 2s linear infinite" : "none",
                  }}
                />

                {/* Botón principal con colores más sutiles */}
                <Link href={button.href} className="block w-full">
                  <div
                    className={`relative w-full h-14 md:h-16 flex justify-center items-center rounded-full shadow-md transition-all duration-300 overflow-hidden`}
                    style={{
                      backgroundColor: activeButton === index ? creamLight : violetColor,
                      color: activeButton === index ? violetColor : creamLight,
                      border: activeButton === index ? `1px solid ${violetLight}` : "none",
                    }}
                  >
                    {/* Efecto de resplandor sutil */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        activeButton === index ? "opacity-10" : "opacity-0"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${creamColor}80 0%, ${violetLight}40 100%)`,
                      }}
                    />

                    {/* Contenido del botón */}
                    <div className="flex items-center space-x-2 md:space-x-3 px-3 md:px-6">
                      <div
                        className={`flex items-center justify-center rounded-full transition-all duration-300`}
                        style={{
                          color: activeButton === index ? violetColor : creamLight,
                        }}
                      >
                        {button.icon}
                      </div>
                      <span className="font-medium text-sm md:text-base lg:text-lg">{button.text}</span>
                    </div>

                    {/* Indicador de hover */}
                    <motion.div
                      className="absolute right-3 md:right-4 opacity-0 transition-opacity duration-300"
                      animate={{ opacity: activeButton === index ? 1 : 0, x: activeButton === index ? 0 : 10 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
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
        </motion.div>
      </div>

      {/* Estilos para la animación de brillo */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}
