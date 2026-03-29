"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingBag, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export function Header() {
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground">
              <span>SEN</span>
              <span className="italic text-primary"> Jus</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { href: "/", label: "Accueil" },
              { href: "/produits", label: "Produits" },
              { href: "/a-propos", label: "A Propos" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/admin/login" className="hidden sm:block">
              <Button
                variant="ghost"
                size="sm"
                className="uppercase tracking-wider text-xs font-medium text-foreground hover:bg-muted hover:text-primary h-9"
              >
                <User className="h-4 w-4 mr-1.5" />
                <span className="hidden lg:inline">Se Connecter</span>
              </Button>
            </Link>

            <Link href="/panier">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground hover:bg-muted hover:text-primary h-9 w-9 sm:h-10 sm:w-10"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-muted h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {[
              { href: "/", label: "Accueil" },
              { href: "/produits", label: "Produits" },
              { href: "/a-propos", label: "A Propos" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-sm transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link
              href="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-primary hover:bg-primary/5 rounded-sm transition-colors flex items-center gap-2 uppercase tracking-wider"
            >
              <User className="h-4 w-4" />
              Se Connecter
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
