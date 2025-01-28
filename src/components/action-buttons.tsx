"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const buttons = [
  {
    href: "/form",
    text: "¡Contanos sobre vos!",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    href: "/horarios",
    text: "Horarios y Encuentros",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    href: "/creencias",
    text: "En esto creemos",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    href: "/dar",
    text: "Dar",
    gradient: "from-teal-500 to-emerald-500",
  },
]

export function ActionButtons() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {buttons.map((button, index) => (
          <motion.div
            key={button.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={button.href} className="block">
              <div
                className={`h-20 rounded-xl bg-gradient-to-r ${button.gradient} transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="h-full w-full flex items-center justify-center text-white text-lg font-semibold px-6 text-center">
                  {button.text}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

