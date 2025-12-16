'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 lg:py-32 relative bg-[#f0ede8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Get In Touch
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-black mb-8 text-center text-justify">
                Reach out to us through any of these channels. We're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 border border-black/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center group-hover:bg-electric-purple/40 transition-colors">
                  <Phone className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-black/60 text-sm">Phone</p>
                  <p className="text-black font-semibold">+1 (234) 567-890</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:hello@planet3events.com"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 border border-black/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center group-hover:bg-electric-purple/40 transition-colors">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-black/60 text-sm">Email</p>
                  <p className="text-black font-semibold">hello@planet3events.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 border border-black/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-electric-purple/20 rounded-xl flex items-center justify-center group-hover:bg-electric-purple/40 transition-colors">
                  <MessageCircle className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-black/60 text-sm">WhatsApp</p>
                  <p className="text-black font-semibold">Chat with us</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}