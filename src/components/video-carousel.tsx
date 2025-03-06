"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"

// Reemplaza con tu clave de API de YouTube y el ID de la lista de reproducción
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyBzkpqAsiSfgIHakQ9WSKOy3LndwIMzaOs"
const PLAYLIST_ID = "PLYSj8gAXLPQkhtglOvUVHtEgNTHS2bf7E"

interface Video {
  id: string
  title: string
  thumbnail: string
  channelTitle?: string
}

export function VideoCarousel() {
  const [videos, setVideos] = useState<Video[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [fullscreen, setFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  // Colores personalizados
  const violetColor = "#8b5cf6" // Violeta
  const creamColor = "#f5f0e6" // Crema
  const lightViolet = "#ede9fe" // Violeta claro

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    async function fetchVideos() {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&key=${YOUTUBE_API_KEY}`,
        )

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error.message || "Error al cargar los videos")
        }

        const formattedVideos = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
          channelTitle: item.snippet.channelTitle,
        }))

        setVideos(formattedVideos)
      } catch (error) {
        console.error("Error fetching videos:", error)
        setError(error instanceof Error ? error.message : "Error al cargar los videos")
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Gestión de deslizamiento táctil
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    // Mínima distancia para considerar un deslizamiento
    const minSwipeDistance = 50

    if (touchStartX.current - touchEndX.current > minSwipeDistance) {
      handleNext()
    }

    if (touchEndX.current - touchStartX.current > minSwipeDistance) {
      handlePrev()
    }

    // Reiniciar valores
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const handlePlayVideo = (videoId: string) => {
    setActiveVideo(videoId)
  }

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return

    if (!fullscreen) {
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setFullscreen(!fullscreen)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const closeVideo = () => {
    setActiveVideo(null)
    setIsPlaying(true)
  }

  // Determinar cuántos videos mostrar según el dispositivo
  const slidesToShow = isMobile ? 1 : 3

  if (isLoading) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[50vh] text-white relative overflow-hidden"
        style={{ background: `linear-gradient(to bottom right, ${violetColor}, #2d1b69)` }}
      >
        <div
          className="w-16 h-16 border-4 border-t-transparent border-r-transparent rounded-full animate-spin mb-4"
          style={{ borderColor: `${creamColor} transparent ${creamColor} transparent` }}
        ></div>
        <p className="text-lg font-medium">Cargando experiencia de video...</p>

        {/* Figuras decorativas */}
        <div
          className="absolute top-20 right-20 w-40 h-40 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.1 }}
        ></div>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[50vh] text-white p-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(to bottom right, ${violetColor}, #2d1b69)` }}
      >
        <div className="bg-red-500/20 p-6 rounded-lg backdrop-blur-sm max-w-md relative z-10">
          <h3 className="text-xl font-bold mb-2">¡Ups! Algo salió mal</h3>
          <p className="text-red-300 mb-4">{error}</p>
          <p className="text-sm text-gray-300">Verifica tu clave de API y el ID de la lista de reproducción</p>
        </div>

        {/* Figuras decorativas */}
        <div
          className="absolute top-20 right-20 w-40 h-40 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.1 }}
        ></div>
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div
        className="flex items-center justify-center min-h-[50vh] text-white relative overflow-hidden"
        style={{ background: `linear-gradient(to bottom right, ${violetColor}, #2d1b69)` }}
      >
        <p className="text-xl">No se encontraron videos en esta lista de reproducción.</p>

        {/* Figuras decorativas */}
        <div
          className="absolute top-20 right-20 w-40 h-40 rounded-full"
          style={{ backgroundColor: lightViolet, opacity: 0.1 }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full"
          style={{ backgroundColor: creamColor, opacity: 0.1 }}
        ></div>
      </div>
    )
  }

  return (
    <div
      className="text-white min-h-[60vh] py-10 px-4 relative overflow-hidden"
      style={{ background: `linear-gradient(to bottom right, ${violetColor}, #2d1b69)` }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl"
          style={{ backgroundColor: `${violetColor}33` }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full blur-3xl"
          style={{ backgroundColor: `${lightViolet}33` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${creamColor}20` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título del carrusel */}
        <h2
          className="text-2xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(to right, ${creamColor}, white)` }}
        >
          Explora Nuestra Colección de Videos
        </h2>

        {/* Reproductor de video activo */}
        {activeVideo && (
          <div
            ref={videoContainerRef}
            className="relative mb-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 transform"
          >
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&modestbranding=1&rel=0&showinfo=0`}
                title="YouTube video player"
                className="w-full h-full transition-transform duration-500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Carrusel de miniaturas */}
        <div
          ref={carouselRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {videos.map((video, index) => (
                <div key={video.id} className="flex-shrink-0 px-2" style={{ width: `${100 / slidesToShow}%` }}>
                  <div
                    className={`group relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                      activeVideo === video.id ? `ring-2 ring-offset-2 ring-[${creamColor}] ring-offset-[${violetColor}]` : ""
                    }`}
                    onClick={() => handlePlayVideo(video.id)}
                  >
                    {/* Miniatura con efecto de hover */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay con degradado */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

                      {/* Botón de reproducción */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="backdrop-blur-sm p-3 md:p-4 rounded-full transform transition-all duration-500 group-hover:scale-110"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = `${violetColor}CC`)}
                          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
                        >
                          <Play className="h-5 w-5 md:h-6 md:w-6" fill="white" />
                        </div>
                      </div>

                      {/* Número de video */}
                      <div
                        className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-md"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
                      >
                        {index + 1}/{videos.length}
                      </div>
                    </div>

                    {/* Información del video */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <h3
                        className="text-sm md:text-base font-medium line-clamp-2 transition-colors"
                        style={{ color: "white" }}
                      >
                        {video.title}
                      </h3>
                      {video.channelTitle && (
                        <p className="text-xs text-gray-300 mt-1 opacity-80">{video.channelTitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full text-white transition-all duration-300 z-10 transform hover:scale-110"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = `${violetColor}CC`)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.4)")}
            onClick={handlePrev}
            aria-label="Video anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full text-white transition-all duration-300 z-10 transform hover:scale-110"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = `${violetColor}CC`)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.4)")}
            onClick={handleNext}
            aria-label="Siguiente video"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        {/* Indicadores de paginación */}
        <div className="flex justify-center mt-6 gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full`}
              style={{
                width: index === currentIndex ? "2rem" : "0.5rem",
                height: "0.5rem",
                backgroundColor: index === currentIndex ? creamColor : "rgba(255, 255, 255, 0.3)",
              }}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>

        {/* Instrucciones de uso */}
        <div className="text-center mt-8 text-sm text-white/70">
          <p className="hidden md:block">Usa las flechas para navegar o haz clic en una miniatura para reproducir</p>
          <p className="md:hidden">Desliza para navegar o toca una miniatura para reproducir</p>
        </div>
      </div>

      {/* Estilo personalizado */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  )
}

