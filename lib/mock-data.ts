import type { Product, Order, Category, Stats } from './types'

// Images de reference - Jus de Mil Naturel (tons chauds, grain, beige/dore)
const IMG = {
  // Jus de mil en bouteille / verre - couleur creme/doree
  milNature1: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop&q=80',
  milNature2: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=600&fit=crop&q=80',
  milNature3: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=600&fit=crop&q=80',
  // Gingembre - tons ambre/epice
  gingembre1: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=600&h=600&fit=crop&q=80',
  gingembre2: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop&q=80',
  gingembre3: 'https://images.unsplash.com/photo-1565958374765-6e9d8a55e7e1?w=600&h=600&fit=crop&q=80',
  // Bissap - rouge naturel
  bissap1: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop&q=80',
  bissap2: 'https://images.unsplash.com/photo-1576036083984-8f2e77e4f0df?w=600&h=600&fit=crop&q=80',
  // Vanille - creme dore
  vanille1: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&h=600&fit=crop&q=80',
  vanille2: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=600&fit=crop&q=80',
  // Menthe - vert naturel
  menthe1: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=600&h=600&fit=crop&q=80',
  menthe2: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600&h=600&fit=crop&q=80',
  // Fraise
  fraise1: 'https://images.unsplash.com/photo-1490323814420-c9a5bd1cadb7?w=600&h=600&fit=crop&q=80',
  fraise2: 'https://images.unsplash.com/photo-1559181567-c3190bba7bfb?w=600&h=600&fit=crop&q=80',
  // Packs / bouteilles multiples
  pack1: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=600&fit=crop&q=80',
  pack2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80',
  pack3: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&h=600&fit=crop&q=80',
}

export const mockProducts: Product[] = [
  // --- Jus 1L ---
  {
    id: 1,
    name: 'SEN Jus Mil Naturel 1L',
    description: "Le grand format de notre jus de mil 100% naturel. Preparation traditionnelle senegalaise sans conservateur, sans colorant. Riche en fer, calcium et vitamines B. Ideal pour toute la famille.",
    price: 1500,
    category: 'Jus 1L',
    stock: 48,
    images: [IMG.milNature1, IMG.milNature2, IMG.milNature3],
    created_at: '2025-01-10T08:00:00Z',
  },
  {
    id: 2,
    name: 'SEN Jus Mil Gingembre 1L',
    description: "Notre jus de mil enrichi au gingembre frais du Senegal. Alliance parfaite entre la douceur du mil et le tonus du gingembre. Stimule la digestion et booste l'energie naturellement.",
    price: 1700,
    category: 'Jus 1L',
    stock: 35,
    images: [IMG.gingembre1, IMG.gingembre2, IMG.gingembre3],
    created_at: '2025-01-10T08:00:00Z',
  },
  {
    id: 3,
    name: 'SEN Jus Mil Bissap 1L',
    description: "Jus de mil marie a l'hibiscus (bissap) cultive localement. Une boisson aux notes florales et fruitees, riche en antioxydants et en vitamine C. Une saveur unique et rafraichissante.",
    price: 1800,
    category: 'Jus 1L',
    stock: 22,
    images: [IMG.bissap1, IMG.bissap2, IMG.milNature2],
    created_at: '2025-01-12T09:00:00Z',
  },
  {
    id: 4,
    name: 'SEN Jus Mil Vanille 1L',
    description: "La douceur authentique du jus de mil sublimee par la vanille naturelle. Un gout onctueux et equilibre, parfait pour les enfants comme pour les adultes. Sans sucre ajoute.",
    price: 1600,
    category: 'Jus 1L',
    stock: 5,
    images: [IMG.vanille1, IMG.vanille2, IMG.milNature1],
    created_at: '2025-01-15T10:00:00Z',
  },

  // --- Jus 50cl ---
  {
    id: 5,
    name: 'SEN Jus Mil Naturel 50cl',
    description: "Le format nomade du jus de mil SEN Jus. Meme qualite 100% naturelle dans une bouteille pratique a emporter au bureau, a l'ecole ou lors de vos sorties. Bien frais c'est encore meilleur.",
    price: 800,
    category: 'Jus 50cl',
    stock: 60,
    images: [IMG.milNature2, IMG.milNature1],
    created_at: '2025-01-10T08:00:00Z',
  },
  {
    id: 6,
    name: 'SEN Jus Mil Gingembre 50cl',
    description: "Jus de mil au gingembre en format demi-litre. Tonique et revigorant, il accompagne parfaitement vos journees actives. Prepare selon la recette traditionnelle senegalaise.",
    price: 900,
    category: 'Jus 50cl',
    stock: 45,
    images: [IMG.gingembre2, IMG.gingembre1],
    created_at: '2025-01-10T08:00:00Z',
  },
  {
    id: 7,
    name: 'SEN Jus Mil Menthe 50cl',
    description: "Fraicheur inegalable du jus de mil a la menthe poivree. Desalterant et rafraichissant, parfait par les fortes chaleurs senegalaises. Actuellement en rupture, bientot disponible.",
    price: 850,
    category: 'Jus 50cl',
    stock: 0,
    images: [IMG.menthe1, IMG.menthe2],
    created_at: '2025-01-18T11:00:00Z',
  },

  // --- Jus 25cl ---
  {
    id: 8,
    name: 'SEN Jus Mil Naturel 25cl',
    description: "La mini-brique de jus de mil naturel SEN Jus. Format ideal pour les enfants, les collations et les boites a lunch. Pur jus de mil sans sucre ajoute, sans conservateur.",
    price: 450,
    category: 'Jus 25cl',
    stock: 100,
    images: [IMG.milNature3, IMG.milNature1],
    created_at: '2025-01-10T08:00:00Z',
  },
  {
    id: 9,
    name: 'SEN Jus Mil Gingembre 25cl',
    description: "Mini-brique de jus de mil au gingembre. Parfaite pour les petites soifs des enfants tout en leur apportant les bienfaits du mil et du gingembre naturel. Format pratique et economique.",
    price: 500,
    category: 'Jus 25cl',
    stock: 80,
    images: [IMG.gingembre3, IMG.gingembre2],
    created_at: '2025-01-10T08:00:00Z',
  },
  {
    id: 10,
    name: 'SEN Jus Mil Fraise 25cl',
    description: "Le coup de coeur des enfants ! Jus de mil naturellement sucre avec des fraises fraiches. Une boisson gourmande sans additif, parfaite pour les petites briques du gouter.",
    price: 550,
    category: 'Jus 25cl',
    stock: 3,
    images: [IMG.fraise1, IMG.fraise2],
    created_at: '2025-01-20T09:30:00Z',
  },

  // --- Packs ---
  {
    id: 11,
    name: 'Pack Decouverte SEN Jus (6 x 25cl)',
    description: "Decouvrez toute la gamme SEN Jus en un seul pack ! 6 briques 25cl variees : 2 Naturel, 2 Gingembre, 1 Fraise, 1 Menthe. Le cadeau ideal ou le pack parfait pour tester nos saveurs.",
    price: 2500,
    category: 'Packs',
    stock: 20,
    images: [IMG.pack1, IMG.pack2, IMG.pack3],
    created_at: '2025-01-22T10:00:00Z',
  },
  {
    id: 12,
    name: 'Pack Famille SEN Jus (4 x 1L)',
    description: "Le grand pack economique pour toute la famille ! 4 bouteilles d'1L : 1 Naturel, 1 Gingembre, 1 Bissap, 1 Vanille. Economisez 10% par rapport a l'achat separe. Livraison gratuite a Dakar.",
    price: 5500,
    category: 'Packs',
    stock: 15,
    images: [IMG.pack2, IMG.pack1, IMG.pack3],
    created_at: '2025-01-22T10:00:00Z',
  },
]

export const mockOrders: Order[] = [
  {
    id: 1,
    client_name: 'Aminata Diallo',
    client_email: 'aminata.diallo@gmail.com',
    client_phone: '+221 77 123 45 67',
    address: 'Cite Keur Gorgui, Dakar',
    items: [
      { product_id: 1, product_name: 'SEN Jus Mil Naturel 1L', quantity: 2, price: 1500 },
      { product_id: 11, product_name: 'Pack Decouverte SEN Jus (6 x 25cl)', quantity: 1, price: 2500 },
    ],
    total: 5500,
    status: 'en_attente',
    payment_method: 'wave',
    created_at: '2025-03-20T10:30:00Z',
  },
  {
    id: 2,
    client_name: 'Moussa Ndiaye',
    client_email: 'moussa.ndiaye@outlook.com',
    client_phone: '+221 76 234 56 78',
    address: 'Parcelles Assainies Unite 17, Dakar',
    items: [
      { product_id: 12, product_name: 'Pack Famille SEN Jus (4 x 1L)', quantity: 1, price: 5500 },
    ],
    total: 5500,
    status: 'validee',
    payment_method: 'orange_money',
    created_at: '2025-03-18T14:15:00Z',
  },
  {
    id: 3,
    client_name: 'Fatou Sarr',
    client_email: 'fatou.sarr@yahoo.fr',
    client_phone: '+221 78 345 67 89',
    address: 'Plateau, Rue Victor Hugo, Dakar',
    items: [
      { product_id: 2, product_name: 'SEN Jus Mil Gingembre 1L', quantity: 3, price: 1700 },
      { product_id: 5, product_name: 'SEN Jus Mil Naturel 50cl', quantity: 4, price: 800 },
    ],
    total: 8300,
    status: 'en_cours',
    payment_method: 'wave',
    created_at: '2025-03-19T09:45:00Z',
  },
  {
    id: 4,
    client_name: 'Oumar Ba',
    client_email: 'oumar.ba@gmail.com',
    client_phone: '+221 70 456 78 90',
    address: 'Medina, Avenue Blaise Diagne, Dakar',
    items: [
      { product_id: 8, product_name: 'SEN Jus Mil Naturel 25cl', quantity: 6, price: 450 },
      { product_id: 9, product_name: 'SEN Jus Mil Gingembre 25cl', quantity: 6, price: 500 },
    ],
    total: 5700,
    status: 'livree',
    payment_method: 'orange_money',
    created_at: '2025-03-15T16:00:00Z',
  },
  {
    id: 5,
    client_name: 'Rokhaya Mbaye',
    client_email: 'rokhaya.mbaye@gmail.com',
    client_phone: '+221 77 567 89 01',
    address: 'Mermoz, Rue 10, Dakar',
    items: [
      { product_id: 3, product_name: 'SEN Jus Mil Bissap 1L', quantity: 2, price: 1800 },
    ],
    total: 3600,
    status: 'rejetee',
    payment_method: 'wave',
    created_at: '2025-03-14T11:20:00Z',
  },
  {
    id: 6,
    client_name: 'Ibrahim Sow',
    client_email: 'ibrahim.sow@hotmail.com',
    client_phone: '+221 76 678 90 12',
    address: 'Grand Yoff, Villa 45, Dakar',
    items: [
      { product_id: 4, product_name: 'SEN Jus Mil Vanille 1L', quantity: 2, price: 1600 },
      { product_id: 6, product_name: 'SEN Jus Mil Gingembre 50cl', quantity: 3, price: 900 },
    ],
    total: 5900,
    status: 'en_attente',
    payment_method: 'orange_money',
    created_at: '2025-03-21T08:00:00Z',
  },
  {
    id: 7,
    client_name: 'Mariama Diop',
    client_email: 'mariama.diop@gmail.com',
    client_phone: '+221 78 789 01 23',
    address: 'Sacre Coeur 3, Villa 12, Dakar',
    items: [
      { product_id: 12, product_name: 'Pack Famille SEN Jus (4 x 1L)', quantity: 2, price: 5500 },
      { product_id: 11, product_name: 'Pack Decouverte SEN Jus (6 x 25cl)', quantity: 1, price: 2500 },
    ],
    total: 13500,
    status: 'en_attente',
    payment_method: 'wave',
    created_at: '2025-03-22T13:30:00Z',
  },
  {
    id: 8,
    client_name: 'Cheikh Gueye',
    client_email: 'cheikh.gueye@gmail.com',
    client_phone: '+221 77 890 12 34',
    address: 'Fann Residence, Dakar',
    items: [
      { product_id: 10, product_name: 'SEN Jus Mil Fraise 25cl', quantity: 5, price: 550 },
      { product_id: 5, product_name: 'SEN Jus Mil Naturel 50cl', quantity: 2, price: 800 },
    ],
    total: 4350,
    status: 'validee',
    payment_method: 'orange_money',
    created_at: '2025-03-17T15:45:00Z',
  },
]

export const mockCategories: Category[] = [
  { id: 1, name: 'Jus 1L' },
  { id: 2, name: 'Jus 50cl' },
  { id: 3, name: 'Jus 25cl' },
  { id: 4, name: 'Packs' },
]

export const mockStats: Stats = {
  total_products: mockProducts.length,
  total_orders: mockOrders.length,
  total_revenue: mockOrders.reduce((sum, o) => sum + o.total, 0),
  total_clients: new Set(mockOrders.map(o => o.client_email)).size,
  pending_orders: mockOrders.filter(o => o.status === 'en_attente').length,
}
