import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaHeart, FaCode, FaRobot } from 'react-icons/fa'
import { socialLinks } from '../data/data'

const Footer = () => {
  const handleChatToggle = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle()
    }
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#", onClick: handleChatToggle },
  ]

  return (
    <footer id='footer' className="relative z-[20] mt-auto overflow-hidden border-t border-white/10">
      {/* Animated background shapes */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-light/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-primary-dark/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div> */}

      <div  className="relative z-10 backdrop-blur-xl bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo and tagline with animation */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaRobot className="text-4xl text-primary " />
              <h2 className="text-3xl font-bold text-white">Ashish Ranjan</h2>
              <FaCode className="text-4xl text-primary " />
            </div>
            <p className="text-white/60 max-w-xl mx-auto">
              An Engineer who crafts innovative solutions at the intersection of hardware and software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4 group">
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
                <p className="text-white/60">
Driven by a passion for developing innovative technologies that merge creativity, functionality, and impact across diverse fields.                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="transform hover:translate-x-2 transition-transform">
                      <a
                        href={link.href}
                        onClick={link.onClick}
                        className="text-white/60 hover:text-primary transition-colors cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                <div className="flex gap-4 mb-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-primary text-xl transition-all hover:scale-125 hover:-rotate-[360deg] duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:ranjan.ashish9992@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-all group cursor-pointer"
                >
                  <FaEnvelope className="group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:underline">Mail@AshishRanjan</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Ashish Ranjan. All rights reserved.
              </p>
              <p className="text-white/60 text-sm flex items-center gap-2 group">
                Crafted with passion by Ashish Ranjan <FaHeart className="text-red-500 group-hover:scale-125 transition-transform" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 