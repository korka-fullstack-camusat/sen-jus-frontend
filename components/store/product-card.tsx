"use client"

import Image from "next/image"
import { Plus, Check, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-SN").format(price)
  }

  const handleAdd = () => {
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <article className="group flex flex-col bg-white border border-border">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.images[0] || "/images/placeholder.jpg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        {product.stock <= 5 && product.stock > 0 && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary text-white text-[9px] sm:text-[10px] font-medium uppercase tracking-wider">
            Stock limite
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-foreground text-background text-[9px] sm:text-[10px] font-medium uppercase tracking-wider">
            Rupture
          </span>
        )}

        {/* Overlay on hover - Desktop */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
          <Button
            onClick={handleAdd}
            disabled={product.stock === 0}
            className="rounded-none bg-white text-foreground hover:bg-white/90 uppercase tracking-wider text-xs"
            size="sm"
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Ajoute
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 mr-2" />
                Ajouter
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-2 sm:p-4 flex-1 flex flex-col text-center">
        <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest">
          {product.category}
        </span>
        <h3 className="font-semibold text-foreground text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="font-bold text-primary text-sm sm:text-base mt-1 sm:mt-2">
          {formatPrice(product.price)} <span className="text-[9px] sm:text-[10px] font-normal text-muted-foreground">FCFA</span>
        </p>
      </div>

      {/* Mobile add button */}
      <div className="px-2 pb-2 sm:hidden">
        <Button
          onClick={handleAdd}
          disabled={product.stock === 0}
          variant={isAdded ? "default" : "outline"}
          size="sm"
          className="w-full rounded-none uppercase tracking-wider text-[10px] h-8"
        >
          {isAdded ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Ajoute
            </>
          ) : (
            <>
              <Plus className="w-3 h-3 mr-1" />
              Ajouter
            </>
          )}
        </Button>
      </div>
    </article>
  )
}
