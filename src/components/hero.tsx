"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaUser, FaClock, FaBook, FaHandHoldingHeart } from "react-icons/fa"
import bannercelu from "../../public/Folleto-Mobile.png"
import bannertablet from "../../public/Folleto-Tablet.png"
import bannerdesktop from "../../public/Folleto-Desktop.png"
import darcelu from "../../public/dar-celu.jpg"
import dardesktop from "../../public/dar-desktop.jpg"

export function Hero() {
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [showDarPopup, setShowDarPopup] = useState(false)

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Colores personalizados con tonos más sutiles
  const violetColor = "#8b5cf6" // Violeta principal
  const violetLight = "#ede9fe" // Violeta muy claro
  const violetMedium = "#c4b5fd" // Violeta medio
  const creamColor = "#f5f0e6" // Crema suave
  const creamLight = "#faf7f2" // Crema muy claro

  const buttons = [
    { href: "/form", text: "¡Contanos sobre vos!", icon: <FaUser />, color: violetColor },
    { href: "/horarios", text: "Horarios y Encuentros", icon: <FaClock />, color: "#7c3aed" },
    { href: "/creencias", text: "En esto creemos", icon: <FaBook />, color: "#6d28d9" },
    { href: "#", text: "Dar", icon: <FaHandHoldingHeart />, color: "#5b21b6", onClick: () => setShowDarPopup(true) },
  ];


  return (
    <>
      <div className="relative w-full overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
       
        
        {/* Elementos decorativos sutiles */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        
        {/* Overlay sutil con tonos violeta y crema */}
        <div className="absolute inset-0 bg-gradient-to-br from-violetLight/10 to-creamLight/10 mix-blend-overlay z-5"></div>
        
        {/* Imagen para móvil - fija */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src={bannercelu}
            alt="Banner de la Iglesia del Encuentro"
            className="w-full h-full object-cover object-center"
            priority
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Imagen para tablet - fija */}
        <div className="hidden sm:block lg:hidden absolute inset-0">
          <Image
            src={bannertablet}
            alt="Banner de la Iglesia del Encuentro"
            className="w-full h-full object-cover object-center"
            priority
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Imagen para desktop - fija */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src={bannerdesktop}
            alt="Banner de la Iglesia del Encuentro"
            className="w-full h-full object-cover object-center"
            priority
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

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
                {button.onClick ? (
                  <button onClick={button.onClick} className="block w-full">
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
                  </button>
                ) : (
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
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pop-up de Dar */}
      {showDarPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full mx-4"
          >
            {/* Botón para cerrar */}
            <button 
              onClick={() => setShowDarPopup(false)}
              className="absolute -top-12 right-0 text-white bg-violetColor p-2 rounded-full"
              style={{ backgroundColor: violetColor }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Imagen para móvil */}
            <div className="block md:hidden">
              <Image
                src={darcelu}
                alt="Información para dar"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            {/* Imagen para desktop */}
            <div className="hidden md:block">
              <Image
                src={dardesktop}
                alt="Información para dar"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      )}

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
