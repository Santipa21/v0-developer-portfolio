"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    companyUrl: "#",
    description:
      "Building and maintaining scalable web applications using React, Next.js, and Node.js. Leading frontend architecture decisions and mentoring junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "Startup Inc",
    companyUrl: "#",
    description:
      "Developed and shipped multiple features for a SaaS platform serving thousands of users. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["React", "Python", "Django", "AWS", "Docker"],
  },
  {
    period: "2021 — 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Created responsive and accessible web interfaces for various clients. Collaborated closely with designers to implement pixel-perfect designs.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Figma"],
  },
  {
    period: "2020 — 2021",
    title: "Junior Developer",
    company: "Web Studio",
    companyUrl: "#",
    description:
      "Started my professional journey building websites and learning modern development practices. Contributed to multiple client projects while developing core skills.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]

function ExperienceCard({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiences)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:hidden" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background" />

      <div className="space-y-3">
        <span className="text-sm font-mono text-muted-foreground">
          {experience.period}
        </span>

        <h3 className="text-xl font-semibold text-foreground">
          {experience.title}{" "}
          <span className="text-accent">·</span>{" "}
          <Link
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            {experience.company}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-accent font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title + experience.company}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
