"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Settings, 
  LogOut,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/produits", label: "Produits", icon: Package },
  { href: "/admin/commandes", label: "Commandes", icon: ShoppingCart },
  { href: "/admin/parametres", label: "Parametres", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-lg">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-foreground leading-tight">
              <span>SEN</span>
              <span className="text-primary italic"> Jus</span>
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight">Administration</span>
          </div>
        </Link>
      </div>

      {/* Back to site */}
      <div className="px-3 py-3">
        <Link href="/">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-primary hover:text-primary hover:bg-primary/5 rounded-sm" 
            size="sm"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Retour au site
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        {navItems.map(item => {
          const isActive = pathname === item.href || 
            (item.href !== "/admin" && pathname.startsWith(item.href))
          
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start rounded-sm h-11 transition-all",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium hover:bg-primary/15"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <item.icon className={cn("h-5 w-5 mr-3", isActive && "text-primary")} />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* User & Logout */}
      <div className="p-4 border-t border-border">
        <div className="bg-muted/50 rounded-sm p-3 mb-3">
          <p className="text-xs text-muted-foreground">Connecte en tant que</p>
          <p className="font-medium text-foreground text-sm truncate">admin@senjus.sn</p>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 rounded-sm"
          onClick={logout}
        >
          <LogOut className="h-4 w-4 mr-3" />
          Deconnexion
        </Button>
      </div>
    </aside>
  )
}
