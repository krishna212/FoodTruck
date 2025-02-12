import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type CategoryProps = {
  category: {
    name: string
    image: string
  }
}

export function CategoryCard({ category }: CategoryProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="relative h-48 mb-4">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-contain" />
      </div>
      <h3 className="text-xl font-bold mb-4">{category.name}</h3>
      <Link
        href={`/menu?category=${category.name.toLowerCase()}`}
        className="inline-flex items-center text-primary hover:underline"
      >
        Order Now
        <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  )
}

