"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MiniTruck() {
  return (
    <motion.div
      className="w-8 h-8 relative inline-flex items-center"
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
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck.jpg-L7c136eSuhYzEcUxlFfKb9rrDBAVGm.png"
        alt="Food Truck"
        width={32}
        height={32}
        className="object-contain"
      />
    </motion.div>
  )
}

