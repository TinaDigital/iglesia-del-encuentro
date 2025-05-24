"use client"

import { motion } from "framer-motion"
import { History, Clock, Wrench, Sparkles } from "lucide-react"

export default function NuestraHistoriaPage() {
  // Colores personalizados del proyecto
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  return (
    <main className="min-h-screen bg-white">
      {/* Sección principal */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${creamColor} 0%, ${lightViolet} 100%)` 
        }}
      >
        {/* Figuras decorativas de fondo */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full animate-pulse"
          style={{ backgroundColor: violetColor, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full animate-pulse"
          style={{ backgroundColor: lightViolet, opacity: 0.4, animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 left-10 w-20 h-20 rounded-full animate-bounce"
          style={{ backgroundColor: violetColor, opacity: 0.2, animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-10 right-1/3 w-32 h-32 rounded-full animate-pulse"
          style={{ backgroundColor: "white", opacity: 0.5, animationDelay: "0.5s" }}
        ></div>

        {/* Elementos decorativos adicionales */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
            style={{ backgroundColor: violetColor, opacity: 0.05 }}
          ></div>
          <div 
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full"
            style={{ backgroundColor: lightViolet, opacity: 0.3 }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              {/* Icono decorativo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
                style={{ backgroundColor: violetColor }}
              >
                <History className="w-10 h-10 text-white" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: lightViolet, color: violetColor }}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                NUESTRA HISTORIA
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              >
                Estamos{" "}
                <span style={{ color: violetColor }}>trabajando</span>{" "}
                en esta página
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Nuestra historia es increíble y queremos contártela de la mejor manera. 
                Estamos preparando contenido especial para compartir contigo cómo Dios 
                ha obrado en la Iglesia del Encuentro a lo largo de los años.
              </motion.p>

              {/* Tarjeta de estado */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-lg mx-auto p-8 rounded-2xl shadow-lg border-l-4"
                style={{ 
                  backgroundColor: "white",
                  borderLeftColor: violetColor
                }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wrench className="w-6 h-6" style={{ color: violetColor }} />
                  <h3 className="text-xl font-bold" style={{ color: violetColor }}>
                    En Construcción
                  </h3>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: violetColor }} />
                  <p className="text-gray-600 font-medium">
                    Próximamente disponible
                  </p>
                </div>

                <p className="text-gray-600 text-sm">
                  Mientras tanto, te invitamos a conocer más sobre nosotros 
                  en las otras secciones de nuestro sitio web.
                </p>
              </motion.div>

              {/* Texto adicional */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm text-gray-500 mt-8 max-w-2xl mx-auto"
              >
                ¿Tenés alguna pregunta sobre nuestra iglesia? No dudes en contactarnos 
                o visitarnos en nuestros encuentros dominicales.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Indicador de loading animado */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex gap-1">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: violetColor }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: violetColor }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: violetColor }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
            ></motion.div>
          </div>
          <span className="text-sm ml-2" style={{ color: violetColor }}>
            Preparando contenido
          </span>
        </motion.div>
      </section>
    </main>
  )
} 