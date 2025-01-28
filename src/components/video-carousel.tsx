"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Reemplaza con tu clave de API de YouTube y el ID de la lista de reproducción
const YOUTUBE_API_KEY = "AIzaSyBzkpqAsiSfgIHakQ9WSKOy3LndwIMzaOs"
const PLAYLIST_ID = "PLYSj8gAXLPQkhtglOvUVHtEgNTHS2bf7E"

interface Video {
  id: string
  title: string
  thumbnail: string
}

interface YouTubePlaylistItem {
  snippet: {
    resourceId: {
      videoId: string
    }
    title: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}

export function VideoCarousel() {
  const [videos, setVideos] = useState<Video[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&key=${YOUTUBE_API_KEY}`,
        )
        const data = await response.json()

        const formattedVideos = data.items.map((item: YouTubePlaylistItem) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
        }))

        setVideos(formattedVideos)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching videos:", error)
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  if (isLoading) {
    return <div className="text-center py-20 text-white">Cargando videos...</div>
  }

  if (videos.length === 0) {
    return <div className="text-center py-20 text-white">No se encontraron videos.</div>
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.iframe
              key={videos[currentIndex]?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={`https://www.youtube.com/embed/${videos[currentIndex]?.id}`}
              title={videos[currentIndex]?.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
            onClick={prevVideo}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
            onClick={nextVideo}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
