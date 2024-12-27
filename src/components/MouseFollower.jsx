import React, { useEffect, useState } from 'react'

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    let timeoutId

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)
      
      // Check if cursor is over a clickable element
      const target = e.target
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      )

      // Reset the moving state after mouse stops
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsMoving(false), 100)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {/* Main dot cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference
          h-1.5 w-1.5 rounded-full bg-white"
        style={{
          left: position.x - 3,
          top: position.y - 3,
          transform: `scale(${isMoving ? 0.8 : 1}) ${isPointer ? 'scale(1.5)' : ''}`,
        }}
      />

      {/* Circle outline */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference
          h-8 w-8 rounded-full border border-white
          transition-all duration-300 ease-out"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: `scale(${isMoving ? 1.2 : 1}) ${isPointer ? 'scale(1.5)' : ''}`,
          opacity: 0.8,
        }}
      />
    </>
  )
}

export default MouseFollower