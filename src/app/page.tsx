import { Banner } from "@/components/banner"
import { MainNav } from "@/components/main-nav"
import { ActionButtons } from "@/components/action-buttons"
import { VideoCarousel } from "@/components/video-carousel"
import { Ministries } from "@/components/ministries"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <main>
      <MainNav />
      <Banner />
      <ActionButtons />
      <VideoCarousel />
      <Ministries />
      <ContactCTA />
    </main>
  )
}

