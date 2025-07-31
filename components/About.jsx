'use client'
import { motion } from 'framer-motion'
import { Award, Trophy, Heart, Globe, GraduationCap, Medal } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Coding Achievements",
      description: "350+ LeetCode problems, 700+ problems solved on various platforms",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "NIT Silchar Academic Excellence",
      description: "B.Tech in Electrical Engineering, CGPA: 8.29 (2022–2026)",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "Winners at NITS Hacks Hackathon 6.0",
      description: "Won 1st place among 100+ teams for our innovative project.",
      color: "from-green-500 to-emerald-400"
    }

  ];

  const hobbies = [
    { name: "Coding", icon: "💻" },
    { name: "Chess", icon: "♟️" },
    { name: "Public Speaking", icon: "🎤" },
    { name: "Event Management", icon: "📋" }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Telugu", level: "Native" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Software Developer & Electrical Engineering Student
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                I am Arun Kumar Challa, a passionate software developer and B.Tech student in Electrical Engineering at NIT Silchar. I specialize in full-stack web development, competitive programming, and building scalable solutions. My interests include AI, backend systems, and technical leadership.
              </p>
              <p className="text-lg leading-relaxed">
                My journey includes hands-on experience in web development, API design, and database optimization. I thrive in collaborative environments and enjoy solving complex problems, both in code and in teams.
              </p>
            </div>
            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                Languages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700 p-3 rounded-lg text-center"
                  >
                    <div className="font-semibold text-white">{lang.name}</div>
                    <div className="text-sm text-gray-400">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements and Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700 p-4 rounded-lg border-l-4 border-gradient-to-b from-blue-500 to-purple-600"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{achievement.title}</h5>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-500" />
                Hobbies & Interests
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2">{hobby.icon}</div>
                    <div className="font-medium text-white">{hobby.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 