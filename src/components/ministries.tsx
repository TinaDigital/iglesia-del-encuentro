"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Instagram, Clock, ChevronRight, ArrowLeft, ArrowRight, MapPin } from "lucide-react"
import ninos from "../../public/311.jpg"
import entretiempo from "../../public/entretiempo.jpg"	
import boomerang from "../../public/boomerang1.jpg"
import pulso from "../../public/pulso.jpg"
import breakpoint from "../../public/breakpoint.jpg"
import logoestacion from "../../public/Logos Edades_estacion311.png"
import logopulso from "../../public/Logos Edades_pulso.png"
import logobreakpoint from "../../public/Logos Edades_breakpoint.png"
import logoentre from "../../public/Logos Edades_entretiempo.png"
import logoboomerang from "../../public/Logos Edades_boomerang.png"

export function Ministries() {
  const [activeMinistry, setActiveMinistry] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Colores personalizados con tonos sutiles
  const violetColor = "#8b5cf6" // Violeta principal
  const violetLight = "#ede9fe" // Violeta muy claro
  const violetMedium = "#c4b5fd" // Violeta medio
  const creamColor = "#f5f0e6" // Crema suave
  const creamLight = "#faf7f2" // Crema muy claro

  const ministries = [
    {
      name: "Estación 3.11",
      description:
        "Ayudamos a los niños en edad preescolar a descubrir a Dios de una manera divertida y atractiva! ¡Hay muchos saltos, cantos, bailes, aprendizaje de la Biblia y risas en cada experiencia!",
      image: ninos,
      logo: logoestacion,
      instagram: "https://www.instagram.com/e311.ide/",
      schedule: "Domingos 11:20h",
      ageGroup: "Niños de 3 a 11 años",
      location: "Olavarría 316, Quilmes centro"
    },
    {
      name: "Entretiempo",
      description:
        "El camino a través de la secundaria puede ser difícil, pero no tiene por qué ser solitario. Hemos preparado un ambiente donde puedan aprender cómo Dios los ve y descubrir su verdadera identidad. Realizamos actividades generales y en Grupos.",
      image:
        entretiempo,
      logo: logoentre,
      instagram: "https://www.instagram.com/entretiempo.ide/",
      schedule: "Sábados 17:30 a 19:45h",
      ageGroup: "Pre Adolescentes de 11 a 13 años",
      location: "Olavarría 319, Quilmes centro"
    },
    {
      name: "Boomerang",
      description:
        "Los años previos a la facultad suelen ser cruciales. Boomerang está aquí para ayudar a que cada estudiante encuentre un lugar seguro donde poder descubrir el propósito de Dios para su vida. Realizamos actividades generales y en Grupos.",
      image:
        boomerang,
      logo: logoboomerang,
      instagram: "https://www.instagram.com/boomerang.ide/",
      schedule: "Sábados 20 a 23h",
      ageGroup: "Adolescentes de 14 a 17 años",
      location: "Olavarría 319, Quilmes centro"
    },
    {
      name: "Pulso",
      description:
        "Los universitarios enfrentan nuevos desafíos de crecimiento y madurez que requieren buenos consejos y buenas influencias. Pulso es el lugar ideal para conectar con Dios y hacer nuevos amigos. Realizamos actividades generales y en Grupos.",
      image:
        pulso,
      logo: logopulso,
      instagram: "https://www.instagram.com/pulso.ide/",
      schedule: "Sábados 20h",
      ageGroup: "Jóvenes de 18 a 29 años",
      location: "Olavarría 319, Quilmes centro"
    },
    {
      name: "Break Point",
      description:
        "Alcanzar la madurez no se trata solamente de cumplir años. En Break Point amamos el desafío de aprender a mirar atrás con gratitud y hacia adelante con expectativas. Realizamos actividades generales y en Grupos.",
      image:
        breakpoint,
      logo: logobreakpoint,
      instagram: "https://www.instagram.com/breakpoint.ide/",
      schedule: "Viernes cada 15 días, 20h",
      ageGroup: "Jóvenes adultos de 30 a 40 años", 
      location: "Alvear 780"
    },
  ]

  const nextMinistry = () => {
    setActiveMinistry((prev) => (prev === ministries.length - 1 ? 0 : prev + 1))
  }

  const prevMinistry = () => {
    setActiveMinistry((prev) => (prev === 0 ? ministries.length - 1 : prev - 1))
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Línea de transición sutil desde la sección anterior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent opacity-30"></div>
      
      {/* Círculos decorativos */}
      <div className="absolute -left-24 -top-24 w-64 h-64 rounded-full opacity-10" 
        style={{ background: `linear-gradient(135deg, ${violetLight}, ${violetMedium})` }}></div>
      <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full opacity-10" 
        style={{ background: `linear-gradient(135deg, ${creamColor}, ${violetLight})` }}></div>
      
      {/* Puntos decorativos */}
      <div className="absolute left-1/4 top-16 w-2 h-2 rounded-full opacity-25" 
        style={{ backgroundColor: violetColor }}></div>
      <div className="absolute right-1/4 bottom-16 w-3 h-3 rounded-full opacity-20" 
        style={{ backgroundColor: violetMedium }}></div>
      <div className="absolute right-1/3 top-1/3 w-2 h-2 rounded-full opacity-30" 
        style={{ backgroundColor: creamColor }}></div>
      <div className="absolute left-1/3 bottom-1/3 w-2 h-2 rounded-full opacity-15" 
        style={{ backgroundColor: violetLight }}></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-3 tracking-tight">
            Tu Familia <span className="font-semibold" style={{ color: violetColor }}>importa</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ background: `linear-gradient(to right, ${creamColor}, ${violetColor})` }}></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Queremos preparar a la próxima generación hacia un encuentro personal con 
          Jesús que transforme sus vidas. Desde niños hasta jovenes adultos, todos tienen 
          un lugar donde pertenecer y ser familia.
          </p>
        </motion.div>

        {/* Navegación móvil con nombre del ministerio actual y flechas */}
        <div className="md:hidden mb-8 flex items-center justify-between">
          <button 
            onClick={prevMinistry}
            className="p-2 rounded-full"
            style={{ backgroundColor: violetLight, color: violetColor }}
            aria-label="Ministerio anterior"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center flex items-center">
            <div className="w-8 h-8 mr-2 flex items-center justify-center overflow-hidden">
              <Image
                src={ministries[activeMinistry].logo}
                alt={`Logo de ${ministries[activeMinistry].name}`}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: violetColor }}>
                {ministries[activeMinistry].name}
              </h3>
              <p className="text-xs text-gray-500">
                {activeMinistry + 1} de {ministries.length}
              </p>
            </div>
          </div>
          
          <button 
            onClick={nextMinistry}
            className="p-2 rounded-full"
            style={{ backgroundColor: violetLight, color: violetColor }}
            aria-label="Siguiente ministerio"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs de navegación en desktop */}
        <motion.div
          className="hidden md:flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex border-b" style={{ borderColor: violetLight }}>
            {ministries.map((ministry, index) => {
              const isActive = activeMinistry === index;
              return (
                <button
                  key={`tab-${ministry.name}`}
                  onClick={() => setActiveMinistry(index)}
                  className={`relative px-8 py-4 text-sm font-medium transition-all duration-200 flex items-center text-gray-500 ${
                    isActive ? 'text-violet-500' : ''
                  }`}
                >
                  <div className="w-6 h-6 mr-2 flex items-center justify-center overflow-hidden">
                    <Image
                      src={ministry.logo}
                      alt={`Logo de ${ministry.name}`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="relative z-10">{ministry.name}</span>
                  {isActive ? (
                    <motion.div
                      key={`underline-${ministry.name}`}
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: violetColor }}
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Contenido del ministerio activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMinistry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Imagen - En móvil arriba, en desktop a la izquierda */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl order-1">
              <Image
                src={ministries[activeMinistry].image || "/placeholder.svg"}
                alt={`Ministerio ${ministries[activeMinistry].name}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, ${violetColor}10, ${creamColor}20)` }}></div>
              
              {/* Esquinas decorativas en la imagen */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 rounded-tl-md" 
                style={{ borderColor: violetLight }}></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-md" 
                style={{ borderColor: violetLight }}></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 rounded-bl-md" 
                style={{ borderColor: violetLight }}></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 rounded-br-md" 
                style={{ borderColor: violetLight }}></div>
            </div>

            {/* Información - En móvil abajo, en desktop a la derecha */}
            <div className="space-y-5 order-2">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src={ministries[activeMinistry].logo}
                    alt={`Logo de ${ministries[activeMinistry].name}`}
                    width={0}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: violetColor }}>
                    {ministries[activeMinistry].name}
                  </h3>
                  <p className="text-sm uppercase tracking-wider font-medium" style={{ color: "gray-500" }}>
                    {ministries[activeMinistry].ageGroup}
                  </p>
                </div>
              </div>

              <div className="w-12 h-0.5" style={{ background: `linear-gradient(to right, ${creamColor}, ${violetColor})` }}></div>

              <p className="text-gray-700 leading-relaxed">{ministries[activeMinistry].description}</p>

              <div className="flex items-center text-sm mb-2" style={{ color: violetColor }}>
                <Clock className="w-4 h-4 mr-2" />
                <span>{ministries[activeMinistry].schedule}</span>
              </div>
              
              <div className="flex items-center text-sm mb-4" style={{ color: violetColor }}>
                <MapPin className="w-4 h-4 mr-2" />
                <span>{ministries[activeMinistry].location}</span>
              </div>

              <a
                href={ministries[activeMinistry].instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-md transition-colors group"
                style={{ 
                  backgroundColor: violetColor, 
                  color: "white",
                  boxShadow: `0 4px 6px -1px ${violetColor}40`
                }}
              >
                <Instagram className="w-4 h-4 mr-2" />
                <span>¿Tenés preguntas sobre {ministries[activeMinistry].name}?</span>
                <ChevronRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de navegación */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-2">
          {ministries.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setActiveMinistry(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeMinistry === index ? "w-8" : ""
              }`}
              style={{ 
                backgroundColor: activeMinistry === index ? violetColor : violetLight,
                boxShadow: activeMinistry === index ? `0 0 8px ${violetColor}60` : "none"
              }}
              aria-label={`Ver ministerio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
