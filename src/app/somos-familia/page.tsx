"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion} from "framer-motion"
import { MapPin, Calendar, Users, Heart, Sparkles, Star, Coffee } from "lucide-react"
import { Ministries } from "../../components/ministries"
import somosFamilia from "../../../public/somosfamilia.jpg"
import gc from "../../../public/gc.jpg"

export default function SomosFamiliaPage() {
  const growthGroupsRef = useRef<HTMLDivElement>(null)


  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  // Tipos de grupos de crecimiento con iconos y colores
  const growthGroups = [
    { name: "Grupos Ellos", icon: <Users className="w-4 h-4" />, color: "#4f46e5" },
    { name: "Grupos Ellas", icon: <Heart className="w-4 h-4" />, color: "#ec4899" },
    { name: "Grupos Mixtos", icon: <Star className="w-4 h-4" />, color: "#f59e0b" },
    { name: "Grupos Recién Casados", icon: <Sparkles className="w-4 h-4" />, color: "#10b981" },
    { name: "Grupos Matrimoniales", icon: <Heart className="w-4 h-4" />, color: "#8b5cf6" },
    { name: "Grupos Novios", icon: <Heart className="w-4 h-4" />, color: "#e11d48" },
    { name: "Grupos de interés", icon: <Coffee className="w-4 h-4" />, color: "#f43f5e" },
    { name: "Grupos de servicio", icon: <Users className="w-4 h-4" />, color: "#0ea5e9" },
    { name: "Grupos Adultos Mayores", icon: <Users className="w-4 h-4" />, color: "#6366f1" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section optimizada */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={somosFamilia}
            alt="Somos Familia"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 25%' }}
            priority
            quality={75}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(59, 130, 246, 0.75), rgba(16, 185, 129, 0.65), rgba(0, 0, 0, 0.5))`,
            }}
          />
        </div>

        {/* Solo 3 elementos decorativos estáticos para optimizar */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 hidden md:block"
          style={{ backgroundColor: creamColor }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-20 hidden md:block"
          style={{ backgroundColor: lightViolet }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              La vida es mejor <span style={{ color: creamColor }}>en grupos</span>
            </motion.h1>

            <div className="h-1 w-24 mx-auto mb-8 bg-white"></div>
          </motion.div>
        </div>
      </section>

      {/* Grupos de Crecimiento optimizado */}
      <section ref={growthGroupsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: violetColor }}
                >
                  Grupos de Crecimiento
                </motion.h2>

                <div className="h-1 w-16 mb-6" style={{ backgroundColor: violetColor }}></div>

                <p className="text-gray-700 mb-6">
                  Creemos que la vida es mejor en Grupos y hemos decidido no sólo ser asistentes a un lugar, sino
                  compartir la vida juntos como una verdadera y auténtica familia. Si Dios nos diseñó para ser familia,
                  ¡queremos serlo también con vos!
                </p>

                <p className="font-medium mb-4">Conocé las distintas opciones de Grupos que hay en la IDE:</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {growthGroups.map((group, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center p-2 rounded-full"
                      style={{ backgroundColor: `${group.color}20`, color: group.color }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                        style={{ backgroundColor: group.color, color: "white" }}
                      >
                        {group.icon}
                      </div>
                      <span className="text-sm font-medium">{group.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                      style={{ backgroundColor: lightViolet }}
                    >
                      <Calendar className="w-5 h-5" style={{ color: violetColor }} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Días y horarios</h3>
                      <p className="text-gray-600">De lunes a sábados. Horarios variados.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                      style={{ backgroundColor: lightViolet }}
                    >
                      <MapPin className="w-5 h-5" style={{ color: violetColor }} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Lugar</h3>
                      <p className="text-gray-600">En casas.</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="https://wa.me/+5491169547118"
                  className="inline-flex items-center px-5 py-2 rounded-md text-white"
                  style={{ backgroundColor: violetColor }}
                >
                  ¿Tenés preguntas sobre Grupos de Crecimiento?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Una sola imagen para optimizar */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={gc}
                      alt="Grupos de Crecimiento"
                      fill
                      className="object-cover"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${violetColor}30, transparent)`,
                      }}
                    ></div>
                  </div>

                  {/* Un solo elemento decorativo */}
                  <div
                    className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full -z-10"
                    style={{ backgroundColor: lightViolet }}
                  ></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frase introductoria optimizada */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-6xl opacity-20 font-serif" style={{ color: violetColor }}>
                &ldquo;
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center">
                En medio de tanta soledad que nos rodea, aprender a ser familia es un desafío común a todos. Conectar
                con personas en la misma etapa de tu vida será simple y desafiante.
              </p>
              <div
                className="absolute -right-4 -bottom-4 text-6xl opacity-20 font-serif"
                style={{ color: violetColor }}
              >
                &rdquo;
              </div>
            </div>

            <div className="p-6 rounded-xl text-center mt-8" style={{ backgroundColor: lightViolet }}>
              <p className="text-xl font-bold" style={{ color: violetColor }}>
                ¡En la IDE hay lugar para todos!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Ministries />
    </main>
  )
}
