"use client"

import Link from "next/link"
import Image from "next/image"
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
        background: "linear-gradient(135deg, #1a365d 0%, #2c5282 25%, #1a365d 50%, #234876 75%, #1a365d 100%)",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 60%)
          `,
          zIndex: 0,
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      {/* Contenu */}
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="text-center px-4 sm:px-6 max-w-4xl mx-auto pt-16 w-full"
      >
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <Image
              src="/images/evelina-logo.png"
              alt="Evelina Shop Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 mb-2">
          Votre partenaire de confiance pour tous vos achats en provenance de Chine
        </p>
        
        <p className="text-amber-400/90 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium">
          Qualite - Fiabilite - Meilleurs Prix
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/produits" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14 text-sm sm:text-base bg-amber-500 hover:bg-amber-600 text-white rounded-none uppercase tracking-wider font-medium shadow-lg"
            >
              Voir les Produits
            </Button>
          </Link>
          <Link href="#a-propos" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14 text-sm sm:text-base bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 rounded-none uppercase tracking-wider font-medium"
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
