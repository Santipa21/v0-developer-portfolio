"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "./language-provider"

const technologies = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "🎬" },
    { name: "Redux", icon: "🔄" },
  ],
  backend: [
    { name: "Node.js", icon: "⬢" },
    { name: "Express", icon: "🚀" },
    { name: "Python", icon: "🐍" },
    { name: "GraphQL", icon: "◈" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Prisma", icon: "△" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
    { name: "Supabase", icon: "⚡" },
  ],
  tools: [
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "Vercel", icon: "▲" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Linux", icon: "🐧" },
  ],
}

function TechCard({ 
  tech, 
  index, 
  isInView 
}: { 
  tech: { name: string; icon: string }
  index: number
  isInView: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-accent/50 hover:bg-accent/5 transition-colors cursor-default"
    >
      <span className="text-lg">{tech.icon}</span>
      <span className="text-sm font-medium text-foreground">{tech.name}</span>
    </motion.div>
  )
}

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const categoryLabels: Record<string, string> = {
    frontend: t.techStack.frontend,
    backend: t.techStack.backend,
    databases: t.techStack.databases,
    tools: t.techStack.tools,
  }

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-accent font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">{t.techStack.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t.techStack.subtitle}
          </p>

          <div className="max-w-5xl mx-auto space-y-12">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {categoryLabels[category]}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {techs.map((tech, index) => (
                    <TechCard
                      key={tech.name}
                      tech={tech}
                      index={index + categoryIndex * 6}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
