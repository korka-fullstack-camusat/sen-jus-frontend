"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ArrowRight, Package } from "lucide-react"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { OrderForm } from "@/components/store/order-form"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()
  const [showOrderForm, setShowOrderForm] = useState(false)

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fr-SN").format(price)

  // --- Panier vide ---
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-14 sm:pt-16 md:pt-20 py-16 px-4">
          <div className="text-center max-w-sm w-full">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Votre panier est vide
            </h1>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">
              Decouvrez nos jus de mil 100% naturels et ajoutez vos favoris au panier.
            </p>
            <Link href="/produits">
              <Button className="rounded-full px-8 h-12 w-full sm:w-auto" size="lg">
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

  // --- Formulaire de commande ---
  if (showOrderForm) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-14 sm:pt-16 md:pt-20 py-6 sm:py-10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <Button
              variant="ghost"
              onClick={() => setShowOrderForm(false)}
              className="mb-6 -ml-2 rounded-full text-sm"
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

  // --- Panier principal ---
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-14 sm:pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

          {/* Titre */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Link href="/produits">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 flex-shrink-0">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-baseline gap-2 min-w-0">
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground truncate">
                Votre Panier
              </h1>
              <span className="text-sm text-muted-foreground flex-shrink-0">
                ({items.reduce((s, i) => s + i.quantity, 0)} article{items.reduce((s, i) => s + i.quantity, 0) > 1 ? "s" : ""})
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

            {/* Liste des articles */}
            <div className="lg:col-span-2 space-y-3">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="bg-card border border-border rounded-lg p-3 sm:p-4 flex gap-3 sm:gap-4"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                    <Image
                      src={item.product.images[0] || "/placeholder.jpg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Infos + controles */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    {/* Nom + categorie + prix unitaire */}
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {item.product.category}
                      </span>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mt-0.5 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {formatPrice(item.product.price)} FCFA / unite
                      </p>
                    </div>

                    {/* Quantite + total + supprimer */}
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                      {/* Selecteur quantite */}
                      <div className="flex items-center gap-1 bg-muted rounded-full p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full hover:bg-background"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-7 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full hover:bg-background"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Total ligne + supprimer */}
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-primary text-sm sm:text-base">
                          {formatPrice(item.product.price * item.quantity)} FCFA
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continuer les achats - mobile seulement */}
              <div className="lg:hidden pt-2">
                <Link href="/produits">
                  <Button variant="outline" className="w-full rounded-full h-11 text-sm">
                    <Package className="h-4 w-4 mr-2" />
                    Continuer les achats
                  </Button>
                </Link>
              </div>
            </div>

            {/* Recapitulatif - sidebar desktop */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="font-serif font-semibold text-lg mb-5">Recapitulatif</h2>

                <div className="space-y-3 text-sm">
                  {items.map(item => (
                    <div key={item.product.id} className="flex justify-between gap-2">
                      <span className="text-muted-foreground truncate">
                        {item.product.name} <span className="font-medium text-foreground">x{item.quantity}</span>
                      </span>
                      <span className="flex-shrink-0 font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}

                  <hr className="border-border my-2" />

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span className="font-medium">{formatPrice(total)} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-primary font-semibold">Gratuite</span>
                  </div>

                  <hr className="border-border my-2" />

                  <div className="flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)} FCFA</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 h-12 rounded-lg text-sm font-semibold"
                  size="lg"
                  onClick={() => setShowOrderForm(true)}
                >
                  Passer la commande
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link href="/produits" className="block mt-3">
                  <Button variant="outline" className="w-full rounded-lg text-sm">
                    Continuer les achats
                  </Button>
                </Link>

                <div className="mt-5 pt-4 border-t border-border text-center">
                  <p className="text-xs text-muted-foreground">
                    Livraison gratuite a Dakar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de commande sticky - mobile/tablette uniquement */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg px-4 py-3 safe-area-pb">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground leading-none mb-0.5">Total</p>
              <p className="font-bold text-primary text-base sm:text-lg leading-tight">
                {formatPrice(total)} <span className="text-xs font-normal text-muted-foreground">FCFA</span>
              </p>
              <p className="text-[10px] text-primary font-medium">Livraison gratuite</p>
            </div>
            <Button
              className="rounded-lg h-11 px-5 text-sm font-semibold flex-shrink-0"
              onClick={() => setShowOrderForm(true)}
            >
              Commander
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Espace pour la barre sticky mobile */}
        <div className="lg:hidden h-20" />

      </main>
      <Footer />
    </div>
  )
}
