"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Users, Lightbulb, Heart, ArrowRight, Calendar, BookOpen, Compass } from "lucide-react"

export default function IDEEnPasosPage() {
  const [activeStep, setActiveStep] = useState(0)
  const stepsRef = useRef(null)
  const isInView = useInView(stepsRef, { once: true, amount: 0.2 })

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  const steps = [
    {
      title: "Asistí a un Encuentro",
      description:
        "Participá de nuestros servicios dominicales y conocé nuestra comunidad. El primer paso es experimentar la presencia de Dios junto a otros.",
      icon: <Calendar className="w-8 h-8" />,
      color: violetColor,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Ver horarios",
        link: "/horarios",
      },
    },
    {
      title: "Unite a un Grupo",
      description:
        "Encontrá tu lugar en un grupo de conexión donde podrás crecer en tu fe, formar amistades genuinas y recibir apoyo en tu camino espiritual.",
      icon: <Users className="w-8 h-8" />,
      color: violetColor,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Encontrar un grupo",
        link: "/grupos",
      },
    },
    {
      title: "Descubrí tu Propósito",
      description:
        "Participá de nuestros encuentros de desarrollo y descubrí tus dones. Todos fuimos creados con un propósito único que podemos descubrir juntos.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: violetColor,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Descubrir mis dones",
        link: "/proposito",
      },
    },
    {
      title: "Serví",
      description:
        "Usá tus dones y talentos para servir en la iglesia y la comunidad. El servicio es una forma poderosa de crecer espiritualmente y hacer una diferencia.",
      icon: <Heart className="w-8 h-8" />,
      color: violetColor,
      image: "/placeholder.svg?height=400&width=600",
      cta: {
        text: "Áreas de servicio",
        link: "/servir",
      },
    },
  ]

  const firstSteps = [
    {
      title: "Bautismo",
      description: "Tu primer paso de obediencia en la fe y un testimonio público de tu compromiso con Cristo.",
      icon: <BookOpen className="w-5 h-5" />,
      color: violetColor,
    },
    {
      title: "Membresía",
      description: "Hacete parte oficial de nuestra familia y comprometete con la visión y misión de la iglesia.",
      icon: <Users className="w-5 h-5" />,
      color: violetColor,
    },
    {
      title: "Fundamentos",
      description: "Conocé las bases de nuestra fe a través de cursos diseñados para fortalecer tu camino espiritual.",
      icon: <Compass className="w-5 h-5" />,
      color: violetColor,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Con elementos decorativos */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="IDE en Pasos"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(0, 0, 0, 0.5))`,
            }}
          />
        </div>

        {/* Figuras decorativas */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.2 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.2 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span
                className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                TU CAMINO ESPIRITUAL
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Tu camino de <span style={{ color: creamColor }}>crecimiento</span>
              </h1>

              <div className="h-1 w-24 mb-8" style={{ backgroundColor: creamColor }}></div>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl">
                IDE en Pasos es nuestra guía para ayudarte a crecer espiritualmente y encontrar tu lugar en nuestra
                comunidad.
              </p>

              <Link
                href="#pasos"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors group"
                style={{ backgroundColor: creamColor, color: violetColor }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = creamColor)}
              >
                Comenzar el camino
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introducción - Con fondo crema */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: creamColor }}>
        {/* Figuras decorativas */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.2 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: "white", opacity: 0.4 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es IDE en Pasos?</h2>
              <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>

              <p className="text-lg text-gray-700 mb-8">
                IDE en Pasos es nuestro camino diseñado para guiarte en tu crecimiento espiritual, desde tu primera
                visita hasta convertirte en un miembro activo que sirve con sus dones. Cada paso te acerca más a
                descubrir el propósito que Dios tiene para tu vida.
              </p>

              <div className="flex justify-center space-x-3">
                {[0, 1, 2, 3].map((step) => (
                  <motion.div
                    key={step}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: violetColor, opacity: 0.3 + step * 0.2 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step * 0.1, duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section - Con navegación interactiva y colores personalizados */}
      <section id="pasos" className="py-20 relative overflow-hidden" ref={stepsRef}>
        {/* Figuras decorativas */}
        <div
          className="absolute top-40 right-10 w-32 h-32 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.5 }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.3 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Los Cuatro Pasos
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 mx-auto mb-16"
            style={{ backgroundColor: violetColor }}
          ></motion.div>

          {/* Navegación de pasos */}
          <div className="flex justify-between items-center max-w-4xl mx-auto mb-16 relative">
            {/* Línea conectora */}
            <div
              className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0"
              style={{ backgroundColor: lightViolet }}
            ></div>

            {steps.map((step, index) => (
              <motion.button
                key={index}
                className={`relative z-10 flex flex-col items-center`}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 transition-all duration-300 ${
                    activeStep === index ? "scale-110 shadow-lg" : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>
                <span
                  className={`text-sm font-medium ${activeStep === index ? "opacity-100" : "opacity-70"}`}
                  style={{ color: activeStep === index ? violetColor : "inherit" }}
                >
                  Paso {index + 1}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Contenido del paso activo */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4" style={{ color: violetColor }}>
                {steps[activeStep].title}
              </h3>
              <p className="text-lg text-gray-700 mb-8">{steps[activeStep].description}</p>
              <Link
                href={steps[activeStep].cta.link}
                className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors group"
                style={{ backgroundColor: violetColor }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = violetColor)}
              >
                {steps[activeStep].cta.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="order-1 md:order-2 relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src={steps[activeStep].image || "/placeholder.svg"}
                alt={steps[activeStep].title}
                fill
                className="object-cover"
              />
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: steps[activeStep].color }}
              ></div>

              {/* Borde decorativo */}
              <div
                className="absolute -inset-1 rounded-xl -z-10"
                style={{ backgroundColor: steps[activeStep].color, opacity: 0.1 }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* First Steps Section - Con tarjetas en tonos violeta y crema */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: creamColor }}>
        {/* Figuras decorativas */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{ backgroundColor: "white", opacity: 0.4 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.3 }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl font-bold mb-4">Primeros Pasos</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estos son los fundamentos que te ayudarán a establecer bases sólidas en tu camino espiritual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {firstSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-2 w-full"
                  style={{
                    background: `linear-gradient(to right, ${violetColor}, ${violetColor}CC)`,
                  }}
                ></div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6"
                    style={{
                      background: `linear-gradient(to right, ${violetColor}, ${violetColor}CC)`,
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <Link
                    href={`/primeros-pasos/${step.title.toLowerCase()}`}
                    className="inline-flex items-center text-sm font-medium group"
                    style={{ color: violetColor }}
                  >
                    Saber más
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

