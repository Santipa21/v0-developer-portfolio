"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "./language-provider"

const techStack = [
  { name: "HTML5", icon: "▲" },
  { name: "CSS", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "JavaScript", icon: "▲" },
  { name: "React", icon: "▲" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "⬢" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useLanguage()

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
            <h2 className="text-3xl md:text-4xl font-bold">{t.about.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
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
                    <img src="/santiago.jpg" alt="Santiago Patiño" className="w-full h-full object-cover rounded-full" />
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
