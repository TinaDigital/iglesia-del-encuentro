"use client"

import { motion } from "framer-motion"
import { ExternalLink, Heart, Sparkles, Calendar, MapPin, Youtube, Clock } from "lucide-react"
import Image from "next/image"
import oracion from "../../../public/oracion.jpg"

export default function OracionPage() {
  // Colores personalizados del proyecto
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  return (
    <main className="min-h-screen bg-white">
      {/* Sección principal con banner */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={oracion}
            alt="Oración"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/20" /> {/* Overlay gris sutil */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white"
              >
                ¡Creemos que la oración es la{" "}
                <span style={{ color: violetColor }}>llave</span>{" "}
                de todas las cosas!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Te animamos a compartir aquí tu necesidad para unirnos con vos en oración. 
                Así mismo, cuando tengas una oración respondida, escríbela aquí para 
                celebrar juntos lo que Dios ha hecho.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdbVBH5bvHD99ckPbyFnY8jPpbK-0tPFIPcbRqH0PP-2FGP4A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: violetColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
                >
                  PEDIDO DE ORACIÓN
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zócalo de cierre - Encuentro de Oración */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.4 }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.3 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Texto principal del zócalo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Orar se aprende orando. Te animamos a orar con tus palabras más simples y 
                sinceras a Dios en todo momento y también a ser parte de nuestro Encuentro de 
                Oración de cada miércoles. ¡Te esperamos!
              </motion.p>

              {/* Tarjeta de información del encuentro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg border-l-4"
                style={{ 
                  backgroundColor: lightViolet,
                  borderLeftColor: violetColor
                }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: violetColor }}>
                  Encuentro de Oración
                </h3>

                <div className="space-y-4 text-left">
                  {/* Día y hora */}
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: violetColor }} />
                    <div>
                      <p className="font-semibold text-gray-800">Miércoles</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0" style={{ color: violetColor }} />
                    <div>
                      <p className="font-semibold text-gray-800">20:00hs</p>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: violetColor }} />
                    <div>
                      <p className="font-semibold text-gray-800">Olavarría 319, Quilmes centro</p>
                    </div>
                  </div>

                  {/* Opción online */}
                  <div className="flex items-start gap-3">
                    <Youtube className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: violetColor }} />
                    <div>
                      <p className="font-semibold text-gray-800">Unite en VIVO de manera Online</p>
                      <p className="text-sm text-gray-600">por nuestro Canal de Youtube</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 