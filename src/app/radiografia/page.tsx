"use client"

import { motion } from "framer-motion"
import { Download, Eye, ZoomIn, ZoomOut } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function RadiografiaPage() {
  // Colores personalizados del proyecto
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Banner mínimo */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                La <span style={{ color: violetColor }}>radiografía</span> de la IDE
              </h1>
              <p className="text-gray-600 text-sm">
                Estructura organizacional y flujo de vida de nuestra iglesia
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Controles de imagen */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsZoomed(!isZoomed)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-200 text-sm"
                style={{ backgroundColor: violetColor }}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                {isZoomed ? 'Vista normal' : 'Ampliar'}
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/radiografia_ide.jpg"
                download="radiografia_ide.jpg"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm"
                style={{ 
                  borderColor: violetColor,
                  color: violetColor 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = violetColor
                  e.currentTarget.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = violetColor
                }}
              >
                <Download className="w-4 h-4" />
                Descargar
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de la imagen - PROTAGONISTA */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              {/* Contenedor de imagen - MÁS GRANDE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`relative mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                  isZoomed ? 'max-w-none w-full' : 'max-w-7xl'
                }`}
                style={{ 
                  border: `2px solid ${violetColor}15` 
                }}
              >
                <Image
                  src="/radiografia_ide.jpg"
                  alt="Radiografía de la Iglesia del Encuentro - Estructura organizacional y ministerios"
                  width={1400}
                  height={1000}
                  className={`w-full h-auto transition-all duration-500 ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  priority
                  quality={100}
                />

                {/* Overlay sutil para indicar interactividad */}
                {!isZoomed && (
                  <div className="absolute inset-0 bg-transparent hover:bg-black hover:bg-opacity-5 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="flex items-center gap-2 px-3 py-2 bg-black bg-opacity-60 text-white rounded-lg text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Clic para ampliar</span>
                    </motion.div>
                  </div>
                )}
              </motion.div>

              {/* Información mínima */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 max-w-2xl mx-auto"
              >
                <p className="text-gray-500 text-xs">
                  📋 Clic en la imagen para ampliar y leer todos los detalles • 📥 Descargá para mayor resolución
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de contacto - MÁS COMPACTA */}
      <section className="py-8 bg-gray-50 border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: violetColor }}>
                ¿Preguntas sobre nuestra estructura?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>laide@iglesiadelencuentro.org.ar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+54 9 11 6954-7118</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 