"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, ArrowLeft, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"

export default function AdminLoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const success = await login(username, password)
    
    if (success) {
      router.push("/admin")
    } else {
      setError("Identifiants incorrects")
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Decorative */}
      <div className="fixed top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="fixed bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="w-full max-w-sm relative">
        {/* Back link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au site
        </Link>

        {/* Login Card */}
        <div className="bg-card rounded-sm shadow-lg border border-border p-6 sm:p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-sm bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-2xl">S</span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground">
              <span>SEN</span>
              <span className="text-primary italic"> Jus</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Connectez-vous a votre espace
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error */}
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-sm text-center">
                {error}
              </div>
            )}

            {/* Username */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Nom d&apos;utilisateur
              </label>
              <Input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="h-12 rounded-sm bg-muted/50 border-border"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Mot de passe
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="h-12 rounded-sm bg-muted/50 border-border pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              className="w-full h-12 rounded-sm text-base" 
              disabled={isLoading}
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              <span className="font-medium text-foreground">Demo:</span> admin / admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          <Leaf className="inline w-3 h-3 mr-1" />
          SEN Jus - Jus de Mil Naturel
        </p>
      </div>
    </div>
  )
}
