"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/CartContext"
import { Plus, ChevronDown, ChevronUp } from "lucide-react"

type CustomizableOption = {
  id: number
  name: string
  price: number
}

type MenuItem = {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
  spicyLevel: number
  options?: CustomizableOption[]
}

type MenuCardProps = {
  item: MenuItem
  customizable?: boolean
}

export function MenuCard({ item, customizable = false }: MenuCardProps) {
  const { addToCart } = useCart()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<CustomizableOption | null>(
    item.options && item.options.length > 0 ? item.options[0] : null,
  )
  const cardRef = useRef<HTMLDivElement>(null)

  const handleAddToCart = () => {
    if (customizable && selectedOption) {
      addToCart({
        id: item.id * 100 + selectedOption.id, // Create a unique ID for each option
        name: `${item.name} (${selectedOption.name})`,
        price: selectedOption.price,
      })
    } else {
      addToCart(item)
    }

    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 2000)
  }

  const toggleOptions = () => {
    if (customizable) {
      setIsOptionsOpen(!isOptionsOpen)
    }
  }

  const selectOption = (option: CustomizableOption) => {
    setSelectedOption(option)
    setIsOptionsOpen(false)
  }

  return (
    <motion.div
      className="relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      ref={cardRef}
    >
      {/* Food Image Section */}
      <div className="relative h-0 pb-[70%]">
        <motion.div
          className="absolute inset-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover transform hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Category Badge */}
        <div
          className={`absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-sm font-semibold shadow-md
          ${item.category === "Veg" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
        >
          {item.category}
        </div>

        {/* Spicy Level Indicator */}
        {item.spicyLevel > 0 && (
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
            {Array.from({ length: item.spicyLevel }).map((_, i) => (
              <motion.div
                key={i}
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
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-black">{item.name}</h3>
          <span className="text-xl font-bold text-accent">
            ${customizable && selectedOption ? selectedOption.price.toFixed(2) : item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-1">{item.description}</p>

        {/* Options Dropdown for customizable items */}
        {customizable && item.options && (
          <div className="mb-4">
            <div
              className="border border-gray-300 rounded-md p-3 flex justify-between items-center cursor-pointer"
              onClick={toggleOptions}
            >
              <span>{selectedOption?.name || "Select option"}</span>
              {isOptionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            <AnimatePresence>
              {isOptionsOpen && (
                <motion.div
                  className="border border-gray-300 border-t-0 rounded-b-md overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.options.map((option) => (
                    <div
                      key={option.id}
                      className={`p-3 cursor-pointer hover:bg-gray-100 ${selectedOption?.id === option.id ? "bg-primary/20" : ""}`}
                      onClick={() => selectOption(option)}
                    >
                      <div className="flex justify-between">
                        <span>{option.name}</span>
                        <span>${option.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary text-black hover:bg-accent transition-colors duration-200 mt-auto"
          size="sm"
        >
          Add to Cart
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Add to Cart Animation - Centered on card */}
      <AnimatePresence>
        {showConfirmation && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="bg-black/80 text-white px-6 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap z-50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center">
                <motion.div
                  className="w-8 h-8 relative flex items-center justify-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    times: [0, 0.2, 0.8, 1],
                  }}
                >
                  <Image
                    src="/assets/images/truck.png"
                    alt="Food Truck"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </motion.div>
                <span className="ml-2">Added to Cart!</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

