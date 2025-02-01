'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Youtube, MessageSquare } from 'lucide-react'

export default function SoyNuevoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Bienvenida"
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
            ¡Bienvenido a Casa!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Estamos felices de que estés aquí
          </motion.p>
        </div>
      </section>

      {/* Welcome Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mensaje de Bienvenida de Nuestros Pastores
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Mensaje de Bienvenida"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Central Meetings Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <Youtube className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Encuentros Centrales</h3>
                <p className="text-gray-600 mb-6">
                  Unite a nuestros servicios dominicales a las 11:30
                </p>
                <Link
                  href="/horarios"
                  className="inline-flex items-center text-primary font-semibold group-hover:text-secondary transition-colors duration-300"
                >
                  Ver horarios
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <MessageSquare className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Escribinos</h3>
                <p className="text-gray-600 mb-6">
                  Queremos conocerte y responder tus preguntas
                </p>
                <a
                  href="https://wa.me/+yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold group-hover:text-secondary transition-colors duration-300"
                >
                  Contactar por WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            La IDE en Pasos
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  step: "1",
                  title: "Asistí a un Encuentro",
                  description: "Participá de nuestros servicios dominicales",
                },
                {
                  step: "2",
                  title: "Conectate",
                  description: "Unite a un grupo de conexión",
                },
                {
                  step: "3",
                  title: "Descubrí tu propósito",
                  description: "Conocé tus dones y talentos",
                },
                {
                  step: "4",
                  title: "Serví",
                  description: "Sé parte de nuestros equipos de servicio",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Dejá tus datos
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
