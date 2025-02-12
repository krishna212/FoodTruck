import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Asian Fusion</h3>
            <p className="text-foreground">
              Bringing together the best flavors from Korea, Japan, China, Philippines, and India.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Location & Hours</h4>
            <p className="text-foreground">Monday - Saturday</p>
            <p className="text-foreground">11:00 AM - 9:00 PM</p>
            <p className="text-foreground mt-2">Check our social media for daily locations!</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-foreground hover:text-primary transition-colors">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" className="text-foreground hover:text-primary transition-colors">
                <Instagram />
              </Link>
              <Link href="https://twitter.com" className="text-foreground hover:text-primary transition-colors">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 mt-8 pt-8 text-center text-foreground">
          <p>&copy; {new Date().getFullYear()} Asian Fusion Food Truck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

