import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { Button } from "@/components/ui/button"
import { Leaf, Award, Truck, Heart, Users, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero */}
        <section className="py-10 sm:py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
              A Propos de SEN Jus
            </h1>
            <p className="mt-4 text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Decouvrez notre histoire et notre passion pour le jus de mil traditionnel du Senegal
            </p>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-10 sm:py-14 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="SEN Jus - Produits a base de mil"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-primary text-xs font-medium uppercase tracking-widest">
                  Notre Histoire
                </span>
                <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-2">
                  Depuis le Coeur du Senegal
                </h2>
                <div className="w-12 h-1 bg-primary mt-4" />
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  SEN Jus est ne de la passion pour le mil, cette cereale ancestrale 
                  qui fait partie de l&apos;identite culinaire senegalaise. Notre mission 
                  est de faire decouvrir au monde entier le gout unique et les bienfaits 
                  nutritionnels du jus de mil.
                </p>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  Chaque bouteille de SEN Jus est preparee avec soin, en respectant 
                  les methodes traditionnelles de preparation transmises de generation 
                  en generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-10 sm:py-14 lg:py-16 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                Nos Valeurs
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Leaf, title: "Naturel", desc: "100% sans additifs" },
                { icon: Heart, title: "Passion", desc: "Amour du metier" },
                { icon: Users, title: "Local", desc: "Producteurs senegalais" },
                { icon: MapPin, title: "Proximite", desc: "Made in Senegal" },
              ].map((value, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-sm">
                  <div className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi SEN Jus */}
        <section className="py-10 sm:py-14 lg:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                Pourquoi Choisir SEN Jus
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto mt-3" />
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Leaf, title: "100% Naturel", desc: "Aucun additif, conservateur ou colorant artificiel" },
                { icon: Award, title: "Qualite Premium", desc: "Mil soigneusement selectionne et preparation artisanale" },
                { icon: Truck, title: "Livraison Rapide", desc: "Livraison dans tout Dakar et ses environs" },
              ].map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-14 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Pret a Decouvrir SEN Jus ?
            </h2>
            <p className="mt-3 text-white/80 text-sm">
              Commandez maintenant et goutez au meilleur du mil senegalais
            </p>
            <Link href="/produits">
              <Button 
                size="lg" 
                className="mt-6 bg-white text-primary hover:bg-white/90 rounded-none uppercase tracking-wider px-6 h-11 text-sm"
              >
                Voir nos produits
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
