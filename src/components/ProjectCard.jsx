import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false)
  
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
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
      >
        <div onClick={() => setShowModal(true)} className="cursor-pointer">
          {/* Image with Overlay */}
          <div className="relative h-48">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            
            {/* Project Status */}
            <span className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full backdrop-blur-sm
              ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
              {project.status}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              >
                <FaGithub size={14} /> Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-primary/20 hover:bg-primary/30 text-white transition-all duration-300"
                >
                  <FaExternalLinkAlt size={14} /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl rounded-xl overflow-hidden bg-white/10 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white/80 hover:text-white"
              >
                <FaTimes />
              </button>

              <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-white/80 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-white transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard