'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCart } from '@/context/cart-context'
import type { PaymentMethod } from '@/lib/types'

export function OrderForm() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    client_phone: '',
    address: '',
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!paymentMethod) return
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    // In production:
    // await ordersAPI.create({ ...formData, payment_method: paymentMethod, items: ..., total })

    setIsSubmitting(false)
    setIsSuccess(true)
    clearCart()

    setTimeout(() => router.push('/'), 3000)
  }

  // --- Ecran de succes ---
  if (isSuccess) {
    return (
      <Card className="text-center py-10">
        <CardContent>
          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
            Commande confirmee !
          </h2>
          <p className="text-muted-foreground mb-2">
            Merci pour votre commande. Vous recevrez une confirmation par email.
          </p>
          <p className="text-sm font-medium mb-4">
            Paiement via{' '}
            <span className={paymentMethod === 'wave' ? 'text-blue-600' : 'text-orange-500'}>
              {paymentMethod === 'wave' ? 'Wave' : 'Orange Money'}
            </span>{' '}
            en cours de traitement.
          </p>
          <p className="text-xs text-muted-foreground">Redirection vers l&apos;accueil...</p>
        </CardContent>
      </Card>
    )
  }

  // --- ETAPE 1 : Choix du mode de paiement ---
  if (!paymentMethod) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
            <CardTitle className="font-serif text-lg">Choisir le mode de paiement</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Selectionnez votre mode de paiement pour continuer
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 gap-4">

            {/* Wave */}
            <button
              type="button"
              onClick={() => setPaymentMethod('wave')}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-border bg-card p-6 transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-2xl leading-none">W</span>
              </div>
              <div className="text-center">
                <p className="text-base font-bold text-foreground group-hover:text-blue-700">Wave</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paiement instantane</p>
              </div>
              <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="h-4 w-4 text-blue-500" />
              </span>
            </button>

            {/* Orange Money */}
            <button
              type="button"
              onClick={() => setPaymentMethod('orange_money')}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-border bg-card p-6 transition-all hover:border-orange-500 hover:bg-orange-50 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl leading-none">OM</span>
              </div>
              <div className="text-center">
                <p className="text-base font-bold text-foreground group-hover:text-orange-600">Orange Money</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paiement securise</p>
              </div>
              <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="h-4 w-4 text-orange-500" />
              </span>
            </button>
          </div>

          {/* Recapitulatif panier */}
          <div className="mt-6 bg-muted rounded-lg p-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Recapitulatif de votre commande
            </p>
            <div className="space-y-1.5 text-sm">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between">
                  <span className="text-muted-foreground truncate mr-2">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-medium flex-shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
              <hr className="my-2 border-border" />
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // --- ETAPE 2 : Formulaire de livraison ---
  return (
    <Card>
      <CardHeader className="pb-2">
        {/* Indicateur de paiement selectionne */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold">1</span>
            <span className="text-sm text-muted-foreground line-through">Mode de paiement</span>
          </div>
          <button
            onClick={() => setPaymentMethod(null)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              paymentMethod === 'wave'
                ? 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100'
                : 'bg-orange-50 border-orange-300 text-orange-600 hover:bg-orange-100'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${paymentMethod === 'wave' ? 'bg-blue-600' : 'bg-orange-500'}`} />
            {paymentMethod === 'wave' ? 'Wave' : 'Orange Money'}
            <span className="underline underline-offset-1">Changer</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
          <CardTitle className="font-serif text-lg">Vos informations de livraison</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Nom complet *
            </label>
            <Input
              required
              value={formData.client_name}
              onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Email *
            </label>
            <Input
              type="email"
              required
              value={formData.client_email}
              onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Telephone *
            </label>
            <Input
              type="tel"
              required
              value={formData.client_phone}
              onChange={(e) => setFormData({ ...formData, client_phone: e.target.value })}
              placeholder="+221 77 123 45 67"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Adresse de livraison *
            </label>
            <Textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Votre adresse complete (quartier, rue, ville...)"
              rows={3}
            />
          </div>

          {/* Recapitulatif final */}
          <div className="bg-muted rounded-lg p-4 mt-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Recapitulatif
            </p>
            <div className="space-y-1.5 text-sm">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between">
                  <span className="text-muted-foreground truncate mr-2">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span>{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
              <hr className="my-2 border-border" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground pt-1">
                <span>Paiement</span>
                <span className={`font-semibold ${paymentMethod === 'wave' ? 'text-blue-600' : 'text-orange-500'}`}>
                  {paymentMethod === 'wave' ? 'Wave' : 'Orange Money'}
                </span>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Traitement en cours...' : 'Confirmer la commande'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
