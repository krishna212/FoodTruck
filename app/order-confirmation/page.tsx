import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Order Confirmation</h1>
        <p className="text-xl mb-8 text-gray-700">Thank you for your order! Your delicious food will be ready soon.</p>
        <Link href="/">
          <Button size="lg" className="bg-primary text-black hover:bg-accent transition-colors duration-200">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

