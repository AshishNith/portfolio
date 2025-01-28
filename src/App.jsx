import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import MouseFollower from './components/MouseFollower'
import Footer from './components/Footer'
import Skills from './pages/Skills'
import ChatBot from './components/ChatBot'
import FloatingShape from './components/FloatingShape'



const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
      <FloatingShape />

        <MouseFollower />
        <ChatBot />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
