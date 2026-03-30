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
        alignItems: "center",
        justifyContent: "center",
        // background-image CSS : impossible de déborder du conteneur
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Empêche tout enfant absolu de sortir
        overflow: "hidden",
        // Isole ce contexte de stacking
        isolation: "isolate",
      }}
    >
      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.40) 100%)",
          zIndex: 0,
        }}
      />

      {/* Contenu */}
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="text-center px-4 sm:px-6 max-w-4xl mx-auto pt-16 w-full"
      >
        <div className="mb-6 sm:mb-8">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            <span>SEN</span>
            <span className="text-primary italic"> Jus</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mt-2 sm:mt-3 tracking-[0.2em] uppercase">
            Jus de Mil Naturel
          </p>
        </div>

        <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed px-4">
          La boisson traditionnelle senegalaise, 100% naturelle et delicieuse
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/produits" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14 text-sm sm:text-base bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider font-medium"
            >
              Commander
            </Button>
          </Link>
          <Link href="#a-propos" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14 text-sm sm:text-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground rounded-none uppercase tracking-wider font-medium"
            >
              En Savoir Plus
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
