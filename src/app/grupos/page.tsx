'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Users } from "lucide-react"

const groups = [
  {
    name: "Primeros Pasos",
    description: "Grupos para nuevos creyentes y personas que quieren conocer más sobre la fe.",
    schedule: "Varios horarios disponibles",
  },
  {
    name: "Grupos de Conexión",
    description: "Espacios para crear amistades genuinas y crecer juntos en la fe.",
    schedule: "Reuniones semanales",
  },
  {
    name: "Grupos de Crecimiento",
    description: "Profundiza en tu fe y desarrolla tu liderazgo.",
    schedule: "Encuentros quincenales",
  },
]

export default function GruposPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[4/5] xsm:aspect-[14/9] lg:aspect-[3/1] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="La vida es mejor en grupos"
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
            La Vida es Mejor en Grupos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Somos una iglesia de grupos
          </motion.p>
        </div>
      </section>

      {/* Groups Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Users className="w-16 h-16 mx-auto text-primary mb-6" />
            <h2 className="text-4xl font-bold mb-6">Nuestros Grupos</h2>
            <p className="text-xl text-gray-600">
              Creemos que la vida cristiana se vive mejor en comunidad. Nuestros grupos son espacios seguros para
              crecer, compartir y apoyarnos mutuamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{group.name}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <p className="text-sm font-medium text-primary">{group.schedule}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">¿Por qué unirte a un grupo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Comunidad Auténtica",
                description: "Construye relaciones significativas y duraderas.",
              },
              {
                title: "Crecimiento Espiritual",
                description: "Profundiza en tu fe junto a otros creyentes.",
              },
              {
                title: "Apoyo Mutuo",
                description: "Encuentra apoyo en los momentos difíciles.",
              },
              {
                title: "Desarrollo Personal",
                description: "Descubre y desarrolla tus dones y talentos.",
              },
              {
                title: "Oración en Comunidad",
                description: "Experimenta el poder de la oración en grupo.",
              },
              {
                title: "Impacto Social",
                description: "Sirve a la comunidad junto a tu grupo.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">¿Listo para unirte a un grupo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para ayudarte a encontrar el grupo perfecto para
            ti.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Encontrar mi grupo
          </button>
        </div>
      </section>
    </main>
  )
}

