"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/CartContext"
import { Plus, Sparkles } from "lucide-react"

type MenuItem = {
  id: number
  name: string
  price: number
  description: string
  image: string
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

  // Spice level indicators with emojis and colors
  const spiceLevelEmojis = {
    1: "🌶️",
    2: "🔥",
    3: "💥",
  }

  return (
    <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Spicy Level Indicator */}
          {item.spicyLevel > 0 && (
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {Array.from({ length: item.spicyLevel }).map((_, i) => (
                <motion.span
                  key={i}
                  className="text-xl"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                >
                  {spiceLevelEmojis[item.spicyLevel as keyof typeof spiceLevelEmojis]}
                </motion.span>
              ))}
            </div>
          )}
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

          {/* Always visible Add to Cart button */}
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{ duration: 0.7 }}
              >
                <Sparkles className="h-12 w-12 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

