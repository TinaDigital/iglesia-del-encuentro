import { Hero } from "@/components/hero"
import { VideoCarousel } from "@/components/video-carousel"
import { Ministries } from "@/components/ministries"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoCarousel />
      <Ministries />
      <ContactCTA />
    </main>
  )
}

