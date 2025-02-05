"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Banner() {
  return (
    <div className="relative aspect-[4/5] xsm:aspect-[14/9] lg:aspect-[3/1] w-full overflow-hidden" style={{backgroundColor: '#1a1a1a'}}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-church-banner-KxR5mg3JD6k9YvPjxQr4h0IpYEuX5F.jpg"
        alt="Banner de la Iglesia del Encuentro"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(255, 107, 107, 0.8), rgba(78, 205, 196, 0.8))'
      }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              style={{color: '#ffffff'}}
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Bienvenidos a la Iglesia del Encuentro
            </motion.h1>
            <motion.p
              style={{color: 'rgba(255, 255, 255, 0.9)'}}
              className="text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Un lugar para encontrarte con Dios y con tu propósito
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
