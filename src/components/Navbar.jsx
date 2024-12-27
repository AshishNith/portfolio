import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiHome2Line, RiUser3Line, RiCodeLine, RiMenuLine, RiCloseLine, RiToolsFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 500); // Delay before showing the name

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home page first
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavIcon = ({ icon: Icon, label, onClick, to }) => {
    const Component = to ? Link : 'button';
    return (
      <Component
        to={to}
        onClick={onClick}
        className="group relative text-white/80 hover:text-white text-xl transition-colors hover:bg-white/10 p-2 rounded-lg"
      >
        <Icon />
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
          {label}
        </span>
      </Component>
    );
  };

  return (
    <>
      <div className="fixed top-6 w-full px-4 z-[50] flex justify-between">
        {/* Left Navigation */}
        <nav className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 px-4 relative overflow-hidden">
          <div className="flex items-center h-12">
            <Link 
              to="/" 
              className="text-2xl font-bold text-white hover:text-white/80 transition-colors group relative"
            >
              <AnimatePresence>
                {showName && (
                  <>
                    {/* Animated background glow */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 blur-lg"
                    />
                    
                    {/* Animated letters */}
                    <motion.span
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative"
                    >
                      A
                    </motion.span>
                    <motion.span
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative"
                    >
                      R
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
              
              {/* Tooltip */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
              >
                Home
              </motion.span>
            </Link>
          </div>
        </nav>

        {/* Right Navigation */}
        <nav className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 px-4">
          <div className="flex items-center h-12">
            {/* Desktop Right Icons */}
            <div className="hidden md:flex space-x-6">
              <NavIcon 
                icon={RiHome2Line} 
                label="Home" 
                onClick={() => {
                  if (window.location.pathname === '/') {
                    scrollToSection('HomePage');
                  } else {
                    window.location.href = '/#HomePage';
                  }
                }}
              />
              <NavIcon 
                icon={RiUser3Line} 
                label="About" 
                // onClick={() => {
                //   if (window.location.pathname === '/') {
                //     scrollToSection('about');
                //   } else {
                //     window.location.href = '/#about';
                //   }
                // }}
                to="/about"
              />
              <NavIcon 
                icon={RiCodeLine} 
                label="Projects" 
                to="/projects"
              />
              <NavIcon 
                icon={RiToolsFill} 
                label="Skills" 
                to="/skills"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-white/80 p-2 rounded-md transition-all hover:bg-white/10"
              >
                {isOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenuLine className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 right-4 md:hidden bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 w-48">
            <div className="p-2 space-y-1">
              <MobileNavLink 
                icon={RiHome2Line}
                label="Home"
                onClick={() => {
                  setIsOpen(false);
                  if (window.location.pathname === '/') {
                    scrollToSection('HomePage');
                  } else {
                    window.location.href = '/#HomePage';
                  }
                }}
              />
              <MobileNavLink 
                icon={RiUser3Line}
                label="About"
                onClick={() => {
                  setIsOpen(false);
                  if (window.location.pathname === '/') {
                    scrollToSection('about');
                  } else {
                    window.location.href = '/#about';
                  }
                }}
              />
              <MobileNavLink 
                icon={RiCodeLine}
                label="Projects"
                to="/projects"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink 
                icon={RiToolsFill}
                label="Skills"
                to="/skills"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const MobileNavLink = ({ icon: Icon, label, to, onClick }) => {
  const Component = to ? Link : 'button';
  return (
    <Component
      to={to}
      onClick={onClick}
      className="w-full flex items-center text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-lg transition-colors"
    >
      <Icon className="mr-3" /> {label}
    </Component>
  );
};

export default Navbar;
