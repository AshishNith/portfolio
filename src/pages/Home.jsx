import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AboutSection from '../components/Home/AboutSection'
import Hero from '../components/Home/Hero'
import LatestProjects from '../components/Home/LatestProjects'

const Home = () => {

  return (
    <>
      
      <Hero />

      <AboutSection />
      
      <LatestProjects />
    </>
  )
}

export default Home