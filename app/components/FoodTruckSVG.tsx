"use client"

import { motion } from "framer-motion"

const FoodTruckSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
      <motion.g initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
        {/* Truck Body */}
        <rect x="50" y="200" width="400" height="200" fill="#FFD54F" rx="20" />

        {/* Wheels */}
        <motion.circle
          cx="150"
          cy="400"
          r="50"
          fill="#333"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="350"
          cy="400"
          r="50"
          fill="#333"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Window */}
        <rect x="350" y="220" width="80" height="60" fill="#87CEEB" rx="10" />

        {/* Door */}
        <rect x="70" y="220" width="60" height="120" fill="#FFA000" rx="10" />

        {/* Serving Window */}
        <motion.rect
          x="200"
          y="220"
          width="120"
          height="80"
          fill="#87CEEB"
          rx="10"
          initial={{ y: 220 }}
          animate={{ y: 180 }}
          transition={{ duration: 0.5, yoyo: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Logo */}
        <text x="220" y="350" fontSize="40" fontWeight="bold" fill="#333">
          Asian Fusion
        </text>
      </motion.g>
    </svg>
  )
}

export default FoodTruckSVG

