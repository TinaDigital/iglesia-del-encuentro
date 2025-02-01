import { Banner } from "@/components/banner"
import { ActionButtons } from "@/components/action-buttons"
import { VideoCarousel } from "@/components/video-carousel"
import { Ministries } from "@/components/ministries"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <main>
      <Banner />
      <ActionButtons />
      <VideoCarousel />
      <Ministries />
      <ContactCTA />
    </main>
  )
}

