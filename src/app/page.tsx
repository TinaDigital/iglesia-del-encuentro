import { Hero } from "@/components/hero"
import { VideoCarousel } from "@/components/video-carousel"
import { Ministries } from "@/components/ministries"
import { ContactCTA } from "@/components/contact-cta"
import { Servolution } from "@/components/servolution"

export default function Home() {
  return (
    <main>
      <Hero />
      <ContactCTA />
      <Ministries />
      <VideoCarousel title="Unite a la serie del mes" playlistId="PLYSj8gAXLPQm1FcbyIYGYGOhhVVFSW_fU" />
      <Servolution />
    </main>
  )
}

