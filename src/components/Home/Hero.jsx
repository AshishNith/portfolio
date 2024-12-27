import { Link } from 'react-router-dom'
import { FaArrowDown, FaArrowRight, FaDownload } from 'react-icons/fa6'
import { socialLinks } from '../../data/data'
import CV from '../../assets/My_CV.pdf'

const Hero = () => {
    
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    window.open(CV, '_blank')
  }

  return (
           <div id='HomePage' className='w-screen h-screen relative border-b-2 border-gray-700'>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center bg-black/80">
          <h1 id='HomePageName' className='text-[200px] text-white/10 font-sans font-bold'>
            Ashish Ranjan
          </h1>
          <pre className='text-4xl text-white/80 font-sans font-bold tracking-wider mt-4'>
            Robotics Engineer  |  Web Developer  |  AI/ML Enthusiast
          </pre>
          <div className="mt-12 flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-3xl transition-all hover:scale-125 hover:rotate-[360deg] duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="mt-12 flex gap-6">
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <FaDownload className="animate-bounce" /> Download CV
            </button>
            <Link
              to="/projects"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              My Works <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button 
            onClick={scrollToAbout}
            className="absolute bottom-10 text-white/60 hover:text-white text-4xl animate-bounce hover:bg-white/5 hover:scale-125 p-4 rounded-full transition-all duration-300"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>

  )
}

export default Hero