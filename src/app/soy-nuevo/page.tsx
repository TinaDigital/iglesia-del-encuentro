"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageSquare, Calendar, Users, Heart, ChevronDown, DoorOpen, Map, BookOpen, Target, GraduationCap } from "lucide-react"
import pasos from "../../../public/pasos.jpg"
import soynuevo from "../../../public/soynuevo.jpg"
import videoPoster from "../../../public/video-poster.png"

export default function SoyNuevoPage() {
  const processRef = useRef(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 })

  const scrollToSection = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>) => {
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
                ¡Llegaste a <span style={{ color: violetColor }}>casa!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                ¡Te damos la bienvenida a la IDE! Es una alegría enorme que puedas estar aquí. Hemos estado pensando en vos desde hace algún tiempo. Nos hemos propuesto ser una comunidad de fe que haga fácil y sencilla la integración de aquellos que aún no nos conocen. ¡Te esperamos el próximo domingo!
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/horarios"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors"
                  style={{ backgroundColor: violetColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
                >
                  Horarios y encuentros
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image src={soynuevo} alt="Bienvenida" fill className="object-cover" />

                {/* Borde decorativo */}
                <div
                  className="absolute -inset-1 rounded-lg -z-10"
                  style={{ backgroundColor: violetColor, opacity: 0.2 }}
                ></div>
              </div>

              {/* Overlay con información de servicios */}
              <div
                className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg max-w-xs hidden lg:block"
                style={{ backgroundColor: "white", borderLeft: `4px solid ${violetColor}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5" style={{ color: violetColor }} />
                  <h3 className="font-medium">Encuentros Dominicales</h3>
                </div>
                <p className="text-sm text-gray-600">9:30hs y 11:30hs - Olavarría 319, Quilmes centro</p>
              </div>
            </motion.div>
          </div>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
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
              <h2 className="text-3xl font-bold mb-4">La vida es compleja, queremos ayudarte</h2>
              <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: violetColor }}></div>
              <p className="text-gray-600 max-w-2xl mx-auto">¡Un saludo de bienvenida para vos!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Elementos decorativos movidos arriba del video */}
              <div
                className="absolute -top-8 -left-8 w-16 h-16 rounded-full -z-10"
                style={{ backgroundColor: creamColor }}
              ></div>
              <div
                className="absolute -top-12 -right-8 w-24 h-24 rounded-full -z-10"
                style={{ backgroundColor: lightViolet }}
              ></div>

              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                  poster={videoPoster.src}
                  playsInline
                  suppressHydrationWarning={true}
                >
                  <source src="/Bienvenida-web.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creemos que la vida es mejor en grupos y es por eso que desde tu primer día en la IDE te invitaremos a sumarte a un grupo donde semana tras semana irás avanzando en pasos para que tu acceso a la comunidad sea simple, fácil y sencillo. Nuestro deseo es que a lo largo de cada semana, te encuentres con Jesús y sea El quien transforme tu vida para siempre.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                {/* Línea conectora */}
                <div
                  className="absolute left-[39px] top-12 bottom-12 w-px hidden md:block"
                  style={{ backgroundColor: violetColor, opacity: 0.3 }}
                ></div>

                <div className="space-y-12">
                  {[
                    {
                      step: 0,
                      title: "Puertas de Acceso",
                      description: "Ser familia para los que quieren ser familia",
                      icon: <DoorOpen className="w-5 h-5" />,
                    },
                    {
                      step: 1,
                      title: "Sumate",
                      description: "Tener un primer contacto personal",
                      icon: <Users className="w-5 h-5" />,
                    },
                    {
                      step: 2,
                      title: "Grupos Primeros Pasos",
                      description: "Conocer a Jesús e integrarse a la comunidad",
                      icon: <Map className="w-5 h-5" />,
                    },
                    {
                      step: 3,
                      title: "Grupos de Bautismo",
                      description: "Clarificar el significado bíblico del bautismo",
                      icon: <BookOpen className="w-5 h-5" />,
                    },
                    {
                      step: 4,
                      title: "Grupos de Servicio",
                      description: "Descubrir y desarrollar los dones para servir",
                      icon: <Target className="w-5 h-5" />,
                    },
                    {
                      step: 5,
                      title: "Grupos de Crecimiento",
                      description: "Madurar como discípulo de Cristo y arraigarse en la comunidad",
                      icon: <Heart className="w-5 h-5" />,
                    },
                    {
                      step: 6,
                      title: "Grupos de Entrenamiento",
                      description: "Capacitaciones específicas",
                      icon: <GraduationCap className="w-5 h-5" />,
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
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={pasos} 
                    alt="IDE en Pasos" 
                    className="w-full h-auto object-cover" 
                    placeholder="blur"
                  />
                  
                  {/* Borde decorativo */}
                  <div
                    className="absolute -inset-1 rounded-lg -z-10"
                    style={{ backgroundColor: violetColor, opacity: 0.2 }}
                  ></div>
                </div>
              </motion.div>
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
                Conocé + sobre IDE en PASOS
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">¡Queremos conocerte!</h2>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: violetColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra motivación es poder ser familia con vos, ya que hemos encontrado en Dios a un Padre que nos ama de una manera sorprendente. Te animamos a dejarnos tus datos para poder conectar con vos y ayudarte en lo que necesites.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfc8XLwOQTXrqy_WaFbCE4BPRljfsA2ocQp_wDdBjUm5N3YTA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors"
                style={{ backgroundColor: violetColor }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
              >
                Dejá tus datos
              </a>
              <a
                href="https://wa.me/+5491169547118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border rounded-md hover:bg-white/50 transition-colors"
                style={{ borderColor: violetColor, color: violetColor }}
              >
                Escribinos
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
