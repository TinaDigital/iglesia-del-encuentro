"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock, Calendar, Youtube, ExternalLink } from "lucide-react"
import presencial from "../../../public/presencial.jpg"
import virtual from "../../../public/virtual.jpg"
import horarios from "../../../public/horarios.jpg"

export default function HorariosPage() {
  const mapRef = useRef<HTMLDivElement>(null)
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 })

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Simplificado y elegante */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={horarios}
            alt="Comunidad IDE"
            fill
            className="object-cover object-center lg:object-[center_25%]"
            priority
            style={{ objectPosition: 'center 65%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(139, 92, 246, 0.85), rgba(0, 0, 0, 0.6))`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡Quiero ser parte de una <span style={{ color: creamColor }}>comunidad así</span>!
            </h1>

            <div className="h-0.5 w-24 mx-auto mb-8" style={{ backgroundColor: creamColor }}></div>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cada domingo es una oportunidad para encontrarnos, buscar cómo aplicar las enseñanzas de la Biblia a
              nuestra vida cotidiana y ayudar a otros a encontrarse con Jesús.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horarios y Encuentros Section - Minimalista pero atractivo */}
      <section id="horarios" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Horarios y Encuentros</h2>
            <div className="h-0.5 w-24 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Diseño minimalista con dos secciones horizontales */}
            <div className="space-y-12">
              {/* Presencial - Diseño minimalista */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={presencial}
                      alt="Servicio presencial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: lightViolet }}
                    >
                      <Calendar className="w-5 h-5" style={{ color: violetColor }} />
                    </div>
                    <h3 className="text-2xl font-medium">Presencial</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="font-medium text-lg">Domingos 9:30 y 11:30h</p>
                        <p className="text-gray-600">
                          Nuestros encuentros duran 1 hora y 30 minutos e incluyen música en vivo y enseñanza.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="font-medium text-lg">Olavarría 319, Quilmes centro</p>
                        <p className="text-gray-600">
                          Contamos con actividades para niños de 3 a 11 años en el segundo turno.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Olavarría+319,+Quilmes+centro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 border rounded-md transition-colors hover:bg-gray-50"
                    style={{ borderColor: violetColor, color: violetColor }}
                  >
                    ¿Cómo llegar?
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Separador */}
              <div className="h-px w-full bg-gray-100"></div>

              {/* Online - Diseño minimalista */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row-reverse gap-8 items-center"
              >
                <div className="md:w-1/3">
                  <a
                    href="https://www.youtube.com/@IglesiadelEncuentro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={virtual}
                      alt="Transmisión en vivo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      >
                        <Youtube className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: lightViolet }}
                    >
                      <Youtube className="w-5 h-5" style={{ color: violetColor }} />
                    </div>
                    <h3 className="text-2xl font-medium">Online</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="font-medium text-lg">Domingos 11:30h</p>
                        <p className="text-gray-600">Los domingos se transmiten en vivo a las 11:30h por Youtube.</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/@IglesiadelEncuentro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 border rounded-md transition-colors hover:bg-gray-50"
                    style={{ borderColor: violetColor, color: violetColor }}
                  >
                    Suscribirme al canal Youtube
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section - Simplificado */}
      <section ref={mapRef} className="py-20" style={{ backgroundColor: creamColor }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nuestra Ubicación</h2>
            <div className="h-0.5 w-24 mx-auto mb-6" style={{ backgroundColor: violetColor }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Te esperamos en Olavarría 319, Quilmes centro. Estamos ubicados en una zona céntrica y de fácil acceso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5123411425584!2d-58.25699492346788!3d-34.7222825726339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e3f3b3388e1%3A0x8f3d76648a0520c7!2sOlavarr%C3%ADa%20319%2C%20B1878KOG%20Quilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1714599731626!5m2!1ses!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
