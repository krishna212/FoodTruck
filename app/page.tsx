import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, ShoppingBag, Truck } from "lucide-react"

const FEATURED_DISHES = [
  {
    name: "Spicy Beef Brisket Soup",
    description: "Rich and hearty Korean-style beef soup",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Boiling Shrimp",
    description: "Fresh shrimp in our signature spicy sauce",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Fusion Ramen",
    description: "Japanese ramen with a unique twist",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col bg-muted">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Asian Fusion
                <span className="block text-accent">Food Truck</span>
              </h1>
              <p className="text-gray-700 mb-8 text-lg">
                Experience the perfect blend of Korean, Japanese, Chinese, Philippine, and Indian cuisines
              </p>
              <div className="flex gap-4">
                <Link href="/menu">
                  <Button size="lg" className="bg-primary text-black hover:bg-accent transition-colors duration-200">
                    Order Now
                    <ChevronRight className="ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary bg-white text-black hover:bg-primary hover:text-black transition-colors duration-200"
                >
                  View Menu
                </Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-primary rounded-full opacity-20" />
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Featured dish"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 -mt-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Fresh food delivered to your location</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold">Fresh Ingredients</h3>
                  <p className="text-sm text-gray-600">Quality ingredients for authentic taste</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold">Special Events</h3>
                  <p className="text-sm text-gray-600">Available for catering and events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular <span className="text-primary">Dishes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved fusion dishes that bring together the best of Asian cuisines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_DISHES.map((dish) => (
              <div key={dish.name} className="group relative overflow-hidden rounded-2xl bg-muted">
                <div className="relative h-64">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <Link href="/menu">
                    <Button className="bg-primary text-black hover:bg-accent transition-colors duration-200 w-full">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-8">
              We bring together the best of Asian cuisines, creating unique fusion dishes that celebrate the rich
              culinary traditions of Korea, Japan, China, the Philippines, and India. Our food truck serves up authentic
              flavors with a modern twist, making every bite an adventure.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

