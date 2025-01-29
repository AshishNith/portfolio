import React from 'react'
import { motion } from 'framer-motion'

const FloatingShape = () => {
  const generateRandomShape = () => {
    const sizes = ['w-16 h-16', 'w-20 h-20', 'w-24 h-24', 'w-28 h-28', 'w-32 h-32']
    const opacities = ['10', '15', '20', '25', '30']
    const animations = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5']
    
    return {
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: `bg-primary/${opacities[Math.floor(Math.random() * opacities.length)]}`,
      animation: animations[Math.floor(Math.random() * animations.length)]
    }
  }

  const shapes = Array.from({ length: 10 }, () => generateRandomShape())

  // Generate random positions across the entire screen
  const generatePosition = () => {
    return {
      x: Math.random() * 100, // Random percentage across width
      y: Math.random() * 100  // Random percentage across height
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Moving Gradient Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'linear'
        }}
        style={{
          background: 'linear-gradient(45deg, rgba(16, 16, 16, 0.1), rgba(0, 0, 0, 0.1), rgba(16, 16, 16, 0.1))',
          backgroundSize: '200% 200%'
        }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: Math.random() * 1,
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: Math.random() * 2
          }}
          className="absolute w-3 h-3 bg-primary/20 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`
          }}
        />
      ))}

      {/* Sparkling Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.8)',
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShape