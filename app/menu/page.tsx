"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MenuCard } from "../components/MenuCard"

// Create a public/images directory for the food images
const MENU_ITEMS = {
  indian: [
    {
      id: 1,
      name: "Chicken 65",
      price: 15.99,
      description: "Spicy, deep-fried chicken marinated in flavorful spices",
      image: "/assets/images/chicken-65.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 2,
      name: "Mutton Biryani",
      price: 17.99,
      description: "Tender mutton pieces with fragrant biryani rice",
      image: "/assets/images/mutton-biryani.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 15.99,
      description: "Classic chicken biryani with aromatic spices",
      image: "/placeholder.svg?height=300&width=300",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 4,
      name: "Veg Pulao",
      price: 12.99,
      description: "Fragrant rice cooked with mixed vegetables",
      image: "/assets/images/vegpulao.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 5,
      name: "Crispy Cauliflower Biryani",
      price: 13.99,
      description: "Crispy cauliflower florets with biryani rice",
      image: "/assets/images/crispy-cauliflower.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 8,
      name: "Masala Vada",
      price: 6.99,
      description: "Indian-style falafel made with lentils and spices",
      image: "/assets/images/masala-vada.jpg",
      category: "Veg",
      spicyLevel: 2,
    },
    {
      id: 6,
      name: "Chicken Puffs",
      price: 6.99,
      description: "Flaky pastry filled with spiced chicken",
      image: "/assets/images/chicken-puffs.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 7,
      name: "Veggie Puffs",
      price: 5.99,
      description: "Crispy pastry with seasoned vegetables",
      image: "/assets/images/veg_puffs.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
  ],
  chinese: [
    {
      id: 9,
      name: "Garlic Scallion Fried Rice (Non-Veg)",
      price: 14.99,
      description: "Our signature fried rice with fresh garlic and scallions",
      image: "/assets/images/chicken-scallion.jpg",
      category: "Non-veg",
      spicyLevel: 1,
      customizable: true,
      options: [
        { id: 1, name: "Ginger Garlic Chicken", price: 14.99 },
        { id: 2, name: "Kung Pao Chicken", price: 15.99 },
      ],
    },
    {
      id: 11,
      name: "Garlic Scallion Fried Rice (Veg)",
      price: 12.99,
      description: "Our signature vegetarian fried rice with fresh garlic and scallions",
      image: "/assets/images/veg_scallion.jpeg",
      category: "Veg",
      spicyLevel: 1,
      customizable: true,
      options: [
        { id: 1, name: "Pepper Mushroom", price: 13.99 },
        { id: 2, name: "Mixed Vegetables", price: 12.99 },
      ],
    },
    {
      id: 22,
      name: "Sesame Chicken with Fried Rice",
      price: 11.0,
      description: "Crispy chicken in sweet sesame sauce served with fried rice",
      image: "/assets/images/sesame-chicken.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 23,
      name: "Orange Chicken with Fried Rice",
      price: 11.0,
      description: "Tangy orange-flavored chicken served with fried rice",
      image: "/assets/images/orange-chicken.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
  ],
  thai: [
    {
      id: 20,
      name: "Drunken Veg Noodles",
      price: 9.0,
      description: "Stir-fried rice noodles with vegetables in a savory sauce",
      image: "/assets/images/drunken-veg.jpg",
      category: "Veg",
      spicyLevel: 2,
    },
    {
      id: 21,
      name: "Drunken Chicken Noodles",
      price: 11.0,
      description: "Spicy stir-fried noodles with tender chicken and Thai basil",
      image: "/assets/images/drunken-chicken.jpg",
      category: "Non-veg",
      spicyLevel: 3,
    },
  ],
  korean_japanese: [
    {
      id: 13,
      name: "Boiling Shrimp",
      price: 16.99,
      description: "Spicy boiled shrimp in our signature sauce",
      image: "/assets/images/boiling-shrimp.jpg",
      category: "Non-veg",
      spicyLevel: 3,
    },
    {
      id: 14,
      name: "Spicy Beef Brisket Soup",
      price: 15.99,
      description: "Rich and hearty Korean-style beef soup",
      image: "/assets/images/beef-soup.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 15,
      name: "Tteokbokki",
      price: 12.99,
      description: "Spicy rice cakes in a sweet and spicy gochujang sauce",
      image: "/assets/images/topukki.jpeg",
      category: "Veg",
      spicyLevel: 3,
    },
    {
      id: 16,
      name: "Fusion Ramen",
      price: 14.99,
      description: "Japanese-style noodles in a rich, flavorful broth",
      image: "/assets/images/ramen.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 17,
      name: "Spicy Stir-Fried Chicken",
      price: 15.99,
      description: "Tender chicken stir-fried with fresh vegetables in our special sauce",
      image: "/assets/images/spicy-chicken-stir-fry.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 19,
      name: "Cucumber Salad",
      price: 4.99,
      description: "Fresh cucumber with Asian-style dressing",
      image: "/assets/images/cucumber-salad.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
  desserts: [
    {
      id: 18,
      name: "Bread Pudding",
      price: 5.99,
      description: "Sweet and creamy dessert with Asian fusion twist",
      image: "/assets/images/bread-pudding.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 24,
      name: "Tiramisu",
      price: 4.0,
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
      image: "/assets/images/tiramisu.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 25,
      name: "Strawberry Misu",
      price: 4.0,
      description: "A fruity twist on the classic tiramisu with fresh strawberries",
      image: "/assets/images/strawberry-misu.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 26,
      name: "Brownies",
      price: 2.0,
      description: "Rich, fudgy chocolate brownies with a crisp top",
      image: "/assets/images/brownies.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const categories = [
    { id: "indian", name: "Indian", icon: "🇮🇳" },
    { id: "chinese", name: "Chinese", icon: "🇨🇳" },
    { id: "thai", name: "Thai", icon: "🇹🇭" },
    { id: "korean_japanese", name: "Korean & Japanese", icon: "🇰🇷🇯🇵" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
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
            Discover our fusion of Korean, Japanese, Chinese, Thai, and Indian cuisines
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map((item) =>
                  "customizable" in item && item.customizable ? (
                    <MenuCard key={item.id} item={item} customizable={true} />
                  ) : (
                    <MenuCard key={item.id} item={item} />
                  ),
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}

