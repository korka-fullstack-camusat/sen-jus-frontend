import type { Product, Order, Category, Stats } from './types'

// Produits SEN Jus - Jus de Mil Naturel
// Prix: 1L = 2000 FCFA, 500ml = 1000 FCFA, 250ml = 300 FCFA
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'SEN Jus - Jus de Mil Naturel 1L',
    description: 'Notre grand format familial de jus de mil naturel. Ideal pour partager en famille ou entre amis. 100% naturel, sans additifs ni conservateurs. Prepare avec du mil local de qualite superieure.',
    price: 2000,
    category: 'Jus 1L',
    stock: 50,
    images: ['/images/sen-jus-1l.jpg'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    name: 'SEN Jus - Jus de Mil Naturel 500ml',
    description: 'Format intermediaire parfait pour une consommation individuelle. Ni trop petit, ni trop grand. 100% naturel, sans additifs ni conservateurs.',
    price: 1000,
    category: 'Jus 50cl',
    stock: 75,
    images: ['/images/sen-jus-500ml.jpg'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 3,
    name: 'SEN Jus - Jus de Mil Naturel 250ml',
    description: 'Format pratique pour emporter partout. Parfait pour une pause rafraichissante au travail ou en deplacement. 100% naturel, sans additifs ni conservateurs.',
    price: 300,
    category: 'Jus 25cl',
    stock: 100,
    images: ['/images/sen-jus-250ml.jpg'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 4,
    name: 'Pack Decouverte SEN Jus',
    description: 'Decouvrez tous nos formats avec ce pack: 1 bouteille 1L + 2 bouteilles 500ml + 4 bouteilles 250ml. Parfait pour une premiere experience SEN Jus.',
    price: 4800,
    category: 'Packs',
    stock: 30,
    images: ['/images/sen-jus-pack.jpg'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 5,
    name: 'Pack Familial SEN Jus 1L x6',
    description: 'Pack economique de 6 bouteilles de 1L. Ideal pour les grandes familles ou pour faire des reserves. Profitez du meilleur prix au litre.',
    price: 10000,
    category: 'Packs',
    stock: 20,
    images: ['/images/sen-jus-pack.jpg'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 6,
    name: 'Pack Bureau SEN Jus 250ml x12',
    description: 'Pack ideal pour le bureau ou les evenements. 12 bouteilles de 250ml pour partager avec vos collegues ou invites.',
    price: 3000,
    category: 'Packs',
    stock: 40,
    images: ['/images/sen-jus-pack.jpg'],
    created_at: '2024-01-15T10:00:00Z'
  }
]

export const mockOrders: Order[] = [
  {
    id: 1,
    client_name: 'Amadou Diallo',
    client_email: 'amadou.diallo@email.sn',
    client_phone: '+221 77 123 45 67',
    items: [
      { product_id: 1, quantity: 2, price: 2000, product_name: 'SEN Jus - Jus de Mil Naturel 1L' },
      { product_id: 3, quantity: 4, price: 300, product_name: 'SEN Jus - Jus de Mil Naturel 250ml' }
    ],
    total: 5200,
    status: 'en_attente',
    created_at: '2024-03-28T14:30:00Z',
    address: 'Almadies, Dakar'
  },
  {
    id: 2,
    client_name: 'Fatou Sow',
    client_email: 'fatou.sow@email.sn',
    client_phone: '+221 76 987 65 43',
    items: [
      { product_id: 5, quantity: 1, price: 10000, product_name: 'Pack Familial SEN Jus 1L x6' }
    ],
    total: 10000,
    status: 'validee',
    created_at: '2024-03-27T09:15:00Z',
    address: 'Point E, Dakar'
  },
  {
    id: 3,
    client_name: 'Moussa Ndiaye',
    client_email: 'moussa.ndiaye@email.sn',
    client_phone: '+221 78 456 78 90',
    items: [
      { product_id: 4, quantity: 2, price: 4800, product_name: 'Pack Decouverte SEN Jus' }
    ],
    total: 9600,
    status: 'livree',
    created_at: '2024-03-25T16:45:00Z',
    address: 'Mermoz, Dakar'
  }
]

export const mockCategories: Category[] = [
  { id: 1, name: 'Jus 1L' },
  { id: 2, name: 'Jus 50cl' },
  { id: 3, name: 'Jus 25cl' },
  { id: 4, name: 'Packs' },
]

export const mockStats: Stats = {
  total_products: 6,
  total_orders: 3,
  total_revenue: 24800,
  total_clients: 3,
  pending_orders: 1,
}
