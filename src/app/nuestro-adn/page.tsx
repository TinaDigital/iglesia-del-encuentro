'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Youtube } from "lucide-react"

const values = [
    {
      title: "Adoración",
      description: "Vivimos para glorificar a Dios en todo lo que hacemos.",
    },
    {
      title: "Comunidad", 
      description: "Creemos en el poder de la familia y la comunidad.",
    },
    {
      title: "Servicio",
      description: "Nos entregamos al servicio de Dios y del prójimo.",
    },
    {
      title: "Discipulado",
      description: "Crecemos y ayudamos a otros a crecer en su fe.",
    },
    {
      title: "Misión",
      description: "Compartimos el amor de Dios con nuestra ciudad y el mundo.",
    },
    {
      title: "Excelencia",
      description: "Hacemos todo con excelencia para la gloria de Dios.",
    },
]

export default function NuestroADNPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[4/5] xsm:aspect-[14/9] lg:aspect-[3/1] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Nuestro ADN"
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
            Nuestro ADN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Lo que nos hace quienes somos
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estos valores definen quiénes somos y guían todo lo que hacemos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Messages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Youtube className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Prédicas sobre nuestro ADN</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profundiza en cada uno de nuestros valores a través de estos mensajes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((video) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-video rounded-xl overflow-hidden shadow-lg"
              >
                <iframe
                  src={`https://www.youtube.com/embed/VIDEO_ID_${video}`}
                  title={`Mensaje ${video}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}