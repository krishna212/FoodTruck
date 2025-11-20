import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Authentic Indian Food Truck</h3>
            <p className="text-foreground text-sm">
              Authentic Indian food truck in Long Beach. Specializing in Dosa, Parotta, Kothu Parotta, Goat Curry, Samosa Chat, and traditional street food. Premium quality, authentic recipes.
            </p>
          </div>
            <div>
            <h4 className="text-lg font-bold mb-4">Location & Hours</h4>
            <div className="mb-4">
              <p className="font-semibold">Wednesday 5-9 PM</p>
              <Link
              href="https://maps.google.com/?q=3210+E+Anaheim+St,+Long+Beach,+CA+90804"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-sm mb-2 underline hover:text-accent transition-colors"
              >
              3210 E Anaheim St, Long Beach, CA 90804
              </Link>
              <p className="font-semibold">Friday 5-9 PM</p>
              <Link
              href="https://maps.google.com/?q=1800-2000+Ximeno+Ave,+Long+Beach,+CA+90815"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-sm mb-2 underline hover:text-accent transition-colors"
              >
              1800-2000 Ximeno Ave, Long Beach, CA 90815
              </Link>
              <p className="font-semibold">Saturday 5-9 PM</p>
              <Link
              href="https://maps.google.com/?q=Aquarium+Way,+Long+Beach,+CA+90802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-sm mb-2 underline hover:text-accent transition-colors"
              >
              Aquarium Way, Long Beach, CA 90802
              </Link>
              <p className="font-semibold">Sunday 5-9 PM</p>
              <Link
              href="https://maps.google.com/?q=Oceangate,+Long+Beach,+CA+90802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-sm underline hover:text-accent transition-colors"
              >
              Oceangate, Long Beach, CA 90802
              </Link>
            </div>

            {/* <p className="text-foreground mt-2">Check our social media for daily locations!</p> */}
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
          <p>&copy; {new Date().getFullYear()} Fast Fusion Food Truck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

