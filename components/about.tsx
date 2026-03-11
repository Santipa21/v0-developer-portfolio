"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "Tailwind", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-accent font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm a passionate Full Stack Developer with a love for creating 
                elegant, user-friendly web applications. My journey in web development 
                started several years ago, and since then I've had the privilege of 
                working on diverse projects that have shaped my skills and perspective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building modern web applications using React, Next.js, 
                and Node.js. I'm particularly interested in creating accessible, 
                performant applications that provide exceptional user experiences. 
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or writing technical articles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here are some technologies I've been working with recently:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-accent">▹</span>
                    <span className="text-muted-foreground">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
