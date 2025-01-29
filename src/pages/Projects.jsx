import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { projects } from '../data/data'
// import FloatingShape from '../components/FloatingShape'
import { FaFilter } from 'react-icons/fa'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Web', 'Robotics', 'ML/AI']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <section className="min-h-screen relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Header Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="lg:text-6xl text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="lg:text-lg text-white/60 max-w-2xl mx-auto">
              Explore my journey through code, from web applications to robotics projects
            </p>
          </motion.div>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-2
                  ${selectedCategory === category 
                    ? 'bg-primary/20 text-primary border border-primary/50 shadow-lg shadow-primary/20' 
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:shadow-lg'
                  }`}
              >
                <FaFilter className={`text-sm ${selectedCategory === category ? 'rotate-180' : ''} transition-transform`} />
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid - Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>


      </section>
    </>
  )
}

export default Projects
