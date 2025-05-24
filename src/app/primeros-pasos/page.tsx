"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock, Calendar, ExternalLink, Users, ChevronRight } from "lucide-react"
import primerosPasos from "../../../public/primerospasos.jpg"
import primerosPasos2 from "../../../public/primerospasos1.jpg"

export default function PrimerosPasosPage() {
  const infoRef = useRef<HTMLDivElement>(null)
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.2 })

  // Volvemos a los colores originales
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro
  const darkViolet = "#7c3aed" // Violeta oscuro

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Con colores originales y orden ajustado en móvil */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Destellos decorativos */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: lightViolet }}></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full opacity-30" style={{ backgroundColor: violetColor }}></div>
        <div className="absolute top-40 left-1/4 w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: darkViolet }}></div>
        
        <motion.div 
          className="absolute -top-10 right-1/3 w-16 h-16" 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-full h-full rounded-full" style={{ backgroundColor: violetColor }}></div>
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6 shadow-sm"
                  style={{ backgroundColor: lightViolet, color: violetColor }}
                >
                  PRIMEROS PASOS
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  ¡No eramos así <span style={{ color: violetColor }} className="relative">
                    cuando llegamos
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-current" 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    ></motion.div>
                  </span>!
                </h1>

                <div className="h-1 w-16 mb-6" style={{ backgroundColor: violetColor }}></div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Cada miércoles abrimos las puertas de casa especialmente para todos aquellos que deciden dar un
                  siguiente paso y avanzar en su deseo de conocer más a Jesús.
                </p>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="#info"
                    className="inline-flex items-center px-6 py-3 rounded-md text-white transition-colors shadow-md hover:shadow-lg"
                    style={{ backgroundColor: violetColor }}
                  >
                    Conocer más
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent z-10"></div>
                  <Image
                    src={primerosPasos}
                    alt="Primeros Pasos"
                    fill
                    className="object-cover"
                  />
                  <motion.div 
                    className="absolute -top-2 -right-2 w-12 h-12 rounded-full z-20"
                    initial={{ opacity: 0.6, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    style={{ backgroundColor: lightViolet }}
                  ></motion.div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full -z-10"
                  style={{ backgroundColor: lightViolet }}
                ></div>
                <div
                  className="absolute -top-6 right-10 w-16 h-16 rounded-full -z-10"
                  style={{ backgroundColor: lightViolet, opacity: 0.5 }}
                ></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "¿Qué es Primeros Pasos?" - Con colores originales */}
      <section id="info" className="py-20" style={{ backgroundColor: creamColor }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: violetColor }}>
                ¿Qué es Primeros Pasos?
              </h2>
              <div className="h-1 w-16 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={primerosPasos2}
                    alt="Primeros Pasos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nos hemos puesto en tus zapatos. Llegar un domingo a la comunidad y no conocer a nadie no es fácil
                  pero tampoco imposible. Nos propusimos que todos lo que deseen ser parte de la familia IDE lo puedan
                  hacer de manera fácil y sencilla.
                </p>
                <p className="text-lg font-medium" style={{ color: violetColor }}>
                  Primeros Pasos es el punta pie inicial a la vida en Grupos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Información práctica - Con colores originales */}
      <section ref={infoRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="col-span-3 md:col-span-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="mb-8 md:mb-0"
                >
                  <h2 className="text-3xl font-bold mb-4">Información Práctica</h2>
                  <div className="h-1 w-16 mb-6" style={{ backgroundColor: violetColor }}></div>
                  <p className="text-gray-600">
                    Todo lo que necesitas saber para unirte a nuestros encuentros de Primeros Pasos.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-3 md:col-span-2"
              >
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: lightViolet }}
                        >
                          <Calendar className="w-5 h-5" style={{ color: violetColor }} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Días y horarios</h3>
                          <p className="text-gray-600">Miércoles 18:30h</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: lightViolet }}
                        >
                          <Clock className="w-5 h-5" style={{ color: violetColor }} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Duración</h3>
                          <p className="text-gray-600">9 sesiones</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-6">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: lightViolet }}
                        >
                          <MapPin className="w-5 h-5" style={{ color: violetColor }} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Lugar</h3>
                          <p className="text-gray-600">Olavarría 319, Quilmes centro</p>
                        </div>
                      </div>

                      <a
                        href="https://maps.google.com/?q=Olavarría+319,+Quilmes+centro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2 rounded-md transition-colors text-white"
                        style={{ backgroundColor: violetColor }}
                      >
                        ¿Cómo llegar?
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
