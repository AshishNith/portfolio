import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaClock, FaUsers, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Add body scroll lock when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  // Handle modal close
  const handleCloseModal = (e) => {
    if (e) e.stopPropagation()
    setShowModal(false)
  }

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }

    if (showModal) {
      window.addEventListener('keydown', handleEsc)
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [showModal])

  return (
    <>
       <div 
        className="group bg-white/5 backdrop-blur-sm relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300"
        onClick={() => setShowModal(true)}
      >
        {/* Image Section */}
        <div className="relative aspect-[4/3] backdrop-blur-sm p-3 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Title and Status */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-500' 
                : 'bg-yellow-500/20 text-yellow-500'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm mb极4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white极5 hover:bg-white/10 text-white/80 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <FaGithub className="text-sm" />
              <span className="text-sm">Code</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-white border border-primary/50 transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span className="text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>


      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999] overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
              onClick={handleCloseModal}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                {/* Modal Content */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-[95%] max-w-4xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-white/80 hover:text-white text-xl z-[1000] bg-black/20 p-2 rounded-full backdrop-blur-md hover:bg-primary/20 transition-all duration-300"
                    aria-label="Close modal"
                  >
                    <FaTimes />
                  </button>

                  {/* Modal Content */}
                  <div className="max-h-[85vh] overflow-y-auto">
                    {/* Hero Section */}
                    <div className="relative h-80">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Project Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                        <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-white/80 mb-8 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                          <FaCheckCircle className="text-primary text-xl" />
                          <div>
                            <h3 className="text-white font-medium">Status</h3>
                            <p className="text-primary">{project.status}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                          <FaClock className="text-primary text-xl" />
                          <div>
                            <h3 className="text-white font-medium">Duration</h3>
                            <p className="text-white/80">{project.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap极3 bg-white/5 p-4 rounded-xl">
                          <FaUsers className="text-primary text-xl" />
                          <div>
                            <h3 className="text-white font-medium">Team Size</h3>
                            <p className="text-white/80">{project.teamSize} Developer{project.teamSize > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-4 py-2 rounded-full bg-white/5 text-white/80 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                        >
                          <FaGithub className="group-hover:rotate-12 transition-transform" /> 
                          View Code
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 hover:bg-primary/30 text-white border border-primary/50 transition-all duration-300 group"
                          >
                            <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard 