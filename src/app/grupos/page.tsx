'use client'

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Users, ChevronRight, Heart, Clock, MapPin, Calendar, User, UserPlus, Home, Coffee, Users2 } from "lucide-react"
import Link from "next/link"

export default function GruposPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Colores personalizados con tonos más sutiles
  const violetColor = "#8b5cf6" // Violeta principal
  const violetLight = "#ede9fe" // Violeta muy claro
  const creamColor = "#f5f0e6" // Crema suave
  const creamLight = "#faf7f2" // Crema muy claro

  const groupTypes = [
    {
      name: "Grupos Ellos",
      description: "Espacios exclusivos para hombres donde compartir experiencias y crecer juntos en la fe.",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "Grupos Ellas",
      description: "Comunidades de mujeres que se apoyan mutuamente en su camino espiritual y personal.",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "Grupos Mixtos",
      description: "Grupos diversos donde todos son bienvenidos para compartir y crecer en comunidad.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Grupos Recién Casados",
      description: "Apoyo especial para parejas que comienzan su vida matrimonial.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Grupos Matrimoniales",
      description: "Fortalecimiento de matrimonios a través de la comunidad y principios bíblicos.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Grupos Novios",
      description: "Apoyo especial a las parejas para establecer cimientos sólidos en el noviazgo.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Grupos de Interés",
      description: "Comunidades unidas por pasiones e intereses comunes.",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      name: "Grupos de Servicio", 
      description: "Equipos dedicados a servir a la iglesia y a la comunidad.",
      icon: <UserPlus className="w-5 h-5" />,
    },
    {
      name: "Grupos de Adultos mayores (+65 años)",
      description: "Un espacio pensado para vivir esta etapa acompañado creciendo en la fe. Encuentro mensual de todos los grupos: 1 sábado al mes 10 hs (más info @adultosmayores)",
      icon: <Users className="w-5 h-5" />,
    },
  ]

  const benefits = [
    {
      title: "Comunidad Auténtica",
      description: "Construye relaciones significativas y duraderas en un ambiente de familia.",
      icon: <Users2 className="w-6 h-6" />,
    },
    {
      title: "Crecimiento Espiritual",
      description: "Profundiza en tu fe junto a otros creyentes que te acompañan en el proceso.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Apoyo Mutuo",
      description: "Encuentra apoyo genuino en los momentos difíciles y celebra los logros juntos.",
      icon: <UserPlus className="w-6 h-6" />,
    },
    {
      title: "Desarrollo Personal",
      description: "Descubre y desarrolla tus dones y talentos en un entorno seguro y motivador.",
      icon: <User className="w-6 h-6" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative aspect-[4/5] xsm:aspect-[14/9] lg:aspect-[3/1] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="La vida es mejor en grupos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        {/* Overlay con tonos violeta y crema */}
        <div className="absolute inset-0 bg-gradient-to-br from-violetLight/30 to-creamLight/30 mix-blend-overlay z-5"></div>
        
        {/* Elementos decorativos */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{ background: `radial-gradient(circle, ${violetColor}40, transparent 70%)` }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Grupos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-500">Crecimiento</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Para todas las edades
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-200 mb-8">
              Creemos que la vida es mejor en Grupos y hemos decidido no sólo ser asistentes a 
              un lugar, sino compartir la vida juntos como una verdadera y auténtica familia. Si 
              Dios nos diseñó para ser familia, ¡queremos serlo también con vos!
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="#grupos">
                <button 
                  className="bg-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center mx-auto"
                  style={{ color: violetColor }}
                >
                  Conocer más
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          <p className="text-sm mb-2 text-white">
            Descubre más
          </p>
          <ChevronRight className="w-5 h-5 text-white transform rotate-90" />
        </motion.div>
      </section>

      {/* Introducción */}
      <section className="py-20 relative overflow-hidden" id="grupos">
        <div 
          className="absolute top-0 right-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: creamLight, opacity: 0.5 }}
        />
        <div 
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{ backgroundColor: violetLight, opacity: 0.3 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <Users className="w-16 h-16 mx-auto mb-6" style={{ color: violetColor }} />
            <h2 className="text-4xl font-bold mb-4">Nuestros Grupos</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
            <p className="text-xl text-gray-600">
              Conocé las distintas opciones de Grupos que hay en la IDE:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {groupTypes.map((group, index) => (
              <motion.div
                key={group.name}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{group.name}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="flex justify-between items-center">
                    <motion.div
                      animate={{ 
                        x: activeCard === index ? 5 : 0,
                        opacity: activeCard === index ? 1 : 0.7
                      }}
                      className="flex items-center"
                      style={{ color: violetColor }}
                    >
                      <span className="text-sm font-medium">Saber más</span>
                      <ChevronRight size={18} className="ml-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Información de Encuentros */}
      <section className="py-20" style={{ backgroundColor: violetLight }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Información de Encuentros</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4" style={{ color: violetColor }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: violetColor }}>Días</h3>
              <p className="text-gray-600">De lunes a viernes</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: violetColor }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: violetColor }}>Horarios</h3>
              <p className="text-gray-600">Horarios variados</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <Home className="w-12 h-12 mx-auto mb-4" style={{ color: violetColor }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: violetColor }}>Lugar</h3>
              <p className="text-gray-600">En casas</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full"
          style={{ backgroundColor: violetLight, opacity: 0.3 }}
        />
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
          style={{ backgroundColor: creamLight, opacity: 0.5 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-5 transform hover:-translate-y-2"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: violetLight, color: violetColor }}
                >
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: violetColor }}>{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
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
        
        {/* Elementos decorativos */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
          style={{ background: "white" }}
        />
        
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">¿Tenés preguntas sobre Grupos de Crecimiento?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo para ayudarte a encontrar el grupo perfecto para
              ti.
            </p>
            <Link href="/form">
              <motion.button 
                className="bg-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center mx-auto"
                style={{ color: violetColor }}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                Contactanos
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
