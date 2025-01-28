"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Ministries() {
  const ministries = [
    {
      name: "Entretiempo",
      description: "Un espacio divertido y seguro donde los niños aprenden sobre Dios a través de juegos, música y actividades creativas.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RCd8ojbZaFuExFFvbMvjcZLAWYOn0u.png",
      instagram: "https://instagram.com/entretiempo",
      gradient: "from-orange-400 to-pink-500",
      schedule: "Domingos 11:00hs"
    },
    {
      name: "Boomerang", 
      description: "Un ministerio dinámico para adolescentes donde pueden crecer en su fe, hacer amigos y divertirse en un ambiente seguro.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boomerang-placeholder-uOE9m2JKLwqxvF5tR7yHn4IpYWsX8D.jpg",
      instagram: "https://instagram.com/boomerang",
      gradient: "from-purple-500 to-indigo-500",
      schedule: "Sábados 17:00hs"
    },
    {
      name: "Pulso",
      description: "Un espacio vibrante para jóvenes adultos donde pueden profundizar su fe, construir relaciones genuinas y descubrir su propósito.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pulso-placeholder-kNR3qw7MvLzxcH9tB5yGp4IjYWsX2F.jpg", 
      instagram: "https://instagram.com/pulso",
      gradient: "from-teal-500 to-cyan-500",
      schedule: "Sábados 20:00hs"
    },
    {
      name: "Break Point",
      description: "Un ministerio para adultos jóvenes donde pueden encontrar comunidad, mentoría y crecimiento espiritual en cada etapa de la vida.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/breakpoint-placeholder-mPE5s8NKLwqxvF3tR7yHn4IjYWsX9B.jpg",
      instagram: "https://instagram.com/breakpoint", 
      gradient: "from-green-500 to-lime-500",
      schedule: "Viernes 20:00hs"
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Nuestros Ministerios
          </h2>
          <p className="text-xl text-gray-700">Encontrá tu lugar en nuestra comunidad</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl">
                <div className="relative h-48">
                  <Image
                    src={ministry.image}
                    alt={`Ministerio ${ministry.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${ministry.gradient} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold bg-gradient-to-t from-black/60 to-transparent">
                    {ministry.schedule}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {ministry.name}
                  </h3>
                  <p className="text-gray-700 mb-4 h-24">{ministry.description}</p>
                  <a
                    href={ministry.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full py-3 px-6 text-center text-white rounded-lg bg-gradient-to-r ${ministry.gradient} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    Seguinos en Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
