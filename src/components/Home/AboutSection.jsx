import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../Button'

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 md:p-12 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
                About Me
              </h2>
              <p className="text-white/80 leading-relaxed">
                I'm a Robotics Engineer and Web Developer, currently pursuing B.Tech in Mechanical Engineering at NIT Hamirpur. My passion lies in creating innovative solutions that bridge the gap between hardware and software.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white/80">Robotics | ROS2</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white/80">Web Development</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white/80">AI/ML</span>
              </div>
              <Link to="/about">
                <Button>
                  Learn More About Me
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-dark p-6 rounded-xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">1.5</h3>
                <p className="text-white/60">Years Experience</p>
              </div>
              <div className="glass-dark p-6 rounded-xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-white/60">Projects</p>
              </div>
              <div className="glass-dark p-6 rounded-xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-white/60">Technologies</p>
              </div>
              <div className="glass-dark p-6 rounded-xl text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">0</h3>
                <p className="text-white/60">Certifications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection