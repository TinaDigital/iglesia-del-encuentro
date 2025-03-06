'use client'

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GruposPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  // Colores personalizados con tonos más sutiles
  const violetColor = "#8b5cf6" // Violeta principal
  const violetLight = "#ede9fe" // Violeta muy claro

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

  const benefits = [
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
  ]

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        {/* Overlay sutil con tonos violeta y crema */}
        <div className="absolute inset-0 bg-gradient-to-br from-violetLight/20 to-creamLight/20 mix-blend-overlay z-5"></div>
        
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <Users className="w-16 h-16 mx-auto mb-6" style={{ color: violetColor }} />
            <h2 className="text-4xl font-bold mb-4">Nuestros Grupos</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
            <p className="text-xl text-gray-600">
              Creemos que la vida cristiana se vive mejor en comunidad. Nuestros grupos son espacios seguros para
              crecer, compartir y apoyarnos mutuamente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
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
                    <Users size={20} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{group.name}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium" style={{ color: violetColor }}>{group.schedule}</p>
                    <motion.div
                      animate={{ 
                        x: activeCard === index ? 0 : -5,
                        opacity: activeCard === index ? 1 : 0
                      }}
                    >
                      <ChevronRight size={18} style={{ color: violetColor }} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: violetLight }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">¿Por qué unirte a un grupo?</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre los beneficios de formar parte de nuestra comunidad de grupos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: violetColor }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: `linear-gradient(to right, ${violetColor}, ${violetColor}CC)`,
          }}
        ></div>
        
        {/* Elementos decorativos sutiles */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">¿Listo para unirte a un grupo?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo para ayudarte a encontrar el grupo perfecto para
              ti.
            </p>
            <Link href="/form">
              <motion.button 
                className="bg-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                style={{ color: violetColor }}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                Encontrar mi grupo
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
