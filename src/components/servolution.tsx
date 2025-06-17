"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import fondo from "../../public/qmc.webp"

export function Servolution() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <style jsx>{`
        .bg-fixed-desktop {
          background-image: url(${fondo.src});
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }

        @media (min-width: 768px) {
          .bg-fixed-desktop {
            background-attachment: fixed;
          }
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="bg-fixed-desktop relative h-[70vh] w-full flex items-center justify-center overflow-hidden"
      >
        {/* Overlay azul violeta */}
        <div className="absolute inset-0 w-full h-full bg-purple-600 bg-opacity-80"></div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl mx-auto tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ¡Nuestra ciudad nos necesita!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            En Quilmes cada vez son más las personas en situación de calle con
            carencias elementales como el alimento. Unite al Programa solidario Quilmes Mi
            Casa.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="https://fundacionhechos.org.ar/"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block bg-white text-purple-700 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
            >
              ¿Cómo ayudo?
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
} 