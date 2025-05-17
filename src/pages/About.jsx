import React from 'react'
import { motion } from 'framer-motion'
import { experiences, education, achievements } from '../data/data'
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa'
import profileImage from "../assets/profileImage.jpeg"

const About = () => {
  return (
    <section className="min-h-screen relative pt-24 pb-16">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20"
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative group w-72 h-72"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-purple-600 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                <img
                  // src="https://i.ibb.co/Q7qrsT6w/7eb1096a-b393-4c2a-8255-b435fe89896b.jpg"
                  src={profileImage}
                  alt="Ashish Ranjan"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl text-white font-bold">
                  About <span className="text-primary">Me</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                I am currently undertaking a B.Tech in Mechanical Engineering at the esteemed National Institute of Technology Hamirpur, where I am immersing myself in the world of innovation. With a robust proficiency in a diverse array of programming languages and frameworks, my expertise includes Python, AI-ML, ROS, Arduino, as well as Cybersecurity and Ethical Hacking. I'm passionate about leveraging these skills to push the boundaries of technology and create impactful solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["ROS2", "React", "Python", "AI/ML", "Web Development", "Robotics"].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 
                        text-white/80 hover:bg-primary/20 hover:border-primary/50 
                        transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Timeline Sections */}
          <div className="space-y-24">
            {/* Experience Section */}
            <TimelineSection
              title="Experience"
              icon={<FaBriefcase className="text-3xl text-primary" />}
              items={experiences}
            />

            {/* Education Section */}
            <TimelineSection
              title="Education"
              icon={<FaGraduationCap className="text-3xl text-primary" />}
              items={education}
              type="education"
            />

            {/* Achievements Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <FaTrophy className="text-3xl text-primary" />
                <h2 className="text-4xl font-bold">Achievements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                      hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-primary mb-4">{achievement.organization}</p>
                    <p className="text-white/70">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Timeline Section Component
const TimelineSection = ({ title, icon, items, type = 'experience' }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center gap-4 mb-12">
      {icon}
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-7 top-3 w-3 h-3 rounded-full bg-primary" />
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
              hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                {type === 'education' ? item.degree : item.title}
              </h3>
              <p className="text-primary text-lg mb-2">
                {type === 'education' ? item.school : item.company}
              </p>
              <p className="text-sm text-white/60 mb-4">{item.period}</p>
              <p className="text-white/70">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
)

export default About
