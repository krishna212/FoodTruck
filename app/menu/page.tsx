"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MenuCard } from "../components/MenuCard"

// Menu items organized by category
const MENU_ITEMS = {
  appetizers: [
    {
      id: 1,
      name: "Samosa",
      price: 4.99,
      description: "Crispy pastry filled with spiced potatoes and peas",
      image: "/assets/images/samosa.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 2,
      name: "Chicken 65",
      price: 8.99,
      description: "Spicy, deep-fried chicken marinated in flavorful spices",
      image: "/assets/images/chicken-65.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 3,
      name: "French Fries",
      price: 4.99,
      description: "Crispy golden french fries seasoned with our special spice blend",
      image: "/assets/images/fries.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 4,
      name: "Crispy Cauliflower",
      price: 4.99,
      description: "Crispy cauliflower florets tossed in a flavorful sauce",
      image: "/assets/images/crispy-cauliflower.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
  ],
  biryani: [
    {
      id: 5,
      name: "Hyderabadi Chicken Biryani",
      price: 14.99,
      description: "Fragrant basmati rice cooked with tender chicken and aromatic spices",
      image: "/assets/images/chicken-biryani.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 6,
      name: "Hyderabadi Goat Biryani",
      price: 16.99,
      description: "Traditional Hyderabadi biryani with tender goat meat and saffron-infused rice",
      image: "/assets/images/goat-biryani.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 7,
      name: "Hyderabadi Veg Biryani",
      price: 12.99,
      description: "Aromatic basmati rice cooked with fresh vegetables and authentic spices",
      image: "/assets/images/veg-briyani.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 29,
      name: "Thalapakatti Chicken Briyani",
      price: 14.99,
      description: "Fragrant basmati rice slow-cooked with tender chicken and signature Thalapakatti spices.",
      image: "/assets/images/thal_chicken.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 30,
      name: "Thalapakatti Goat Briyani",
      price: 16.99,
      description: "Richly spiced basmati rice paired with succulent goat meat in traditional Thalapakatti style.",
      image: "/assets/images/thal_goat.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
  ],
  rice: [
    {
      id: 8,
      name: "Chicken Fried Rice",
      price: 14.99,
      description: "Flavorful fried rice with tender chicken pieces and vegetables",
      image: "/assets/images/Chicken-rice.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 9,
      name: "Veg Fried Rice",
      price: 12.99,
      description: "Stir-fried rice with mixed vegetables and our special sauce",
      image: "/assets/images/veg-rice.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 10,
      name: "Orange Chicken Fried Rice",
      price: 14.99,
      description: "Fried rice with tangy orange-flavored chicken",
      image: "/assets/images/Orange-chicken.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 11,
      name: "White Rice",
      price: 4.99,
      description: "Steamed basmati rice, perfect as a side dish",
      image: "/assets/images/white-rice.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
  bread: [
    {
      id: 12,
      name: "Wheat Roti (2)",
      price: 2.99,
      description: "Whole wheat flatbread, perfect for scooping up curries",
      image: "/assets/images/wheat-roti.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 13,
      name: "Wheat Chapati (2)",
      price: 2.99,
      description: "Thin whole wheat flatbread, freshly made",
      image: "/assets/images/wheat-chapati.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 14,
      name: "Naan (1)",
      price: 3.99,
      description: "Soft and fluffy leavened flatbread baked in tandoor",
      image: "/assets/images/naan.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 15,
      name: "Parotta (2)",
      price: 4.99,
      description: "Flaky, layered flatbread, perfect with curry",
      image: "/assets/images/parotta.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
  curry: [
    {
      id: 16,
      name: "Chicken Curry 32 Oz",
      price: 14.99,
      description: "Tender chicken pieces cooked in a rich, aromatic curry sauce",
      image: "/assets/images/chicken-curry.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 17,
      name: "Goat Curry 32 Oz",
      price: 16.99,
      description: "Slow-cooked goat meat in a flavorful curry sauce",
      image: "/assets/images/goat-curry.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 18,
      name: "Veg Curry 32 Oz",
      price: 12.99,
      description: "Mixed vegetables cooked in a savory curry sauce",
      image: "/assets/images/veg-curry.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 19,
      name: "Dal Curry 32 Oz",
      price: 9.99,
      description: "Lentil curry cooked with aromatic spices",
      image: "/assets/images/dal.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 20,
      name: "Channa Curry 32 Oz",
      price: 9.99,
      description: "Chickpeas cooked in a flavorful tomato-based curry",
      image: "/assets/images/chana-curry.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
  ],
  tiffin: [
    {
      id: 21,
      name: "Idly with Chutney",
      price: 9.99,
      description: "Steamed rice cakes served with coconut chutney and sambar",
      image: "/assets/images/Idly.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 22,
      name: "Dosa with Chutney",
      price: 11.99,
      description: "Crispy rice and lentil crepe served with chutney and sambar",
      image: "/assets/images/dosa.jpg",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 23,
      name: "Channa Samosa",
      price: 6.99,
      description: "Samosa topped with spiced chickpea curry, yogurt, and chutneys",
      image: "/assets/images/chana-samosa.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
  ],
  noodles: [
    {
      id: 24,
      name: "Garlic Veg Noodle",
      price: 11.99,
      description: "Stir-fried noodles with vegetables and garlic sauce",
      image: "/assets/images/veg-noodle.jpg",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 25,
      name: "Garlic Chicken Noodle",
      price: 14.99,
      description: "Stir-fried noodles with chicken and garlic sauce",
      image: "/assets/images/chicken-noodle.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 26,
      name: "Garlic Shrimp Noodle",
      price: 12.99,
      description: "Stir-fried noodles with shrimp and garlic sauce",
      image: "/assets/images/shrimp-noodles.jpg",
      category: "Non-veg",
      spicyLevel: 1,
    },
    {
      id: 27,
      name: "Spicy Stir-Fried Veg and Chicken",
      price: 12.99,
      description: "Spicy stir-fried noodles with vegetables and chicken",
      image: "/assets/images/Spicy-stir-fried-veg-chicken.jpg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 28,
      name: "Cajun Shrimp",
      price: 12.99,
      description: "Shrimp cooked with Cajun spices and served with noodles",
      image: "/assets/images/cajun-shrimp.jpg",
      category: "Non-veg",
      spicyLevel: 2,
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
    { id: "appetizers", name: "Appetizers", icon: "🍟" },
    { id: "biryani", name: "Biryani", icon: "🍚" },
    { id: "rice", name: "Rice", icon: "🍛" },
    { id: "bread", name: "Bread", icon: "🥖" },
    { id: "curry", name: "Curry", icon: "🍲" },
    { id: "tiffin", name: "Tiffin", icon: "🥞" },
    { id: "noodles", name: "Noodles", icon: "🍜" },
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
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our fusion of Indian and Asian cuisines</p>
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

