import { Leaf, Truck, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Naturel",
    description: "Sans additifs, sans conservateurs. Que du mil pur.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Truck,
    title: "Livraison Dakar",
    description: "Livraison rapide dans toute la region de Dakar.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Shield,
    title: "Qualite Garantie",
    description: "Produits controles et certifies qualite.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Artisanal",
    description: "Prepare selon les traditions ancestrales.",
    color: "bg-accent/10 text-accent",
  },
]

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Nos Engagements
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Pourquoi Choisir Mil Nature?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl ${feature.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
