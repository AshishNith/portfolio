import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Skills = () => {
  const techStacks = [
    {
      category: "Programming Languages",
      color: "from-blue-500 to-blue-700",
      items: [
        { name: "Python", icon: <i className="ri-python-fill"></i>, level: 90, description: "AI, robotics, and backend development", link: "/projects" },
        { name: "JavaScript", icon: <i className="ri-javascript-fill"></i>, level: 85, description: "Interactive web applications", link: "/projects" },
        { name: "HTML & CSS", icon: <div className="flex gap-2"><i className="ri-html5-fill"></i><i className="ri-css3-fill"></i></div>, level: 88, description: "Responsive web design", link: "/projects" }
      ]
    },
    {
      category: "Frontend Development", 
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
      color: "from-green-500 to-green-700",
      items: [
        { name: "ROS2", icon: <i className="ri-robot-fill"></i>, level: 88, description: "Robotics programming", link: "/projects" },
        { name: "LangChain", icon: <i className="ri-brain-fill"></i>, level: 80, description: "AI chatbots", link: "/projects" },
        { name: "OpenCV", icon: <i className="ri-eye-fill"></i>, level: 85, description: "Computer vision", link: "/projects" }
      ]
    }
  ]

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative group perspective"
    >
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 transform transition-all duration-500 group-hover:shadow-2xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary-light/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">{skill.name}</h3>
          <p className="text-white/70 text-sm mb-4">{skill.description}</p>
          <Link 
            to={skill.link}
            className="inline-block px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary-light rounded-lg transition-all duration-300 text-sm font-medium"
          >
            See My Works <i className="ri-arrow-right-line ml-1"></i>
          </Link>
        </div>
      </div>    
    </motion.div>
  )

  return (
    <section className="min-h-screen relative pt-24 pb-16 overflow-hidden">
      {/* Animated Background */}
      {/* <div className="fixed inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary-light/20 animate-gradient" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary pb-3">
            Tech Stack & Skills
          </h1>
          <p className="text-xl text-white/60 mt-4 max-w-3xl mx-auto">
            Crafting digital experiences at the intersection of robotics, web development, and artificial intelligence
          </p>
        </motion.div>

        {techStacks.map((stack, stackIndex) => (
          <motion.div
            key={stackIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: stackIndex * 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-10 pl-4 border-l-4 border-primary">
              {stack.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stack.items.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
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
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Learning Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="group hover:bg-white/5 p-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-primary/50"
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