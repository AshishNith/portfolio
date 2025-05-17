import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion, LayoutGroup } from 'framer-motion'
import { projects } from '../data/data'
// import { FaFilter } from 'react-icons/fa'
// import { BiCategory } from 'react-icons/bi'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Web', 'Robotics', 'ML/AI']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="min-h-screen relative pt-24 pb-16 bg-[#0A0A0A]">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[130px] animate-pulse delay-1000" />
        
        {/* Mesh Grid */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-purple-400">
              Creative Projects
            </h1>
            <p className="text-lg text-white/60 mb-12">
              Explore my journey through code and creativity
            </p>
          </motion.div>

          {/* Category Pills with Glass Effect */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 p-4 rounded-2xl backdrop-blur-sm bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm transition-all
                  ${selectedCategory === category 
                    ? 'bg-primary text-white font-medium' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid with Glass Effect */}
        <div className="container mx-auto px-4">
          <LayoutGroup>
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  )
}

export default Projects
