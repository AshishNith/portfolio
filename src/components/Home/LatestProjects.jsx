import { projects } from '../../data/data'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LatestProjects = () => {
  // Get first 3 projects
  const latestProjects = projects.slice(0, 3)

  return (
      <div>
          <section className="relative py-20 overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#EC4899]">
                Latest Projects
              </h2>
              <p className="text-white/60 mt-4">
                Check out some of my recent work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {latestProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/5 group-hover:from-white/15 transition-all duration-300" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-white/20 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <Link to="/projects" className="inline-block px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 rounded-full backdrop-blur-lg border border-white/10 hover:border-[#6D28D9]/50 transition-all duration-300 cursor-pointer group">
                <span className="text-white/80 group-hover:text-white transition-colors">
                  View More Projects <i className="ri-arrow-right-line ml-2 inline-block group-hover:translate-x-1 transition-transform"></i>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestProjects