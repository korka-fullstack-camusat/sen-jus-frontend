'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In production, this would call the backend API
    // const order = await ordersAPI.create({
    //   ...formData,
    //   payment_method: paymentMethod,
    //   items: items.map(item => ({
    //     product_id: item.product.id,
    //     quantity: item.quantity,
    //     price: item.product.price,
    //   })),
    //   total,
    // })

    setIsSubmitting(false)
    setIsSuccess(true)
    clearCart()

    // Redirect after 3 seconds
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  if (isSuccess) {
    return (
      <Card className="text-center py-8">
        <CardContent>
          <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
            Commande confirmée!
          </h2>
          <p className="text-muted-foreground mb-2">
            Merci pour votre commande. Vous recevrez une confirmation par email.
          </p>
          {paymentMethod && (
            <p className="text-sm font-medium text-primary mb-4">
              Paiement via {paymentMethod === 'wave' ? 'Wave' : 'Orange Money'} en cours de traitement.
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Redirection vers l&apos;accueil...
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Finaliser la commande</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Nom complet *
            </label>
            <Input
              required
              value={formData.client_name}
              onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
              placeholder="Votre nom"
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
              Téléphone *
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
              placeholder="Votre adresse complète"
              rows={3}
            />
          </div>

          {/* Mode de paiement */}
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Mode de paiement *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Wave */}
              <button
                type="button"
                onClick={() => setPaymentMethod('wave')}
                className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all cursor-pointer ${
                  paymentMethod === 'wave'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-border bg-card hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                {paymentMethod === 'wave' && (
                  <span className="absolute top-2 right-2 h-4 w-4 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                {/* Wave logo text */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600">
                  <span className="text-white font-bold text-lg leading-none">W</span>
                </div>
                <span className={`text-sm font-semibold ${paymentMethod === 'wave' ? 'text-blue-700' : 'text-foreground'}`}>
                  Wave
                </span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">
                  Paiement mobile instantané
                </span>
              </button>

              {/* Orange Money */}
              <button
                type="button"
                onClick={() => setPaymentMethod('orange_money')}
                className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all cursor-pointer ${
                  paymentMethod === 'orange_money'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-border bg-card hover:border-orange-300 hover:bg-orange-50/40'
                }`}
              >
                {paymentMethod === 'orange_money' && (
                  <span className="absolute top-2 right-2 h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                {/* Orange Money logo */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500">
                  <span className="text-white font-bold text-lg leading-none">OM</span>
                </div>
                <span className={`text-sm font-semibold ${paymentMethod === 'orange_money' ? 'text-orange-600' : 'text-foreground'}`}>
                  Orange Money
                </span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">
                  Paiement mobile sécurisé
                </span>
              </button>
            </div>
            {!paymentMethod && (
              <p className="text-xs text-muted-foreground mt-2">
                Veuillez choisir un mode de paiement pour continuer.
              </p>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-muted rounded-lg p-4 mt-6">
            <h3 className="font-semibold mb-3">Récapitulatif</h3>
            <div className="space-y-2 text-sm">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between">
                  <span className="text-muted-foreground">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span>{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </div>
              {paymentMethod && (
                <div className="flex justify-between text-xs text-muted-foreground pt-1">
                  <span>Mode de paiement</span>
                  <span className={`font-medium ${paymentMethod === 'wave' ? 'text-blue-600' : 'text-orange-500'}`}>
                    {paymentMethod === 'wave' ? 'Wave' : 'Orange Money'}
                  </span>
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || !paymentMethod}
          >
            {isSubmitting ? 'Traitement...' : 'Confirmer la commande'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
