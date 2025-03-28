"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedCard from "./AnimatedCard"
import { useAnimationSettings } from "../hooks/useAnimationSettings"
import Link from "next/link"

export default function AboutMe() {
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        ...transition,
      },
    }),
  }

  return (
    <section id="about" className="mt-0 mb-24">
      <AnimatedCard className="bg-[#121212] rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-800">
        <h2 className="text-[2rem] mb-6 text-[#f5f5f5] tracking-wide font-['Monument']">ABOUT</h2>
        <div className="space-y-8">
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/GroupCalvin.JPG"
              alt="Profile Image"
              width={400}
              height={300}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <div>
            <h3 className="text-[1.5rem] mb-3 text-[#f5f5f5] font-['Monument']">CALVIN ANGUS BEIGHLE</h3>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              Hi! I'm Calvin. I am a senior in Leverett House originally the Class of 2024. I like creating things and working with my hands, but it has been a long time since I've done so! I opened a design studio over the summer and have been designing websites, apps, branding, products, and interiors.
            </p>
          </div>

          <div>
            <h4 className="text-[1.26rem] mb-3 text-[#f5f5f5] font-['Monument']">SKILLS & INTERESTS</h4>
            <ul className="space-y-3">
              {["DESIGN/BUSINESS DEVELOPMENT", "SURFING", "SKIING"].map((point, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial={isAnimationsEnabled ? "hidden" : "visible"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-[#e0e0e0]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#f5f5f5]" />
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="flex justify-end"
            whileHover={isAnimationsEnabled ? { scale: 1.05 } : undefined}
            whileTap={isAnimationsEnabled ? { scale: 0.95 } : undefined}
          >
            <Link href="/about" className="bg-[#f5f5f5] text-black px-8 py-3 rounded-md hover:bg-[#e0e0e0] transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              VIEW FULL ABOUT
            </Link>
          </motion.div>
        </div>
      </AnimatedCard>
    </section>
  )
} 