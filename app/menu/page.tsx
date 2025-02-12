"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MenuCard } from "../components/MenuCard"

const MENU_ITEMS = {
  biryani_bowl: [
    {
      id: 1,
      name: "Chicken 65 Biryani",
      price: 15.99,
      description: "Spicy chicken 65 with aromatic biryani rice",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chicken65-OIxKNVPUXjC9fK82mjFW0P9fKrM1NR.png",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 2,
      name: "Mutton Biryani",
      price: 17.99,
      description: "Tender mutton pieces with fragrant biryani rice",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biryani-0FCxR2ntJuNS5jpJtRqqskGltChsu7.png",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 15.99,
      description: "Classic chicken biryani with aromatic spices",
      image: "/placeholder.png", // Placeholder image
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 4,
      name: "Veg Pulao",
      price: 12.99,
      description: "Fragrant rice cooked with mixed vegetables",
      image: "/placeholder.png", // Placeholder image
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 5,
      name: "Crispy Cauliflower Biryani",
      price: 13.99,
      description: "Crispy cauliflower florets with biryani rice",
      image: "/placeholder.png", // Placeholder image
      category: "Veg",
      spicyLevel: 1,
    },
  ],
  starters: [
    {
      id: 6,
      name: "Chicken Puffs",
      price: 6.99,
      description: "Flaky pastry filled with spiced chicken",
      image: "/placeholder.png", // Placeholder image
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 7,
      name: "Veggie Puffs",
      price: 5.99,
      description: "Crispy pastry with seasoned vegetables",
      image: "/placeholder.png", // Placeholder image
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 8,
      name: "Masala Vada",
      price: 6.99,
      description: "Indian-style falafel made with lentils and spices",
      image: "/placeholder.png", // Placeholder image
      category: "Veg",
      spicyLevel: 2,
    },
  ],
  chinese: [
    {
      id: 9,
      name: "Garlic Scallion Fried Rice with Ginger Garlic Chicken",
      price: 14.99,
      description: "Fragrant fried rice with tender ginger garlic chicken",
      image: "/placeholder.png", // Placeholder image
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 10,
      name: "Kung Pao Chicken",
      price: 15.99,
      description: "Spicy stir-fried chicken with peanuts and vegetables",
      image: "/placeholder.png", // Placeholder image
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 11,
      name: "Garlic Scallion Fried Rice with Pepper Mushroom",
      price: 13.99,
      description: "Aromatic fried rice with savory pepper mushrooms",
      image: "/placeholder.png", // Placeholder image
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 12,
      name: "Kung Pao Cauliflower",
      price: 13.99,
      description: "Spicy stir-fried cauliflower in Kung Pao sauce",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gobi-Ei4xhOpmwSMn7kNE4WbdsMLr74W0v5.png",
      category: "Veg",
      spicyLevel: 2,
    },
  ],
  korean_japanese: [
    {
      id: 13,
      name: "Boiling Shrimp",
      price: 16.99,
      description: "Spicy boiled shrimp in our signature sauce",
      image: "/placeholder.png", // Placeholder image
      category: "Non-veg",
      spicyLevel: 3,
    },
    {
      id: 14,
      name: "Spicy Beef Brisket Soup",
      price: 15.99,
      description: "Rich and hearty Korean-style beef soup",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beef-EsM2Bs7x7Ijz5deQzXhwEcXovejyNP.png",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 15,
      name: "Tteokbokki",
      price: 12.99,
      description: "Spicy rice cakes in a sweet and spicy gochujang sauce",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tekbotti-jp3rwgyi0hZQdZ8AR5zPwjhauq4OW6.png",
      category: "Veg",
      spicyLevel: 3,
    },
    {
      id: 16,
      name: "Fusion Ramen",
      price: 14.99,
      description: "Japanese-style noodles in a rich, flavorful broth",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ramen-MSR0tfF6wk8I31nqETsfUmu3CVoAdA.png",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 17,
      name: "Spicy Stir-Fried Chicken",
      price: 15.99,
      description: "Tender chicken stir-fried with fresh vegetables in our special sauce",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spicychicken-qkOogwmmbUcjxajnfFbcBYhtiLmow8.png",
      category: "Non-veg",
      spicyLevel: 2,
    },
  ],
  sides: [
    {
      id: 18,
      name: "Bread Pudding",
      price: 5.99,
      description: "Sweet and creamy dessert with Asian fusion twist",
      image: "/placeholder.png", // Placeholder image
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 19,
      name: "Cucumber Salad",
      price: 4.99,
      description: "Fresh cucumber with Asian-style dressing",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cucumber-cJWXcL2eSH87r8uEzPn80IKnemR2Ra.png",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }))

      const currentSection = sections.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom > 150
      })

      if (currentSection) {
        setActiveCategory(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      const offset = 100 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const categories = [
    { id: "biryani_bowl", name: "Biryani Bowl", icon: "🍚" },
    { id: "starters", name: "Starters", icon: "🥟" },
    { id: "chinese", name: "Chinese", icon: "🥢" },
    { id: "korean_japanese", name: "Korean & Japanese", icon: "🍜" },
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our fusion of Korean, Japanese, Chinese, and Indian flavors
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-lg py-4">
          <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-black"
                      : "bg-white hover:bg-primary/20 text-gray-700"
                  }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

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
                <motion.span
                  className="text-4xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  {category.icon}
                </motion.span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}

