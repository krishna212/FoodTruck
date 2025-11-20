import "./globals.css"
import { Noto_Sans } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"
import { cn } from "@/lib/utils"
import type React from "react"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata = {
  title: "Authentic Indian Food Truck | Dosa, Parotta, Kothu Parotta, Goat Curry",
  description: "Best Indian food truck serving authentic Dosa, Parotta, Kothu Parotta, Goat Curry, Samosa Chat, Naan, Biryani & more. Fresh, traditional Indian cuisine on wheels.",
  keywords: "Indian food truck, Dosa, Parotta, Kothu Parotta, Goat Curry, Samosa Chat, Indian fast food, Naan, Dahi Puri, Sev Puri, Chat, Indian street food, authentic Indian cuisine, Indian food delivery",
  openGraph: {
    title: "Authentic Indian Food Truck | Dosa, Parotta & Goat Curry",
    description: "Experience authentic Indian cuisine with our signature Kothu Parotta, Goat Curry, Dosa, and traditional Indian street food.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(notoSans.className, "min-h-screen bg-background text-foreground antialiased")}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'