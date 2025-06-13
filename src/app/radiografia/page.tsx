"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Download, Eye, ZoomIn, ZoomOut, X, RotateCw, Move } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function RadiografiaPage() {
  // Colores personalizados del proyecto
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  // Funciones de zoom
  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.3, 3))
  }

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.3, 1))
    if (zoomLevel <= 1.3) {
      setPosition({ x: 0, y: 0 })
    }
  }

  const resetZoom = () => {
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    resetZoom()
  }

  // Función de descarga
  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = '/radiografia_ide.jpg'
    link.download = 'radiografia_ide.jpg'
    link.click()
  }

  // Manejo del drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case '+':
        case '=':
          zoomIn()
          break
        case '-':
          zoomOut()
          break
        case '0':
          resetZoom()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, zoomLevel, closeModal, zoomOut])

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
                className="relative mx-auto max-w-7xl rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                style={{ border: `2px solid ${violetColor}15` }}
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/radiografia_ide.jpg"
                  alt="Radiografía de la Iglesia del Encuentro - Estructura organizacional y ministerios"
                  width={1400}
                  height={1000}
                  className="w-full h-auto transition-all duration-300 group-hover:scale-105"
                  priority
                  quality={100}
                />

                {/* Overlay con indicador de zoom */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-gray-800 shadow-lg"
                  >
                    <ZoomIn className="w-5 h-5" style={{ color: violetColor }} />
                    <span className="font-medium">Ver en detalle</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Botones de acción debajo de la imagen */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center gap-4 mt-6"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:shadow-md"
                  style={{ 
                    borderColor: violetColor, 
                    color: violetColor,
                    backgroundColor: 'white'
                  }}
                >
                  <Eye className="w-4 h-4" />
                  <span>Visualizar</span>
                </button>
                <button
                  onClick={downloadImage}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-300 hover:shadow-md hover:brightness-110"
                  style={{ backgroundColor: violetColor }}
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal del visualizador de imagen */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Panel de controles superior */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 z-60"
            >
              <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    zoomOut()
                  }}
                  disabled={zoomLevel <= 1}
                  className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                
                <span className="text-white text-sm font-medium px-3 py-1 bg-white bg-opacity-20 rounded">
                  {Math.round(zoomLevel * 100)}%
                </span>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    zoomIn()
                  }}
                  disabled={zoomLevel >= 3}
                  className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                <div className="w-px h-6 bg-white bg-opacity-30 mx-1"></div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    resetZoom()
                  }}
                  className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
                  title="Restablecer zoom (0)"
                >
                  <RotateCw className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    downloadImage()
                  }}
                  className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Botón de cerrar */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 p-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Indicador de arrastre */}
            {zoomLevel > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60"
              >
                <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md rounded-lg px-3 py-2 text-white text-sm">
                  <Move className="w-4 h-4" />
                  <span>Arrastra para mover</span>
                </div>
              </motion.div>
            )}

            {/* Contenedor de la imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-[95vw] max-h-[95vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={imageRef}
                className={`transition-transform duration-200 ${
                  zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
                }`}
                style={{
                  transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={zoomLevel === 1 ? zoomIn : undefined}
              >
                <Image
                  src="/radiografia_ide.jpg"
                  alt="Radiografía de la Iglesia del Encuentro - Estructura organizacional y ministerios"
                  width={1400}
                  height={1000}
                  className="max-w-full max-h-[95vh] object-contain"
                  quality={100}
                  priority
                />
              </div>
            </motion.div>

            {/* Instrucciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 right-4 text-white text-xs opacity-60 max-w-xs text-right"
            >
              <p>Esc: Cerrar • +/-: Zoom • 0: Reset</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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