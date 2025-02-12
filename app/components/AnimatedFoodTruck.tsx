"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AnimatedFoodTruck() {
  return (
    <div className="relative h-[400px] w-full">
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-dQdyhSD175KJmcJ3JurFJYO7Lwvv1H.png"
          alt="Asian Fusion Food Truck"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Animated smoke */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-white rounded-full opacity-0"
          animate={{
            y: [-20, -100],
            x: [0, index % 2 === 0 ? 20 : -20],
            scale: [0.5, 3],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Animated order tickets */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute left-1/4 bottom-1/4 w-12 h-6 bg-white border border-gray-300 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: [-50, -100],
            x: [0, index % 2 === 0 ? 20 : -20],
            opacity: [0, 1, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 1.5,
          }}
        >
          <div className="w-full h-1 bg-primary mt-1" />
          <div className="w-3/4 h-1 bg-primary mt-1 mx-auto" />
        </motion.div>
      ))}

      {/* Animated steam from food */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute top-1/3 left-1/3 w-1 h-6 bg-white opacity-0"
          animate={{
            y: [-10, -30],
            scaleY: [0.5, 1.5],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: index * 0.6,
          }}
        />
      ))}
    </div>
  )
}

