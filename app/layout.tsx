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
  title: "Foodle - Fast Food Delivery",
  description: "Order your favorite fast food online",
    generator: 'v0.dev'
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