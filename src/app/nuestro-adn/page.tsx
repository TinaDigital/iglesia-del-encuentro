"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Heart, Youtube, Dna, Zap, ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { VideoCarousel } from "@/components/video-carousel"

const values = [
  {
    title: "Adoración",
    description: "Vivimos para glorificar a Dios en todo lo que hacemos.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Comunidad", 
    description: "Creemos en el poder de la familia y la comunidad.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Servicio",
    description: "Nos entregamos al servicio de Dios y del prójimo.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Discipulado",
    description: "Crecemos y ayudamos a otros a crecer en su fe.",
    icon: <Dna className="w-6 h-6" />,
  },
  {
    title: "Misión",
    description: "Compartimos el amor de Dios con nuestra ciudad y el mundo.",
    icon: <ArrowRight className="w-6 h-6" />,
  },
  {
    title: "Excelencia",
    description: "Hacemos todo con excelencia para la gloria de Dios.",
    icon: <Sparkles className="w-6 h-6" />,
  },
]

export default function NuestroADNPage() {
  const valuesRef = useRef(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const isVideosInView = useInView(videosRef, { once: true, amount: 0.2 })

  const scrollToSection = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Colores personalizados cremita y violeta
  const primaryColor = "#8A4FFF" // Violeta
  const secondaryColor = "#F5EFE6" // Cremita
  const lightViolet = "#E9DFFF" // Violeta claro
  const darkCream = "#EAE0D5" // Cremita oscuro

  // Variante de animación para la doble hélice
  const helixAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Sección Hero - Renovada con diseño más creativo */}
      <section
        className="min-h-[90vh] flex items-center relative overflow-hidden"
        style={{ backgroundColor: secondaryColor }}
      >
        {/* Patrón de fondo abstracto */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3], 
                  scale: [1, 1.2, 1],
                  x: Math.sin(i) * 10,
                  y: Math.cos(i) * 10
                }}
                transition={{ 
                  duration: 3 + (i % 4), 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: i * 0.2
                }}
                className="absolute rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? primaryColor : darkCream,
                  width: 20 + (i % 10) * 15 + 'px',
                  height: 20 + (i % 10) * 15 + 'px',
                  left: (i * 5) % 100 + '%',
                  top: (i * 7) % 100 + '%',
                }}
              ></motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: lightViolet, color: primaryColor }}
              >
                NUESTRA ESENCIA
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestro <span style={{ color: primaryColor }}>ADN</span> define quiénes somos
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Así como el ADN contiene la información genética que determina el desarrollo de los seres vivos, 
                estos valores fundamentales definen nuestra identidad y propósito como comunidad.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection(valuesRef)}
                  className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors"
                  style={{ backgroundColor: primaryColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7B3FEF")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
                >
                  Descubrir nuestros valores
                  <Dna className="ml-2 w-5 h-5" />
                </button>

                <button
                  onClick={() => scrollToSection(videosRef)}
                  className="inline-flex items-center px-6 py-3 border rounded-md hover:bg-white/50 transition-colors"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                >
                  Ver mensajes
                  <Youtube className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Diseño creativo de ADN con elementos interactivos */}
              <div className="relative h-[500px] w-full">
                {/* Imagen principal */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Image 
                    src="/placeholder.svg?height=400&width=500" 
                    width={500} 
                    height={400} 
                    alt="Nuestro ADN" 
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Elementos decorativos flotantes */}
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="absolute bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-10"
                    style={{ 
                      border: `2px solid ${index % 2 === 0 ? primaryColor : darkCream}`,
                      maxWidth: '180px'
                    }}
                    initial={{ 
                      x: (index % 3 - 1) * 150 + (index % 2) * 50, 
                      y: (Math.floor(index / 2) - 1) * 100 + 50,
                      opacity: 0
                    }}
                    animate={{ 
                      opacity: 1,
                      x: (index % 3 - 1) * 150 + (index % 2) * 50, 
                      y: (Math.floor(index / 2) - 1) * 100 + 50,
                      rotate: [-1, 1, -1],
                      y: [(Math.floor(index / 2) - 1) * 100 + 50, (Math.floor(index / 2) - 1) * 100 + 60, (Math.floor(index / 2) - 1) * 100 + 50]
                    }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 0.7 + index * 0.1 },
                      rotate: { duration: 6, repeat: Infinity, repeatType: "reverse" },
                      y: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: index % 2 === 0 ? lightViolet : darkCream }}
                    >
                      <div style={{ color: index % 2 === 0 ? primaryColor : "#8B7E74" }}>
                        {value.icon}
                      </div>
                    </div>
                    <p className="text-sm font-medium">{value.title}</p>
                  </motion.div>
                ))}
                
                {/* Líneas conectoras */}
                <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
                  <motion.path
                    d="M250,100 C350,150 150,250 250,300 C350,350 150,450 250,500"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                  <motion.path
                    d="M250,100 C150,150 350,250 250,300 C150,350 350,450 250,500"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </svg>
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
            <p className="text-sm mb-2" style={{ color: primaryColor }}>
              Explora nuestro ADN
            </p>
            <ChevronDown className="w-5 h-5" style={{ color: primaryColor }} />
          </motion.div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section ref={valuesRef} className="py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.5 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: darkCream, opacity: 0.3 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Dna className="w-10 h-10 mr-3" style={{ color: primaryColor }} />
              <h2 className="text-3xl font-bold">Nuestros Valores</h2>
            </div>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: primaryColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos valores son los componentes esenciales de nuestro ADN, definen quiénes somos y guían todo lo que hacemos
            </p>
          </motion.div>

          {/* Estructura de doble hélice para los valores */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  custom={index}
                  variants={helixAnimation}
                  initial="hidden"
                  animate={isValuesInView ? "visible" : "hidden"}
                  className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                  style={{ 
                    borderTop: `4px solid ${index % 2 === 0 ? primaryColor : darkCream}`,
                    borderBottom: `4px solid ${index % 2 === 0 ? darkCream : primaryColor}`,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: index % 2 === 0 ? lightViolet : secondaryColor }}
                  >
                    <div style={{ color: index % 2 === 0 ? primaryColor : "#8B7E74" }}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Visualización de ADN - Nuevo */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: lightViolet }}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nuestro ADN en Acción</h2>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: primaryColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Así como el ADN se expresa en características visibles, nuestros valores se manifiestan en todo lo que hacemos
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/placeholder.svg?height=500&width=500" 
                  width={500} 
                  height={500} 
                  alt="ADN en acción" 
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold" style={{ color: primaryColor }}>Expresando Nuestro ADN</h3>
                <p className="text-gray-600">
                  Así como el ADN contiene toda la información necesaria para el desarrollo y funcionamiento de un organismo,
                  nuestros valores fundamentales guían cada aspecto de nuestra comunidad.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Nuestros servicios reflejan nuestra pasión por la adoración",
                    "Nuestros grupos pequeños fortalecen nuestra comunidad",
                    "Nuestros equipos de servicio demuestran nuestro compromiso",
                    "Nuestros programas de discipulado promueven el crecimiento"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: index % 2 === 0 ? primaryColor : darkCream }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </motion.div>
                  ))}
                </div>
                
                <Link
                  href="/testimonios"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors mt-4"
                  style={{ backgroundColor: primaryColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7B3FEF")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
                >
                  Ver testimonios
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Videos con Carousel */}
      <section ref={videosRef} className="py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full"
          style={{ backgroundColor: darkCream, opacity: 0.3 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.4 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVideosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Youtube className="w-10 h-10 mr-3" style={{ color: primaryColor }} />
              <h2 className="text-3xl font-bold">Prédicas sobre nuestro ADN</h2>
            </div>
            <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: primaryColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profundiza en cada uno de nuestros valores a través de estos mensajes
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <VideoCarousel 
              videos={[
                { title: "Adoración: Nuestra Respuesta a Dios", id: "VIDEO_ID_1" },
                { title: "Comunidad: Unidos en Propósito", id: "VIDEO_ID_2" },
                { title: "Servicio: Dando con Alegría", id: "VIDEO_ID_3" },
                { title: "Discipulado: Creciendo en Fe", id: "VIDEO_ID_4" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: secondaryColor }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl relative">
            {/* Elementos decorativos de ADN */}
            <div
              className="absolute top-0 right-0 w-20 h-20 rounded-full -mt-10 -mr-10"
              style={{ backgroundColor: primaryColor, opacity: 0.1 }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-16 h-16 rounded-full -mb-8 -ml-8"
              style={{ backgroundColor: darkCream, opacity: 0.3 }}
            ></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Dna className="w-16 h-16 mx-auto mb-6" style={{ color: primaryColor }} />
              <h2 className="text-3xl font-bold mb-6">¿Listo para ser parte de nuestro ADN?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Te invitamos a conocer más sobre nuestra comunidad y a descubrir cómo puedes ser parte de nuestra familia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/soy-nuevo"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md transition-colors"
                  style={{ backgroundColor: primaryColor }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7B3FEF")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
                >
                  Soy Nuevo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 border rounded-md hover:bg-gray-50 transition-colors"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                >
                  Contáctanos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
