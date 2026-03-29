'use client'

import { useState } from 'react'
import { Save, Store, Mail, Phone, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function AdminSettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    storeName: 'MIL NATURE',
    storeDescription: 'Produits naturels et authentiques à base de mil',
    email: 'contact@milnature.com',
    phone: '+221 77 123 45 67',
    address: 'Dakar, Sénégal',
    deliveryInfo: 'Livraison gratuite dans tout le Sénégal sous 24-48h.',
  })

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert('Paramètres enregistrés avec succès!')
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Paramètres</h1>
        <p className="text-muted-foreground mt-1">Configurez les paramètres de votre boutique</p>
      </div>

      {/* Store Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Informations de la boutique
          </CardTitle>
          <CardDescription>
            Ces informations seront affichées sur votre site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Nom de la boutique
            </label>
            <Input
              value={formData.storeName}
              onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Description
            </label>
            <Textarea
              value={formData.storeDescription}
              onChange={(e) => setFormData({ ...formData, storeDescription: e.target.value })}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Coordonnées
          </CardTitle>
          <CardDescription>
            Informations de contact affichées sur le site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Téléphone
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Adresse
            </label>
            <Input
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Delivery Info */}
      <Card>
        <CardHeader>
          <CardTitle>Livraison</CardTitle>
          <CardDescription>
            Informations sur les conditions de livraison
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Informations de livraison
            </label>
            <Textarea
              value={formData.deliveryInfo}
              onChange={(e) => setFormData({ ...formData, deliveryInfo: e.target.value })}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button onClick={handleSave} disabled={isSaving} size="lg">
        <Save className="h-4 w-4 mr-2" />
        {isSaving ? 'Enregistrement...' : 'Enregistrer les modifications'}
      </Button>
    </div>
  )
}
