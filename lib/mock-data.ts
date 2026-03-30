import type { Product, Order, Category, Stats } from './types'

// Produits SEN Jus - Jus de Mil Naturel
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'SEN Jus - Jus de Mil Naturel 1L',
    description: 'Notre grand format familial de jus de mil naturel. Ideal pour partager en famille ou entre amis. 100% naturel, sans additifs ni conservateurs. Prepare avec du mil local de qualite superieure.',
    price: 2500,
    category: 'Jus 1L',
    stock: 50,
    images: ['/images/sen-jus-mil.png'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    name: 'SEN Jus - Jus de Mil Naturel 250ml',
    description: 'Format pratique pour emporter partout. Parfait pour une pause rafraichissante au travail ou en deplacement. 100% naturel, sans additifs ni conservateurs.',
    price: 800,
    category: 'Jus 25cl',
    stock: 100,
    images: ['/images/sen-jus-mil.png'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 3,
    name: 'SEN Jus - Jus de Mil Naturel 36ml',
    description: 'Mini format ideal pour decouvrir notre jus de mil ou pour une degustation rapide. 100% naturel, sans additifs ni conservateurs.',
    price: 300,
    category: 'Jus 25cl',
    stock: 200,
    images: ['/images/sen-jus-mil.png'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 4,
    name: 'Pack Decouverte SEN Jus',
    description: 'Decouvrez tous nos formats avec ce pack: 1 bouteille 1L + 2 bouteilles 250ml + 3 bouteilles 36ml. Parfait pour une premiere experience SEN Jus.',
    price: 4500,
    category: 'Packs',
    stock: 30,
    images: ['/images/sen-jus-mil.png'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 5,
    name: 'Pack Familial SEN Jus 1L x6',
    description: 'Pack economique de 6 bouteilles de 1L. Ideal pour les grandes familles ou pour faire des reserves. Profitez du meilleur prix au litre.',
    price: 13500,
    category: 'Packs',
    stock: 20,
    images: ['/images/sen-jus-mil.png'],
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 6,
    name: 'SEN Jus - Jus de Mil Naturel 50cl',
    description: 'Format intermediaire parfait pour une consommation individuelle. Ni trop petit, ni trop grand. 100% naturel, sans additifs ni conservateurs.',
    price: 1500,
    category: 'Jus 50cl',
    stock: 75,
    images: ['/images/sen-jus-mil.png'],
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
      { product_id: 1, quantity: 2, price: 2500, product_name: 'SEN Jus - Jus de Mil Naturel 1L' },
      { product_id: 2, quantity: 4, price: 800, product_name: 'SEN Jus - Jus de Mil Naturel 250ml' }
    ],
    total: 8200,
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
      { product_id: 5, quantity: 1, price: 13500, product_name: 'Pack Familial SEN Jus 1L x6' }
    ],
    total: 13500,
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
      { product_id: 4, quantity: 2, price: 4500, product_name: 'Pack Decouverte SEN Jus' }
    ],
    total: 9000,
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
  total_revenue: 30700,
  total_clients: 3,
  pending_orders: 1,
}
