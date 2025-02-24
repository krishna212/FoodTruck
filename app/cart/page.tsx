"use client"

import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { Trash2, Minus, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      // Simulate a checkout process
      await new Promise((resolve) => setTimeout(resolve, 2000))
      clearCart()
      window.scrollTo(0, 0) // Scroll to top before navigation
      router.push("/order-confirmation")
    } catch (error) {
      console.error("Error processing order:", error)
      alert("There was an error processing your order. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(itemId)
      return
    }
    updateQuantity(itemId, newQuantity)
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>
          <p className="text-gray-600">Your cart is empty.</p>
          <Button
            className="mt-8 bg-primary text-black hover:bg-accent"
            onClick={() => {
              window.scrollTo(0, 0)
              router.push("/menu")
            }}
          >
            Browse Menu
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm gap-4"
            >
              <div className="flex-grow">
                <h3 className="font-bold text-black">{item.name}</h3>
                <p className="text-primary text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Quantity Controls */}
                <div className="flex items-center bg-muted rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 hover:bg-primary/20"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 text-center font-medium">{item.quantity}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 hover:bg-primary/20"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="destructive" size="icon" className="shrink-0" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div layout className="mt-8 space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-black font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="text-black font-medium">$0.00</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-black">Total</span>
              <span className="text-2xl font-bold text-black">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full sm:w-auto bg-primary text-black hover:bg-accent transition-colors duration-200"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={clearCart}
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black transition-colors duration-200"
            >
              Clear Cart
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

