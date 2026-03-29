'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Plus, Pencil, Trash2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mockProducts } from '@/lib/mock-data'
import { ProductFormDialog } from '@/components/admin/product-form-dialog'
import type { Product } from '@/lib/types'

export default function AdminProductsPage() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(mockProducts)
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [showAddDialog, setShowAddDialog] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
      setProducts(prev => prev.filter(p => p.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Produits</h1>
          <p className="text-muted-foreground mt-1">Gérez votre catalogue de produits</p>
        </div>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un produit
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Rechercher par nom, description, catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative aspect-square bg-muted">
              <Image
                src={product.images[0] || '/images/placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                {product.category}
              </span>
              <h3 className="font-semibold text-foreground mt-1 truncate">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-primary">{formatPrice(product.price)}</span>
                <span className="text-sm text-muted-foreground">
                  Stock: {product.stock > 0 ? `${product.stock}` : 'Rupture'}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setEditProduct(product)}
                >
                  <Pencil className="h-3 w-3 mr-1" />
                  Modifier
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun produit trouvé</p>
        </div>
      )}

      {/* Product Form Dialog */}
      <ProductFormDialog
        open={showAddDialog || !!editProduct}
        onOpenChange={(open) => {
          if (!open) {
            setShowAddDialog(false)
            setEditProduct(null)
          }
        }}
        product={editProduct}
        onSave={(product, imageFiles) => {
          // TODO: Upload images to backend and get URLs
          // For now, create temporary URLs for preview
          const newImageUrls = imageFiles.map(file => URL.createObjectURL(file))
          const updatedProduct = {
            ...product,
            images: [...product.images, ...newImageUrls]
          }
          
          if (editProduct) {
            setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p))
          } else {
            setProducts(prev => [...prev, { ...updatedProduct, id: Date.now() }])
          }
          setShowAddDialog(false)
          setEditProduct(null)
        }}
      />
    </div>
  )
}
