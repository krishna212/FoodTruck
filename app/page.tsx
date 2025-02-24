"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Utensils, ShoppingBag, Truck } from "lucide-react"
import AnimatedFoodTruck from "./components/AnimatedFoodTruck"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const router = useRouter()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll("section")

    const scrollToSection = (index: number) => {
      if (isScrolling) return
      setIsScrolling(true)
      sections[index].scrollIntoView({ behavior: "smooth" })
      setCurrentSection(index)
      setTimeout(() => setIsScrolling(false), 1000)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1)
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1)
      }
    }

    let touchStart = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touchEnd = e.touches[0].clientY
      const delta = touchStart - touchEnd

      if (Math.abs(delta) > 50) {
        if (delta > 0 && currentSection < sections.length - 1) {
          scrollToSection(currentSection + 1)
        } else if (delta < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("touchstart", handleTouchStart)
    container.addEventListener("touchmove", handleTouchMove)

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [currentSection, isScrolling])

  // Handle navigation with scroll restoration
  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0)
    router.push(path)
  }

  const dots = (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {[0, 1, 2].map((index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            currentSection === index ? "bg-primary" : "bg-gray-300"
          }`}
          onClick={() => {
            if (!isScrolling) {
              setCurrentSection(index)
              containerRef.current?.children[index].scrollIntoView({ behavior: "smooth" })
            }
          }}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen overflow-x-hidden" ref={containerRef}>
      {dots}

      {/* Hero Section */}
      <section className="h-screen snap-start bg-secondary flex items-center justify-center pt-16 md:pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Food Truck */}
            <motion.div
              className="relative w-full md:w-1/2 -mt-12 md:mt-8 translate-x-4 md:translate-x-0 md:order-last"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedFoodTruck />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="z-10 text-center md:text-left max-w-lg w-full md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Asian Fusion
                <span className="block text-accent">Food Truck</span>
              </h1>
              <p className="text-gray-700 mb-6 md:mb-8 text-base sm:text-lg">
                Experience the perfect blend of Korean, Japanese, Chinese, Philippine, and Indian cuisines
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-black hover:bg-accent transition-colors duration-200"
                  onClick={() => handleNavigation("/menu")}
                >
                  Order Now
                  <ChevronRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary bg-white text-black hover:bg-primary hover:text-black transition-colors duration-200"
                  onClick={() => handleNavigation("/menu")}
                >
                  View Menu
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen py-20 snap-start bg-background flex items-center">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSection === 1 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Utensils className="h-6 w-6 text-accent" />,
                title: "Fusion Cuisine",
                description: "Unique blend of Asian flavors",
              },
              {
                icon: <ShoppingBag className="h-6 w-6 text-accent" />,
                title: "Fresh Ingredients",
                description: "Quality ingredients for authentic taste",
              },
              {
                icon: <Truck className="h-6 w-6 text-accent" />,
                title: "Special Events",
                description: "Available for catering and events",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSection === 1 ? 1 : 0, y: currentSection === 1 ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary/20 p-4 rounded-full w-fit mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Popular Dishes Section */}
      <section className="min-h-screen py-20 snap-start bg-white flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSection === 2 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular <span className="text-primary">Dishes</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4">
                Discover our most loved fusion dishes that bring together the best of Asian cuisines
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: "Spicy Beef Brisket Soup",
                  description: "Rich and hearty Korean-style beef soup",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beef-EsM2Bs7x7Ijz5deQzXhwEcXovejyNP.png",
                },
                {
                  name: "Chicken 65 Biryani",
                  description: "Spicy chicken 65 with aromatic biryani rice",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chicken65-OIxKNVPUXjC9fK82mjFW0P9fKrM1NR.png",
                },
                {
                  name: "Fusion Ramen",
                  description: "Japanese ramen with a unique twist",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ramen-MSR0tfF6wk8I31nqETsfUmu3CVoAdA.png",
                },
              ].map((dish, index) => (
                <motion.div
                  key={dish.name}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSection === 2 ? 1 : 0,
                    y: currentSection === 2 ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{dish.description}</p>
                    <Link href="/menu" className="mt-auto">
                      <Button className="w-full bg-primary text-black hover:bg-accent">Order Now</Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

