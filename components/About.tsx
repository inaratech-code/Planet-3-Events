'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 lg:py-32 relative bg-[#faf9f6] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
        >
          {/* Left Column - Main About Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Planet 3 Events
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-black mb-4 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We are a premier event planning company dedicated to transforming your vision into extraordinary experiences. With a passion for luxury, energy, and creativity, we craft events that leave lasting impressions.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-black leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our team of expert designers and coordinators works tirelessly to ensure every detail is perfect, from concept to execution. We believe that every event should be unforgettable.
            </motion.p>
          </motion.div>

          {/* Right Column - Vision, Mission, Values */}
          <motion.div
            variants={containerVariants}
            className="space-y-4 md:space-y-5"
          >
            {/* Mission */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/50 border border-black/10 rounded-xl p-4 md:p-5 transition-shadow hover:shadow-lg"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-electric-purple to-neon-blue rounded-xl flex items-center justify-center mb-3"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Mission
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed text-justify">
                To transform every client's vision into extraordinary events by delivering exceptional planning, design, and execution services that exceed expectations and create lasting memories.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/50 border border-black/10 rounded-xl p-4 md:p-5 transition-shadow hover:shadow-lg"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-electric-purple to-neon-blue rounded-xl flex items-center justify-center mb-3"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
              >
                <Eye className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Vision
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed text-justify">
                To become the leading event planning company recognized for innovation, creativity, and excellence, setting new standards in the industry while making every event a masterpiece.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/50 border border-black/10 rounded-xl p-4 md:p-5 transition-shadow hover:shadow-lg"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-electric-purple to-neon-blue rounded-xl flex items-center justify-center mb-3"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 200 }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Values
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed text-justify">
                Excellence, creativity, integrity, and client-centricity guide everything we do. We are committed to delivering personalized service, attention to detail, and creating meaningful experiences that reflect our clients' unique stories.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
