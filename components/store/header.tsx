"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ShoppingBag, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

export function Header() {
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span 
              className={cn(
                "font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              <span>SEN</span>
              <span className={cn(
                "italic transition-colors duration-300",
                scrolled ? "text-primary" : "text-primary"
              )}> Jus</span>
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
                className={cn(
                  "text-xs lg:text-sm font-medium uppercase tracking-wider transition-colors",
                  scrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                )}
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
                className={cn(
                  "uppercase tracking-wider text-xs font-medium transition-colors h-9",
                  scrolled 
                    ? "text-foreground hover:bg-muted hover:text-primary" 
                    : "text-white hover:bg-white/10"
                )}
              >
                <User className="h-4 w-4 mr-1.5" />
                <span className="hidden lg:inline">Se Connecter</span>
              </Button>
            </Link>

            <Link href="/panier">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "relative transition-colors h-9 w-9 sm:h-10 sm:w-10",
                  scrolled ? "text-foreground hover:bg-muted hover:text-primary" : "text-white hover:bg-white/10"
                )}
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
              className={cn(
                "md:hidden transition-colors h-9 w-9",
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              )}
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
