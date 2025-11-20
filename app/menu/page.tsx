"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MenuCard } from "../components/MenuCard";

// Menu items organized by category
const MENU_ITEMS = {
  dosa: [
    {
      id: 1,
      name: "Goat Keema Dosa",
      price: 15.0,
      description: "Crispy dosa stuffed with goat keema",
      category: "Non-veg",
      spicyLevel: 2,
      image: "/assets/images/Keema dosa with coconut and red chutney.jpg"
    },
    {
      id: 2,
      name: "Chicken Kari Dosa",
      price: 14.0,
      description: "South Indian chicken curry folded in dosa",
      category: "Non-veg",
      spicyLevel: 2,      
      image: "/assets/images/Dosa, idly, vada, pongal, puri with coconut, red and green chutney.jpg"
    },
    {
      id: 3,
      name: "Mysore Masala Dosa",
      price: 12.5,
      description: "Masala dosa with Mysore chutney",
      category: "Veg",
      spicyLevel: 2,
    },
    {
      id: 4,
      name: "Paneer Masala Dosa",
      price: 12.0,
      description: "Paneer-filled masala dosa",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 5,
      name: "Ghee Dosa",
      price: 10.0,
      description: "Crispy dosa glazed with ghee",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 6,
      name: "Egg Dosa",
      price: 10.0,
      description: "Dosa layered with seasoned egg",
      category: "Non-veg",
      spicyLevel: 2,
    },
    {
      id: 7,
      name: "Cheese Dosa",
      price: 10.0,
      description: "Cheese-filled dosa",
      category: "Veg",
      spicyLevel: 0,
    },
  ],

  breads: [
    {
      id: 8,
      name: "Butter Naan",
      price: 5.0,
      description: "Soft naan brushed with butter",
      category: "Veg",
      spicyLevel: 0,    
      image: "/assets/images/naan.jpg"
    },
    {
      id: 9,
      name: "Garlic Naan",
      price: 5.0,
      description: "Garlic flavored naan",
      category: "Veg",
      spicyLevel: 1,     
      image: "/assets/images/naan.jpg"

    },
    {
      id: 10,
      name: "Parotta",
      price: 5.0,
      description: "Layered South Indian parotta",
      category: "Veg",
      spicyLevel: 0,   
      image: "/assets/images/parotta.jpg"

    },
    {
      id: 11,
      name: "Chilli Parotta",
      price: 15.0,
      description: "Spicy chilli tossed parotta",
      category: "Veg",
      spicyLevel: 3,
    },
    {
      id: 12,
      name: "Kothu Parotta",
      price: 15.0,
      description: "Shredded parotta tossed with spices",
      category: "Veg",
      spicyLevel: 3,
    },
  ],

  dips: [
    {
      id: 13,
      name: "Butter Chicken",
      price: 15.0,
      description: "Creamy tomato-based chicken curry",
      category: "Non-veg",
      spicyLevel: 2,     
      image: "/assets/images/Butter chicken.jpg"

    },
    {
      id: 14,
      name: "Paneer Masala",
      price: 12.0,
      description: "Paneer cooked in rich masala gravy",
      category: "Veg",
      spicyLevel: 2, 
      image: ""

    },
    {
      id: 15,
      name: "Goat Curry",
      price: 18.0,
      description: "Slow-cooked goat curry",
      category: "Non-veg",
      spicyLevel: 3,
      image: "/assets/images/goat-curry.jpg"

    },
    {
      id: 16,
      name: "Daal",
      price: 9.0,
      description: "Classic lentil curry",
      category: "Veg",
      spicyLevel: 1,   
      image: "/assets/images/dal.jpg"

    },
  ],

  chat: [
    {
      id: 17,
      name: "Samosa Chat",
      price: 7.0,
      description: "Crispy samosas crushed with chutneys",
      category: "Veg",
      spicyLevel: 2,     
      image: "/assets/images/chana-samosa.jpg"

    },
    {
      id: 18,
      name: "Pani Puri",
      price: 7.0,
      description: "Crispy puris with spiced pani",
      category: "Veg",
      spicyLevel: 3,
    },
    {
      id: 19,
      name: "Dahi Puri",
      price: 7.0,
      description: "Sweet and tangy yogurt puris",
      category: "Veg",
      spicyLevel: 1,
    },
    {
      id: 20,
      name: "Sev Puri",
      price: 7.0,
      description: "Sev layered chat with chutneys",
      category: "Veg",
      spicyLevel: 2,
    },
    {
      id: 21,
      name: "Beach Chat",
      price: 7.0,
      description: "Chennai-style tangy beach snack",
      category: "Veg",
      spicyLevel: 2,
    },
    {
      id: 22,
      name: "Ragada Chat",
      price: 7.0,
      description: "Soft white peas ragda topped with chutneys",
      category: "Veg",
      spicyLevel: 2,
    },
    {
      id: 23,
      name: "French Fries",
      price: 5.0,
      description: "Crispy salted fries",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 24,
      name: "Tater Tots",
      price: 5.0,
      description: "Golden fried potato tots",
      category: "Veg",
      spicyLevel: 0,
    },
  ],

  drinks: [
    {
      id: 25,
      name: "Lemonade",
      price: 4.0,
      description: "Fresh lemon drink",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 26,
      name: "Coke",
      price: 3.0,
      description: "Coca-Cola",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 27,
      name: "Fanta",
      price: 3.0,
      description: "Orange soda",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 28,
      name: "Sprite",
      price: 3.0,
      description: "Lemon-lime soda",
      category: "Veg",
      spicyLevel: 0,
    },
    {
      id: 29,
      name: "Water",
      price: 2.0,
      description: "Bottled water",
      category: "Veg",
      spicyLevel: 0,
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom > 150;
      });

      if (currentSection) {
        setActiveCategory(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const categories = [
    { id: "dosa", name: "Dosa", icon: "🫔" },
    { id: "breads", name: "Breads", icon: "🫓" },
    { id: "dips", name: "Dips", icon: "🥘" },
    { id: "chat", name: "Chat", icon: "🍛" },
    { id: "drinks", name: "Drinks", icon: "🥤" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our fusion of Indian and Asian cuisines
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
                <h2 className="text-3xl font-bold text-black">
                  {category.name}
                </h2>
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
                {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS].map(
                  (item) => (
                    <MenuCard key={item.id} item={item} />
                  )
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
