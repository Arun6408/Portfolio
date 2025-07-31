'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Monitor, Code, Cpu, Zap, MessageSquare, Dice3, Car, Fingerprint } from 'lucide-react'

const Projects = () => {
const cseProjects = [
  {
    title: "RiseEd",
    level: "Advanced",
    description: "Comprehensive schooling app for managing attendance, fees, e-books, and user roles for admins, teachers, and students.",
    features: [
      "Attendance and fee management",
      "E-books and user role management",
      "Admin, teacher, and student dashboards"
    ],
    technologies: ["Next.js", "PostgreSQL", "NeonDB", "Tailwind CSS", "Express", "Node.js"],
    github: "https://github.com/Arun6408/RiseEd",
    demo: "https://rised.vercel.app/",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-green-500 to-blue-500"
  },
  {
    title: "2D Ear Recognition",
    level: "Advanced",
    description: "Deep learning-based biometric identification system that detects known and unknown individuals using ear images with robust metric learning and open-set recognition techniques.",
    features: [
      "TripletNet with EfficientNet backbone",
      "Unknown identity detection using ensemble methods",
      "Evaluation via accuracy, F1-score, and t-SNE visualization"
    ],
    technologies: ["PyTorch", "EfficientNet", "Triplet Loss", "Scikit-learn", "One-Class SVM", "t-SNE"],
    github: "https://github.com/Arun6408/2D-Ear-Recognition-using-Deep-Learning",
    demo: "",
    ppt:"https://docs.google.com/presentation/d/1hi0O0L2HzJYRhG59-IBNB-L2bR2pFPF9/edit?usp=sharing&ouid=108747577891052801435&rtpof=true&sd=true",
    icon: <Fingerprint className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "TextForgeAI",
    level: "Advanced",
    description: "Full-stack AI content creation platform leveraging Gemini API with pre-built templates, user authentication (Clerk), and Razorpay-based payments.",
    features: [
      "Pre-built content templates for rapid creation",
      "User authentication and payment integration",
      "Gemini API for AI-powered content generation"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "NeonDB", "Drizzle ORM", "Gemini API"],
    github: "https://github.com/Arun6408/TextForgeAI",
    demo: "https://textforgeai.vercel.app/",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Chess Game",
    level: "Intermediate",
    description: "Terminal-based chess game in C++ with complete rule logic, move validation, and detection of check, checkmate, and draw.",
    features: [
      "Move validation and turn handling",
      "Check, checkmate, and draw detection",
      "C++ implementation with clean code"
    ],
    technologies: ["C++", "Git"],
    github: "https://github.com/Arun6408/Chess-cpp",
    demo: null,
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "RideEase",
    level: "Intermediate",
    description: "Taxi booking app with Google Maps integration and secure authentication using Clerk. Supports multiple car types and payment options.",
    features: [
      "Easy taxi booking with location map",
      "Google authentication and payment gateway",
      "Mapbox integration with live location"
    ],
    technologies: ["Next.js", "Tailwind", "Mapbox", "Vercel", "Clerk", "Google Auth", "Payment Gateway"],
    github: "https://github.com/Arun6408/taxi-booking-app",
    demo: "https://taxi-booking-app-delta.vercel.app/",
    icon: <Car className="w-8 h-8" />,
    color: "from-yellow-400 to-green-500"
  },
  {
    title: "Dice Game",
    level: "Beginner",
    description: "Simple dice game with fun rules and random dice rolls for two players.",
    features: [
      "Basic game logic with random dice rolls",
      "Score tracking for players",
      "Simple and interactive UI"
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Arun6408/Dice-Game",
    demo: "https://dice-game-tau-ochre.vercel.app/",
    icon: <Dice3 className="w-8 h-8" />,
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Buzz Chat",
    level: "Intermediate",
    description: "Real-time chat application with live message updates using WebSockets.",
    features: [
      "Live chatting with instant message delivery",
      "User-friendly interface for messaging",
      "WebSocket-based real-time functionality"
    ],
    technologies: ["Node.js", "Socket.io", "Express", "React", "WebSockets"],
    github: "https://github.com/Arun6408/BuzzChat",
    demo: null,
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-indigo-500 to-cyan-500"
  }
];


  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* CSE Projects Section */}
        <h3 className="text-2xl font-bold text-white mb-8 mt-8">CSE Projects</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {cseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold flex items-center gap-2">{project.title}
                    <span className={`ml-2 px-3 py-2 rounded-full text-xs font-semibold
                      ${project.level === 'Beginner' ? 'bg-green-700 text-green-200' :
                        project.level === 'Medium' || project.level === 'Intermediate' ? 'bg-yellow-700 text-yellow-200' :
                        'bg-blue-700 text-blue-200'}`}>{project.level}</span>
                  </h3>
                </div>
                <p className="text-gray-100">{project.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies / Main Components:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                   <motion.a
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                 >
                   <Github size={16} />
                   View Code
                 </motion.a> 
                  )}
                  
                  {project.demo && (
                   <motion.a
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href={project.demo}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                 >
                   <ExternalLink size={16} />
                   Live Demo
                 </motion.a> 
                  )}

                  {!project.demo && project.ppt && (
                   <motion.a
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href={project.ppt}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                 >
                   <ExternalLink size={16} />
                   View PPT
                 </motion.a> 
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more projects?
          </h3>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Arun6408"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 