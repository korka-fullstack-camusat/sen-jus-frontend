"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Overlay gradient - plus subtil pour mettre en valeur l'image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(45,55,35,0.95) 0%, rgba(45,55,35,0.6) 35%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          zIndex: 0,
        }}
      />

      {/* Contenu positionne en bas */}
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="text-center px-4 sm:px-6 max-w-4xl mx-auto pb-24 sm:pb-28 w-full"
      >
        <div className="mb-4 sm:mb-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            <span>SEN</span>
            <span className="text-primary italic"> Jus</span>
          </h1>
          <p className="text-white/95 text-sm sm:text-base md:text-lg mt-2 tracking-[0.25em] uppercase font-medium">
            Jus de Mil Naturel
          </p>
        </div>

        <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed px-4">
          Le gout authentique du Senegal, 100% naturel et sans additifs
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/produits" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14 text-sm sm:text-base bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider font-medium shadow-lg"
            >
              Commander
            </Button>
          </Link>
          <Link href="#a-propos" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14 text-sm sm:text-base bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-foreground rounded-none uppercase tracking-wider font-medium"
            >
              Decouvrir
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
