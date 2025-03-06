"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageSquare, Calendar, Users, Lightbulb, Heart, ChevronDown } from "lucide-react"

export default function SoyNuevoPage() {
  const processRef = useRef(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 })

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  return (
    <main className="min-h-screen bg-white">
      {/* Sección de Bienvenida */}
      <section
        className="min-h-[90vh] flex items-center relative overflow-hidden"
        style={{ backgroundColor: creamColor }}
      >
        {/* Figuras decorativas */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.4 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.3 }}
        ></div>
        <div
          className="absolute top-40 left-10 w-20 h-20 rounded-full"
          style={{ backgroundColor: violetColor, opacity: 0.1 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span
                className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: lightViolet, color: violetColor }}
              >
                BIENVENIDO
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Encontrá tu lugar en nuestra <span style={{ color: violetColor }}>comunidad</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Estamos felices de que estés aquí. Queremos conocerte y acompañarte en tu camino espiritual.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#video"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors"
                  style={{ backgroundColor: violetColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
                >
                  Ver mensaje
                </a>

                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="inline-flex items-center px-6 py-3 border rounded-md hover:bg-white/50 transition-colors"
                  style={{ borderColor: violetColor, color: violetColor }}
                >
                  Contactarnos
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=600&width=800" alt="Bienvenida" fill className="object-cover" />

                {/* Borde decorativo */}
                <div
                  className="absolute -inset-1 rounded-lg -z-10"
                  style={{ backgroundColor: violetColor, opacity: 0.2 }}
                ></div>
              </div>

              {/* Overlay con información de servicios */}
              <div
                className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg max-w-xs"
                style={{ backgroundColor: "white", borderLeft: `4px solid ${violetColor}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5" style={{ color: violetColor }} />
                  <h3 className="font-medium">Servicios Dominicales</h3>
                </div>
                <p className="text-sm text-gray-600">11:30hs - Av. Ejemplo 1234</p>
              </div>
            </motion.div>
          </div>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <p className="text-sm mb-2" style={{ color: violetColor }}>
              Descubre más
            </p>
            <ChevronDown className="w-5 h-5" style={{ color: violetColor }} />
          </motion.div>
        </div>
      </section>

      {/* Video de bienvenida */}
      <section id="video" className="py-20 relative overflow-hidden">
        {/* Figuras decorativas */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.5 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.3 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold mb-4">Mensaje de Bienvenida</h2>
              <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: violetColor }}></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Nuestros pastores tienen un mensaje especial para ti</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="Mensaje de Bienvenida"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Elementos decorativos */}
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full"
                style={{ backgroundColor: creamColor }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full"
                style={{ backgroundColor: lightViolet }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Proceso */}
      <section ref={processRef} className="py-20 relative overflow-hidden" style={{ backgroundColor: creamColor }}>
        {/* Figuras decorativas */}
        <div
          className="absolute top-40 right-10 w-32 h-32 rounded-full"
          style={{ backgroundColor: violetColor, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full"
          style={{ backgroundColor: "white", opacity: 0.6 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">IDE en Pasos</h2>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: violetColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Tu camino de crecimiento espiritual</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Línea conectora */}
              <div
                className="absolute left-[39px] top-12 bottom-12 w-px hidden md:block"
                style={{ backgroundColor: violetColor, opacity: 0.3 }}
              ></div>

              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Asistí a un Encuentro",
                    description: "Participá de nuestros servicios dominicales",
                    icon: <Calendar className="w-5 h-5" />,
                  },
                  {
                    step: 2,
                    title: "Conectate",
                    description: "Unite a un grupo de conexión",
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    step: 3,
                    title: "Descubrí tu propósito",
                    description: "Conocé tus dones y talentos",
                    icon: <Lightbulb className="w-5 h-5" />,
                  },
                  {
                    step: 4,
                    title: "Serví",
                    description: "Sé parte de nuestros equipos de servicio",
                    icon: <Heart className="w-5 h-5" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center z-10"
                      style={{ backgroundColor: violetColor }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  href="/ide-en-pasos"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors group"
                  style={{ backgroundColor: violetColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
                >
                  Más información
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section ref={contactRef} className="py-20 relative overflow-hidden">
        {/* Figuras decorativas */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.4 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.6 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: violetColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Dejanos tus datos y nos pondremos en contacto contigo</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: lightViolet }}
                  >
                    <MessageSquare className="w-5 h-5" style={{ color: violetColor }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/+yourphonenumber"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: violetColor }}
                      className="hover:underline"
                    >
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: lightViolet }}
                  >
                    <Calendar className="w-5 h-5" style={{ color: violetColor }} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Horarios</h3>
                    <p className="text-gray-600">Domingos 11:30hs</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="md:col-span-3 bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ borderTop: `4px solid ${violetColor}` }}
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-medium py-3 px-6 rounded-md transition-colors"
                    style={{ backgroundColor: violetColor }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
                  >
                    Enviar
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

