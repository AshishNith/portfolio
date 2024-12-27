import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages")

  const techStacks = [
    {
      category: "Programming Languages",
      icon: "ri-code-line",
      color: "from-blue-500 to-blue-700",
      items: [
        { name: "Python", icon: <i className="ri-python-fill"></i>, level: 90, description: "AI, robotics, and backend development", link: "/projects" },
        { name: "JavaScript", icon: <i className="ri-javascript-fill"></i>, level: 85, description: "Interactive web applications", link: "/projects" },
        { name: "HTML & CSS", icon: <div className="flex gap-2"><i className="ri-html5-fill"></i><i className="ri-css3-fill"></i></div>, level: 88, description: "Responsive web design", link: "/projects" }
      ]
    },
    {
      category: "Frontend Development",
      icon: "ri-layout-line",
      color: "from-purple-500 to-purple-700",
      items: [
        { name: "React", icon: <i className="ri-reactjs-fill"></i>, level: 85, description: "Dynamic UI components", link: "/projects" },
        { name: "Tailwind CSS", icon: <i className="ri-code-box-fill"></i>, level: 90, description: "Modern styling", link: "/projects" },
        { name: "GSAP", icon: <i className="ri-animation-fill"></i>, level: 75, description: "Advanced animations", link: "/projects" },
        { name: "Three.js", icon: <i className="ri-cube-line"></i>, level: 70, description: "3D visuals", link: "/projects" }
      ]
    },
    {
      category: "Robotics & AI",
      icon: "ri-robot-line",
      color: "from-green-500 to-green-700",
      items: [
        { name: "ROS2", icon: <i className="ri-robot-fill"></i>, level: 88, description: "Robotics programming", link: "/projects" },
        { name: "LangChain", icon: <i className="ri-brain-fill"></i>, level: 80, description: "AI chatbots", link: "/projects" },
        { name: "OpenCV", icon: <i className="ri-eye-fill"></i>, level: 85, description: "Computer vision", link: "/projects" }
      ]
    }
  ]

  const SkillCard = ({ skill }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative perspective h-[300px]"
    >
      <div className="skill-card-content relative transform transition-transform duration-500 preserve-3d hover:rotate-y-180 h-full">
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="glass-dark rounded-2xl p-6 h-full border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-5xl text-primary mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-white/60">{skill.description}</p>
            </div>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-white/60">Proficiency</div>
                  <div className="text-xs text-primary font-bold">{skill.level}%</div>
                </div>
                <div className="overflow-hidden h-1 text-xs flex rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary to-primary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="glass-dark rounded-2xl p-6 h-full border border-white/10 flex flex-col justify-center items-center">
            <Link 
              to={skill.link}
              className="text-primary hover:text-primary-light transition-colors text-center"
            >
              <i className="ri-folder-line text-4xl mb-4 block"></i>
              <span className="text-lg font-bold">View Related Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="min-h-screen relative pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary pb-3">
            Skills & Expertise
          </h1>
          <p className="text-xl text-white/60 mt-4 max-w-3xl mx-auto">
            Explore my technical journey through various domains
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {techStacks.map((stack) => (
            <button
              key={stack.category}
              onClick={() => setActiveCategory(stack.category)}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                activeCategory === stack.category
                  ? 'bg-primary text-white'
                  : 'glass-dark text-white/60 hover:text-white'
              }`}
            >
              <i className={stack.icon}></i>
              {stack.category}
            </button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        {techStacks.map((stack) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeCategory === stack.category ? 1 : 0,
              display: activeCategory === stack.category ? 'block' : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stack.items.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <div className="glass-dark rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <i className="ri-road-map-line text-primary"></i>
              Learning Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Inverse Kinematics", desc: "Mastering precise robotic arm movement and control", icon: "ri-robot-2-fill" },
                { title: "Advanced React", desc: "Deepening frontend development expertise", icon: "ri-code-s-slash-fill" },
                { title: "Full Stack Development", desc: "Building end-to-end web applications", icon: "ri-stack-fill" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <i className={`${item.icon} text-3xl text-primary group-hover:scale-110 transition-transform duration-300 block mb-4`}></i>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills