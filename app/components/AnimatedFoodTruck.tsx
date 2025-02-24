"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const SmokeParticle = ({
  delay = 0,
  position = { top: "35%", right: "28%" },
}: {
  delay?: number
  position?: { top: string; right: string }
}) => (
  <motion.div
    className="absolute w-28 h-28"
    style={{
      ...position,
      filter: "blur(15px)",
    }}
    initial={{ opacity: 0, scale: 0.5, y: 0 }}
    animate={{
      opacity: [0, 0.7, 0],
      scale: [0.5, 2.2, 3.3],
      y: [-10, -60],
      x: [0, Math.random() * 20 - 10],
    }}
    transition={{
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeOut",
    }}
  >
    <div
      className="w-full h-full rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(200, 200, 200, 0.6) 30%, rgba(200, 200, 200, 0) 70%)",
      }}
    />
  </motion.div>
)

export default function AnimatedFoodTruck() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-visible">
      <motion.div
        className="absolute inset-0"
        initial={{ x: -200, rotate: -5, opacity: 0 }}
        animate={{
          x: 0,
          rotate: [0, 2, 0],
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          duration: 1.5,
          times: [0, 0.8, 1],
        }}
      >
        <motion.div
          className="relative w-full h-full"
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
            className="object-contain scale-110 sm:scale-125 md:scale-[1.35] -ml-4 sm:-ml-6 md:-ml-8 md:-mt-4"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Repositioned Smoke Effects */}
      {[
        { top: "15%", right: "30%" },
        { top: "12%", right: "28%" },
        { top: "18%", right: "32%" },
        { top: "10%", right: "29%" },
        { top: "14%", right: "31%" },
        { top: "16%", right: "27%" },
        { top: "13%", right: "33%" },
        { top: "17%", right: "26%" },
      ].map((position, i) => (
        <SmokeParticle key={i} delay={i * 0.25} position={position} />
      ))}
    </div>
  )
}

