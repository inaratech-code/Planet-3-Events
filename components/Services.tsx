'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Users, Music, Gift } from 'lucide-react'

const services = [
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Comprehensive planning from concept to execution',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Professional corporate gatherings and conferences',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Curated entertainment for any occasion',
  },
  {
    icon: Gift,
    title: 'Luxury Experiences',
    description: 'High-end experiences for discerning clients',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 lg:py-32 relative bg-[#f0ede8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
            Comprehensive event solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white/50 border border-black/10 rounded-2xl p-6 md:p-8 hover:border-black hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-electric-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/30 transition-colors">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-black leading-relaxed text-justify">
                    {service.description}
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
