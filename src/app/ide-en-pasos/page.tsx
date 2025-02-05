'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const steps = [
  {
    title: "Asistí a un Encuentro",
    description: "Participá de nuestros servicios dominicales y conocé nuestra comunidad.",
  },
  {
    title: "Unite a un Grupo",
    description: "Encontrá tu lugar en un grupo de conexión donde podrás crecer en tu fe.",
  },
  {
    title: "Descubrí tu Propósito",
    description: "Participá de nuestros encuentros de desarrollo y descubrí tus dones.",
  },
  {
    title: "Serví",
    description: "Usá tus dones y talentos para servir en la iglesia y la comunidad.",
  },
]

export default function IDEEnPasosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[4/5] xsm:aspect-[14/9] lg:aspect-[3/1] flex items-center justify-center">
        <Image src="/placeholder.svg?height=800&width=1920" alt="IDE en Pasos" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            IDE en Pasos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Tu camino de crecimiento espiritual
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Mapa del Camino</h2>
              <p className="text-xl text-gray-600">Una guía visual de tu jornada espiritual</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Mapa IDE"
                width={800}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* First Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Primeros Pasos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Bautismo",
                description: "Tu primer paso de obediencia en la fe.",
              },
              {
                title: "Membresía",
                description: "Hacete parte oficial de nuestra familia.",
              },
              {
                title: "Fundamentos",
                description: "Conocé las bases de nuestra fe.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

