import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../Button'

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#EC4899]"
              >
                About Me
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 leading-relaxed text-lg"
              >
                I'm a Robotics Engineer and Web Developer, currently pursuing B.Tech in Mechanical Engineering at NIT Hamirpur. My passion lies in creating innovative solutions that bridge the gap between hardware and software.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6D28D9]/20 to-[#8B5CF6]/20 text-white/90 border border-[#6D28D9]/30 hover:border-[#6D28D9]/60 transition-all duration-300">Robotics | ROS2</span>
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6D28D9]/20 to-[#8B5CF6]/20 text-white/90 border border-[#6D28D9]/30 hover:border-[#6D28D9]/60 transition-all duration-300">Web Development</span>
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6D28D9]/20 to-[#8B5CF6]/20 text-white/90 border border-[#6D28D9]/30 hover:border-[#6D28D9]/60 transition-all duration-300">AI/ML</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/about">
                  <Button>
                    Learn More About Me
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl text-center border border-white/10 hover:border-[#6D28D9]/30 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-5xl font-bold text-[#6D28D9] mb-3">1.5</h3>
                <p className="text-white/70">Years Experience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl text-center border border-white/10 hover:border-[#6D28D9]/30 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-5xl font-bold text-[#6D28D9] mb-3">15+</h3>
                <p className="text-white/70">Projects</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl text-center border border-white/10 hover:border-[#6D28D9]/30 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-5xl font-bold text-[#6D28D9] mb-3">10+</h3>
                <p className="text-white/70">Technologies</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl text-center border border-white/10 hover:border-[#6D28D9]/30 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-5xl font-bold text-[#6D28D9] mb-3">0</h3>
                <p className="text-white/70">Certifications</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection