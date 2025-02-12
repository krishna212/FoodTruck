"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/CartContext"
import { Plus } from "lucide-react"

type MenuItem = {
  id: number
  name: string
  price: number
  description: string
  image?: string
  category: string
  spicyLevel: number
}

export function MenuCard({ item }: { item: MenuItem }) {
  const { addToCart } = useCart()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleAddToCart = () => {
    addToCart(item)
    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 2000)
  }

  return (
    <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain p-4" />
          {/* Spicy Level Indicator */}
          {item.spicyLevel > 0 && (
            <div className="absolute top-2 right-2 flex items-center gap-1">
              {Array.from({ length: item.spicyLevel }).map((_, i) => (
                <motion.div
                  key={i}
                  className="text-red-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: i * 0.1,
                  }}
                >
                  🌶️
                </motion.div>
              ))}
            </div>
          )}
          {/* Steam Animation */}
          <AnimatePresence>
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute top-1/4 left-1/2 w-1 h-8 bg-white rounded-full"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.5, 0], y: -50 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.6,
                }}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-black">{item.name}</h3>
              <p className="text-sm text-primary font-medium">{item.category}</p>
            </div>
            <span className="text-xl font-bold text-accent">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary text-black hover:bg-accent transition-colors duration-200 relative overflow-hidden"
            size="sm"
          >
            Add to Cart
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Animation */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black/80 text-white px-6 py-3 rounded-lg flex items-center gap-3"
              initial={{ scale: 0.8, y: 20, x: -100 }}
              animate={{ scale: 1, y: 0, x: 0 }}
              exit={{ scale: 0.8, y: 20, x: -100 }}
            >
              <motion.div
                className="w-8 h-8 relative"
                animate={{
                  x: [-100, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.5,
                  times: [0, 0.2, 0.8, 1],
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-dQdyhSD175KJmcJ3JurFJYO7Lwvv1H.png"
                  alt="Food Truck"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </motion.div>
              <span className="whitespace-nowrap">Added to Cart!</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

