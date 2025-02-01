'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const ministries = [
  {
    name: "Entretiempo",
    age: "Niños",
    schedule: "Domingos 11:30",
    description: "Un espacio para que los más pequeños disfruten y se diviertan mientras aprenden.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RCd8ojbZaFuExFFvbMvjcZLAWYOn0u.png",
  },
  {
    name: "Boomerang",
    age: "Adolescentes",
    schedule: "Sábados 17:00",
    description: "Un lugar donde los adolescentes pueden crecer en su fe y hacer amigos.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Pulso",
    age: "Jóvenes",
    schedule: "Sábados 20:00",
    description: "Comunidad vibrante para jóvenes de 17 a 25 años.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Break Point",
    age: "Jóvenes Adultos",
    schedule: "Viernes 20:00",
    description: "Un espacio para conectar y crecer juntos.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function LlegasteACasaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Llegaste a Casa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Llegaste a Casa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Queremos ser familia para los que quieren ser familia
          </motion.p>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Ministerios por Edades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={ministry.image || "/placeholder.svg"} alt={ministry.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{ministry.name}</h3>
                  <p className="text-primary font-semibold mb-2">{ministry.age}</p>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  <p className="text-sm font-medium text-gray-500">Horario: {ministry.schedule}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestra Comunidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Familia",
                description: "Un lugar donde todos son bienvenidos y valorados.",
              },
              {
                title: "Crecimiento",
                description: "Oportunidades para crecer en tu fe y propósito.",
              },
              {
                title: "Servicio",
                description: "Juntos hacemos la diferencia en nuestra comunidad.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

