"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { MiniTruck } from "./MiniTruck"

export default function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="fixed w-full z-50 bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-primary transition-colors flex items-center"
          >
            <MiniTruck />
            Asian Fusion
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/cart">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-2 border-primary bg-white text-black hover:bg-primary hover:text-black transition-colors duration-200"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Cart ({totalItems})</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 w-full border-2 border-primary bg-white text-black hover:bg-primary hover:text-black transition-colors duration-200"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart ({totalItems})</span>
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

