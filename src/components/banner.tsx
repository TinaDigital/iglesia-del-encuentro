"use client"

import Image from "next/image"
import bannercelu from "../../public/Folleto-Mobile.png"
import bannertablet from "../../public/Folleto-Tablet.png"
import bannerdesktop from "../../public/Folleto-Desktop.png"

export function Banner() {
  return (
    <div className="relative aspect-[4/5] xsm:aspect-[14/9] lg:aspect-[3/1] w-full overflow-hidden">
      {/* Imagen para móvil */}
      <Image
        src={bannercelu}
        alt="Banner de la Iglesia del Encuentro"
        fill
        className="object-cover block xsm:hidden"
        priority
      />
      {/* Imagen para tablet */}
      <Image
        src={bannertablet}
        alt="Banner de la Iglesia del Encuentro"
        fill
        className="object-cover hidden xsm:block lg:hidden"
        priority
      />
      {/* Imagen para desktop */}
      <Image
        src={bannerdesktop}
        alt="Banner de la Iglesia del Encuentro"
        fill
        className="object-cover hidden lg:block"
        priority
      />
    </div>
  )
}
