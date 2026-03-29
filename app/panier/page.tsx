"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ArrowRight } from "lucide-react"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { OrderForm } from "@/components/store/order-form"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()
  const [showOrderForm, setShowOrderForm] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-SN").format(price)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center px-4">
            <div className="w-20 h-20 mx-auto mb-6 rounded-sm bg-muted flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Votre panier est vide
            </h1>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Decouvrez nos delicieux produits a base de mil
            </p>
            <Link href="/produits">
              <Button className="rounded-sm px-8" size="lg">
                Voir les produits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (showOrderForm) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 py-6 sm:py-10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <Button
              variant="ghost"
              onClick={() => setShowOrderForm(false)}
              className="mb-6 -ml-2 rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au panier
            </Button>
            <OrderForm />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <Link href="/produits">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Votre Panier
            </h1>
            <span className="text-sm text-muted-foreground">
              ({items.length} article{items.length > 1 ? "s" : ""})
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3">
              {items.map(item => (
                <div 
                  key={item.product.id}
                  className="bg-card rounded-sm p-3 sm:p-4 border border-border flex gap-3 sm:gap-4"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-muted rounded-sm overflow-hidden">
                    <Image
                      src={item.product.images[0] || "/images/placeholder.jpg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base line-clamp-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        {formatPrice(item.product.price)} FCFA
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 sm:gap-2 bg-muted rounded-full p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 sm:w-8 text-center font-medium text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-4">
                        <span className="font-bold text-primary text-sm sm:text-base">
                          {formatPrice(item.product.price * item.quantity)} FCFA
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive rounded-full"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-sm p-5 sm:p-6 border border-border sticky top-24">
                <h2 className="font-semibold text-lg mb-4">Recapitulatif</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span className="font-medium">{formatPrice(total)} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-primary font-medium">Gratuite</span>
                  </div>
                  <hr className="my-4 border-border" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)} FCFA</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 rounded-sm h-12"
                  size="lg"
                  onClick={() => setShowOrderForm(true)}
                >
                  Passer la commande
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link href="/produits" className="block mt-3">
                  <Button variant="outline" className="w-full rounded-sm">
                    Continuer les achats
                  </Button>
                </Link>

                {/* Trust badges */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Livraison gratuite a Dakar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
