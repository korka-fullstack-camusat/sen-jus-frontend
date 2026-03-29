'use client'

import { useState } from 'react'
import { Search, Check, X, Eye, Mail, Phone, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { mockOrders } from '@/lib/mock-data'
import type { Order } from '@/lib/types'

const statusLabels: Record<string, string> = {
  en_attente: 'En attente',
  en_cours: 'En cours',
  validee: 'Validée',
  rejetee: 'Rejetée',
  livree: 'Livrée',
}

const statusColors: Record<string, string> = {
  en_attente: 'bg-warning/20 text-warning-foreground',
  en_cours: 'bg-primary/20 text-primary',
  validee: 'bg-success/20 text-success',
  rejetee: 'bg-destructive/20 text-destructive',
  livree: 'bg-muted text-muted-foreground',
}

export default function AdminOrdersPage() {
  const [search, setSearch] = useState('')
  const [orders, setOrders] = useState(mockOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  const filteredOrders = orders.filter(order =>
    order.id.toString().includes(search) ||
    order.client_name.toLowerCase().includes(search.toLowerCase()) ||
    order.client_email.toLowerCase().includes(search.toLowerCase()) ||
    order.client_phone.includes(search) ||
    statusLabels[order.status].toLowerCase().includes(search.toLowerCase())
  )

  const updateOrderStatus = (id: number, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o))
    if (selectedOrder?.id === id) {
      setSelectedOrder({ ...selectedOrder, status })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Commandes</h1>
        <p className="text-muted-foreground mt-1">Gérez toutes les commandes de vos clients</p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Rechercher par ID, nom, email, téléphone ou statut..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map(order => (
          <Card key={order.id}>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Order Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-foreground">Commande #{order.id}</h3>
                    <Badge className={statusColors[order.status]}>
                      {statusLabels[order.status]}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Client: <span className="text-foreground">{order.client_name}</span></p>
                    <p>Email: <span className="text-foreground">{order.client_email}</span></p>
                    <p>Téléphone: <span className="text-foreground">{order.client_phone}</span></p>
                    <p>Date: <span className="text-foreground">{order.created_at}</span></p>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(order.total)}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(order.status === 'en_attente' || order.status === 'en_cours') && (
                      <>
                        <Button
                          size="sm"
                          className="bg-success hover:bg-success/90 text-success-foreground"
                          onClick={() => updateOrderStatus(order.id, 'validee')}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Valider
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateOrderStatus(order.id, 'rejetee')}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Rejeter
                        </Button>
                      </>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucune commande trouvée</p>
        </div>
      )}

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">
              Détails de la commande #{selectedOrder?.id}
            </DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-4 mt-4">
              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Statut:</span>
                <Badge className={statusColors[selectedOrder.status]}>
                  {statusLabels[selectedOrder.status]}
                </Badge>
              </div>

              {/* Client Info */}
              <div className="bg-muted rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-foreground">Informations client</h4>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="text-muted-foreground w-20">Nom:</span>
                    <span className="text-foreground">{selectedOrder.client_name}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{selectedOrder.client_email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{selectedOrder.client_phone}</span>
                  </p>
                  {selectedOrder.address && (
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-foreground">{selectedOrder.address}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Articles commandés</h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">
                        {item.product_name || `Produit #${item.product_id}`} x{item.quantity}
                      </span>
                      <span className="font-medium text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(selectedOrder.total)}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {(selectedOrder.status === 'en_attente' || selectedOrder.status === 'en_cours') && (
                <div className="flex gap-2 pt-4">
                  <Button
                    className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                    onClick={() => updateOrderStatus(selectedOrder.id, 'validee')}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Valider
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={() => updateOrderStatus(selectedOrder.id, 'rejetee')}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Rejeter
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
