import React from 'react'
import { motion } from 'framer-motion'

const FloatingShape = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className={`
            w-${Math.floor(Math.random() * 32 + 16)} 
            h-${Math.floor(Math.random() * 32 + 16)}
            border-2 border-white/10
            ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-lg'}
          `}
          style={{
            background: `linear-gradient(45deg, 
              rgba(255,105,180,${Math.random() * 0.1}),
              rgba(123,104,238,${Math.random() * 0.1}))`,
            backdropFilter: 'blur(4px)',
            boxShadow: `0 0 40px rgba(255,255,255,${Math.random() * 0.1})`
          }}
          />
        </motion.div>
      ))}

      {/* Aurora Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(123,104,238,0.1), transparent 60%), radial-gradient(circle at 30% 70%, rgba(255,105,180,0.1), transparent 60%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Particle Effect */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 4px rgba(255,255,255,0.5)'
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShape