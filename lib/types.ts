// Product types
export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  sous_category?: string
  stock: number
  images: string[]
  created_at: string
}

export interface ProductCreate {
  name: string
  description: string
  price: number
  category: string
  sous_category?: string
  stock: number
  images: string[]
}

// Payment types
export type PaymentMethod = 'wave' | 'orange_money'

// Order types
export interface OrderItem {
  product_id: number
  quantity: number
  price: number
  product_name?: string
}

export interface Order {
  id: number
  client_name: string
  client_email: string
  client_phone: string
  items: OrderItem[]
  total: number
  status: 'en_attente' | 'en_cours' | 'validee' | 'rejetee' | 'livree'
  created_at: string
  address?: string
  payment_method?: PaymentMethod
}

export interface OrderCreate {
  client_name: string
  client_email: string
  client_phone: string
  items: OrderItem[]
  total: number
  address?: string
  payment_method: PaymentMethod
}

// Category types
export interface Category {
  id: number
  name: string
  sous_categories?: string[]
}

// Stats types
export interface Stats {
  total_products: number
  total_orders: number
  total_revenue: number
  total_clients: number
  pending_orders: number
}

// Cart types
export interface CartItem {
  product: Product
  quantity: number
}

// Admin types
export interface AdminLogin {
  username: string
  password: string
}

export interface AdminResponse {
  success: boolean
  token?: string
  message?: string
}
