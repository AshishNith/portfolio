import React from 'react'
import { motion } from 'framer-motion'
import { experiences, education, achievements } from '../data/data'
import profile from '../assets/Profile.jpeg'

const About = () => {
  return (
    <section className="min-h-screen relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative text-center mb-16">
            <motion.h1 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-extrabold"
            >
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary-dark text-transparent bg-clip-text">
                About Me
              </span>
            </motion.h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary-light"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative group">
                {/* Animated border gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                
                {/* Image container */}
                <div className="relative w-72 h-72 mx-auto rounded-full p-2">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <img
                    src={profile}
                    alt="Ashish Ranjan"
                    className="relative rounded-full w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text"
              >
                Ashish Ranjan
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/80 mb-8"
              >
                I'm a passionate Robotics Engineer and Web Developer with a keen interest in creating innovative solutions that bridge the gap between hardware and software. Currently pursuing B.Tech in Mechanical Engineering at NIT Hamirpur, I specialize in robotics, web development, and artificial intelligence.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center md:justify-start gap-3"
              >
                {["ROS2", "React", "Python", "AI/ML"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Sections */}
        <div className="space-y-24">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">Experience</h2>
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-transparent" />
            
            {experiences.map((exp, index) => (
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'gap-8' : 'gap-8 md:flex-row-reverse'} mb-12`}
              >
                <div className="md:w-1/2" />
                <div className="relative md:w-1/2 bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-auto transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-white/60 mb-4">{exp.period}</p>
                  <p className="text-white/80">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">Education</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  key={index} 
                  className="group relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur" />
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.school}</p>
                  <p className="text-sm text-white/60 mb-4">{edu.period}</p>
                  <p className="text-white/80">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  key={index} 
                  className="relative overflow-hidden bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-primary mb-4">{achievement.organization}</p>
                  <p className="text-white/80">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
