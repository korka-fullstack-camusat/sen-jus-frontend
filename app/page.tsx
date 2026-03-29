import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { FeaturedProducts } from "@/components/store/featured-products"
import { Footer } from "@/components/store/footer"
import { Leaf, Award, Truck } from "lucide-react"
import Image from "next/image"

function StorySection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="hidden sm:block">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/hero-bg.png"
                alt="SEN Jus - Produits a base de mil"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-primary text-xs font-medium uppercase tracking-widest">
              Notre Histoire
            </span>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-2 leading-tight">
              Le Gout Authentique du Senegal
            </h2>
            <div className="w-12 h-1 bg-primary mt-4" />
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              SEN Jus perpetue la tradition senegalaise du jus de mil. Nos boissons
              sont preparees avec soin a partir de mil local de qualite superieure,
              sans additifs ni conservateurs.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <span className="block text-xl sm:text-2xl font-bold text-primary">100%</span>
                <span className="text-xs text-muted-foreground">Naturel</span>
              </div>
              <div className="text-center">
                <span className="block text-xl sm:text-2xl font-bold text-primary">Local</span>
                <span className="text-xs text-muted-foreground">Senegal</span>
              </div>
              <div className="text-center">
                <span className="block text-xl sm:text-2xl font-bold text-primary">Frais</span>
                <span className="text-xs text-muted-foreground">Toujours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  const features = [
    {
      icon: Leaf,
      title: "100% Naturel",
      description: "Sans additif ni conservateur",
    },
    {
      icon: Award,
      title: "Qualite Premium",
      description: "Mil soigneusement selectionne",
    },
    {
      icon: Truck,
      title: "Livraison Rapide",
      description: "Partout a Dakar",
    },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            Pourquoi SEN Jus
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-2 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h3 className="font-medium text-xs sm:text-sm text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* isolation: isolate force un nouveau stacking context,
            empêchant l'image du Hero de passer visuellement
            par-dessus les sections suivantes */}
        <div style={{ isolation: "isolate" }}>
          <Hero />
        </div>
        <FeaturedProducts />
        <StorySection />
        <WhySection />
      </main>
      <Footer />
    </div>
  )
}