import type { Product, Order, Category, Stats } from './types'

// Donnees vides - tous les produits seront ajoutes par l'admin
export const mockProducts: Product[] = []

export const mockOrders: Order[] = []

export const mockCategories: Category[] = [
  { id: 1, name: 'Jus 1L' },
  { id: 2, name: 'Jus 50cl' },
  { id: 3, name: 'Jus 25cl' },
  { id: 4, name: 'Packs' },
]

export const mockStats: Stats = {
  total_products: 0,
  total_orders: 0,
  total_revenue: 0,
  total_clients: 0,
  pending_orders: 0,
}
