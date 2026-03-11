"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "./language-provider"

const experiencesData = {
  es: [
    {
      period: "2024 — Presente",
      title: "Frontend Developer Senior",
      company: "Empresa Tech",
      companyUrl: "#",
      description:
        "Construyendo y manteniendo aplicaciones web escalables usando React, Next.js y Node.js. Liderando decisiones de arquitectura frontend y mentoreando desarrolladores junior.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      period: "2022 — 2024",
      title: "Frontend Developer",
      company: "Startup Inc",
      companyUrl: "#",
      description:
        "Desarrollé y lancé múltiples funcionalidades para una plataforma SaaS que sirve a miles de usuarios. Implementé pipelines CI/CD y mejoré el rendimiento de la aplicación en un 40%.",
      technologies: ["React", "Python", "Django", "AWS", "Docker"],
    },
    {
      period: "2021 — 2022",
      title: "Frontend Developer Jr",
      company: "Agencia Digital",
      companyUrl: "#",
      description:
        "Creé interfaces web responsivas y accesibles para varios clientes. Colaboré estrechamente con diseñadores para implementar diseños pixel-perfect.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "Figma"],
    },
    {
      period: "2020 — 2021",
      title: "Desarrollador Junior",
      company: "Estudio Web",
      companyUrl: "#",
      description:
        "Inicié mi carrera profesional construyendo sitios web y aprendiendo prácticas modernas de desarrollo. Contribuí a múltiples proyectos de clientes mientras desarrollaba habilidades fundamentales.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ],
  en: [
    {
      period: "2024 — Present",
      title: "Senior Frontend Developer",
      company: "Tech Company",
      companyUrl: "#",
      description:
        "Building and maintaining scalable web applications using React, Next.js, and Node.js. Leading frontend architecture decisions and mentoring junior developers.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      period: "2022 — 2024",
      title: "Frontend Developer",
      company: "Startup Inc",
      companyUrl: "#",
      description:
        "Developed and shipped multiple features for a SaaS platform serving thousands of users. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "Python", "Django", "AWS", "Docker"],
    },
    {
      period: "2021 — 2022",
      title: "Junior Frontend Developer",
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
  ],
}

function ExperienceCard({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiencesData.es)[0]
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
  const { t, language } = useLanguage()
  const experiences = experiencesData[language]

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
            <h2 className="text-3xl md:text-4xl font-bold">{t.experience.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t.experience.subtitle}
          </p>

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
