"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
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
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary to-accent/10 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Nos Produits
            </h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Decouvrez notre gamme complete de produits naturels a base de mil
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          {/* Filters */}
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 h-12 rounded-full border-border bg-card"
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide justify-center flex-wrap">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="rounded-full flex-shrink-0 h-9"
              >
                Tous
              </Button>
              {mockCategories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="rounded-full flex-shrink-0 h-9"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouve{filteredProducts.length > 1 ? "s" : ""}
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-24">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Aucun produit trouve</h3>
              <p className="text-muted-foreground text-sm">
                Essayez de modifier votre recherche
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => {
                  setSearch("")
                  setSelectedCategory(null)
                }}
              >
                Reinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
