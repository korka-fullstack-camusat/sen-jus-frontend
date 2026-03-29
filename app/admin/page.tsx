"use client"

import Link from "next/link"
import { Package, ShoppingCart, TrendingUp, Users, AlertCircle, ArrowRight, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockStats, mockOrders } from "@/lib/mock-data"

export default function AdminDashboardPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-SN").format(price)
  }

  const pendingOrders = mockOrders.filter(o => o.status === "en_attente" || o.status === "en_cours")

  const stats = [
    {
      label: "Total Produits",
      value: mockStats.total_products.toString(),
      icon: Package,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Commandes",
      value: mockStats.total_orders.toString(),
      icon: ShoppingCart,
      color: "bg-accent/10 text-accent",
    },
    {
      label: "Revenus",
      value: formatPrice(mockStats.total_revenue),
      suffix: "FCFA",
      icon: TrendingUp,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Clients",
      value: mockStats.total_clients.toString(),
      icon: Users,
      color: "bg-accent/10 text-accent",
    },
  ]

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      en_attente: "bg-amber-100 text-amber-700",
      en_cours: "bg-blue-100 text-blue-700",
      validee: "bg-green-100 text-green-700",
      rejetee: "bg-red-100 text-red-700",
    }
    const labels: Record<string, string> = {
      en_attente: "En attente",
      en_cours: "En cours",
      validee: "Validee",
      rejetee: "Rejetee",
    }
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-muted text-muted-foreground"}`}>
        {labels[status] || status}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
          Tableau de bord
        </h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
          Bienvenue dans votre espace administrateur
        </p>
      </div>

      {/* Pending Orders Alert */}
      {pendingOrders.length > 0 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-start sm:items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {pendingOrders.length} commande{pendingOrders.length > 1 ? "s" : ""} en attente
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Ces commandes necessitent votre attention
                  </p>
                </div>
              </div>
              <Link href="/admin/commandes">
                <Button size="sm" className="rounded-full w-full sm:w-auto">
                  Voir les commandes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-1 truncate">
                    {stat.value}
                  </p>
                  {stat.suffix && (
                    <p className="text-xs text-muted-foreground">{stat.suffix}</p>
                  )}
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${stat.color} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="font-serif text-lg sm:text-xl">
            Commandes recentes
          </CardTitle>
          <Link href="/admin/commandes">
            <Button variant="ghost" size="sm" className="text-primary">
              Voir tout
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {mockOrders.length > 0 ? (
            <div className="space-y-3">
              {mockOrders.slice(0, 5).map(order => (
                <div 
                  key={order.id} 
                  className="flex items-center justify-between py-3 px-3 sm:px-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium text-foreground text-sm sm:text-base">
                        #{order.id}
                      </p>
                      {getStatusBadge(order.status)}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 truncate">
                      {order.client_name}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-bold text-primary text-sm sm:text-base">
                      {formatPrice(order.total)} FCFA
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.created_at}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
              <p className="text-muted-foreground">Aucune commande pour le moment</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
