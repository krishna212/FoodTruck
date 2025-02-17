"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="fixed w-full z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-0AC5bCbYsXdIhFydJqQKBuVECUOVPj.png"
                alt="Fast Fusion"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-black">Fast Fusion</span>
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
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden pt-4 pb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
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
          </motion.div>
        )}
      </div>
    </header>
  )
}

