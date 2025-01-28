import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6'

// export const featuredProjects = [
//     {
//       title: "Autonomous Mobile Robot",
//       description: "ROS2-based autonomous navigation system with SLAM and computer vision capabilities.",
//       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
//       tags: ["ROS2", "Python", "Navigation"],
//     },
//     {
//       title: "Portfolio Website",
//       description: "Modern portfolio with React, featuring smooth animations and glassmorphism design.",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
//       tags: ["React", "Tailwind", "JavaScript"],
//     },
//     {
//       title: "ML Weather Prediction",
//       description: "Machine learning model to predict weather patterns using historical data.",
//       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
//       tags: ["Python", "TensorFlow", "ML"],
//     },
// ]
  
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
    demo: "https://roboweek3.vercel.app/",
    image: "src/assets/Skills/Roboweek.png",
    status: "Completed",
    duration: "1 month",
    teamSize: 2
  },
  {
    title: "Robotics Society Website",
    description: "Developed the official website for RoboSoc NIT Hamirpur, the robotics society of NIT Hamirpur, using React and modern web technologies. The website showcases society activities, events, and member information.",
    category: "Web",
    technologies: ["React", "Markdown", "Tailwind CSS", "Responsive Design", "Git"],
    github: "https://github.com/AshishNith/RoboticsReactApp",
    demo: "https://robotics-docs.vercel.app/",
    image: "src/assets/Robosoc.png",
    status: "Completed",
    duration: "2 weeks",
    teamSize: 1
  }, {
    title: "Portfolio Website",
    description: "Developed my personal portfolio website to showcase my skills, projects, and achievements. Built using React and modern web technologies with a focus on clean design and smooth animations.",
    category: "Web",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design", "Git"],
    github: "https://github.com/AshishNith/portfolio",
    demo: "https://ashishnith.vercel.app/",
    image: "src/assets/Portfolio.png",
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
    image: "src/assets/Gesture.jpeg",
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
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
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
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
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
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Robotics Documentation Website",
    description: "Developed a comprehensive documentation website for robotics projects, providing resources, tutorials, and guides for enthusiasts and developers.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ashishnith/Robotics-Documentation-Website",
    demo: "https://ashishnith.github.io/Robotics-Documentation-Website/",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    status: "Completed",
    duration: "2 months",
    teamSize: 1
  },
  {
    title: "Boston Dynamics UI Clone",
    description: "Created a user interface clone of the Boston Dynamics website to practice and showcase front-end development skills.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ashishnith/Boston-Dynamics-UI-Clone",
    demo: "https://ashishnith.github.io/Boston-Dynamics-UI-Clone/",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
    status: "Completed",
    duration: "1 month",
    teamSize: 1
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, dynamic content loading, and interactive elements.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ashishnith/MyWebsite",
    demo: "https://ashishnith.github.io/MyWebsite/",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    status: "Completed",
    duration: "2 months",
    teamSize: 1
  },
  {
    title: "Task Manager Using Flask",
    description: "Developed a task management application using Flask, allowing users to create, update, and delete tasks with a user-friendly interface.",
    category: "Web",
    technologies: ["Flask", "Python", "SQLite"],
    github: "https://github.com/ashishnith/Task-Manager-Using-Flask",
    demo: "",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
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
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
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
    description: "Created a custom flight controller for a quadcopter drone using Arduino and IMU sensors. Implemented PID control algorithms for stable flight and autonomous hovering capabilities.",
    category: "Robotics",
    technologies: ["Arduino", "C++", "PID Control", "Sensors", "IMU"],
    github: "https://github.com/ashishnith/Drone-Flight-Controller",
    demo: "",
    image: "https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg",
    status: "Completed",
    duration: "5 months",
    teamSize: 3
  } ]
