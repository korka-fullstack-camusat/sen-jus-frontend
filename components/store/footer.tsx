import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile: Simple stacked layout */}
        <div className="sm:hidden">
          {/* Brand */}
          <div className="text-center mb-6">
            <span className="font-serif text-xl font-bold tracking-tight">
              <span>SEN</span>
              <span className="text-primary italic"> Jus</span>
            </span>
            <p className="text-background/60 text-[10px] uppercase tracking-widest mt-1">
              Jus de Mil Naturel
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6 mb-6 text-xs">
            <Link href="/" className="text-background/70 hover:text-background">Accueil</Link>
            <Link href="/produits" className="text-background/70 hover:text-background">Produits</Link>
            <Link href="/a-propos" className="text-background/70 hover:text-background">A Propos</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 text-xs text-background/70 mb-6">
            <a href="tel:+221771234567" className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              +221 77 123 45 67
            </a>
            <a href="mailto:contact@senjus.sn" className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              contact@senjus.sn
            </a>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-3">
            <a href="#" className="w-8 h-8 border border-background/20 flex items-center justify-center">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 border border-background/20 flex items-center justify-center">
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-bold tracking-tight">
              <span>SEN</span>
              <span className="text-primary italic"> Jus</span>
            </span>
            <p className="text-background/60 text-xs uppercase tracking-widest mt-1">
              Jus de Mil Naturel
            </p>
            <p className="text-background/70 text-sm leading-relaxed mt-4">
              La boisson traditionnelle senegalaise, 100% naturelle.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-background/70 hover:text-background text-sm">Accueil</Link></li>
              <li><Link href="/produits" className="text-background/70 hover:text-background text-sm">Produits</Link></li>
              <li><Link href="/a-propos" className="text-background/70 hover:text-background text-sm">A Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+221771234567" className="flex items-center gap-2 text-background/70 hover:text-background text-sm">
                  <Phone className="h-4 w-4" />
                  +221 77 201 23 44
                </a>
              </li>
              <li>
                <a href="mailto:contact@senjus.sn" className="flex items-center gap-2 text-background/70 hover:text-background text-sm">
                  <Mail className="h-4 w-4" />
                  contact@senjus.sn
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4" />
                Dakar, Senegal
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4">Suivez-nous</h3>
            <div className="flex gap-2">
              <a href="#" className="w-10 h-10 border border-background/20 hover:bg-background/10 flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-background/20 hover:bg-background/10 flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-6 sm:mt-10 pt-4 sm:pt-6 text-center text-background/50 text-[10px] sm:text-xs uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} SEN Jus. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  )
}
