"use client"

import Link from "next/link"
import { ArrowRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"
import { mockProducts } from "@/lib/mock-data"

export function FeaturedProducts() {
  const featured = mockProducts.slice(0, 4)

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-widest">
            Nos Produits
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2 sm:mt-3">
            SEN Jus - Jus de Mil
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mt-4 sm:mt-6" />
          <p className="text-muted-foreground mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base px-4">
            Decouvrez notre gamme de jus de mil 100% naturel, en differents formats
          </p>
        </div>

        {/* Products Grid or Empty State */}
        {featured.length > 0 ? (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl">
              {featured.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Produits a venir</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Nos produits seront bientot disponibles. Revenez nous voir tres prochainement.
            </p>
          </div>
        )}

        {/* CTA - only show if products exist */}
        {featured.length > 0 && (
          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/produits">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-none uppercase tracking-wider text-sm h-11 sm:h-12"
              >
                Tous les produits
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
