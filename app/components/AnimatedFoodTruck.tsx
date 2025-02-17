"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const SmokeParticle = ({ delay = 0, scale = 1 }: { delay?: number; scale?: number }) => (
  <motion.div
    className="absolute"
    style={{
      top: "35%",
      right: `${30 + Math.random() * 10}%`,
      width: 40 * scale,
      height: 40 * scale,
      filter: "blur(8px)",
    }}
    initial={{ opacity: 0, scale: 0.5, y: 0 }}
    animate={{
      opacity: [0, 0.3, 0],
      scale: [0.5, 1.5, 2],
      y: [-20, -60 * scale],
    }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeOut",
    }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id={`smoke-gradient-${delay}`}>
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill={`url(#smoke-gradient-${delay})`} filter="blur(8px)" />
    </svg>
  </motion.div>
)

export default function AnimatedFoodTruck() {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truck-0AC5bCbYsXdIhFydJqQKBuVECUOVPj.png"
          alt="Fast Fusion Food Truck"
          fill
          className="object-contain scale-[1.3]"
          priority
        />
      </motion.div>

      {/* Multiple smoke particles with different sizes and timings */}
      {[...Array(8)].map((_, i) => (
        <SmokeParticle key={i} delay={i * 0.3} scale={0.8 + Math.random() * 0.4} />
      ))}

      {/* Heat distortion effect */}
      <motion.div
        className="absolute top-[32%] right-[28%] w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

