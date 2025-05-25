"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { LucideIcon } from "lucide-react"

type FooterLink = {
  name: string
  href: string
  icon?: LucideIcon
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    title: "Navegación",
    links: [
      { name: 'Soy Nuevo', href: '/soy-nuevo' },
      { name: 'Nuestro ADN', href: '/nuestro-adn' },
      { name: 'Oración', href: '/oracion' },
      { name: 'En qué creemos', href: '/en-que-creemos' },
     

    ]
  },
  {
    title: "Contacto", 
    links: [
      { name: '+54 9 11 6954-7118', href: 'tel:+5491169547118', icon: Phone },
      { name: 'laide@iglesiadelencuentro.org.ar', href: 'mailto:laide@iglesiadelencuentro.org.ar', icon: Mail },
      { name: 'Olavarría 319, Quilmes, Bs.As. Argentina', href: '#', icon: MapPin },
    ]
  },
  {
    title: "Redes Sociales",
    links: [
      { name: 'Facebook', href: 'https://www.facebook.com/iglesiadelencuentroquilmes/?locale=es_LA', icon: Facebook },
      { name: 'Instagram', href: 'https://www.instagram.com/iglesiadelencuentro/', icon: Instagram },
      { name: 'YouTube', href: 'https://www.youtube.com/@IglesiadelEncuentro', icon: Youtube },
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit"
            >
              {/* Aquí puedes agregar tu logo */}
            </motion.div>
            <p className="text-sm text-white/80 max-w-xs">
            La Iglesia del Encuentro es una comunidad de fe en donde amamos celebrar que
            Jesús transforma vidas. Creemos que su Palabra es quien hace la obra y queremos
            invitarte a que puedas comprobarlo vos mismo.
            </p>
          </div>

          {/* Enlaces */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        href={link.href}
                        className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 w-fit"
                      >
                        {link.icon && <link.icon className="w-4 h-4 flex-shrink-0" />}
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              © {new Date().getFullYear()} Iglesia del Encuentro. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <Link 
                href="/privacidad" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link 
                href="/terminos" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
