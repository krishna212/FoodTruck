"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FoodTruckHero() {
  return (
    <motion.div
      className="relative h-[400px]"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative h-full"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-dQdyhSD175KJmcJ3JurFJYO7Lwvv1H.png"
          alt="Asian Fusion Food Truck"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

