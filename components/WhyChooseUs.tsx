'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Heart, Zap, Star } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Team',
    description: 'Recognized for excellence in event design and execution',
  },
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We pour our heart into every event we create',
  },
  {
    icon: Zap,
    title: 'Innovative Solutions',
    description: 'Cutting-edge ideas that set your event apart',
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    description: 'Premium service from start to finish',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#f0ede8]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-electric-purple to-neon-blue bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
            What sets Planet 3 Events apart from the rest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6 items-start"
              >
                {/* Step number / Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-electric-purple to-neon-blue rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  {index < reasons.length - 1 && (
                    <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-neon-blue to-electric-purple mx-auto mt-4" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-black leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
