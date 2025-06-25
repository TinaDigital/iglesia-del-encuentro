"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Users,
  ChevronRight,
  Heart,
  Clock,
  Calendar,
  User,
  UserPlus,
  Home,
  Coffee,
  Users2,
  Target,
  ArrowDown,
  CheckCircle,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

export default function GruposPage() {
  const [activeGroup, setActiveGroup] = useState<number | null>(null)
  const [expandedGroup, setExpandedGroup] = useState<number | null>(0)

  const sectionRef = useRef(null)
  const benefitsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  // Paleta cremita y violeta profesional
  const violetColor = "#8b5cf6" // Violeta principal
  const violetLight = "#ede9fe" // Violeta claro
  const violetDark = "#7c3aed" // Violeta oscuro
  const creamColor = "#f5f0e6" // Crema principal
  const creamLight = "#faf7f2" // Crema muy claro
  const creamDark = "#f59e0b" // Acento dorado/crema oscuro

  const groupTypes = [
    {
      name: "Grupos Ellos",
      subtitle: "Liderazgo y Propósito",
      description: "Espacios exclusivos para hombres donde compartir experiencias y crecer juntos en la fe.",
      icon: <User className="w-6 h-6" />,
      participants: "8-12 personas",
      frequency: "Semanal",
      duration: "90 minutos",
      focus: ["Liderazgo personal", "Desarrollo espiritual", "Relaciones familiares", "Propósito de vida"],
    },
    {
      name: "Grupos Ellas",
      subtitle: "Empoderamiento y Comunidad",
      description: "Comunidades de mujeres que se apoyan mutuamente en su camino espiritual y personal.",
      icon: <User className="w-6 h-6" />,
      participants: "8-12 personas",
      frequency: "Semanal",
      duration: "90 minutos",
      focus: ["Desarrollo personal", "Vida espiritual", "Relaciones saludables", "Crecimiento en la fe"],
    },
    {
      name: "Grupos Mixtos",
      subtitle: "Diversidad y Crecimiento",
      description: "Grupos diversos donde todos son bienvenidos para compartir y crecer en comunidad.",
      icon: <Users className="w-6 h-6" />,
      participants: "10-15 personas",
      frequency: "Semanal",
      duration: "90 minutos",
      focus: ["Comunidad inclusiva", "Crecimiento espiritual", "Compañerismo", "Desarrollo integral"],
    },
    {
      name: "Grupos Recién Casados",
      subtitle: "Fundamentos Matrimoniales",
      description: "Apoyo especial para parejas que comienzan su vida matrimonial.",
      icon: <Heart className="w-6 h-6" />,
      participants: "6-8 parejas",
      frequency: "Quincenal",
      duration: "2 horas",
      focus: ["Bases matrimoniales", "Vida en pareja", "Espiritualidad", "Comunicación"],
    },
    {
      name: "Grupos Matrimoniales",
      subtitle: "Fortalecimiento Familiar",
      description: "Fortalecimiento de matrimonios a través de la comunidad y principios bíblicos.",
      icon: <Heart className="w-6 h-6" />,
      participants: "8-10 parejas",
      frequency: "Quincenal",
      duration: "2 horas",
      focus: ["Vida matrimonial", "Familia", "Fe en pareja", "Crianza"],
    },
    {
      name: "Grupos Novios",
      subtitle: "Preparación Matrimonial",
      description: "Apoyo especial a las parejas para establecer cimientos sólidos en el noviazgo.",
      icon: <Heart className="w-6 h-6" />,
      participants: "6-8 parejas",
      frequency: "Semanal",
      duration: "90 minutos",
      focus: ["Noviazgo cristiano", "Preparación", "Fundamentos", "Comunicación"],
    },
    {
      name: "Grupos de interés",
      subtitle: "Pasiones Compartidas",
      description: "Comunidades unidas por pasiones e intereses comunes.",
      icon: <Coffee className="w-6 h-6" />,
      participants: "Variable",
      frequency: "Flexible",
      duration: "Variable",
      focus: ["Intereses comunes", "Compañerismo", "Desarrollo", "Comunidad"],
    },
    {
      name: "Grupos de servicio",
      subtitle: "Impacto Comunitario",
      description: "Equipos dedicados a servir a la iglesia y a la comunidad.",
      icon: <UserPlus className="w-6 h-6" />,
      participants: "5-20 personas",
      frequency: "Variable",
      duration: "Variable",
      focus: ["Servicio", "Liderazgo", "Impacto social", "Voluntariado"],
    },
    {
      name: "Grupos Adultos Mayores",
      subtitle: "Sabiduría y Experiencia",
      description: "Un espacio pensado para vivir esta etapa acompañado creciendo en la fe. Encuentro mensual de todos los grupos: 1 sábado al mes 10 hs (más info @adultosmayores)",
      icon: <Users className="w-6 h-6" />,
      participants: "10-15 personas",
      frequency: "Mensual",
      duration: "2 horas",
      focus: ["Compañerismo", "Sabiduría", "Fe madura", "Legado"],
    },
  ]

  const benefits = [
    {
      title: "Desarrollo de Liderazgo",
      description:
        "Fortalece tus habilidades de liderazgo personal y profesional en un entorno de crecimiento continuo y apoyo mutuo.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Red de Apoyo Profesional",
      description:
        "Construye relaciones significativas con personas que comparten valores similares y objetivos de crecimiento personal.",
      icon: <Users2 className="w-6 h-6" />,
    },
    {
      title: "Crecimiento Integral",
      description:
        "Desarrolla aspectos personales, profesionales y espirituales de manera equilibrada y sostenible a largo plazo.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Mentoría y Acompañamiento",
      description:
        "Recibe orientación de líderes experimentados y comparte tu experiencia con otros en proceso de crecimiento.",
      icon: <UserPlus className="w-6 h-6" />,
    },
  ]

  const meetingInfo = [
    {
      title: "Programación",
      description: "Lunes a Viernes",
      icon: <Calendar className="w-6 h-6" />,
      detail: "Horarios adaptados a tu agenda profesional",
    },
    {
      title: "Flexibilidad Horaria",
      description: "Múltiples opciones",
      icon: <Clock className="w-6 h-6" />,
      detail: "Mañana, tarde y noche disponibles",
    },
    {
      title: "Ubicaciones",
      description: "Espacios residenciales",
      icon: <Home className="w-6 h-6" />,
      detail: "Ambiente profesional y acogedor",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: creamLight }}>
      {/* Hero Section con Patrón Cremita y Violeta */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Patrón de fondo profesional */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${violetDark} 0%, ${violetColor} 50%, ${violetLight} 100%)`,
          }}
        />

        {/* Patrón geométrico cremita */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, ${creamColor} 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, ${creamColor} 2px, transparent 2px),
              radial-gradient(circle at 40% 60%, ${creamColor} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px, 40px 40px",
            backgroundPosition: "0 0, 20px 20px, 40px 40px",
          }}
        />

        {/* Elementos geométricos decorativos cremita */}
        <div
          className="absolute top-20 right-20 w-32 h-32 border-2 rotate-45 hidden lg:block"
          style={{ borderColor: `${creamColor}40` }}
        />
        <div
          className="absolute bottom-32 left-20 w-24 h-24 border rotate-12 hidden lg:block"
          style={{ borderColor: `${creamColor}30` }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span
              className="inline-block px-6 py-3 backdrop-blur-sm rounded-lg text-sm font-medium border tracking-wide"
              style={{
                backgroundColor: `${creamColor}20`,
                borderColor: `${creamColor}40`,
                color: creamLight,
              }}
            >
              DESARROLLO PERSONAL • CRECIMIENTO PROFESIONAL • LIDERAZGO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight"
          >
            Grupos de{" "}
            <span className="font-semibold" style={{ color: creamColor }}>
              Crecimiento
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-6 font-light tracking-wide"
            style={{ color: `${creamColor}E6` }}
          >
            Desarrollo integral para todas las etapas de la vida
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl mb-10 leading-relaxed font-light" style={{ color: `${creamColor}CC` }}>
              Creemos en el poder transformador de la comunidad. Nuestros grupos están diseñados para acompañarte en tu
              crecimiento personal y profesional, creando conexiones auténticas que trascienden lo superficial.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link href="#grupos">
                <button
                  className="group hover:shadow-xl px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center mx-auto shadow-lg"
                  style={{
                    backgroundColor: creamColor,
                    color: violetDark,
                  }}
                >
                  Explorar Grupos
                  <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center"
            style={{ color: `${creamColor}80` }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Grupos - Nuevo Diseño Elegante */}
      <section className="py-24" style={{ backgroundColor: creamLight }} id="grupos">
        <div className="container mx-auto px-6">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight" style={{ color: violetDark }}>
              Nuestros <span className="font-medium">Grupos</span>
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-8" style={{ backgroundColor: violetColor }}></div>
            <p className="text-xl leading-relaxed font-light" style={{ color: `${violetColor}CC` }}>
              Programas estructurados de desarrollo personal diseñados para diferentes etapas y necesidades de
              crecimiento.
            </p>
          </motion.div>

          {/* Nuevo diseño de lista elegante */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            {groupTypes.map((group, index) => (
              <motion.div key={group.name} variants={itemVariants} className="mb-4 last:mb-0">
                <div
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border"
                  style={{ borderColor: `${violetColor}20` }}
                  onMouseEnter={() => setActiveGroup(index)}
                  onMouseLeave={() => setActiveGroup(null)}
                >
                  {/* Header clickeable */}
                  <div
                    className="p-8 cursor-pointer"
                    onClick={() => setExpandedGroup(expandedGroup === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md"
                          style={{ backgroundColor: violetColor }}
                        >
                          {group.icon}
                        </div>
                        <div className="text-left">
                          <h3 className="text-2xl font-medium mb-1" style={{ color: violetDark }}>
                            {group.name}
                          </h3>
                          <p className="text-lg font-light" style={{ color: violetColor }}>
                            {group.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                          <div className="flex gap-4 text-sm" style={{ color: `${violetColor}80` }}>
                            <span className="px-3 py-1 rounded-full" style={{ backgroundColor: `${violetColor}10` }}>
                              {group.participants}
                            </span>
                            <span className="px-3 py-1 rounded-full" style={{ backgroundColor: `${violetColor}10` }}>
                              {group.frequency}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedGroup === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-6 h-6" style={{ color: violetColor }} />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedGroup === index ? "auto" : 0,
                      opacity: expandedGroup === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="w-full h-px mb-6" style={{ backgroundColor: `${violetColor}20` }}></div>

                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                          <p className="text-lg leading-relaxed mb-6 font-light" style={{ color: `${violetDark}CC` }}>
                            {group.description}
                          </p>

                          <div>
                            <h4 className="text-lg font-medium mb-4" style={{ color: violetDark }}>
                              Áreas de Enfoque:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {group.focus.map((focus, focusIndex) => (
                                <div key={focusIndex} className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: violetColor }}></div>
                                  <span className="text-sm font-light" style={{ color: `${violetDark}CC` }}>
                                    {focus}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="p-4 rounded-lg" style={{ backgroundColor: `${violetColor}08` }}>
                            <h5 className="font-medium mb-2" style={{ color: violetDark }}>
                              Detalles del Grupo
                            </h5>
                            <div className="space-y-2 text-sm" style={{ color: `${violetDark}CC` }}>
                              <div className="flex justify-between">
                                <span>Participantes:</span>
                                <span className="font-medium">{group.participants}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Frecuencia:</span>
                                <span className="font-medium">{group.frequency}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Duración:</span>
                                <span className="font-medium">{group.duration}</span>
                              </div>
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                            style={{
                              backgroundColor: violetColor,
                              color: "white",
                            }}
                          >
                            Más Información
                            <ChevronRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Información de Encuentros */}
      <section className="py-24" style={{ backgroundColor: `${violetColor}08` }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight" style={{ color: violetDark }}>
              Información <span className="font-medium">Práctica</span>
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-8" style={{ backgroundColor: violetColor }}></div>
            <p className="text-xl max-w-3xl mx-auto font-light" style={{ color: `${violetColor}CC` }}>
              Flexibilidad y profesionalismo en cada encuentro
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meetingInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center border"
                style={{ borderColor: `${violetColor}20` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 text-white"
                  style={{ backgroundColor: violetColor }}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: violetDark }}>
                  {info.title}
                </h3>
                <p className="text-lg mb-2 font-medium" style={{ color: violetColor }}>
                  {info.description}
                </p>
                <p className="text-sm font-light" style={{ color: `${violetColor}80` }}>
                  {info.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-white" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight" style={{ color: violetDark }}>
              Beneficios del <span className="font-medium">Programa</span>
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-8" style={{ backgroundColor: violetColor }}></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed font-light" style={{ color: `${violetColor}CC` }}>
              Resultados tangibles en tu desarrollo personal y profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-6 border"
                style={{ borderColor: `${violetColor}20` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ backgroundColor: violetColor }}
                >
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-4" style={{ color: violetDark }}>
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed font-light" style={{ color: `${violetColor}CC` }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${violetDark} 0%, ${violetColor} 100%)`,
          }}
        />

        {/* Patrón cremita sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, ${creamColor} 40%, ${creamColor} 60%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, ${creamColor} 40%, ${creamColor} 60%, transparent 60%)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight tracking-tight">
              ¿Listo para comenzar tu{" "}
              <span className="font-medium" style={{ color: creamColor }}>
                crecimiento?
              </span>
            </h2>

            <p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ color: `${creamColor}E6` }}
            >
              Completa el formulario de contacto y nuestro equipo te ayudará a encontrar el grupo que mejor se adapte a
              tus objetivos de desarrollo.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href="/form">
                <button
                  className="group hover:shadow-xl px-12 py-5 rounded-lg text-xl font-medium transition-all duration-300 flex items-center mx-auto shadow-lg"
                  style={{
                    backgroundColor: creamColor,
                    color: violetDark,
                  }}
                >
                  Solicitar Información
                  <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm mt-8 font-light"
              style={{ color: `${creamColor}CC` }}
            >
              Respuesta garantizada en 24 horas
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
