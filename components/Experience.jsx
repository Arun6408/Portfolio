'use client'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern - Ear Detection Model",
      company: "NIT Silchar (S.N. Bose Internship)",
      location: "Onsite",
      period: "May 2025 – July 2025",
      description: "Worked under a professor at NIT Silchar on building a high-accuracy ear detection model using deep learning and anomaly detection techniques.",
      achievements: [
        "Achieved 96–97% accuracy on known classes, 94.3% on unknowns",
        "Used triplet loss and embeddings from EfficientNet and custom embedding networks",
        "Tuned distance and confidence thresholds for optimal classification",
        "Explored one-class SVM and Isolation Forest for unknown detection",
        "Utilized MTCNN as the base face/ear detection model"
      ],
      technologies: ["Python", "PyTorch", "EfficientNet", "MTCNN", "Triplet Loss", "One-Class SVM", "Isolation Forest"]
    },
  {
    title: "Software Development Intern",
    company: "Silverlights Software Solutions",
    location: "Onsite",
    period: "May 2023 – June 2023",
    description: "Built interactive forms, optimized MySQL queries, developed RESTful APIs, and integrated backend with frontend for real-time updates.",
    achievements: [
      "Improved user engagement by 15% through interactive forms",
      "Optimized MySQL queries for efficient data access",
      "Built RESTful APIs for CRUD operations",
      "Linked frontend with backend for real-time updates"
    ],
    technologies: ["HTML", "CSS", "PHP", "jQuery", "MySQL", "REST API"]
  }
];


  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Looking for new opportunities
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to new challenges and opportunities to grow my skills in embedded systems, 
            IoT, and electronics engineering.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 