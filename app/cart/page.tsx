"use client"

import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
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
            <div key={item.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <div>
                <h3 className="font-bold text-black">{item.name}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-primary">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <div className="text-2xl font-bold text-black">Total: ${total.toFixed(2)}</div>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </div>
    </div>
  )
}

