/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F5F5F5", // Light grayish background
        foreground: "#333333",
        primary: {
          DEFAULT: "#FFD54F", // Turmeric yellow
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#FFF9C4", // Very light yellow
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#FFA000", // Bright amber
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#FAFAFA", // Very light gray
          foreground: "#666666",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

