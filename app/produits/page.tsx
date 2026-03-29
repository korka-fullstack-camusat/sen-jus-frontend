"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { ProductCard } from "@/components/store/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { mockProducts, mockCategories } from "@/lib/mock-data"

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const hasActiveFilter = search || selectedCategory

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-14 sm:pt-16 md:pt-20">

        {/* Banniere */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-10 sm:py-14 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              SEN Jus
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Nos Produits
            </h1>
            <div className="w-12 h-0.5 bg-primary mx-auto mt-4" />
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Decouvrez notre gamme de jus de mil 100% naturel — sans conservateur, sans colorant
            </p>
          </div>
        </div>

        {/* Barre de recherche + filtres */}
        <div className="sticky top-14 sm:top-16 md:top-20 z-30 bg-white border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

            {/* Recherche centree */}
            <div className="flex justify-center mb-4">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-11 pr-10 h-11 rounded-full border-border bg-background"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filtres categories centrees */}
            <div className="flex justify-center">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full flex-shrink-0 h-8 px-4 text-xs font-medium"
                >
                  Tous ({mockProducts.length})
                </Button>
                {mockCategories.map(cat => {
                  const count = mockProducts.filter(p => p.category === cat.name).length
                  return (
                    <Button
                      key={cat.id}
                      variant={selectedCategory === cat.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat.name)}
                      className="rounded-full flex-shrink-0 h-8 px-4 text-xs font-medium"
                    >
                      {cat.name} ({count})
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Grille produits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

          {/* Info resultats */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
              produit{filteredProducts.length > 1 ? "s" : ""}
              {selectedCategory && (
                <> dans <span className="text-primary font-medium">{selectedCategory}</span></>
              )}
              {search && (
                <> pour &laquo;&nbsp;<span className="text-foreground font-medium">{search}</span>&nbsp;&raquo;</>
              )}
            </p>
            {hasActiveFilter && (
              <button
                onClick={() => { setSearch(""); setSelectedCategory(null) }}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="h-3 w-3" />
                Reinitialiser
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Aucun produit trouve</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Aucun resultat pour votre recherche
              </p>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => { setSearch(""); setSelectedCategory(null) }}
              >
                Voir tous les produits
              </Button>
            </div>
          )}
        </div>

      </main>
      <Footer />
    </div>
  )
}
