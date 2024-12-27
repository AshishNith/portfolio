import React from 'react'

const AnimatedShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="sphere sphere-1"></div>
      <div className="sphere sphere-2"></div>
      <div className="sphere sphere-3"></div>
      <div className="sphere sphere-4"></div>
      <div className="sphere sphere-5"></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[120px]"></div>
    </div>
  )
}

export default AnimatedShapes 