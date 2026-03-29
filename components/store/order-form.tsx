'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCart } from '@/context/cart-context'

export function OrderForm() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In production, this would call the backend API
    // const order = await ordersAPI.create({
    //   ...formData,
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
          <p className="text-muted-foreground mb-4">
            Merci pour votre commande. Vous recevrez une confirmation par email.
          </p>
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
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Traitement...' : 'Confirmer la commande'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
