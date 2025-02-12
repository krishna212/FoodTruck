"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { MenuCard } from "../components/MenuCard"

const MENU_ITEMS = {
  korean_japanese: [
    {
      id: 1,
      name: "Spicy Beef Brisket Soup",
      price: 14.99,
      description: "Rich and hearty Korean-style soup with tender beef brisket",
      image: "/placeholder.svg?height=300&width=400",
      category: "Korean",
      spicyLevel: 2,
    },
    {
      id: 2,
      name: "Tteokbokki (떡볶이)",
      price: 12.99,
      description: "Spicy rice cakes in a sweet and spicy gochujang sauce",
      image: "/placeholder.svg?height=300&width=400",
      category: "Korean",
      spicyLevel: 3,
    },
    {
      id: 3,
      name: "Fusion Ramen",
      price: 13.99,
      description: "Japanese-style noodles in a rich, flavorful broth",
      image: "/placeholder.svg?height=300&width=400",
      category: "Japanese",
      spicyLevel: 1,
    },
    {
      id: 4,
      name: "Spicy Stir-Fried Chicken",
      price: 15.99,
      description: "Tender chicken stir-fried with fresh vegetables in our special sauce",
      image: "/placeholder.svg?height=300&width=400",
      category: "Korean",
      spicyLevel: 3,
    },
  ],
  biryani: [
    {
      id: 5,
      name: "Chicken Biryani",
      price: 15.99,
      description: "Aromatic rice cooked with tender chicken and special spices",
      image: "/placeholder.svg?height=300&width=400",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 6,
      name: "Mutton Biryani",
      price: 17.99,
      description: "Traditional biryani with tender mutton pieces",
      image: "/placeholder.svg?height=300&width=400",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 7,
      name: "Veg Pulao",
      price: 12.99,
      description: "Fragrant rice cooked with mixed vegetables",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 1,
    },
  ],
  starters: [
    {
      id: 8,
      name: "Chicken Puffs",
      price: 6.99,
      description: "Flaky pastry filled with spiced chicken",
      image: "/placeholder.svg?height=300&width=400",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 9,
      name: "Veggie Puffs",
      price: 5.99,
      description: "Crispy pastry with seasoned vegetables",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 10,
      name: "Masala Vada",
      price: 6.99,
      description: "Indian-style falafel made with lentils and spices",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 2,
    },
  ],
  chinese: [
    {
      id: 11,
      name: "Kung Pao Chicken",
      price: 14.99,
      description: "Stir-fried chicken with peanuts in spicy sauce",
      image: "/placeholder.svg?height=300&width=400",
      category: "Non-veg",
      spicyLevel: 3,
    },
    {
      id: 12,
      name: "Garlic Scallion Fried Rice",
      price: 11.99,
      description: "Fragrant rice with garlic and fresh scallions",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 13,
      name: "Kung Pao Cauliflower",
      price: 12.99,
      description: "Crispy cauliflower in spicy Kung Pao sauce",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 3,
    },
  ],
  sides: [
    {
      id: 14,
      name: "Cucumber Salad",
      price: 4.99,
      description: "Fresh cucumber with Asian-style dressing",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 15,
      name: "Bread Pudding",
      price: 5.99,
      description: "Sweet and creamy dessert with Asian fusion twist",
      image: "/placeholder.svg?height=300&width=400",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const categories = [
    { id: "korean_japanese", name: "Korean & Japanese", icon: "🍜" },
    { id: "biryani", name: "Biryani Bowl", icon: "🍚" },
    { id: "starters", name: "Starters", icon: "🥟" },
    { id: "chinese", name: "Chinese", icon: "🥢" },
    { id: "sides", name: "Sides & Desserts", icon: "🥗" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our fusion of Korean, Japanese, and Asian flavors</p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className={`sticky top-20 z-30 py-4 bg-background/80 backdrop-blur-lg ${isScrolled ? "shadow-lg" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  document.getElementById(category.id)?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300
                  ${
                    selectedCategory === category.id
                      ? "bg-primary text-black"
                      : "bg-white hover:bg-primary/20 text-gray-700"
                  }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Sections */}
        <div className="space-y-16 mt-8">
          {categories.map((category, index) => (
            <motion.section
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-black">{category.name}</h2>
                <div className="flex-1 border-b border-gray-200"></div>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              >
                {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-4 bg-primary rounded-full shadow-lg text-black"
        >
          <ChevronDown className="h-6 w-6 transform rotate-180" />
        </motion.button>
      </div>
    </div>
  )
}

