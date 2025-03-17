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
      <Image src="/assets/images/truck.png" alt="Food Truck" width={32} height={32} className="object-contain" />
    </motion.div>
  )
}

