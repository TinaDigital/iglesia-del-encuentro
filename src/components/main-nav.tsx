"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            Iglesia del Encuentro
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Sobre Nosotros
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Servicios
            </Link>
            <Link href="/ministries" className="text-gray-600 hover:text-gray-900">
              Ministerios
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contacto
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                Sobre Nosotros
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                Servicios
              </Link>
              <Link href="/ministries" className="text-gray-600 hover:text-gray-900">
                Ministerios
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

