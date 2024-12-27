import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [currentInput, setCurrentInput] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const messagesEndRef = useRef(null)

  const questions = [
    "Hi there! I am Mr Ranjan's AI Assistant.  👋 Can I know your Name Please?",
    "Nice to meet you! What's your email address?",
    "What would you like to discuss?",
    "Thanks for sharing! I'll get back to you soon. Is there anything else you'd like to add?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ type: 'bot', text: questions[0] }])
    }
    scrollToBottom()
  }, [isOpen, messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    // Add user message
    const newMessages = [...messages, { type: 'user', text: currentInput }]
    
    // Add bot response if there are more questions
    if (currentQuestion < questions.length - 1) {
      newMessages.push({ type: 'bot', text: questions[currentQuestion + 1] })
      setCurrentQuestion(currentQuestion + 1)
    }
    
    setMessages(newMessages)
    setCurrentInput('')
  }

  return (
    <>
      {/* Chat Toggle Button with Rotating Text */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Rotating Text */}
          <div className="rotating-text-container absolute -inset-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="9">
                <textPath href="#circle" className="rotating-text">
                  • CHAT WITH ME • CHAT WITH ME • 
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Chat Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-transparent rounded-full shadow-lg flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors duration-300"
          >
            <i className="ri-wechat-line text-3xl text-white"></i>
          </button>
        </div>
      </div>

      {/* Updated Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] glass-dark rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/20 to-transparent backdrop-blur-sm border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <FaRobot className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Chat with Me</h3>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <FaTimes className="text-white/60" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[calc(100%-128px)] overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-primary/20' 
                      : 'bg-white/10'
                  }`}>
                    {message.type === 'user' ? (
                      <FaUser className="text-primary text-sm" />
                    ) : (
                      <FaRobot className="text-white text-sm" />
                    )}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-primary text-white ml-auto rounded-tr-none' 
                      : 'glass-dark text-white/90 rounded-tl-none'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSubmit}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/50 placeholder:text-white/30"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
