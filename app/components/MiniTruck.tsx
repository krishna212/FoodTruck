"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MiniTruck() {
  return (
    <motion.div
      className="w-8 h-8 relative inline-block align-middle mr-2"
      animate={{
        x: [0, 5, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-dQdyhSD175KJmcJ3JurFJYO7Lwvv1H.png"
        alt="Food Truck"
        width={32}
        height={32}
        className="object-contain"
      />
    </motion.div>
  )
}

