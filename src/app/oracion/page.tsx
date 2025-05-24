"use client"

import { motion } from "framer-motion"
import { ExternalLink, Heart, Sparkles, Calendar, MapPin, Youtube, Clock } from "lucide-react"

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
                <Heart className="w-10 h-10 text-white" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: lightViolet, color: violetColor }}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                ORACIÓN
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              >
                ¡Creemos que la oración es la{" "}
                <span style={{ color: violetColor }}>llave</span>{" "}
                de todas las cosas!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
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