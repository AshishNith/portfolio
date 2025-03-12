import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6'
  
export const experiences = [
  {
    title: "Executive",
    company: "Robotics Society NIT Hamirpur",
    period: "Jun 2023 - Present",
    description: "Working on ROS2 based autonomous navigation systems and developing web interfaces for robot control."
  },
  {
    title: "Volunteer",
    company: "Robotics Society NIT Hamirpur",
    period: "Dec 2023 - Jun 2024",
    description: "Developed responsive web applications using React and modern web technologies."
  }
];

export const education = [
  {
    degree: "B.Tech in Mechanical Engineering",
    school: "NIT Hamirpur",
    period: "2023 - 2027",
    description: "Mechanical Engineering with a focus on Robotics and Automation."
  },
  {
    degree: "Schooling",
    school: "TCS Chakia",
    period: "2010 - 2022",
    description: "Focused on Physics, Mathematics, and Computer Science."
  }
];

export const achievements = [
  {
    title: "Conducted Workshop",
    organization: "Robotics Society NIT Hamirpur",
    description: "Conducted a workshop on Gesture Controlled bot for the Robotics Society NIT Hamirpur | Over 500+ students attended the workshop."
  },
  {
    title: "Won 1st Prize in District Level Science Exhibition",
    organization: "TCS Chakia",
    description: "Won 1st Prize in the District Level Science Exhibition | Over 100+ teams participated."
  }
];

export const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/AshishNith", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/fictech/", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://x.com/AshishR9992", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/ig_ashish.ranjan/", label: "Instagram" },
];

export const projects = [
  {
    title: "Roboweek 3.0 Website",
    description: "Developed the official website for Roboweek 3.0, a robotics event at NIT Hamirpur, using React and modern web technologies. The website features event information, registration, and team details.",
    category: "Web",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Git"],
    github: "https://github.com/AshishNith/Roboweek-3.0---Frontend",
    demo: "https://roboweek3.com/",
    image: "https://i.ibb.co/VWMTGyW3/Roboweek.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 2
  },
  {
    title: "The Sapphire Retreat",
    description: "Developed a full-stack hotel booking platform with advanced search and filtering capabilities. The platform features user authentication, room management, and booking system with payment integration.",
    category: "Web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "REST API"],
    github: "https://github.com/AshishNith/The-Sapphire-Retreat",
    demo: "https://the-sapphire-retreat.vercel.app/",
    image: "https://i.ibb.co/fdNVk5GH/Hotel.png",
    status: "Completed",
    duration: "-- -- --",
    teamSize: 3
  },
  {
    title: "Robotics Society Website",
    description: "Developed the official website for RoboSoc NIT Hamirpur, the robotics society of NIT Hamirpur, using React and modern web technologies. The website showcases society activities, events, and member information.",
    category: "Web",
    technologies: ["React", "Markdown", "Tailwind CSS", "Responsive Design", "Git"],
    github: "https://github.com/AshishNith/RoboticsReactApp",
    demo: "https://robosoc-nith.vercel.app/",
    image: "https://i.ibb.co/27d5dFp8/Robosoc.png",
    status: "In Progress",
    duration: "2 weeks",
    teamSize: 1
  },
  {
    title: "Portfolio Website",
    description: "Developed my personal portfolio website to showcase my skills, projects, and achievements. Built using React and modern web technologies with a focus on clean design and smooth animations.",
    category: "Web",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design", "Git"],
    github: "https://github.com/AshishNith/portfolio",
    demo: "https://portfolio-ashish9992.vercel.app/",
    image: "https://i.ibb.co/Z6TRJyyG/Portfolio.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Gesture Controlled Robot",
    description: "Created a gesture-controlled robot using Arduino and Python. The bot is controlled via hand gestures detected by an OpenCV-based interface, enabling intuitive and wireless operation.",
    category: "Robotics",
    technologies: ["Arduino", "Python", "OpenCV", "Wireless Communication"],
    github: "https://github.com/ashishnith/Gesture-Controlled-Robot",
    demo: "https://gesture-bot-demo.com",
    image: "https://i.ibb.co/rft5dJ68/Gesture.jpg",
    status: "Completed",
    duration: "3 months",
    teamSize: 3
  },
  {
    title: "Surgical Robotic Arm",
    description: "Working on a surgical robotic arm project focusing on precision and inverse kinematics for movement control. The project aims to create a versatile tool for medical applications.",
    category: "Robotics",
    technologies: ["ROS2", "Python", "Inverse Kinematics", "Mechatronics"],
    github: "https://github.com/ashishnith/Surgical-Robotic-Arm",
    demo: "",
    image: "https://i.ibb.co/chn337Jk/Robotic-Arm.jpg",
    status: "In Progress",
    duration: "Ongoing",
    teamSize: 5
  },
  {
    title: "Joystick to Turtle Control",
    description: "Developed a ROS2-based project to control TurtleSim using a physical joystick, implementing a custom ROS2 node for joystick input processing and turtle movement control. The project demonstrates real-time teleoperation and simulation control in robotics.",
    category: "Robotics",
    technologies: ["ROS2 Humble", "Python", "Joystick Integration", "TurtleSim", "Teleoperation"],
    github: "https://github.com/AshishNith/Joystick_to_Turtle_control",
    demo: "",
    image: "https://i.ibb.co/PzrNBQYQ/Turtle.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Turtle Follow",
    description: "Implemented a ROS2 project where a TurtleSim turtle follows a designated path or another turtle, demonstrating path planning and following algorithms.",
    category: "Robotics",
    technologies: ["ROS2", "Python", "Path Planning"],
    github: "https://github.com/ashishnith/Turtle_Follow",
    demo: "",
    image: "https://i.ibb.co/PzrNBQYQ/Turtle.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Ranjan's Documentation Website",
    description: "Developed a comprehensive documentation website for Ranjan's projects and research, featuring organized content, search functionality, and responsive design.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/AshishNith/Ranjan-s_Docs",
    demo: "https://ashishnith.github.io/Ranjan-s_Docs/",
    image: "https://i.ibb.co/qQyd9T6/Docs.png",
    status: "Completed",
    duration: "2 months",
    teamSize: 1
  },
  {
    title: "Boston Dynamics UI Clone",
    description: "Developed a responsive UI clone of Boston Dynamics' official website using modern web technologies. The project focuses on replicating the sleek design and smooth animations of the original site while implementing custom features.",
    category: "Web",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Animations"],
    github: "https://github.com/AshishNith/Boston-Dynamics_UI-clone",
    demo: "https://ashishnith.github.io/Boston-Dynamics_UI-clone/",
    image: "https://i.ibb.co/SDqc9gYZ/Boston.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Task Manager Using Flask",
    description: "Developed a robust task management application using Django framework, featuring user authentication, CRUD operations, and a responsive interface for efficient task management.",
    category: "Web",
    technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "Authentication"],
    github: "https://github.com/AshishNith/TaskManager--Django",
    demo: "",
    image: "https://i.ibb.co/Z1fP4vqX/Task.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Line Follower Bot",
    description: "Built a robot capable of following a line path using sensor inputs and microcontroller programming, demonstrating basic robotics and automation principles.",
    category: "Robotics",
    technologies: ["Arduino", "C++", "Sensors"],
    github: "https://github.com/ashishnith/Line-Follower-Bot",
    demo: "",
    image: "https://i.ibb.co/ZzVK6396/Line.jpg",
    status: "Completed",
    duration: "2 months",
    teamSize: 2
  },
  {
    title: "Smart Home Automation System",
    description: "Developed an IoT-based home automation system using Raspberry Pi and Arduino. Features include remote control of appliances, temperature monitoring, and security system integration.",
    category: "IoT",
    technologies: ["Raspberry Pi", "Arduino", "IoT", "Python", "MQTT"],
    github: "https://github.com/ashishnith/Smart-Home-Automation",
    demo: "",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    status: "Completed",
    duration: "4 months",
    teamSize: 2
  },
  {
    title: "Drone Flight Controller",
    description: "Created a custom flight controller for a quadcopter drone using Arduino and MPU sensors. Implemented PID control algorithms for stable flight and autonomous hovering capabilities.",
    category: "Robotics",
    technologies: ["Arduino", "C++", "PID Control", "Sensors", "IMU"],
    github: "https://github.com/ashishnith/Drone-Flight-Controller",
    demo: "https://docs.google.com/document/d/1JEvM-cBXsihdNlWLUmdRNljJgKbOO4f0CUudsRtk4ak/edit?usp=sharing",
            image: "https://i.ibb.co/RkNTgDt6/Drone.png",
    status: "Completed",
    duration: "5 months",
    teamSize: 3
  },
  {
    title: "JavaScript Projects Collection",
    description: "A curated collection of JavaScript projects showcasing various concepts and techniques, including DOM manipulation, API integration, and interactive web applications.",
    category: "Web",
    technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "API Integration"],
    github: "https://github.com/AshishNith/JS_Projects",
    demo: "",
            image: "https://i.ibb.co/spXs0wQt/js.png",
    status: "Completed",
    duration: "3 months",
    teamSize: 1
  },


]
