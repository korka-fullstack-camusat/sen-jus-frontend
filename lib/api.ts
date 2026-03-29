import type { Product, ProductCreate, Order, OrderCreate, Category, Stats, AdminLogin, AdminResponse } from './types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com'

// Helper function for API calls
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
  
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`)
  }
  
  return res.json()
}

// Products API
export const productsAPI = {
  getAll: (params?: { category?: string; sous_category?: string; search?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.append('category', params.category)
    if (params?.sous_category) searchParams.append('sous_category', params.sous_category)
    if (params?.search) searchParams.append('search', params.search)
    const query = searchParams.toString()
    return fetchAPI<Product[]>(`/api/products/${query ? `?${query}` : ''}`)
  },
  
  getById: (id: number) => fetchAPI<Product>(`/api/products/${id}`),
  
  create: (product: ProductCreate) => 
    fetchAPI<Product>('/api/products/', {
      method: 'POST',
      body: JSON.stringify(product),
    }),
  
  update: (id: number, product: Partial<ProductCreate>) =>
    fetchAPI<Product>(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    }),
  
  delete: (id: number) =>
    fetchAPI<void>(`/api/products/${id}`, {
      method: 'DELETE',
    }),
}

// Orders API
export const ordersAPI = {
  getAll: () => fetchAPI<Order[]>('/api/orders/'),
  
  getById: (id: number) => fetchAPI<Order>(`/api/orders/${id}`),
  
  create: (order: OrderCreate) =>
    fetchAPI<Order>('/api/orders/', {
      method: 'POST',
      body: JSON.stringify(order),
    }),
  
  update: (id: number, order: Partial<Order>) =>
    fetchAPI<Order>(`/api/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(order),
    }),
  
  delete: (id: number) =>
    fetchAPI<void>(`/api/orders/${id}`, {
      method: 'DELETE',
    }),
}

// Categories API
export const categoriesAPI = {
  getAll: () => fetchAPI<Category[]>('/api/categories/'),
}

// Stats API
export const statsAPI = {
  get: () => fetchAPI<Stats>('/api/stats/'),
}

// Admin API
export const adminAPI = {
  login: (credentials: AdminLogin) =>
    fetchAPI<AdminResponse>('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
}
